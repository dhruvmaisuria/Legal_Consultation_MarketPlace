
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CustomLoader } from '../../CustomLoader';

// export const ViewAllQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseText, setResponseText] = useState("");

//   // Fetch all Queries
//   const getAllQueries = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get("/queries");
//       setQueries(res.data.data);
//     } catch (error) {
//       console.error("Error fetching queries:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllQueries();
//   }, []);

//    // Function to respond to a query
//    const handleRespond = async (queryId) => {
//     if (!responseText.trim()) {
//       alert("Response cannot be empty.");
//       return;
//     }

//     try {
//       await axios.put(`/updateQuery/${queryId}`, {
//         response: responseText,
//         status: "Answered"
//       });

//       alert("Query responded successfully!");
//       setResponseText(""); // Clear input field
//       getAllQueries(); // Refresh list
//     } catch (error) {
//       console.error("Error responding to query:", error);
//       alert("Failed to respond.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//     {isLoading && <CustomLoader />}
//     <br />
//     <h2>User Queries</h2>
//     <table className="table table-dark">
//       <thead>
//         <tr>
//           <th>User</th>
//           <th>Query Text</th>
//           <th>Status</th>
//           <th>Response</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {queries?.map((query) => (
//           <tr key={query._id}>
//             <td>{query.userId
//                       ? `${query.userId.firstName} ${query.userId.lastName}`
//                       : "Unknown User"}</td>
//             <td>{query.queryText}</td>
//             <td>
//               <span className={`badge ${query.status === "Answered" ? "bg-success" : "bg-warning"}`}>
//                 {query.status}
//               </span>
//             </td>
//             <td>
//               {query.status === "Answered" ? query.response : (
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter response..."
//                   value={responseText}
//                   onChange={(e) => setResponseText(e.target.value)}
//                 />
//               )}
//             </td>
//             <td>
//               {query.status === "Pending" && (
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleRespond(query._id)}
//                 >
//                   Respond
//                 </button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
// };


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import "react-toastify/dist/ReactToastify.css";
import "../../assets/viewMyQueries.css";

export const ViewAllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState("");

  // Fetch all Queries
  const getAllQueries = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/queries");
      setQueries(res.data.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
      toast.error("Failed to fetch queries!", { theme: "dark" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllQueries();
  }, []);

  // Function to respond to a query
  const handleRespond = async (queryId) => {
    if (!responseText.trim()) {
      toast.warning("Response cannot be empty!", { theme: "dark" });
      return;
    }

    try {
      await axios.put(`/updateQuery/${queryId}`, {
        response: responseText,
        status: "Answered"
      });

      toast.success("Query responded successfully!", { theme: "dark" });
      setResponseText(""); 
      getAllQueries(); // Refresh
    } catch (error) {
      console.error("Error responding to query:", error);
      toast.error("Failed to respond!", { theme: "dark" });
    }
  };

  return (
    <div className="query-page-wrapper">
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
      {isLoading && <CustomLoader />}

      <div className="query-container">
        <h2 className="text-center mb-4">📜 All User Queries</h2>

        {queries.length === 0 ? (
          <p className="text-center text-muted">No queries found.</p>
        ) : (
          <div className="accordion" id="queryAccordion">
            {queries.map((query, index) => (
              <div key={query._id} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                  >
                    🧑 {query.userId ? `${query.userId.firstName} ${query.userId.lastName}` : "Unknown User"} — {query.queryText.slice(0, 40)}...
                    <span className={`badge ms-auto ${query.status === "Answered" ? "bg-success" : "bg-warning"}`}>
                      {query.status}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#queryAccordion"
                >
                  <div className="accordion-body">
                    <p><strong>💬 Full Query:</strong> {query.queryText}</p>
                    <p><strong>📥 Response:</strong> {query.response || "No response yet"}</p>
                    <p><strong>🌐 Public:</strong> {query.isPublic ? "Yes" : "No"}</p>
                    <p><strong>⚡ Priority:</strong> {query.priority}</p>

                    {query.status === "Pending" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Enter your response..."
                          value={responseText}
                          onChange={(e) => setResponseText(e.target.value)}
                        />
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleRespond(query._id)}
                        >
                          Respond to Query
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
