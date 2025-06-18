// import React from 'react'
// import "../../assets/landingPage.css";
// import "../../assets/landing/css/style.css";
// import "../../assets/landing/css/responsive.css";
// import about2image from "../../assets/landing/images/about-img2.png";
// import sliderImage from "../../assets/landing/images/slider-img.png";
// import { Link } from "react-router-dom";


// export const LandingPage = () => {
//   return (
//     <div className="hero_area">
//       <header className="header_section">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg custom_nav-container ">
//             <a className="navbar-brand" href="index.html">
//               <span className="ml-3">
//                 LEGAL-CONSULTANT
//               </span>
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="s-1"> </span>
//               <span className="s-2"> </span>
//               <span className="s-3"> </span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
//                 <ul className="navbar-nav  ">
//                   {/* <li className="nav-item active">
//               <a className="nav-link" href="index.html">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="about.html">
//                 {" "}
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="service.html">
//                 {" "}
//                 Services{" "}
//               </a>
//             </li> */}
//                   {/* <li className="nav-item">
//               <a className="nav-link" href="#contactLink">
//                 Contact Us
//               </a>
//             </li> */}
//                 </ul>
//               </div>
//               <div className="quote_btn-container ">
//                 <div className="btn-box">
//                   <Link to="/Login" className="btn-1">
//                     Login
//                   </Link>
//                   <Link to="/signup" className="btn-2">
//                     Signup
//                   </Link>
//                 </div>
//                 <form className="form-inline">
//                   <button
//                     className="btn  my-2 my-sm-0 nav_search-btn"
//                     type="submit"
//                   />
//                 </form>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>

//       <section className=" slider_section ">
//         <div
//           id="carouselExampleIndicators"
//           className="carousel slide"
//           data-ride="carousel"
//         >
//           <div className="carousel-inner">
//             <div className="carousel-item active carousel-item-center">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6 ">
//                     <div className="detail_box ml-5">
//                       <h1>LEGAL-CONSULTANT</h1>
//                       <p>
//                         It is a long established fact that a reader will be
//                         distracted by the readable content of a page when
//                         looking
//                       </p>
//                       <div className="btn-box" >
//                         <Link to="/contactUs" className="btn-1">
//                           Contact Us
//                         </Link>
//                         <a href="" className="btn-2">
//                           Get A Quote
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="img-box">
//                       <img src="images/slider-img.png" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="carousel-item carousel-item-next carousel-item-left">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6 ">
//                     <div className="detail_box">
//                       <h1>The best marketing</h1>
//                       <p>
//                         It is a long established fact that a reader will be
//                         distracted by the readable content of a page when
//                         looking
//                       </p>
//                       <div className="btn-box">
//                         <Link to="/contactUs" className="btn-1">
//                           Contact Us
//                         </Link>
//                         <a href="" className="btn-2">
//                           Get A Quote
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="img-box">
//                       <img src="images/slider-img.png" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6 ">
//                     <div className="detail_box">
//                       <h1>The best marketing</h1>
//                       <p>
//                         It is a long established fact that a reader will be
//                         distracted by the readable content of a page when
//                         looking
//                       </p>
//                       <div className="btn-box">
//                         <Link to="/contactUs" className="btn-1">
//                           Contact Us
//                         </Link>
//                         <a href="" className="btn-2">
//                           Get A Quote
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="img-box">
//                       <img src="images/slider-img.png" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel_btn-container">
//             <a
//               className="carousel-control-prev"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="prev"
//             >
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="carousel-control-next"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="next"
//             >
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       <section className="about_section ">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="img-box">
//                 <img src={about2image} alt="" />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <h2>About Us</h2>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud
//                 </p>
//                 <a href="">Read More</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

 




import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../assets/landingPage.css";
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsive.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand " href="#">
              <span className=''>LEGAL-CONSULTATION</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <Link className="nav-link" to="#">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/selectLoginRole">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/selectRole">SignUp</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>Legal Consultation Marketplace</h1>
                      <p>
                      Join a platform where finding the right legal expert is seamless.
                      Book consultations, seek advice, and get the justice you deserve.
                      </p>
                      <div className="btn-box">
                        <Link to="/contactUs" className="btn-1">Contact Us</Link>
                        <a href="#" className="btn-2">Get A Quote</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about2image} alt="About BuyerTalk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className='about' style={{color:"#4facfe"}}  >About Us</h2>
                </div>
                <p style={{color:"white"}}>
                Legal Consultation Marketplace is your trusted digital platform connecting clients with verified legal professionals.
                Whether you need legal advice, book consultations, or resolve legal matters, our platform makes the process effortless.
                Additionally, we empower users by educating them on their legal rights and procedures.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default LandingPage;