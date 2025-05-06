
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
// import { CustomLoader } from '../../CustomLoader'

// export const ViewMyAppointments = () => {
//     const [appointments, setAppointments] = useState([])
//     const [isLoading, setIsLoading] = useState(false)

//     const getAllMyAppointments = async () => {
//         setIsLoading(true)
//         try {
//             const res = await axios.get(`/appointmentByUserId/${localStorage.getItem("id")}`)
//             setAppointments(res.data.data)
//         } catch (error) {
//             console.error("Error fetching appointments:", error)
//             toast.error("Failed to fetch appointments!", { theme: "dark" })
//         }
//         setIsLoading(false)
//     }

//     useEffect(() => {
//         getAllMyAppointments()
//     }, [])

//     // Handle Delete Appointment
//     const handleDelete = async (appointmentId) => {
//         if (!window.confirm("Are you sure you want to delete this appointment?")) return;

//         try {
//             await axios.delete(`/deleteAppointment/${appointmentId}`)
//             toast.success("Appointment deleted successfully!", { theme: "dark" })
            
//             // Remove the deleted appointment from UI
//             setAppointments(appointments.filter(appo => appo._id !== appointmentId))
//         } catch (error) {
//             console.error("Delete failed:", error)
//             toast.error("Failed to delete appointment!", { theme: "dark" })
//         }
//     }

//     return (
//         <div style={{ textAlign: "center" }}>
//             <ToastContainer position="top-center" autoClose={5000} theme="dark" />
//             {isLoading && <CustomLoader />}<br />
//             <h2>MY Appointments</h2>
//             <table className='table table-dark'>
//                 <thead>
//                     <tr>
//                         <th>Appointment Date</th>
//                         <th>Appointment Time</th>
//                         <th>Consultation Type</th>
//                         <th>Problem Category</th>
//                         <th>Payment Status</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {appointments?.map((appo) => (
//                         <tr key={appo._id}>
//                             <td>{new Date(appo.appointmentDate).toLocaleDateString()}</td>
//                             <td>{appo.appointmentTime}</td>
//                             <td>{appo.consultationType}</td>
//                             <td>{appo.problemCategory}</td>
//                             <td>{appo.paymentStatus}</td>
//                             <td>{appo.status}</td>
//                             <td>
//                                 {/* UPDATE Button - Only Visible for "Pending" Appointments */}
//                                 {appo.status === "Pending" ? (
//                                     <Link to={`/user/updateAppointment/${appo._id}`} className="btn btn-info">UPDATE</Link>
//                                 ) : (
//                                     <button className="btn btn-secondary" disabled>Cannot Update</button>
//                                 )}
                                
//                                 {/* DELETE Button - Always Visible */}
//                                 <button 
//                                     className="btn btn-danger ms-2" 
//                                     onClick={() => handleDelete(appo._id)}
//                                 >
//                                     DELETE
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';
// import 'react-toastify/dist/ReactToastify.css';

// export const ViewMyAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const getAllMyAppointments = async () => {
//         setIsLoading(true);
//         try {
//             const res = await axios.get(`/appointmentByUserId/${localStorage.getItem("id")}`);
//             setAppointments(res.data.data);
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//             toast.error("Failed to fetch appointments!", { theme: "dark" });
//         }
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         getAllMyAppointments();
//     }, []);

//     const handleDelete = async (appointmentId) => {
//         if (!window.confirm("Are you sure you want to delete this appointment?")) return;

//         try {
//             await axios.delete(`/deleteAppointment/${appointmentId}`);
//             toast.success("Appointment deleted successfully!", { theme: "dark" });
//             setAppointments(appointments.filter(appo => appo._id !== appointmentId));
//         } catch (error) {
//             console.error("Delete failed:", error);
//             toast.error("Failed to delete appointment!", { theme: "dark" });
//         }
//     };

//     return (
//         <div className="appointments-container">
//             <ToastContainer position="top-center" autoClose={5000} theme="dark" />
//             {isLoading && <CustomLoader />}
//             <h2 className="text-center mb-4 text-white">My Appointments</h2>

