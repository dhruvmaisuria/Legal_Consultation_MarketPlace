



// import React, { useState } from 'react';
// import { Container, Card, Form, Button, Row, Col, ToastContainer } from 'react-bootstrap';
// import { set, useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Bounce, toast } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';



// export const Signup = () => {
//     const [isLoading, setisLoading] = useState(false)
//     const { register, handleSubmit, formState: { errors }, watch } = useForm();
//     const navigate = useNavigate();

//     const submitHandler = async (data) => {
//         console.log(data);
//         data.roleId = "67c2aeb24e0ed74a6a077cf5";

//         setisLoading(true)
//         const res = await axios.post("/user", data);
        
//         setisLoading(false)
//         if (res.status === 201) {
//         //    alert("user created..")
//         toast.success('Signup Successfully', {
//                   position: "top-center",
//                   autoClose: 5000,
//                   hideProgressBar: false,
//                   closeOnClick: false,
//                   pauseOnHover: true,
//                   draggable: true,
//                   progress: undefined,
//                   theme: "dark",
//                   transition: Bounce,
//                   });
//                   setTimeout(() => {
//                     navigate("/Login");
//                   }, 2500);
//         } else {
//             // alert("User not added..");
//             toast.error('  Invalid Credentials !!', {
//                     position: "top-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: false,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark",
//                     transition: Bounce,
//                     });
//         }
//     };

//     const ValidationSchema = {
//         firstNameValidator: { required: "First Name is required *" },
//         lastNameValidator: { required: "Last Name is required *" },
//         emailValidator: { required: "Email is required *" },
//         numberValidator: {
//             required: "Contact No is required *",
//             pattern: { value: /^[6-9][0-9]{9}$/, message: "Contact is not valid" }
//         },
//         passwordValidator: {
//             required: "Password is required *",
//             minLength: { value: 8, message: "Minimum length is 8 characters" }
//         },
//         rpasswordValidator: {
//             required: "Repeat password is required *",
//             minLength: { value: 8, message: "Minimum length is 8 characters" },
//             validate: value => value === watch("password") || "Your password does not match"
//         },
//         checkBoxValidator: { required: "You must accept the terms and conditions" }
//     };

//     return (
//         <div>
//             {isLoading == true && <CustomLoader/>}
//             <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Bounce}
//       />
//         <Container fluid className='d-flex align-items-center justify-content-center min-vh-100' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
//             <Card className='m-3 p-3 shadow-lg' style={{ maxWidth: '500px', width: '100%' }}>
//                 <Card.Body>
//                     <h2 className="text-center mb-4">Create an Account</h2>
//                     <Form onSubmit={handleSubmit(submitHandler)}>
//                         <Form.Group className='mb-2'>
//                             <Form.Label>Your First Name</Form.Label>
//                             <Form.Control type='text' {...register("firstName", ValidationSchema.firstNameValidator)} />
//                             <span className="text-danger">{errors.firstName?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mb-2'>
//                             <Form.Label>Your Last Name</Form.Label>
//                             <Form.Control type='text' {...register("lastName", ValidationSchema.lastNameValidator)} />
//                             <span className="text-danger">{errors.lastName?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mb-2'>
//                             <Form.Label>Your Email</Form.Label>
//                             <Form.Control type='email' {...register("email", ValidationSchema.emailValidator)} />
//                             <span className="text-danger">{errors.email?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mb-2'>
//                             <Form.Label>Your Contact No</Form.Label>
//                             <Form.Control type='text' {...register("number", ValidationSchema.numberValidator)} />
//                             <span className="text-danger">{errors.number?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mb-2'>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type='password' {...register("password", ValidationSchema.passwordValidator)} />
//                             <span className="text-danger">{errors.password?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mb-2'>
//                             <Form.Label>Repeat Your Password</Form.Label>
//                             <Form.Control type='password' {...register("rpassword", ValidationSchema.rpasswordValidator)} />
//                             <span className="text-danger">{errors.rpassword?.message}</span>
//                         </Form.Group>

