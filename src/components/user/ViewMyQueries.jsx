




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';
// import "../../assets/viewMyQueries.css" // make sure this CSS is imported

// export const ViewMyQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getAllMyQueries = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`/queriesByUserId/${localStorage.getItem("id")}`);
//       setQueries(res.data.data);
//     } catch (error) {
//       console.error("Error fetching queries:", error);
//       toast.error("Failed to fetch Queries!", { theme: "dark" });
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllMyQueries();
//   }, []);

//   const handleDelete = async (queryId) => {
//     if (!window.confirm("Are you sure you want to delete this Query?")) return;

//     try {
//       await axios.delete(`/query/${queryId}`);
//       toast.success("Query deleted successfully!", { theme: "dark" });
//       setQueries(queries.filter(query => query._id !== queryId));
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete Query!", { theme: "dark" });
//     }
//   };

//   return (
//     <div className="query-page-wrapper">
//       <ToastContainer position="top-center" autoClose={5000} theme="dark" />
//       {isLoading && <CustomLoader />}

//       <div className="query-container">
//         <h2 className="text-center mb-4">📋 My Queries</h2>

//         {queries.length === 0 ? (
//           <p className="text-muted text-center">You have not submitted any queries yet.</p>
//         ) : (
//           <div className="accordion" id="queryAccordion">
//             {queries.map((query, index) => (
//               <div key={query._id} className="accordion-item mb-3 shadow-sm rounded-4 overflow-hidden">
//                 <h2 className="accordion-header">
//                   <button
//                     className="accordion-button collapsed fw-bold"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapse-${index}`}
//                     aria-expanded="false"
//                     aria-controls={`collapse-${index}`}
//                   >
//                     📅 {new Date(query.createdAt).toLocaleDateString()} — {query.queryText.slice(0, 40)}...
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapse-${index}`}
//                   className="accordion-collapse collapse"
//                   data-bs-parent="#queryAccordion"
//                 >
//                   <div className="accordion-body">
//                     <p><strong>💬 Full Query:</strong> {query.queryText}</p>
//                     <p><strong>📥 Response:</strong> {query.response || "No response yet"}</p>
//                     <p><strong>Status:</strong> {query.status}</p>
//                     <p><strong>Public:</strong> {query.isPublic ? "Yes" : "No"}</p>
//                     <p><strong>Priority:</strong> {query.priority}</p>

//                     <button
//                       className="btn btn-outline-danger btn-sm mt-2"
//                       onClick={() => handleDelete(query._id)}
//                     >
//                       Delete Query
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';

// export const ViewMyQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getAllMyQueries = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`/queriesByUserId/${localStorage.getItem("id")}`);
//       setQueries(res.data.data);
//     } catch (error) {
//       console.error("Error fetching queries:", error);
//       toast.error("Failed to fetch Queries!", { theme: "dark" });
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllMyQueries();
//   }, []);

//   const handleDelete = async (queryId) => {
//     if (!window.confirm("Are you sure you want to delete this Query?")) return;
//     try {
//       await axios.delete(`/query/${queryId}`);
//       toast.success("Query deleted successfully!", { theme: "dark" });
//       setQueries(queries.filter(query => query._id !== queryId));
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete Query!", { theme: "dark" });
//     }
//   };

//   return (
//     <div className="query-container py-5">
//       <ToastContainer position="top-center" autoClose={5000} theme="dark" />
//       {isLoading && <CustomLoader />}
//       <h2 className="text-center mb-4">📜 My Queries</h2>

//       {queries.length === 0 ? (
//         <p className="text-center text-muted">No queries submitted yet.</p>
//       ) : (
//         <div className="accordion" id="queryAccordion">
//           {queries.map((query, index) => (
//             <div className="accordion-item mb-3 border rounded-4 shadow-sm" key={query._id}>
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed fw-semibold"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse${index}`}
//                 >
//                   {query.queryText} <span className="ms-auto badge bg-primary">{query.status}</span>
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${index}`}
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#queryAccordion"
//               >
//                 <div className="accordion-body">
//                   <p><strong>🗓 Date:</strong> {new Date(query.createdAt).toLocaleDateString()}</p>
//                   <p><strong>📣 Response:</strong> {query.response || "No response yet"}</p>
//                   <p><strong>🌐 Public:</strong> {query.isPublic ? "Yes" : "No"}</p>
//                   <p><strong>⚡ Priority:</strong> {query.priority}</p>
//                   <button
//                     className="btn btn-outline-danger btn-sm mt-2"
//                     onClick={() => handleDelete(query._id)}
//                   >
//                     Delete Query
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import "../../assets/viewMyQueries.css"; // Make sure this CSS is imported

export const ViewMyQueries = () => {
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMyQueries = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/queriesByUserId/${localStorage.getItem("id")}`);
      setQueries(res.data.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
      toast.error("Failed to fetch Queries!", { theme: "dark" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllMyQueries();
  }, []);

  const handleDelete = async (queryId) => {
    if (!window.confirm("Are you sure you want to delete this Query?")) return;

    try {
      await axios.delete(`/query/${queryId}`);
      toast.success("Query deleted successfully!", { theme: "dark" });
      setQueries(queries.filter(query => query._id !== queryId));
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete Query!", { theme: "dark" });
    }
  };

  return (
    <div className="query-page-wrapper">
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
      {isLoading && <CustomLoader />}

      <div className="query-container">
        <h2 className="text-center mb-4">📜 My Queries</h2>

        {queries.length === 0 ? (
          <p className="text-center text-muted">You have not submitted any queries yet.</p>
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
                    📅 {new Date(query.createdAt).toLocaleDateString()} — {query.queryText.slice(0, 40)}...
                    <span className="badge bg-primary ms-auto">{query.status}</span>
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

                    <button
                      className="btn btn-outline-danger btn-sm mt-2"
                      onClick={() => handleDelete(query._id)}
                    >
                      Delete Query
                    </button>
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
