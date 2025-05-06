// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import { CustomLoader } from '../../CustomLoader';

// export const SelectLoginRole = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleLoginRedirect = () => {
//     if (!role) {
//       toast.error("Please select a role!", { transition: Bounce, theme: "dark" });
//       return;
//     }

//     setIsLoading(true);
//     setTimeout(() => {
//       if (role === "user") navigate("/Login");
//       else if (role === "lawyer") navigate("/lawyerLogin");
//       else if (role === "admin") navigate("/adminLogin");
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div>
//       <ToastContainer position="top-left" autoClose={3000} theme="dark" transition={Bounce} />
//       {isLoading && <CustomLoader />}
//       <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: "url(https://assets.onecompiler.app/43dpwcgs5/43fxe7j6q/DeWatermark.ai_1745645842529.png)", backgroundSize: "cover" }}>
//         <Card className="m-3 p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
//           <Card.Body className="px-4">
//             <h2 className="text-uppercase text-center mb-4">Select Login Role</h2>
            
//             <Form.Group className="mb-3">
//               <Form.Label>Select your role</Form.Label>
//               <Form.Select value={role} onChange={handleRoleChange}>
//                 <option value="">-- Choose Role --</option>
//                 <option value="user">User</option>
//                 <option value="lawyer">Lawyer</option>
//                 <option value="admin">Admin</option>
//               </Form.Select>
//             </Form.Group>

//             <Button className="mt-3 w-100" variant="primary" size="lg" onClick={handleLoginRedirect}>
//               Continue
//             </Button>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button } from "react-bootstrap";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import { CustomLoader } from '../../CustomLoader';

// export const SelectLoginRole = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleLoginRedirect = () => {
//     if (!role) {
//       toast.error("Please select a role!", { transition: Bounce, theme: "dark" });
//       return;
//     }
//     setIsLoading(true);
//     setTimeout(() => {
//       if (role === "user") navigate("/Login");
//       else if (role === "lawyer") navigate("/lawyerLogin");
//       else if (role === "admin") navigate("/adminLogin");
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div>
//       <ToastContainer position="top-left" autoClose={3000} theme="dark" transition={Bounce} />
//       {isLoading && <CustomLoader />}

//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center min-vh-100"
//         style={{
//           backgroundImage: "url(https://assets.onecompiler.app/43dpwcgs5/43fxe7j6q/image-background-dbf4i946yc0xxcy9.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px", backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
//           <Card.Body className="text-center">
//             <h3 style={{ color: "#007bff", fontWeight: "bold", marginBottom: "25px" }}>
//               SELECT LOGIN ROLE
//             </h3>

//             <Form.Group className="mb-3 text-start">
//               <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
//                 Choose your role
//               </Form.Label>
//               <Form.Select value={role} onChange={handleRoleChange}>
//                 <option value="">-- Select Role --</option>
//                 <option value="user">User</option>
//                 <option value="lawyer">Lawyer</option>
//                 <option value="admin">Admin</option>
//               </Form.Select>
//             </Form.Group>

//             <Button
//               className="w-100 mt-3"
//               style={{
//                 background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
//                 border: "none",
//                 fontWeight: "bold",
//               }}
//               size="lg"
//               onClick={handleLoginRedirect}
//             >
//               Continue
//             </Button>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { CustomLoader } from '../../CustomLoader';

export const SelectLoginRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLoginRedirect = () => {
    if (!role) {
      toast.error("Please select a role!", { transition: Bounce, theme: "dark" });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      if (role === "user") navigate("/Login");
      else if (role === "lawyer") navigate("/lawyerLogin");
      else if (role === "admin") navigate("/adminLogin");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ToastContainer position="top-left" autoClose={3000} theme="dark" transition={Bounce} />
      {isLoading && <CustomLoader />}

      <Container
        fluid
        className="d-flex align-items-center justify-content-center min-vh-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
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
          <Card.Body className="text-center">
            <h2
              className="text-uppercase mb-4"
              style={{ fontWeight: "bold", color: "#0d6efd" }}
            >
              Select Login Role
            </h2>

            <Form.Group className="mb-3 text-start">
              <Form.Label style={{ fontWeight: "500", color: "#333" }}>
                Choose your role
              </Form.Label>
              <Form.Select value={role} onChange={handleRoleChange}>
                <option value="">-- Select Role --</option>
                <option value="user">User</option>
                <option value="lawyer">Lawyer</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <Button
              className="w-100 mt-3"
              style={{
                background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                border: "none",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
              size="lg"
              onClick={handleLoginRedirect}
            >
              Continue
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
