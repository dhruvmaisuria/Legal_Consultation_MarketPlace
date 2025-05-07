


// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const AddAppointment = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     getValues,
//   } = useForm();

//   const navigate = useNavigate();
//   const [lawyers, setLawyers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const specialization = watch("problemCategory");

//   useEffect(() => {
//     const fetchLawyers = async () => {
//       if (!specialization) return setLawyers([]);
//       try {
//         const response = await axios.get(`/lawyers/${specialization}`);
//         setLawyers(response.data.data || []);
//       } catch (error) {
//         console.error("Error fetching lawyers:", error);
//         setLawyers([]);
//       }
//     };
//     fetchLawyers();
//   }, [specialization]);

//   const handlePayment = async () => {
//     const formData = getValues();
//     const userId = localStorage.getItem("id");

//     if (
//       !formData.appointmentDate ||
//       !formData.appointmentTime ||
//       !formData.problemCategory ||
//       !formData.consultationType ||
//       !formData.lawyerId
//     ) {
//       toast.error("Please fill all the fields before proceeding with payment");
//       return;
//     }

//     const paymentAmount = 500; // fixed amount in ₹
//     try {
//       setLoading(true);

//       const { data: order } = await axios.post("/create_order", {
//         amount: paymentAmount,
//         currency: "INR",
//         receipt: `receipt_${Date.now()}`,
//       });

//       const options = {
//         key: "rzp_test_kiBRyyCS7A1LxN",
//         amount: order.amount,
//         currency: order.currency,
//         name: "Legal Consultation",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async (response) => {
//           const verify = await axios.post("/verify_order", response);
//           if (verify.data.status === "success") {
//             // Step 1: Create Appointment
//             const appointmentRes = await axios.post("/appointment", {
//               ...formData,
//               userId,
//               paymentStatus: "Completed",
//             });

//             const appointmentId = appointmentRes.data.data._id;

//             // Step 2: Update with Razorpay details
//             await axios.put("/appointment/confirmPayment", {
//               appointmentId,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               amount: paymentAmount,
//             });

//             toast.success("Appointment booked & payment successful!", {
//               position: "top-center",
//               autoClose: 5000,
//               theme: "dark",
//               transition: Bounce,
//             });

//             setTimeout(() => navigate("/user/viewMyAppointments"), 2500);
//           } else {
//             toast.error("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: "User",
//           email: "user@example.com",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment error:", error);
//       toast.error("Payment Failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ValidationSchema = {
//     problemCategoryValidator: { required: "Problem category is required *" },
//     appointmentDateValidator: { required: "Appointment Date is required *" },
//     appointmentTime: { required: "Appointment Time is required *" },
//     consultationTypeValidator: { required: "Consultation Type is required" },
//     lawyerIdValidator: { required: "Please select a lawyer *" },
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center min-vh-100"
//         style={{
//           backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//           <Card.Body>
//             <h2 className="text-center mb-4">Book Appointment</h2>
//             <Form>
//               <Form.Group className="mb-2">
//                 <Form.Label>Appointment Date</Form.Label>
//                 <Form.Control type="date" {...register("appointmentDate", ValidationSchema.appointmentDateValidator)} />
//                 <span className="text-danger">{errors.appointmentDate?.message}</span>
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Appointment Time</Form.Label>
//                 <Form.Control type="time" {...register("appointmentTime", ValidationSchema.appointmentTime)} />
//                 <span className="text-danger">{errors.appointmentTime?.message}</span>
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Problem Category</Form.Label>
//                 <Form.Select {...register("problemCategory", ValidationSchema.problemCategoryValidator)}>
//                   <option value="">Select Problem Category</option>
//                   <option value="Civil">Civil</option>
//                   <option value="Criminal">Criminal</option>
//                   <option value="Corporate">Corporate</option>
//                   <option value="Family">Family</option>
//                   <option value="Real Estate">Real Estate</option>
//                   <option value="Intellectual Property">Intellectual Property</option>
//                   <option value="Tax">Tax</option>
//                   <option value="Employment">Employment</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.problemCategory?.message}</span>
//               </Form.Group>

//               {lawyers.length > 0 && (
//                 <Form.Group className="mb-2">
//                   <Form.Label>Select a Lawyer</Form.Label>
//                   <Form.Select {...register("lawyerId", ValidationSchema.lawyerIdValidator)}>
//                     <option value="">Choose a Lawyer</option>
//                     {lawyers.map((lawyer) => (
//                       <option key={lawyer._id} value={lawyer._id}>
//                         {lawyer.name} - {lawyer.experience} years
//                       </option>
//                     ))}
//                   </Form.Select>
//                   <span className="text-danger">{errors.lawyerId?.message}</span>
//                 </Form.Group>
//               )}

