// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Table, Spinner, Alert, Badge } from "react-bootstrap";

// export const ViewMyPayments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userId = localStorage.getItem("id");

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(`/appointment/payments/${userId}`);
//         setAppointments(res.data.data || []);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, [userId]);

//   return (
//     <Container className="mt-4">
//       <h3 className="mb-4 text-center">My Payments</h3>

//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" />
//         </div>
//       ) : appointments.length === 0 ? (
//         <Alert variant="info">No payment records found.</Alert>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Lawyer</th>
//               <th>Amount</th>
//               <th>Payment Status</th>
//               <th>Consultation Type</th>
//               <th>Date</th>
//               <th>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt, index) => (
//               <tr key={appt._id}>
//                 <td>{index + 1}</td>
//                 <td>{appt.lawyerId?.name || "N/A"}</td>
//                 <td>₹{appt.amount || "0"}</td>
//                 <td>
//                   <Badge
//                     bg={
//                       appt.paymentStatus === "Completed"
//                         ? "success"
//                         : appt.paymentStatus === "Pending"
//                         ? "warning"
//                         : "danger"
//                     }
//                   >
//                     {appt.paymentStatus}
//                   </Badge>
//                 </td>
//                 <td>{appt.consultationType}</td>
//                 <td>{new Date(appt.appointmentDate).toLocaleDateString()}</td>
//                 <td>{appt.appointmentTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default ViewMyPayments;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Table, Spinner, Alert, Badge } from "react-bootstrap";

// export const ViewMyPayments = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userId = localStorage.getItem("id");

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const res = await axios.get(`/appointment/payments/${userId}`);
//         setPayments(res.data.data || []);
//       } catch (error) {
//         console.error("Error fetching payments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, [userId]);

//   return (
//     <Container className="mt-4">
//       <h3 className="mb-4 text-center">Transaction History</h3>

//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" />
//         </div>
//       ) : payments.length === 0 ? (
//         <Alert variant="info">No payment records found.</Alert>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Payment ID</th>
//               <th>Order ID</th>
//               <th>Amount (₹)</th>
//               <th>Status</th>
//               <th>Paid On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment, index) => (
//               <tr key={payment._id}>
//                 <td>{index + 1}</td>
//                 <td>{payment.razorpay_payment_id || "N/A"}</td>
//                 <td>{payment.razorpay_order_id || "N/A"}</td>
//                 <td>{payment.amount || "0"}</td>
//                 <td>
//                   <Badge
//                     bg={
//                       payment.paymentStatus === "Completed"
//                         ? "success"
//                         : payment.paymentStatus === "Pending"
//                         ? "warning"
//                         : "danger"
//                     }
//                   >
//                     {payment.paymentStatus}
//                   </Badge>
//                 </td>
//                 <td>{new Date(payment.createdAt).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default ViewMyPayments;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import 'react-toastify/dist/ReactToastify.css';

 const ViewMyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMyPayments = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/appointment/payments/${localStorage.getItem("id")}`);
      setPayments(res.data.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
      toast.error("Failed to fetch payments!", { theme: "dark" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllMyPayments();
  }, []);

  return (
    <div className="payment-container">
      <ToastContainer position="top-center" autoClose={5000} theme="dark" />
      {isLoading && <CustomLoader />}
      <h2 className="text-center payment-title">My Transactions</h2>

      {payments.length === 0 ? (
        <div className="text-center text-muted">You don't have any transactions yet.</div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="table-responsive d-none d-lg-block">
            <table className="table table-striped table-bordered table-hover table-dark text-center rounded-table">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Amount (₹)</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <td>{index + 1}</td>
                    <td>{payment.razorpay_payment_id || "N/A"}</td>
                    <td>{payment.razorpay_order_id || "N/A"}</td>
                    <td>{payment.amount || "0"}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          payment.paymentStatus === "Completed"
                            ? "success"
                            : payment.paymentStatus === "Pending"
                            ? "warning"
                            : "danger"
                        }`}
                      >
                        {payment.paymentStatus}
                      </span>
                    </td>
                    <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card View */}
          <div className="d-lg-none">
            <div className="row g-4">
              {payments.map((payment, index) => (
                <div key={payment._id} className="col-12">
                  <div className="card payment-card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        🧾 Transaction #{index + 1}
                      </h5>
                      <p className="card-text">
                        💳 <strong>Payment ID:</strong> {payment.razorpay_payment_id || "N/A"}
                      </p>
                      <p className="card-text">
                        🆔 <strong>Order ID:</strong> {payment.razorpay_order_id || "N/A"}
                      </p>
                      <p className="card-text">
                        💰 <strong>Amount:</strong> ₹{payment.amount || "0"}
                      </p>
                      <p className="card-text">
                        🔖 <strong>Status:</strong> {payment.paymentStatus}
                      </p>
                      <p className="card-text text-muted">
                        📅 {new Date(payment.createdAt).toLocaleDateString()}
                      </p>
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
  .payment-container {
    padding: 30px 10px;
    min-height: 100vh;
    background: linear-gradient(135deg, #1f1c2c, #928dab);
  }
  .payment-title {
    color: white;
    margin-bottom: 30px;
  }
  .rounded-table {
    border-radius: 10px;
    overflow: hidden;
  }
  .payment-card {
    background: #2c2c54;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 20px;
  }
  .payment-card .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
  }

  /* Mobile & Tablet text color updates */
  @media (max-width: 992px) {
    .payment-card .card-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #ffcc00; /* bright yellow for title */
    }
    .payment-card .card-text {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      word-break: break-word;
      color: #d1d1d1; /* light gray */
    }
    .payment-card .text-muted {
      color: #bbbbbb !important; /* softer gray for date */
    }
  }

  @media (max-width: 576px) {
    .payment-card {
      padding: 15px;
    }
    .payment-card .card-title {
      font-size: 1.1rem;
      color: #ffcc00;
    }
    .payment-card .card-text {
      font-size: 0.95rem;
      color: #d1d1d1;
    }
    .payment-card .text-muted {
      color: #bbbbbb !important;
    }
  }
`}</style>
    </div>
  );
};

export default ViewMyPayments;