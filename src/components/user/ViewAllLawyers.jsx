//  src/pages/user/AllLawyers.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import "../../assets/userDashBoard.css"; // Reuse the styles from UserDashboard
// import "../../assets/viewAllLawyers.css"; // Reuse the styles from UserDashboard

// const ViewAllLawyers = () => {
//   const [lawyers, setLawyers] = useState([]);

//   useEffect(() => {
//     const fetchLawyers = async () => {
//       try {
//         const response = await axios.get("/lawyers");
//         setLawyers(response.data.data); // Adjust if your API returns differently
//       } catch (error) {
//         console.error("Failed to fetch lawyers:", error);
//       }
//     };

//     fetchLawyers();
//   }, []);

//   return (
//     <div className="lawyer-section">
//       <h2 className="lawyer-heading">All Lawyers</h2>
//       <div className="lawyer-card-container">
//         {lawyers.map((lawyer) => (
//           <Card key={lawyer._id} className="lawyer-card">
//             <Card.Img variant="top" src={lawyer.imageURL} className="lawyer-img" />
//             <Card.Body>
//               <div className="lawyer-details">
//                 <div className="lawyer-name">{lawyer.name}</div>
//                 <div className="lawyer-specialization">{lawyer.specialization}</div>
//                 <div className="lawyer-rating">⭐ {lawyer.rating?.toFixed(1) || 'N/A'}</div>
//               </div>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewAllLawyers;

import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../assets/viewAllLawyers.css";
import axios from 'axios';

const ViewAllLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/lawyers")
      .then((res) => {
        setLawyers(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch lawyers:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="view-lawyers-container">
      <h2 className="lawyer-heading" style={{textAlign:'center',color:"#4facfe"}}>All Lawyers</h2>
      {loading ? (
        <div className="loader-container">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="lawyer-card-container">
          {lawyers.map((lawyer) => (
            <Link
              to={`/user/lawyer/${lawyer._id}`}
              key={lawyer._id}
              className="lawyer-link"
            >
              <Card className="lawyer-card">
                <Card.Img
                  variant="top"
                  src={lawyer.imageURL}
                  className="lawyer-img"
                  alt={`${lawyer.name}'s profile`}
                />
                <Card.Body>
                  <div className="lawyer-details">
                    <div className="lawyer-name">{lawyer.name}</div>
                    <div className="lawyer-specialization">{lawyer.specialization}</div>
                    <div className="lawyer-rating">⭐ {lawyer.rating?.toFixed(1) || "N/A"}</div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllLawyers;
