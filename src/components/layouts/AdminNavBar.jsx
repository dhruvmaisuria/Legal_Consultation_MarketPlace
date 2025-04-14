


// import React from "react";
// import hamburgermenu from "../../assets/images/hamburgermenu.png";
// import { Bounce, toast, ToastContainer } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";






// export const AdminNavBar = ({ toggleSidebar }) => {

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
//       navigate("/"); // Redirect to login page after toast
//     }, 2500);
//   };
  
//   return (
//     <nav style={{background:" linear-gradient(135deg, #2c3e50, #4ca1af)"}} className="app-header navbar navbar-expand bg-body ">
//       {/*begin::Container*/}
//       <ToastContainer
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
//       <div className="container-fluid">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a
//               className="nav-link btn btn-light"
//               href="#"
//               role="button"
//               style={{
//                 color: "black",
//                 padding: "5px 10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//               onClick={toggleSidebar}
//             >
//               <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
//             </a>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <Link style={{color:"white"}} to="/admin/adminDashBoard" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <a style={{color:"white"}} href="#" className="nav-link">
//               Contact
//             </a>
//           </li>
//         </ul>

//         <ul className="navbar-nav ms-auto">
//           {/* <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="navbar-search"
//               href="#"
//               role="button"
//             >
//               <i className="bi bi-search" />
//             </a>
//           </li> */}

         

        

//           <li className="nav-item">
//             <button  onClick ={()=> {handleLogout()}} className="btn btn-danger">LOGOUT</button>
//             {/* <a className="nav-link" href="#" data-lte-toggle="fullscreen">
//               <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
//               <i
//                 data-lte-icon="minimize"
//                 className="bi bi-fullscreen-exit"
//                 style={{ display: "none" }}
//               />
//             </a> */}
            
            

//           </li>

          
//         </ul>
//       </div>
//     </nav>
//   );
// };




import React from "react";
import hamburgermenu from "../../assets/images/hamburgermenu.png";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export const AdminNavBar = ({ toggleSidebar, isSidebarOpen }) => {
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
      navigate("/");
    }, 2500);
  };

  return (
    <nav
      style={{ background: "linear-gradient(135deg, #2c3e50, #4ca1af)" }}
      className="app-header navbar navbar-expand-lg"
    >
      <ToastContainer />

      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        {/* Left: Sidebar toggle + branding */}
        <div className="d-flex align-items-center">
          {!isSidebarOpen && (
            <button
              className="btn btn-light me-2"
              onClick={toggleSidebar}
              style={{
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <img
                src={hamburgermenu}
                alt="Sidebar"
                style={{ height: "25px", width: "25px" }}
              />
            </button>
          )}
          <Link className="navbar-brand text-white fw-bold" to="/admin/adminDashBoard">
            Legal Consultation
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-nav d-none d-lg-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/adminDashBoard">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger ms-2">
              LOGOUT
            </button>
          </li>
        </ul>

        {/* Mobile Dropdown Menu (3-dot menu) without arrow */}
        <div className="d-lg-none dropdown">
          <button
            className="btn mr-2 fs-1"
            type="button"
            id="mobileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              background: "transparent",
              color: "white",
              fontSize: "24px",
              border: "none",
              boxShadow: "none",
              padding: 0,
              margin: 0,
            }}
          >
            &#8942; {/* 3-dot vertical menu without arrow */}
          </button >

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="mobileDropdown"
            style={{
              background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
              border: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <li>
              <Link className="dropdown-item text-white" to="/admin/adminDashBoard">
                Home
              </Link>
            </li>
            <li>
              <a className="dropdown-item text-white" href="#">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="dropdown-item text-white btn btn-link"
                style={{ textAlign: "left" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
