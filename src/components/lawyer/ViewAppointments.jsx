



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CustomLoader } from '../../CustomLoader';

// export const ViewAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch all appointments for the logged-in lawyer
//   const getAllAppointments = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`/appointmentByLawyerId/${localStorage.getItem("id")}`);
//       setAppointments(res.data.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   // Function to update appointment status (Accept/Reject)
//   const handleStatusUpdate = async (appointmentId, newStatus) => {
//     try {
//       await axios.put(`/updateAppointmentStatus/${appointmentId}`, {
//         status: newStatus
//       });

//       alert(`Appointment ${newStatus} successfully!`);
//       getAllAppointments(); // Refresh the list after update
//     } catch (error) {
//       console.error("Error updating appointment status:", error);
//       alert("Failed to update status.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       {isLoading && <CustomLoader />}
//       <br />
//       <h2>My Appointments</h2>
//       <table className='table table-dark'>
//         <thead>
//           <tr>
//             <th>Appointment Date</th>
//             <th>Appointment Time</th>
//             <th>Consultation Type</th>
//             <th>Problem Category</th>
//             <th>Payment Status</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments?.map((appo) => (
//             <tr key={appo._id}>
//               <td>{new Date(appo.appointmentDate).toLocaleDateString()}</td>
//               <td>{appo.appointmentTime}</td>
//               <td>{appo.consultationType}</td>
//               <td>{appo.problemCategory}</td>
//               <td>{appo.paymentStatus}</td>
//               <td>
//                 {appo.status === "Pending" ? (
//                   <>
//                     <button
//                       className="btn btn-success mx-1"
//                       onClick={() => handleStatusUpdate(appo._id, "Confirmed")}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       className="btn btn-danger mx-1"
//                       onClick={() => handleStatusUpdate(appo._id, "Rejected")}
//                     >
//                       Reject
//                     </button>
//                   </>
//                 ) : (
//                   <span className={`badge ${appo.status === "Confirmed" ? "bg-success" : "bg-danger"}`}>
//                     {appo.status}
//                   </span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CustomLoader } from '../../CustomLoader';
// import { Modal, Button } from 'react-bootstrap';

// export const ViewAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [currentAppointment, setCurrentAppointment] = useState(null);
//   const [status, setStatus] = useState("");

//   // Fetch all appointments for the logged-in lawyer
//   const getAllAppointments = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(`/appointmentByLawyerId/${localStorage.getItem("id")}`);
//       setAppointments(res.data.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   // Function to update appointment status (Accept/Reject)
//   const handleStatusUpdate = async (appointmentId, newStatus) => {
//     try {
//       await axios.put(`/updateAppointmentStatus/${appointmentId}`, {
//         status: newStatus
//       });
//       setStatus(newStatus); // Set status for modal close confirmation
//       setShowModal(false);
//       getAllAppointments(); // Refresh the list after update
//     } catch (error) {
//       console.error("Error updating appointment status:", error);
//       alert("Failed to update status.");
//     }
//   };

//   // Modal for confirming status update
//   const handleModalClose = () => setShowModal(false);
//   const handleModalShow = (appointment, newStatus) => {
//     setCurrentAppointment(appointment);
//     setStatus(newStatus);
//     setShowModal(true);
//   };

//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       {isLoading && <CustomLoader />}
//       <h2>My Appointments</h2>
      
//       {/* Appointment Cards */}
//       <div className="row">
//         {appointments?.map((appo) => (
//           <div key={appo._id} className="col-md-4 mb-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Appointment on {new Date(appo.appointmentDate).toLocaleDateString()}</h5>
//                 <p className="card-text">
//                   <strong>Time:</strong> {appo.appointmentTime} <br />
//                   <strong>Type:</strong> {appo.consultationType} <br />
//                   <strong>Category:</strong> {appo.problemCategory} <br />
//                   <strong>Payment:</strong> {appo.paymentStatus} <br />
//                   <strong>Status:</strong> 
//                   <span className={`badge ${appo.status === "Confirmed" ? "bg-success" : appo.status === "Rejected" ? "bg-danger" : "bg-warning"}`}>
//                     {appo.status}
//                   </span>
//                 </p>

//                 {appo.status === "Pending" ? (
//                   <div className="d-flex justify-content-between">
//                     <button
//                       className="btn btn-success btn-sm"
//                       onClick={() => handleModalShow(appo, "Confirmed")}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleModalShow(appo, "Rejected")}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Status Confirmation */}
//       <Modal show={showModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Appointment Status</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to change the status of this appointment to <strong>{status}</strong>?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => handleStatusUpdate(currentAppointment._id, status)}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import 'react-toastify/dist/ReactToastify.css';

