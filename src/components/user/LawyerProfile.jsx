
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Card, Button, Spinner } from "react-bootstrap";
// import "../../assets/lawyerProfile.css";

// const LawyerProfile = () => {
//   const { lawyerId } = useParams();
//   const navigate = useNavigate();
//   const [lawyer, setLawyer] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:3010/lawyer/${lawyerId}`)
//       .then((res) => {
//         setLawyer(res.data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch lawyer:", err);
//         setLoading(false);
//       });
//   }, [lawyerId]);

//   if (loading) {
//     return <div className="center-spinner"><Spinner animation="border" variant="warning" /></div>;
//   }

//   if (!lawyer) {
//     return <p>Lawyer not found.</p>;
//   }

//   return (
//     <div className="lawyer-profile-container">
//       <Card className="lawyer-profile-card">
//         <Card.Img variant="top" src={lawyer.imageURL} className="lawyer-profile-img" />

//         <Card.Body className="lawyer-profile-body">
//           <h3 className="lawyer-name">{lawyer.name}</h3>

//           <div className="lawyer-info">
//             <p><strong>Specialization:</strong> {lawyer.specialization}</p>
//             <p><strong>Experience:</strong> {lawyer.experience} years</p>
//             <p><strong>Email:</strong> {lawyer.email}</p>
//             <p><strong>Phone:</strong> {lawyer.number}</p>
//             <p><strong>Rating:</strong> ⭐ {lawyer.rating?.toFixed(1) || "N/A"}</p>
//             <p><strong>Rating Count:</strong> {lawyer.ratingCount}</p>
//           </div>

//           <Button variant="warning" onClick={() => navigate("/user/viewAllLawyers")}>
//             BACK TO ALL LAWYERS
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default LawyerProfile;

// LawyerProfile.jsx



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../../assets/lawyerProfile.css';

// const LawyerProfile = () => {
//   const { lawyerId } = useParams();
//   const [lawyer, setLawyer] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLawyer = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3010/lawyer/${lawyerId}`);
//         setLawyer(res.data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching lawyer:', err);
//         setLoading(false);
//       }
//     };

//     fetchLawyer();
//   }, [lawyerId]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3010/getReviewsByLawyerId/${lawyerId}`);
//         setReviews(res.data.data || []);
//       } catch (err) {
//         console.error('Error fetching reviews:', err);
//       }
//     };

//     fetchReviews();
//   }, [lawyerId]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="lawyer-profile-container">
//       <div className="lawyer-info-card">
//         <img src={lawyer.imageURL} alt={lawyer.name} className="lawyer-profile-img" />
//         <div className="lawyer-profile-details">
//           <h2>{lawyer.name}</h2>
//           <p><strong>Email:</strong> {lawyer.email}</p>
//           <p><strong>Specialization:</strong> {lawyer.specialization}</p>
//           <p><strong>Experience:</strong> {lawyer.experience} years</p>
//           <p><strong>Rating:</strong> ⭐ {lawyer.rating || 'N/A'} ({lawyer.ratingCount} reviews)</p>
//         </div>
//       </div>

//       <div className="review-section">
//         <h3>Client Reviews</h3>
//         {reviews.length === 0 ? (
//           <p>No reviews available for this lawyer.</p>
//         ) : (
//           <div className="review-list">
//             {reviews.map((review, index) => (
//               <div key={index} className="review-card">
//                 <p><strong>User:</strong> {review.userId?.firstName || 'Anonymous'}</p>
//                 <p><strong>Rating:</strong> ⭐ {review.rating}</p>
//                 <p><strong>Comment:</strong> {review.comment}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LawyerProfile;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../assets/lawyerProfile.css';

const LawyerProfile = () => {
  const { lawyerId } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllReviews, setShowAllReviews] = useState(false); // New state

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const res = await axios.get(`/lawyer/${lawyerId}`);
        setLawyer(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching lawyer:', err);
        setLoading(false);
      }
    };

    fetchLawyer();
  }, [lawyerId]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/getReviewsByLawyerId/${lawyerId}`);
        setReviews(res.data.data || []);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, [lawyerId]);

  if (loading) return <div>Loading...</div>;

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="lawyer-profile-container">
      <div className="lawyer-info-card">
        <img src={lawyer.imageURL} alt={lawyer.name} className="lawyer-profile-img" />
        <div className="lawyer-profile-details">
          <h2>{lawyer.name}</h2>
          <p><strong>Email:</strong> {lawyer.email}</p>
          <p><strong>Specialization:</strong> {lawyer.specialization}</p>
          <p><strong>Experience:</strong> {lawyer.experience} years</p>
          <p><strong>Rating:</strong> ⭐ {lawyer.rating || 'N/A'} ({lawyer.ratingCount} reviews)</p>
        </div>
      </div>

      <div className="review-section">
        <h3>Client Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews available for this lawyer.</p>
        ) : (
          <div className="review-list">
            {visibleReviews.map((review, index) => (
              <div key={index} className="review-card">
                <p><strong>User:</strong> {review.userId?.firstName || 'Anonymous'}</p>
                <p><strong>Rating:</strong> ⭐ {review.rating}</p>
                <p><strong>Comment:</strong> {review.comment}</p>
              </div>
            ))}
            {reviews.length > 3 && (
              <button
                className="toggle-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less Reviews' : 'View More Reviews'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyerProfile;