//                         <Form.Group className='mt-3'>
//                             <Form.Check 
//                                 type='checkbox' 
//                                 label='I agree to the Terms of Service' 
//                                 {...register("terms", ValidationSchema.checkBoxValidator)} 
//                             />
//                             <span className="text-danger">{errors.terms?.message}</span>
//                         </Form.Group>

//                         <Button type="submit" className='mt-4 w-100'>Register</Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
        
//         </Container>
//         </div>
//     );
// };











// import React, { useState } from 'react';
// import { Container, Card, Form, Button } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Bounce, toast, ToastContainer } from 'react-toastify';
// import { CustomLoader } from '../../CustomLoader';

// export const Signup = () => {
//   const [isLoading, setisLoading] = useState(false);
//   const { register, handleSubmit, formState: { errors }, watch } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = async (data) => {
//     data.roleId = "67c2aeb24e0ed74a6a077cf5";
//     setisLoading(true);
//     try {
//       const res = await axios.post("/user", data);
//       setisLoading(false);

//       if (res.status === 201) {
//         toast.success('Signup Successfully', {
//           position: "top-center",
//           autoClose: 3000,
//           theme: "dark",
//           transition: Bounce,
//         });
//         setTimeout(() => {
//           navigate("/Login");
//         }, 2000);
//       }
//     } catch (error) {
//       setisLoading(false);
//       toast.error('Invalid Credentials !!', {
//         position: "top-center",
//         autoClose: 3000,
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };

//   const ValidationSchema = {
//     firstNameValidator: { required: "First Name is required *" },
//     lastNameValidator: { required: "Last Name is required *" },
//     emailValidator: { required: "Email is required *" },
//     numberValidator: {
//       required: "Contact No is required *",
//       pattern: { value: /^[6-9][0-9]{9}$/, message: "Contact is not valid" }
//     },
//     passwordValidator: {
//       required: "Password is required *",
//       minLength: { value: 8, message: "Minimum length is 8 characters" }
//     },
//     rpasswordValidator: {
//       required: "Repeat password is required *",
//       minLength: { value: 8, message: "Minimum length is 8 characters" },
//       validate: value => value === watch("password") || "Passwords do not match"
//     },
//     checkBoxValidator: { required: "You must accept the terms and conditions" }
//   };

//   return (
//     <div>
//       {isLoading && <CustomLoader />}
//       <ToastContainer position="top-center" autoClose={3000} theme="dark" transition={Bounce} />

//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           minHeight: "100vh",
//           backgroundImage: "url(https://assets.onecompiler.app/43dpwcgs5/43fxe7j6q/view-arrangement-with-keyboard-notebooks.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <Card
//           className="p-4 shadow-lg"
//           style={{
//             maxWidth: "400px", // Reduced width for a smaller card
//             width: "100%",
//             borderRadius: "10px",
//             background: "rgba(255, 255, 255, 0.8)",
//             backdropFilter: "blur(10px)",
//             boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//             padding: "2rem",
//             marginTop: "50px", // Gap from the top
//             marginBottom: "50px", // Gap from the bottom
//           }}
//         >
//           <Card.Body>
//             <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#0d6efd" }}>
//               Create an Account
//             </h2>

//             <Form onSubmit={handleSubmit(submitHandler)}>
//               <Form.Group className="mb-3">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control type="text" {...register("firstName", ValidationSchema.firstNameValidator)} />
//                 <small className="text-danger">{errors.firstName?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control type="text" {...register("lastName", ValidationSchema.lastNameValidator)} />
//                 <small className="text-danger">{errors.lastName?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" {...register("email", ValidationSchema.emailValidator)} />
//                 <small className="text-danger">{errors.email?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Contact No</Form.Label>
//                 <Form.Control type="text" {...register("number", ValidationSchema.numberValidator)} />
//                 <small className="text-danger">{errors.number?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" {...register("password", ValidationSchema.passwordValidator)} />
//                 <small className="text-danger">{errors.password?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Repeat Password</Form.Label>
//                 <Form.Control type="password" {...register("rpassword", ValidationSchema.rpasswordValidator)} />
//                 <small className="text-danger">{errors.rpassword?.message}</small>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Check
//                   type="checkbox"
//                   label="I agree to the Terms of Service"
//                   {...register("terms", ValidationSchema.checkBoxValidator)}
//                 />
//                 <small className="text-danger">{errors.terms?.message}</small>
//               </Form.Group>

