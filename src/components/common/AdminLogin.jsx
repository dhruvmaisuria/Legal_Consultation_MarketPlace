

// import React from "react";
// import { useForm } from "react-hook-form";
// import { Button, Container, Card, Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Bounce, toast, ToastContainer } from "react-toastify";

// export const AdminLogin = () => {
//     const navigate = useNavigate();
  
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();
  
//     const submitHandler = async (data) => {
//       try {
//         const res = await axios.post("/admin/adminLogin", data);
//         console.log(res.data);
  
//         if (res.status === 200) {
//           toast.success("Login Successfully", {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Bounce,
//           });
  
//           localStorage.setItem("id", res.data.data._id);
//           localStorage.setItem("role", res.data.data.roleId.name);
  
//           if (res.data.data.roleId.name === "admin") {
//             setTimeout(() => {
//               navigate("/admin/adminDashBoard");
//             }, 2500);
//           }
//         }
//       } catch (error) {
//         const status = error?.response?.status;
//         const message = error?.response?.data?.message;
  
//         if (status === 403) {
//           toast.error("Your account is blocked by the admin.", {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Bounce,
//           });
//         } else if (status === 404) {
//           toast.error("Email not found. Please register first.", {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Bounce,
//           });
//         } else if (status === 401) {
//           toast.error("Invalid credentials!", {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Bounce,
//           });
//         } else {
//           toast.error("Something went wrong. Please try again.", {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Bounce,
//           });
//         }
//       }
//     };
  
//     const ValidationSchema = {
//       emailValidator: {
//         required: "Email is required *",
//         pattern: {
//           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//           message: "Invalid email format",
//         },
//       },
//       passwordValidator: {
//         required: "Password is required *",
//         minLength: {
//           value: 8,
//           message: "Minimum length is 8",
//         },
//       },
//     };
  
//     return (
//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center min-vh-100"
//         style={{
//           backgroundImage:
//             "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
//           backgroundSize: "cover",
//         }}
//       >
//         <ToastContainer />
//         <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
//           <Card.Body>
//             <h2 className="text-center mb-4">Sign In</h2>
//             <Form onSubmit={handleSubmit(submitHandler)}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Your Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   {...register("email", ValidationSchema.emailValidator)}
//                 />
//                 {errors.email && (
//                   <span className="text-danger">{errors.email.message}</span>
//                 )}
//               </Form.Group>
  
//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   {...register("password", ValidationSchema.passwordValidator)}
//                 />
//                 {errors.password && (
//                   <span className="text-danger">{errors.password.message}</span>
//                 )}
//               </Form.Group>
  
//               <div className="text-center mb-2">
//                 <Link to="/forgotPassword">Forgot password?</Link>
//               </div>
  
//               <Button variant="primary" className="w-100 mb-3" type="submit">
//                 Log In
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   };
  


import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("/admin/adminLogin", data);
      console.log(res.data);

      if (res.status === 200) {
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });

        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId.name);

        if (res.data.data.roleId.name === "admin") {
          setTimeout(() => {
            navigate("/admin/adminDashBoard");
          }, 2500);
        }
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 403) {
        toast.error("Your account is blocked by the admin.", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
      } else if (status === 404) {
        toast.error("Email not found. Please register first.", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
      } else if (status === 401) {
        toast.error("Invalid credentials!", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
      }
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
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage:
          "url(https://assets.onecompiler.app/43dpwcgs5/43fxv4f85/DeWatermark.ai_1745660242878.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <ToastContainer />
      <Card
        className="p-4 shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#0d6efd" }}>
            Sign In
          </h2>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", ValidationSchema.emailValidator)}
              />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", ValidationSchema.passwordValidator)}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>

            <div className="text-center mb-2">
              <Link
                to="/adminForgotPassword"
                className="text-decoration-none text-primary fw-semibold"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              variant="primary"
              className="w-100 mb-3"
              type="submit"
              size="lg"
              style={{
                background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                border: "none",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Log In
            </Button>

            <p className="text-center">
              Don't have an account?{" "}
              
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
