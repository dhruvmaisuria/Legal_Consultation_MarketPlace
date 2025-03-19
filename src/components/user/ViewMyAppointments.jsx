import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomLoader } from '../../CustomLoader'

export const ViewMyAppointments = () => {

    const [appointments, setappointments] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const getAllMyAppointments = async() => {

        setisLoading(true)

        const res = await axios.get("/appointmentByUserId/"+localStorage.getItem("id"))
        console.log(res.data) //api response...
        setappointments(res.data.data)
        setisLoading(false)

    }

    useEffect(() => {
        
        getAllMyAppointments()
        
    }, [])
    

  return (
    <div style={{textAlign:"center"}}>
        {isLoading == true && <CustomLoader/>}<br></br>
        MY Appointments
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Consultation Type</th>
                    <th>Problem Category</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   appointments?.map((appo)=>{
                    return<tr>
                        <td>{appo.appointmentDate}</td>
                        <td>{appo.appointmentTime}</td>
                        <td>{appo.consultationType}</td>
                        <td>{appo.problemCategory}</td>
                        <td>{appo.paymentStatus}</td>
                        <td>
                            <Link to={`/user/updateAppointment/${appo._id}`}  className ="btn btn-info">UPDATE</Link>
                        </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}