//               <Form.Group className="mb-2">
//                 <Form.Label>Consultation Type</Form.Label>
//                 <Form.Select {...register("consultationType", ValidationSchema.consultationTypeValidator)}>
//                   <option value="">Select Consultation Type</option>
//                   <option value="Voice">Voice</option>
//                   <option value="Video">Video</option>
//                   <option value="Chat">Chat</option>
//                 </Form.Select>
//                 <span className="text-danger">{errors.consultationType?.message}</span>
//               </Form.Group>

//               <Button onClick={handlePayment} className="mt-4 w-100" disabled={loading}>
//                 {loading ? "Processing..." : "Pay & Book Appointment"}
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };



import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const AddAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const navigate = useNavigate();
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const specialization = watch("problemCategory");

  useEffect(() => {
    const fetchLawyers = async () => {
      if (!specialization) return setLawyers([]);
      try {
        const response = await axios.get(`/lawyers/${specialization}`);
        setLawyers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLawyers([]);
      }
    };
    fetchLawyers();
  }, [specialization]);

  const handlePayment = async () => {
    const formData = getValues();
    const userId = localStorage.getItem("id");

    if (!formData.appointmentDate || !formData.appointmentTime || !formData.problemCategory || !formData.consultationType || !formData.lawyerId) {
      toast.error("Please fill all fields before proceeding.");
      return;
    }

    const paymentAmount = 500; // ₹
    try {
      setLoading(true);

      const { data: order } = await axios.post("/create_order", {
        amount: paymentAmount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      const options = {
        key:"rzp_test_kiBRyyCS7A1LxN",
        amount: order.amount,
        currency: order.currency,
        name: "Legal Consultation",
        description: "Appointment Payment",
        order_id: order.id,
        handler: async (response) => {
          const verify = await axios.post("/verify_order", response);
          if (verify.data.status === "success") {
            const appointmentRes = await axios.post("/appointment", {
              ...formData,
              userId,
              paymentStatus: "Completed",
            });

            const appointmentId = appointmentRes.data.data._id;
            await axios.put("/appointment/confirmPayment", {
              appointmentId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              amount: paymentAmount,
            });

            toast.success("Appointment booked successfully!", {
              position: "top-center",
              autoClose: 4000,
              theme: "colored",
              transition: Bounce,
            });

            setTimeout(() => navigate("/user/viewMyAppointments"), 2500);
          } else {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: "User",
          email: "user@example.com",
        },
        theme: {
          color: "#0d6efd",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const ValidationSchema = {
    problemCategoryValidator: { required: "Problem category is required" },
    appointmentDateValidator: { required: "Appointment Date is required" },
    appointmentTime: { required: "Appointment Time is required" },
    consultationTypeValidator: { required: "Consultation Type is required" },
    lawyerIdValidator: { required: "Please select a lawyer" },
  };

  return (
    <div>
      <ToastContainer />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center min-vh-100"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(5px)",
        }}
      >
        <Card
          className="p-4 shadow-lg border-0"
          style={{
            maxWidth: "480px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "20px",
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#0d6efd" }}>
              Book Appointment
            </h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date" {...register("appointmentDate", ValidationSchema.appointmentDateValidator)} />
                <span className="text-danger small">{errors.appointmentDate?.message}</span>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Appointment Time</Form.Label>
                <Form.Control type="time" {...register("appointmentTime", ValidationSchema.appointmentTime)} />
                <span className="text-danger small">{errors.appointmentTime?.message}</span>
              </Form.Group>

              <Form.Group className="mb-3">
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
                <span className="text-danger small">{errors.problemCategory?.message}</span>
              </Form.Group>

              {lawyers.length > 0 && (
                <Form.Group className="mb-3">
                  <Form.Label>Select a Lawyer</Form.Label>
                  <Form.Select {...register("lawyerId", ValidationSchema.lawyerIdValidator)}>
                    <option value="">Choose a Lawyer</option>
                    {lawyers.map((lawyer) => (
                      <option key={lawyer._id} value={lawyer._id}>
                        {lawyer.name} - {lawyer.experience} years
                      </option>
                    ))}
                  </Form.Select>
                  <span className="text-danger small">{errors.lawyerId?.message}</span>
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Consultation Type</Form.Label>
                <Form.Select {...register("consultationType", ValidationSchema.consultationTypeValidator)}>
                  <option value="">Select Consultation Type</option>
                  <option value="Voice">Voice</option>
                  <option value="Video">Video</option>
                  <option value="Chat">Chat</option>
                </Form.Select>
                <span className="text-danger small">{errors.consultationType?.message}</span>
              </Form.Group>

              <Button
                onClick={handlePayment}
                className="mt-3 w-100"
                style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd", borderRadius: "10px" }}
                disabled={loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Pay & Book Appointment"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
