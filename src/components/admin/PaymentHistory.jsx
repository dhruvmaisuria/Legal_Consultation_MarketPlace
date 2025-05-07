// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Table, Spinner, Alert, Badge } from "react-bootstrap";

// export const PaymentHistory = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAllPayments = async () => {
//       try {
//         const res = await axios.get(`/admin/getAllPayments`); // Fetch all appointments
//         setPayments(res.data.data || []); // Store appointment data (which includes payment info)
//       } catch (error) {
//         console.error("Error fetching all payments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllPayments();
//   }, []);

//   return (
//     <Container className="mt-4">
//       <h3 className="mb-4 text-center">All Payments</h3>

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
//               <th>User Name</th>
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
//                 <td>{payment.userId ? `${payment.userId.firstName} ${payment.userId.lastName}` : "N/A"}</td> {/* Assuming user name is populated */}
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

// export default PaymentHistory;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner, Badge } from "react-bootstrap";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/admin/getAllPayments");
        console.log("Fetched payments:", response.data); // Log the response to check its structure

        if (Array.isArray(response.data.data)) {
          setPayments(response.data.data);
        } else {
          console.error("Error: Payments data is not an array", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center" style={{color:"#4facfe"}}>All Payment Transactions</h3>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : payments.length === 0 ? (
        <p className="text-center">No transactions found.</p>
      ) : (
        <div className="row">
          {payments.map((payment) => (
            <div className="col-md-6 col-lg-4 mb-3" key={payment._id}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  {/* Remove card title and display amount directly */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="mb-0">
                      <strong>Amount:</strong> ₹{(payment.amount).toFixed(2)}
                    </p>
                    <Badge
                      bg={
                        payment.paymentStatus === "Completed"
                          ? "success"
                          : payment.paymentStatus === "Pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {payment.paymentStatus}
                    </Badge>
                  </div>

                  <p className="mb-1">
                    <strong>User:</strong>{" "}
                    {payment.userId
                      ? `${payment.userId.firstName} ${payment.userId.lastName}`
                      : "Unknown User"}
                  </p>
                  <p className="mb-1">
                    <strong>Order ID:</strong> {payment.razorpay_order_id || "N/A"}
                  </p>
                  <p className="mb-1">
                    <strong>Payment ID:</strong> {payment.razorpay_payment_id || "N/A"}
                  </p>

                  <p className="mb-1">
                    <strong>Date:</strong>{" "}
                    {new Date(payment.createdAt).toLocaleString()}
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
