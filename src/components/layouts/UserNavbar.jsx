

import React from "react";
import hamburgermenu from "../../assets/images/hamburgermenu.png";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export const UserNavbar = ({ toggleSidebar }) => {

  const navigate = useNavigate();
  const handleLogout = () => {

    
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });
  
    setTimeout(() => {
      navigate("/"); // Redirect to login page after toast
    }, 2500);
  };
  return (
    <nav style={{background:" linear-gradient(135deg, #2c3e50, #4ca1af)"}} className="app-header navbar navbar-expand bg-body">
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
      {/*begin::Container*/}
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link btn btn-light"
              href="#"
              role="button"
              style={{
                color: "black",
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              onClick={toggleSidebar}
            >
              <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/user/userDashBoard" className="nav-link">
              Home  
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button  onClick ={()=> {handleLogout()}} className="btn btn-danger">LOGOUT</button>
            {/* <a className="nav-link" href="#" data-lte-toggle="fullscreen">
              <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
              <i
                data-lte-icon="minimize"
                className="bi bi-fullscreen-exit"
                style={{ display: "none" }}
              />
            </a> */}
          </li>
          </ul>  
        
      </div>
    </nav>
  );
};


// import React from "react";
// import hamburgermenu from "../../assets/images/hamburgermenu.png";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const UserNavbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("id");
//     localStorage.removeItem("role");

//     toast.success("Logged out successfully!", {
//       position: "top-center",
//       autoClose: 2000,
//       theme: "dark",
//       transition: Bounce,
//     });

//     setTimeout(() => {
//       navigate("/login");
//     }, 2500);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
//       <ToastContainer autoClose={2000} theme="dark" transition={Bounce} />

//       <div className="container-fluid d-flex align-items-center">
//         {/* Sidebar Toggle */}
//         <button
//           className="btn btn-light border me-3"
//           onClick={toggleSidebar}
//           style={{ borderRadius: "5px" }}
//         >
//           <img src={hamburgermenu} alt="Menu" style={{ height: "25px", width: "25px" }} />
//         </button>

//         {/* Navbar Links */}
//         <div className="d-flex">
//           <a href="#" className="nav-link me-3">
//             Home
//           </a>
//           <a href="#" className="nav-link">
//             Contact
//           </a>
//         </div>

//         {/* Logout Button */}
//         <button onClick={handleLogout} className="btn btn-danger ms-auto">
//           LOGOUT
//         </button>
//       </div>
//     </nav>
//   );
// };