//               <Button
//                 type="submit"
//                 className="w-100 mt-3"
//                 size="lg"
//                 style={{
//                   background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
//                   border: "none",
//                   fontWeight: "600",
//                   letterSpacing: "1px",
//                   padding: "12px 0",
//                 }}
//               >
//                 Register
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { CustomLoader } from '../../CustomLoader';

export const Signup = () => {
  const [isLoading, setisLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    data.roleId = "67c2aeb24e0ed74a6a077cf5";
    setisLoading(true);
    try {
      const res = await axios.post("/user", data);
      setisLoading(false);

      if (res.status === 201) {
        toast.success('Signup Successfully', {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      }
    } catch (error) {
      setisLoading(false);
      toast.error('Invalid Credentials !!', {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const ValidationSchema = {
    firstNameValidator: { required: "First Name is required *" },
    lastNameValidator: { required: "Last Name is required *" },
    emailValidator: { required: "Email is required *" },
    numberValidator: {
      required: "Contact No is required *",
      pattern: { value: /^[6-9][0-9]{9}$/, message: "Contact is not valid" }
    },
    passwordValidator: {
      required: "Password is required *",
      minLength: { value: 8, message: "Minimum length is 8 characters" }
    },
    rpasswordValidator: {
      required: "Repeat password is required *",
      minLength: { value: 8, message: "Minimum length is 8 characters" },
      validate: value => value === watch("password") || "Passwords do not match"
    },
    checkBoxValidator: { required: "You must accept the terms and conditions" }
  };

  return (
    <div>
      {isLoading && <CustomLoader />}
      <ToastContainer position="top-center" autoClose={3000} theme="dark" transition={Bounce} />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundImage: "url(https://assets.onecompiler.app/43dpwcgs5/43fy7485m/CSC-Digital-Seva-Kendra-Online-Registration-and-Benefits-1536x864.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Card
          className="p-4 shadow-lg"
          style={{
            maxWidth: "500px", // Slightly wider card
            width: "100%",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            padding: "2rem 2rem", // Adjust padding for better balance
            marginTop: "30px", // Gap from the top
            marginBottom: "30px", // Gap from the bottom
            position: "relative", // For right positioning
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#0d6efd" }}>
              Create an Account
            </h2>

            <Form onSubmit={handleSubmit(submitHandler)}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" {...register("firstName", ValidationSchema.firstNameValidator)} />
                <small className="text-danger">{errors.firstName?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" {...register("lastName", ValidationSchema.lastNameValidator)} />
                <small className="text-danger">{errors.lastName?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" {...register("email", ValidationSchema.emailValidator)} />
                <small className="text-danger">{errors.email?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact No</Form.Label>
                <Form.Control type="text" {...register("number", ValidationSchema.numberValidator)} />
                <small className="text-danger">{errors.number?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" {...register("password", ValidationSchema.passwordValidator)} />
                <small className="text-danger">{errors.password?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" {...register("rpassword", ValidationSchema.rpasswordValidator)} />
                <small className="text-danger">{errors.rpassword?.message}</small>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms of Service"
                  {...register("terms", ValidationSchema.checkBoxValidator)}
                />
                <small className="text-danger">{errors.terms?.message}</small>
              </Form.Group>

              <Button
                type="submit"
                className="w-100 mt-3"
                size="lg"
                style={{
                  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                  border: "none",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  padding: "12px 0",
                }}
              >
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
