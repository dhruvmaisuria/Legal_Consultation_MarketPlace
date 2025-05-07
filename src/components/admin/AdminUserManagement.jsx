// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Table, Container, Spinner } from "react-bootstrap";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch users on mount
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("/admin/getAllUsers");
//       setUsers(res.data.data);
//     } catch (err) {
//       toast.error("Failed to load users", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Toggle Block/Unblock user
//   const toggleBlockStatus = async (id) => {
//     try {
//       const res = await axios.patch(`/admin/toggleUserBlock/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Error updating status", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   // Delete user
//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const res = await axios.delete(`/admin/deleteUser/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Failed to delete user", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   return (
//     <Container className="py-4">
//       <ToastContainer />
//       <h2 className="mb-4 text-center">User Management</h2>

//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Status</th>
//               <th>Toggle Block</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr key={user._id}>
//                 <td>{idx + 1}</td>
//                 <td>{user.firstName} {user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.isBlocked ? "Blocked" : "Active"}</td>
//                 <td>
//                   <Button
//                     variant={user.isBlocked ? "success" : "warning"}
//                     size="sm"
//                     onClick={() => toggleBlockStatus(user._id)}
//                   >
//                     {user.isBlocked ? "Unblock" : "Block"}
//                   </Button>
//                 </td>
//                 <td>
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => deleteUser(user._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default AdminUserManagement;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Table, Spinner } from "react-bootstrap";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import '../../assets/adminUserManagement.css';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("/admin/getAllUsers");
//       setUsers(res.data.data);
//     } catch (err) {
//       toast.error("Failed to load users", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const toggleBlockStatus = async (id) => {
//     try {
//       const res = await axios.patch(`/admin/toggleUserBlock/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Error updating status", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const res = await axios.delete(`/admin/deleteUser/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Failed to delete user", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   return (
//     <div className="admin-user-wrapper">
//       <ToastContainer />
//       <h2 className="text-center mb-4">User Management</h2>

//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <div className="table-responsive-wrapper">
//           <Table striped bordered hover responsive className="mb-0">
//             <thead className="table-dark">
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Status</th>
//                 <th>Toggle Block</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, idx) => (
//                 <tr key={user._id}>
//                   <td>{idx + 1}</td>
//                   <td>{user.firstName} {user.lastName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.isBlocked ? "Blocked" : "Active"}</td>
//                   <td>
//                     <Button
//                       variant={user.isBlocked ? "success" : "warning"}
//                       size="sm"
//                       onClick={() => toggleBlockStatus(user._id)}
//                     >
//                       {user.isBlocked ? "Unblock" : "Block"}
//                     </Button>
//                   </td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => deleteUser(user._id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Card, Container, Row, Col, Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("/admin/getAllUsers");
//       setUsers(res.data.data);
//     } catch (err) {
//       toast.error("Failed to load users", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const toggleBlockStatus = async (id) => {
//     try {
//       const res = await axios.patch(`/admin/toggleUserBlock/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Error updating status", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const res = await axios.delete(`/admin/deleteUser/${id}`);
//       toast.success(res.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Failed to delete user", {
//         position: "top-center",
//         autoClose: 3000,
//         transition: Bounce,
//       });
//     }
//   };

//   return (
//     <Container className="py-4">
//       <ToastContainer />
//       <h2 className="mb-4 text-center">User Management</h2>

//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
//           {users.map((user, idx) => (
//             <Col key={user._id}>
//               <Card className="h-100 shadow-sm">
//                 <Card.Body>
//                   <Card.Title className="text-primary fs-6">
//                     {user.firstName} {user.lastName}
//                   </Card.Title>
                  
//                   <OverlayTrigger
//                     placement="top"
//                     overlay={<Tooltip>{user.email}</Tooltip>}
//                   >
//                     <Card.Subtitle className="mb-2 text-muted text-truncate" style={{ maxWidth: "100%" }}>
//                       {user.email}
//                     </Card.Subtitle>
//                   </OverlayTrigger>

//                   <Card.Text className="mb-2">
//                     <strong>Status:</strong>{" "}
//                     <span className={user.isBlocked ? "text-danger" : "text-success"}>
//                       {user.isBlocked ? "Blocked" : "Active"}
//                     </span>
//                   </Card.Text>

//                   <div className="d-flex justify-content-between flex-wrap gap-2 mt-3">
//                     <Button
//                       variant={user.isBlocked ? "success" : "warning"}
//                       size="sm"
//                       onClick={() => toggleBlockStatus(user._id)}
//                     >
//                       {user.isBlocked ? "Unblock" : "Block"}
//                     </Button>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => deleteUser(user._id)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default AdminUserManagement;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Modal,
} from "react-bootstrap";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/adminUserManagement.css"

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/admin/getAllUsers");
      setUsers(res.data.data);
    } catch (err) {
      toast.error("Failed to load users", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBlockStatus = async (id) => {
    try {
      const res = await axios.patch(`/admin/toggleUserBlock/${id}`);
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      fetchUsers();
    } catch (err) {
      toast.error("Error updating status", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await axios.delete(`/admin/deleteUser/${id}`);
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user", {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };

  const handleShowDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <Container className="py-4">
      <ToastContainer />
      <h2 className="mb-4 text-center">User Management</h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {users.map((user) => (
            <Col key={user._id}>
              <Card className="h-100 shadow-sm user-card">
                <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                  <div >
                    <Card.Title className="text-primary fs-6 mb-2">
                      {user.firstName} {user.lastName}
                    </Card.Title>
                    {/* Status now on a separate line */}
                    <div className="mb-2 mt-5" >
                      <strong> Status: </strong>{" "}
                      <span
                        className={
                          user.isBlocked ? "text-danger" : "text-success"
                        }
                      >
                        {user.isBlocked ? "Blocked" : "Active"}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleShowDetails(user)}
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Modal for full user details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"black"}}>
          {selectedUser && (
            <>
              <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Status:</strong> {selectedUser.isBlocked ? "Blocked" : "Active"}</p>
              {selectedUser.phone && <p><strong>Phone:</strong> {selectedUser.phone}</p>}
              {selectedUser.role && <p><strong>Role:</strong> {selectedUser.role}</p>}
              {selectedUser.createdAt && (
                <p>
                  <strong>Joined:</strong>{" "}
                  {new Date(selectedUser.createdAt).toLocaleDateString()}
                </p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteUser(selectedUser._id);
              setShowModal(false);
            }}
          >
            Delete
          </Button>
          <Button
            variant={selectedUser?.isBlocked ? "success" : "warning"}
            onClick={() => {
              toggleBlockStatus(selectedUser._id);
              setShowModal(false);
            }}
          >
            {selectedUser?.isBlocked ? "Unblock" : "Block"}
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminUserManagement;
