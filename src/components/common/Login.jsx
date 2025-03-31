// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";



// export const Login = () => {

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const submitHandler = async(data) => {
    
    
    
//     const res = await axios.post("/user/login",data)
//     console.log(res.data);

//     if(res.status === 200){
//       alert("login successfully")

//       localStorage.setItem("id",res.data.data._id)
//       localStorage.setItem("role",res.data.data.roleId.name)

//       if(res.data.data.roleId.name === "user"){
//         navigate("/user")
//       }

//     }
//     else{
//      alert("login failed")
//     }

//   };

//   const ValidationSchema = {
//     emailValidator: {
//       required: {
//         value: true,
//         message: "Email is required *",
//       },
//       pattern: {
//         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//         message: "Invalid email format",
//       },
//     },
//     passwordValidator: {
//       required: {
//         value: true,
//         message: "Password is required *",
//       },
//       minLength: {
//         value: 8,
//         message: "Minimum length is 8",
//       },
//     },
//   };

//   return (
//     <form onSubmit={handleSubmit(submitHandler)}>
//       <MDBContainer
//         fluid
//         className="d-flex align-items-center justify-content-center bg-image min-vh-100"
//         style={{
//           backgroundImage:
//             "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//         }}
//       >
//         <div className="mask gradient-custom-3"></div>
//         <MDBCard className="p-4 mx-3 w-100 shadow-lg" style={{ maxWidth: "400px" }}>
//           <MDBCardBody className="px-4 py-4">
//             <h2 className="text-uppercase text-center mb-4">Sign In</h2>

//             {/* Email Input */}
//             <div className="w-100">
//               <MDBInput
//                 wrapperClass="mb-3 mt-2"
//                 label="Your Email"
//                 size="lg"
//                 id="form2"
//                 type="email"
//                 {...register("email", ValidationSchema.emailValidator)}
//               />
//               {errors.email && (
//                 <span className="text-danger d-block">{errors.email.message}</span>
//               )}
//             </div>

//             {/* Password Input */}
//             <div className="w-100">
//               <MDBInput
//                 wrapperClass="mb-3 mt-2"
//                 label="Password"
//                 size="lg"
//                 id="form3"
//                 type="password"
//                 {...register("password", ValidationSchema.passwordValidator)}
//               />
//               {errors.password && (
//                 <span className="text-danger d-block">{errors.password.message}</span>
//               )}
//             </div>

//             <div className="text-center my-2">
//               <Link to="/error">Forgot password?</Link>
//             </div>

//             {/* Submit Button */}
//             <MDBBtn className="mb-3 w-100 gradient-custom-4" size="lg" type="submit">
//               Log In
//             </MDBBtn>

//             <p className="text-center">
//               Don't have an account? <Link to="/sign_up">Register here</Link>
//             </p>

//             {/* Social Media Buttons */}
//             <div className="text-center mt-3">
//               <p>or sign up with:</p>
//               {["facebook-f", "twitter", "google", "github"].map((icon) => (
//                 <MDBBtn key={icon} tag="a" color="none" className="mx-2 p-2" style={{ color: "#1266f1" }}>
//                   <MDBIcon fab icon={icon} size="sm" />
//                 </MDBBtn>
//               ))}
//             </div>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBContainer>
//     </form>
//   );
// };


import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("/user/login", data);
      console.log(res.data);

      if (res.status === 200) {
        
        // alert("login successfully")
        toast.success('Login Successfully', {
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
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId.name);

        if (res.data.data.roleId.name === "user") {
          setTimeout(() => {
            navigate("/user");
          }, 2500);
        }
      }
    } catch (error) {
      // alert("Login failed");
      toast.error('  Invalid Credentials !!', {
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
    emailValidator: {
      required: "Email is required *",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
    passwordValidator: {
      required: "Password is required *",
      minLength: {
        value: 8,
        message: "Minimum length is 8",
      },
    },
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)", backgroundSize: "cover" }}>
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
      <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form onSubmit={handleSubmit(submitHandler)}>
            {/* Email Input */}
            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" {...register("email", ValidationSchema.emailValidator)} />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password", ValidationSchema.passwordValidator)} />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </Form.Group>

            <div className="text-center mb-2">
              <Link to="/forgotPassword">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <Button variant="primary" className="w-100 mb-3" type="submit">
              Log In
            </Button>

            <p className="text-center">
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
