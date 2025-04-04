// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { CustomLoader } from '../../CustomLoader'

// export const ViewAppointments = () => {

//     const [appointments, setappointments] = useState([])
//     const [isLoading, setisLoading] = useState(false)
//     const getAllAppointments = async() => {

//         setisLoading(true)

//         const res = await axios.get("/appointmentByLawyerId/"+localStorage.getItem("id"))
//         console.log(res.data) //api response...
//         setappointments(res.data.data)
//         setisLoading(false)

//     }

//     useEffect(() => {
        
//         getAllAppointments()
        
//     }, [])
    

//   return (
//     <div style={{textAlign:"center"}}>
//         {isLoading == true && <CustomLoader/>}<br></br>
//         MY Appointments
//         <table className='table table-dark'>
//             <thead>
//                 <tr>
//                     <th>Appointment Date</th>
//                     <th>Appointment Time</th>
//                     <th>Consultation Type</th>
//                     <th>Problem Category</th>
//                     <th>Payment Status</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                    appointments?.map((appo)=>{
//                     return<tr>
//                         <td>{appo.appointmentDate}</td>
//                         <td>{appo.appointmentTime}</td>
//                         <td>{appo.consultationType}</td>
//                         <td>{appo.problemCategory}</td>
//                         <td>{appo.paymentStatus}</td>
//                         <td>
//                             <Link to={`/user/updateAppointment/${appo._id}`}  className ="btn btn-info">UPDATE</Link>
//                         </td>
//                     </tr>
//                    }) 
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CustomLoader } from '../../CustomLoader';

export const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all appointments for the logged-in lawyer
  const getAllAppointments = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/appointmentByLawyerId/${localStorage.getItem("id")}`);
      setAppointments(res.data.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  // Function to update appointment status (Accept/Reject)
  const handleStatusUpdate = async (appointmentId, newStatus) => {
    try {
      await axios.put(`/updateAppointmentStatus/${appointmentId}`, {
        status: newStatus
      });

      alert(`Appointment ${newStatus} successfully!`);
      getAllAppointments(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating appointment status:", error);
      alert("Failed to update status.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading && <CustomLoader />}
      <br />
      <h2>My Appointments</h2>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Consultation Type</th>
            <th>Problem Category</th>
            <th>Payment Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appo) => (
            <tr key={appo._id}>
              <td>{new Date(appo.appointmentDate).toLocaleDateString()}</td>
              <td>{appo.appointmentTime}</td>
              <td>{appo.consultationType}</td>
              <td>{appo.problemCategory}</td>
              <td>{appo.paymentStatus}</td>
              <td>
                {appo.status === "Pending" ? (
                  <>
                    <button
                      className="btn btn-success mx-1"
                      onClick={() => handleStatusUpdate(appo._id, "Confirmed")}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleStatusUpdate(appo._id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span className={`badge ${appo.status === "Confirmed" ? "bg-success" : "bg-danger"}`}>
                    {appo.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