//             {/* Desktop Table View */}
//             <div className="table-responsive d-none d-lg-block">
//                 <table className="table table-dark table-hover table-striped align-middle text-center rounded-table">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Type</th>
//                             <th>Category</th>
//                             <th>Payment</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments.length > 0 ? appointments.map(appo => (
//                             <tr key={appo._id}>
//                                 <td>{new Date(appo.appointmentDate).toLocaleDateString()}</td>
//                                 <td>{appo.appointmentTime}</td>
//                                 <td>{appo.consultationType}</td>
//                                 <td>{appo.problemCategory}</td>
//                                 <td>{appo.paymentStatus}</td>
//                                 <td>
//                                     <span className={`badge ${appo.status === 'Accepted' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>
//                                         {appo.status}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     {appo.status === "Pending" ? (
//                                         <Link to={`/user/updateAppointment/${appo._id}`} className="btn btn-sm btn-primary me-2">Update</Link>
//                                     ) : (
//                                         <button className="btn btn-sm btn-secondary me-2" disabled>Update</button>
//                                     )}
//                                     <button 
//                                         className="btn btn-sm btn-danger"
//                                         onClick={() => handleDelete(appo._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         )) : (
//                             <tr>
//                                 <td colSpan="7" className="text-center">No Appointments Found</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Mobile & Tablet Card View */}
//             <div className="d-lg-none">
//                 {appointments.length > 0 ? appointments.map(appo => (
//                     <div key={appo._id} className="card appointment-card mb-3 shadow-sm">
//                         <div className="card-body">
//                             <h5 className="card-title">📅 {new Date(appo.appointmentDate).toLocaleDateString()}</h5>
//                             <p><strong>🕒 Time:</strong> {appo.appointmentTime}</p>
//                             <p><strong>🗂️ Type:</strong> {appo.consultationType}</p>
//                             <p><strong>📁 Category:</strong> {appo.problemCategory}</p>
//                             <p><strong>💳 Payment:</strong> {appo.paymentStatus}</p>
//                             <p><strong>✅ Status:</strong> <span className={`badge ${appo.status === 'Accepted' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>{appo.status}</span></p>
//                             <div className="d-flex justify-content-between mt-3">
//                                 {appo.status === "Pending" ? (
//                                     <Link to={`/user/updateAppointment/${appo._id}`} className="btn btn-sm btn-primary w-48">Update</Link>
//                                 ) : (
//                                     <button className="btn btn-sm btn-secondary w-48" disabled>Update</button>
//                                 )}
//                                 <button 
//                                     className="btn btn-sm btn-danger w-48"
//                                     onClick={() => handleDelete(appo._id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )) : (
//                     <div className="text-center text-white">No Appointments Found</div>
//                 )}
//             </div>

//             {/* Custom Styling */}
//             <style>{`
//                 .appointments-container {
//                     background: linear-gradient(135deg, #1f1c2c, #928dab);
//                     min-height: 100vh;
//                     padding: 30px 10px;
//                 }
//                 .rounded-table {
//                     border-radius: 10px;
//                     overflow: hidden;
//                 }
//                 .appointment-card {
//                     background: #2c2c54;
//                     color: #fff;
//                     border: none;
//                 }
//                 .w-48 {
//                     width: 48%;
//                 }
//                 .btn {
//                     font-size: 0.9rem;
//                 }
//                 .table thead th {
//                     vertical-align: middle;
//                 }
//                 @media (max-width: 768px) {
//                     .btn {
//                         margin-bottom: 10px;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';
import 'react-toastify/dist/ReactToastify.css';

export const ViewMyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllMyAppointments = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/appointmentByUserId/${localStorage.getItem("id")}`);
            setAppointments(res.data.data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
            toast.error("Failed to fetch appointments!", { theme: "dark" });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getAllMyAppointments();
    }, []);

    const handleDelete = async (appointmentId) => {
        if (!window.confirm("Are you sure you want to delete this appointment?")) return;

        try {
            await axios.delete(`/deleteAppointment/${appointmentId}`);
            toast.success("Appointment deleted successfully!", { theme: "dark" });
            setAppointments(appointments.filter(appo => appo._id !== appointmentId));
        } catch (error) {
            console.error("Delete failed:", error);
            toast.error("Failed to delete appointment!", { theme: "dark" });
        }
    };

    return (
        <div className="appointments-container">
            <ToastContainer position="top-center" autoClose={5000} theme="dark" />
            {isLoading && <CustomLoader />}
            <h2 className="text-center mb-4 text-white">My Appointments</h2>

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
                                    <span className={`badge ${appo.status === 'Accepted' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>
                                        {appo.status}
                                    </span>
                                </td>
                                <td>
                                    {appo.status === "Pending" ? (
                                        <Link to={`/user/updateAppointment/${appo._id}`} className="btn btn-sm btn-primary me-2">Update</Link>
                                    ) : (
                                        <button className="btn btn-sm btn-secondary me-2" disabled>Update</button>
                                    )}
                                    <button 
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(appo._id)}
                                    >
                                        Delete
                                    </button>
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
                            <p><strong>✅ Status:</strong> <span className={`badge ${appo.status === 'Accepted' ? 'bg-success' : appo.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}>{appo.status}</span></p>
                            <div className="d-flex justify-content-between mt-3">
                                {appo.status === "Pending" ? (
                                    <Link to={`/user/updateAppointment/${appo._id}`} className="btn btn-sm btn-primary w-48">Update</Link>
                                ) : (
                                    <button className="btn btn-sm btn-secondary w-48" disabled>Update</button>
                                )}
                                <button 
                                    className="btn btn-sm btn-danger w-48"
                                    onClick={() => handleDelete(appo._id)}
                                >
                                    Delete
                                </button>
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
