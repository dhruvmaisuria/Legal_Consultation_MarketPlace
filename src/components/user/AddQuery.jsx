// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { CustomLoader } from '../../CustomLoader';

// export const AddQuery = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate = useNavigate();
//     const [isLoading, setisLoading] = useState(false);

//     const submitHandler = async (data) => {
//         const userId = localStorage.getItem("id");
//         data.userId = userId;
//         console.log(data);
//         setisLoading(true);

//         try {
//             const res = await axios.post("/addQuery",data)
//             setisLoading(false);

//             if (res.status === 200) {
//                 toast.success('Query Add successfully!', { transition: Bounce, theme: "dark" });
//                 setTimeout(() => navigate("/user/viewMyQueries"), 2500);
//             }
//         } catch (error) {
//             setisLoading(false);
//             toast.error('Failed to Add Query. Please try again.', { transition: Bounce, theme: "dark" });
//         }
//     };

//     const ValidationSchema = {
//         queryTextValidator: {
//             required: { value: true, message: "QueryText is required *" },
//         },
//         isPublicValidator: {
//             required: { value: true, message: "it's  required *" },
//         },
//         priorityValidator: {
//             required: { value: true, message: "Priority is required *" },
//         },
//     };

//     return (
//         <div>
//             <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
//             {isLoading && <CustomLoader />}
//             <Form onSubmit={handleSubmit(submitHandler)}>
//                 <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)", backgroundSize: "cover" }}>
//                     <Card className="m-3 p-3 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//                         <Card.Body className="px-4">
//                             <h2 className="text-uppercase text-center mb-4">Add Query</h2>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Query Text</Form.Label>
//                                 <Form.Control type="text" {...register("queryText", ValidationSchema.queryTextValidator)} />
//                                 <Form.Text className="text-danger">{errors.queryText?.message}</Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mb-3">
//                                 <Form.Label>Is Public?</Form.Label>
//                                 <div>
//                                     <Form.Check
//                                         type="radio"
//                                         label="Yes"
//                                         value="true"
//                                         {...register("isPublic", ValidationSchema.isPublicValidator)}
//                                     />
//                                     <Form.Check
//                                         type="radio"
//                                         label="No"
//                                         value="false"
//                                         {...register("isPublic", ValidationSchema.isPublicValidator)}
//                                     />
//                                 </div>
//                                 <Form.Text className="text-danger">{errors.isPublic?.message}</Form.Text>
//                             </Form.Group>


//                             <Form.Group className="mb-2">
//                                 <Form.Label>Priority</Form.Label>
//                                 <Form.Select {...register("priority", ValidationSchema.priorityValidator)}>
//                                     <option value="">Select Priority</option>
//                                     <option value="Low">Low</option>
//                                     <option value="Medium">Medium</option>
//                                     <option value="High">High</option>
//                                 </Form.Select>
//                                 <Form.Text className="text-danger">{errors.priority?.message}</Form.Text>
//                             </Form.Group>

//                             <Button type="submit" className="mt-3 w-100" variant="primary" size="lg">
//                                 Send Message
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 </Container>
//             </Form>
//         </div>
//     );
// };


import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { CustomLoader } from "../../CustomLoader";

export const AddQuery = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (data) => {
    const userId = localStorage.getItem("id");
    data.userId = userId;
    setIsLoading(true);

    try {
      const res = await axios.post("/addQuery", data);
      setIsLoading(false);

      if (res.status === 200) {
        toast.success('Query added successfully!', { transition: Bounce, theme: "dark" });
        setTimeout(() => navigate("/user/viewMyQueries"), 2500);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('Failed to add query. Please try again.', { transition: Bounce, theme: "dark" });
    }
  };

  const ValidationSchema = {
    queryTextValidator: { required: { value: true, message: "Query Text is required *" } },
    isPublicValidator: { required: { value: true, message: "This field is required *" } },
    priorityValidator: { required: { value: true, message: "Priority is required *" } },
  };

  return (
    <div>
      <ToastContainer position="top-left" autoClose={5000} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}

      <Form onSubmit={handleSubmit(submitHandler)}>
        <Container
          fluid
          className="d-flex align-items-center justify-content-center min-vh-100"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Card
            className="m-3 p-4 shadow-lg"
            style={{
              maxWidth: "500px",
              width: "100%",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#222", // Dark text
            }}
          >
            <Card.Body>
              <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>
                📝 Add a New Query
              </h2>

              <Form.Group className="mb-3">
                <Form.Label>Query Text</Form.Label>
                <Form.Control
                  type="text"
                  {...register("queryText", ValidationSchema.queryTextValidator)}
                  className="rounded-pill shadow-sm"
                />
                <Form.Text className="text-danger">{errors.queryText?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Is Public?</Form.Label>
                <div className="d-flex gap-3">
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="true"
                    {...register("isPublic", ValidationSchema.isPublicValidator)}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    value="false"
                    {...register("isPublic", ValidationSchema.isPublicValidator)}
                  />
                </div>
                <Form.Text className="text-danger">{errors.isPublic?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  {...register("priority", ValidationSchema.priorityValidator)}
                  className="rounded-pill shadow-sm"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
                <Form.Text className="text-danger">{errors.priority?.message}</Form.Text>
              </Form.Group>

              <Button
                type="submit"
                className="w-100 rounded-pill"
                size="lg"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                }}
              >
                Send Message
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Form>
    </div>
  );
};
