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



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner, Alert, Badge } from "react-bootstrap";

export const ViewMyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get(`/appointment/payments/${userId}`);
        setPayments(res.data.data || []);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [userId]);

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center">Transaction History</h3>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : payments.length === 0 ? (
        <Alert variant="info">No payment records found.</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Paid On</th>
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
                </td>
                <td>{new Date(payment.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ViewMyPayments;