export const ViewAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch appointments by Lawyer ID
    const getAllAppointments = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/appointmentByLawyerId/${localStorage.getItem("id")}`);
            setAppointments(res.data.data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
            toast.error("Failed to fetch appointments!", { theme: "dark" });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getAllAppointments();
    }, []);

    // Handle Accept/Reject
    const handleStatusUpdate = async (appointmentId, newStatus) => {
        const confirmAction = window.confirm(`Are you sure you want to ${newStatus} this appointment?`);
        if (!confirmAction) return;

        try {
            await axios.put(`/updateAppointmentStatus/${appointmentId}`, { status: newStatus });
            toast.success(`Appointment ${newStatus} successfully!`, { theme: "dark" });
            getAllAppointments();
        } catch (error) {
            console.error("Error updating appointment:", error);
            toast.error(`Failed to ${newStatus} appointment!`, { theme: "dark" });
        }
    };

    return (
        <div className="appointments-container">
            <ToastContainer position="top-center" autoClose={5000} theme="dark" />
            {isLoading && <CustomLoader />}
            <h2 className="text-center mb-4 text-white">Client Appointments</h2>

            {/* Desktop Table View */}
            <div className="table-responsive d-none d-lg-block">
                <table className="table table-striped table-bordered table-hover table-dark text-center rounded-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? appointments.map(appo => (
                            <tr key={appo._id}>
                                <td>{new Date(appo.appointmentDate).toLocaleDateString()}</td>
                                <td>{appo.appointmentTime}</td>
                                <td>{appo.consultationType}</td>
                                <td>{appo.problemCategory}</td>
                                <td>{appo.paymentStatus}</td>
                                <td>
                                    <span className={`badge ${appo.status === 'Confirmed' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>
                                        {appo.status}
                                    </span>
                                </td>
                                <td>
                                    {appo.status === "Pending" ? (
                                        <>
                                            <button className="btn btn-sm btn-success me-2" onClick={() => handleStatusUpdate(appo._id, "Confirmed")}>Accept</button>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleStatusUpdate(appo._id, "Rejected")}>Reject</button>
                                        </>
                                    ) : (
                                        <button className="btn btn-sm btn-secondary" disabled>No Action</button>
                                    )}
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" className="text-center">No Appointments Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile & Tablet Card View */}
            <div className="d-lg-none">
                {appointments.length > 0 ? appointments.map(appo => (
                    <div key={appo._id} className="card appointment-card mb-3 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📅 {new Date(appo.appointmentDate).toLocaleDateString()}</h5>
                            <p><strong>🕒 Time:</strong> {appo.appointmentTime}</p>
                            <p><strong>🗂️ Type:</strong> {appo.consultationType}</p>
                            <p><strong>📁 Category:</strong> {appo.problemCategory}</p>
                            <p><strong>💳 Payment:</strong> {appo.paymentStatus}</p>
                            <p><strong>✅ Status:</strong> 
                                <span className={`badge ${appo.status === 'Confirmed' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>
                                    {appo.status}
                                </span>
                            </p>
                            <div className="d-flex justify-content-between mt-3">
                                {appo.status === "Pending" ? (
                                    <>
                                        <button 
                                            className="btn btn-sm btn-success w-48" 
                                            onClick={() => handleStatusUpdate(appo._id, "Confirmed")}
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-danger w-48" 
                                            onClick={() => handleStatusUpdate(appo._id, "Rejected")}
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn btn-sm btn-secondary w-100" disabled>No Action</button>
                                )}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center text-white">No Appointments Found</div>
                )}
            </div>

            {/* Custom Styling */}
            <style>{`
                .appointments-container {
                    background: linear-gradient(135deg, #1f1c2c, #928dab);
                    min-height: 100vh;
                    padding: 30px 10px;
                }
                .rounded-table {
                    border-radius: 10px;
                    overflow: hidden;
                }
                .appointment-card {
                    background: #2c2c54;
                    color: #fff;
                    border: none;
                }
                .w-48 {
                    width: 48%;
                }
                .btn {
                    font-size: 0.9rem;
                }
                .table thead th {
                    vertical-align: middle;
                }
                @media (max-width: 768px) {
                    .btn {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </div>
    );
};
