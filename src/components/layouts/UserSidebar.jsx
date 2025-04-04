

import React, { useState } from "react";
import { UserNavbar } from "./UserNavbar";
import { Link, Outlet } from "react-router-dom";


export const UserSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <UserNavbar toggleSidebar={toggleSidebar} />
     
      <aside
          className={`app-sidebar bg-body-secondary shadow ${
            isSidebarOpen ? "open" : "d-none"
          }`}
          data-bs-theme="dark"
        >
        <div className="sidebar-brand">
          <Link to="/" className="brand-link">
            <img
              src="../../dist/assets/img/AdminLTELogo.png"
              // alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />

            <span className="brand-text fw-light">Legal-Consultation</span>
          </Link>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="/" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                <li className="nav-item">
                    <Link to="/user/addAppointment" className="nav-link active">
                       <i className="nav-icon bi bi-circle" />
                       <p>Book Appointment</p>
                     </Link>
                   </li>
                   <li className="nav-item">
                    <Link to="/user/viewMyAppointments" className="nav-link active">
                       <i className="nav-icon bi bi-circle" />
                       <p>My Appointments</p>
                     </Link>
                   </li>
                  <li className="nav-item">
                    <Link to="/user/addQuery" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p> Add Legal Query</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/user/viewMyQueries" className="nav-link">
                  <i className="nav-icon bi bi-palette" />
                  <p>View My Queries</p>
                </Link>
              </li>
              <li className="nav-item">
                    <Link to="/user/addReview" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Add Review</p>
                    </Link>
              </li>
              <li className="nav-item">
                    <Link to="/user/viewMyReviews" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>View My Reviews</p>
                    </Link>
              </li> 
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    weights
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main class="app-main">
        <Outlet></Outlet>
      </main>
    </>
  );
};


// import React, { useState } from "react";
// import { UserNavbar } from "./UserNavbar";
// import { Link, Outlet } from "react-router-dom";

// export const UserSidebar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <UserNavbar toggleSidebar={toggleSidebar} />

//       <div className="d-flex">
//         {/* Sidebar */}
//         <aside
//           className={`sidebar bg-dark shadow ${isSidebarOpen ? "open" : "collapsed"}`}
//           style={{
//             width: isSidebarOpen ? "250px" : "60px",
//             transition: "width 0.3s ease-in-out",
//             height: "100vh",
//             position: "fixed",
//             overflow: "hidden",
//           }}
//         >
//           <div className="sidebar-brand p-3">
//             <Link to="/" className="text-white text-decoration-none fw-bold">
//               Legal-Consultation
//             </Link>
//           </div>

//           {/* Sidebar Menu */}
//           <nav className="mt-3">
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <Link to="/user/dashboard" className="nav-link text-white">
//                   Dashboard
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/addAppointment" className="nav-link text-white">
//                   Book Appointment
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/viewMyAppointments" className="nav-link text-white">
//                   My Appointments
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/addQuery" className="nav-link text-white">
//                   Add Legal Query
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/viewMyQueries" className="nav-link text-white">
//                   View My Queries
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/addReview" className="nav-link text-white">
//                   Add Review
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user/viewMyReviews" className="nav-link text-white">
//                   View My Reviews
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main
//           className="app-main"
//           style={{
//             marginLeft: isSidebarOpen ? "250px" : "60px",
//             transition: "margin-left 0.3s ease-in-out",
//             width: "100%",
//             padding: "20px",
//           }}
//         >
//           <Outlet />
//         </main>
//       </div>
//     </>
//   );
// };


