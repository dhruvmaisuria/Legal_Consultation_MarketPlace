import axios from 'axios';
import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';


export const AddAppointment = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        const userId = localStorage.getItem("id")
        data.userId = userId;

        const res = await axios.post("/appointment",data)
        console.log(res.data)
        if (res.status === 201) {
            toast.success('Appointment Booked Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
             setTimeout(() => {navigate("/user/viewMyAppointments")},2500);
         } else {
             toast.error(' Appointment not Booked !!', {
                                 position: "top-center",
                                 autoClose: 5000,
                                 hideProgressBar: false,
                                 closeOnClick: false,
                                 pauseOnHover: true,
                                 draggable: true,
                                 progress: undefined,
                                 theme: "dark",
                                 transition: Bounce,
                                 });
         }
    };

    const ValidationSchema = {
       
        problemCategoryValidator: { required: "Problem category is required *" },
        appointmentDateValidator: { required: "Appointment Date is required *" },
        appointmentTime: { required: "Appointment Time is required *" },
        consultationTypeValidator :{required : "Consultation Type is required"},
        paymentStatusValidator: {required:"Payment Status is required"}
        
    };

    return (
        <div>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />    
        <Container fluid className='d-flex align-items-center justify-content-center min-vh-100' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Card className='m-3 p-3 shadow-lg' style={{ maxWidth: '500px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Book Appointment</h2>
                    <Form onSubmit={handleSubmit(submitHandler)}>
                       
                          
                        {/* <Form.Group className='mb-2'>
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type='text' {...register("specialization", ValidationSchema.specializationValidator)} />
                            <span className="text-danger">{errors.specialization?.message}</span>
                        </Form.Group> */}

                        <Form.Group className='mb-2'>
                            <Form.Label>Appointment Date</Form.Label>
                            <Form.Control type='date' {...register("appointmentDate", ValidationSchema.appointmentDateValidator)} />
                            <span className="text-danger">{errors.appointmentDate?.message}</span>
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label>Appointment Time</Form.Label>
                            <Form.Control type='time' {...register("appointmentTime", ValidationSchema.appointmentTime)} />
                            <span className="text-danger">{errors.appointmentTime?.message}</span>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Problem Category</Form.Label>
                            <Form.Select {...register("problemCategory", ValidationSchema.problemCategoryValidator)}>
                                <option value="">Select Problem Category</option>
                                <option value="Civil">Civil</option>
                                <option value="Criminal">Criminal</option>
                                <option value="Corporate">Corporate</option>
                                <option value="Family">Family</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Intellectual Property">Intellectual Property</option>
                                <option value="Tax">Tax</option>
                                <option value="Employment">Employment</option>
                            </Form.Select>
                            <span className="text-danger">{errors.problemCategory?.message}</span>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Consultation Types</Form.Label>
                            <Form.Select {...register("consultationType", ValidationSchema.consultationTypeValidator)}>
                                <option value="">Select Consultation Type</option>
                                <option value="Voice">Voice</option>
                                <option value="Video">Video</option>
                                <option value="Chat">Chat</option>
                            </Form.Select>
                            <span className="text-danger">{errors.consultationType?.message}</span>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Payment Status</Form.Label>
                            <Form.Select {...register("paymentStatus", ValidationSchema.paymentStatusValidator)}>
                                <option value="">Select Payment Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Failed">Failed</option>
                            </Form.Select>
                            <span className="text-danger">{errors.paymentStatus?.message}</span>
                        </Form.Group>
                        

                        <Button type="submit" className='mt-4 w-100'>Book Appointment</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>    
    );
};