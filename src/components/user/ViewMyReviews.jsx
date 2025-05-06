


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';


// export const ViewMyReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const getAllMyReviews = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`/getAllReviewsByUserId/${localStorage.getItem("id")}`);
//       setReviews(res.data.data);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       toast.error("Failed to fetch reviews!", { theme: "dark" });
//     }
//     setIsLoading(false);
//   };

//   const handleDelete = async (reviewId) => {
//     if (!window.confirm("Are you sure you want to delete this Review?")) return;

//     try {
//       await axios.delete(`/deleteReview/${reviewId}`);
//       toast.success("Review deleted successfully!", { theme: "dark" });
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       console.error("Delete failed:", error);
//       toast.error("Failed to delete review!", { theme: "dark" });
//     }
//   };

//   useEffect(() => {
//     getAllMyReviews();
//   }, []);

//   return (
//     <div className="review-container">
//       <ToastContainer position="top-center" autoClose={5000} theme="dark" />
//       {isLoading && <CustomLoader />}
//       <h2 className="text-center review-title">My Reviews</h2>

//       {reviews.length === 0 ? (
//         <div className="text-center text-muted">You haven't added any reviews yet.</div>
//       ) : (
//         <div className="row g-4">
//           {reviews.map((review) => (
//             <div key={review._id} className="col-sm-12 col-md-6 col-lg-4">
//               <div className="card review-card h-100 shadow-sm">
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">
//                     👨‍⚖️ Lawyer: <strong>{review.lawyerId?.name || "N/A"}</strong>
//                   </h5>
//                   <p className="card-text">
//                     💬 <strong>Comment:</strong> {review.comment}
//                   </p>
//                   <p className="card-text">
//                     ⭐ <strong>Rating:</strong> {review.rating}
//                   </p>
//                   <p className="card-text text-muted">
//                     📅 {new Date(review.createdAt).toLocaleDateString()}
//                   </p>
//                   <div className="mt-auto">
//                     <button
//                       className="btn btn-danger btn-sm w-100"
//                       onClick={() => handleDelete(review._id)}
//                     >
//                       Delete Review
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import 'react-toastify/dist/ReactToastify.css';

export const ViewMyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMyReviews = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/getAllReviewsByUserId/${localStorage.getItem("id")}`);
      setReviews(res.data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("Failed to fetch reviews!", { theme: "dark" });
    }
    setIsLoading(false);
  };

  const handleDelete = async (reviewId) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      await axios.delete(`/deleteReview/${reviewId}`);
      toast.success("Review deleted successfully!", { theme: "dark" });
      setReviews(reviews.filter(review => review._id !== reviewId));
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete review!", { theme: "dark" });
    }
  };

  useEffect(() => {
    getAllMyReviews();
  }, []);

  return (
    <div className="review-container">
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
      {isLoading && <CustomLoader />}
      <h2 className="text-center review-title">My Reviews</h2>

      {reviews.length === 0 ? (
        <div className="text-center text-muted">You haven't added any reviews yet.</div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="table-responsive d-none d-lg-block">
            <table className="table table-striped table-bordered table-hover table-dark text-center rounded-table">
              <thead className="thead-dark">
                <tr>
                  <th>Lawyer</th>
                  <th>Comment</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review._id}>
                    <td>{review.lawyerId?.name || "N/A"}</td>
                    <td>{review.comment}</td>
                    <td>{review.rating}</td>
                    <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(review._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card View */}
          <div className="d-lg-none">
            <div className="row g-4">
              {reviews.map((review) => (
                <div key={review._id} className="col-12">
                  <div className="card review-card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        👨‍⚖️ Lawyer: <strong>{review.lawyerId?.name || "N/A"}</strong>
                      </h5>
                      <p className="card-text">
                        💬 <strong>Comment :  </strong>{review.comment}
                      </p>
                      <p className="card-text">
                        ⭐ <strong>Rating:</strong> {review.rating}
                      </p>
                      <p className="card-text text-muted">
                        📅 {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-danger btn-sm w-100"
                          onClick={() => handleDelete(review._id)}
                        >
                          Delete Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Custom Styling */}
      <style>{`
  .review-container {
    padding: 30px 10px;
    min-height: 100vh;
    background: linear-gradient(135deg, #1f1c2c, #928dab);
  }
  .review-title {
    color: white;
    margin-bottom: 30px;
  }
  .rounded-table {
    border-radius: 10px;
    overflow: hidden;
  }
  .review-card {
    background: #2c2c54;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 20px;
  }
  .review-card .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
  }

  /* Mobile & Tablet text color updates */
  @media (max-width: 992px) {
    .review-card .card-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #ffcc00; /* changed to a bright yellow for title */
    }
    .review-card .card-text {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      word-break: break-word;
      color: #d1d1d1; /* light gray for normal text */
    }
    .review-card .text-muted {
      color: #bbbbbb !important; /* softer gray for date */
    }
    .review-card .btn {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    .review-card {
      padding: 15px;
    }
    .review-card .card-title {
      font-size: 1.1rem;
      color: #ffcc00; /* again bright yellow for consistency */
    }
    .review-card .card-text {
      font-size: 0.95rem;
      color: #d1d1d1; /* light gray for smaller screens too */
    }
    .review-card .text-muted {
      color: #bbbbbb !important; /* soft muted date */
    }
  }
`}</style>
    </div>
  );
};
