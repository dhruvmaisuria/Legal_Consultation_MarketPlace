// import React from 'react'
// import "../../assets/userDashBoard.css" 
// import { Link } from 'react-router-dom'

// export const UserDashBoard = () => {
//   return (
//     <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   {/* <title>BuyerTalk - Your Voice Matters</title> */}
//   <link
//     href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans&display=swap"
//     rel="stylesheet"
//   />
//   <link rel="stylesheet" href="style.css" />
//   <div className="hero">
//     <h1>DEFEND YOUR CONSTITUTIONAL RIGHT WITH LEGAL HELP</h1>
    
//     <br />
//     <Link to="/user/addAppointment">
//     <button>Make An Appointment</button>
//     </Link>
//   </div>
//   <div className="contact-section">
//     <div className="contact-box">
//       <h2>Need Legal Services?</h2>
//       <p>
//       Find expert legal professionals, book consultations, and share your experiences through reviews. Get the guidance you need today!
//       </p>
//     </div>
//     <div className="contact-box">
//       <h2>Get in Touch</h2>
//       <p>
//       Have questions or need assistance? Email us at{" "}
//         <Link to="mailto:dhruvmaisuria3010@gmail.com">dhruvmaisuria3010@gmail.com</Link>
//       </p>
//       <p>Join us in making informed legal decisions with confidence.</p>
//     </div>
//   </div>
// </>

//   )
// }


import React from 'react';
import "../../assets/userDashBoard.css"; 
import { Link } from 'react-router-dom';

export const UserDashBoard = () => {
  return (
    <>
      <div className="hero">
        {/* Dark overlay text wrapper */}
        <div className="hero-content">
          <h1>DEFEND YOUR CONSTITUTIONAL RIGHT WITH LEGAL HELP</h1>
          <p>Your Legal Solution starts here!</p>
          <Link to="/user/addAppointment">
            <button>Make An Appointment</button>
          </Link>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-box">
          <h2>Need Legal Services?</h2>
          <p>
            Find expert legal professionals, book consultations, and share your experiences through reviews. 
            Get the guidance you need today!
          </p>
        </div>
        <div className="contact-box">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Email us at{" "}
            <Link to="mailto:dhruvmaisuria3010@gmail.com">dhruvmaisuria3010@gmail.com</Link>
          </p>
          <p>Join us in making informed legal decisions with confidence.</p>
        </div>
      </div>
    </>
  );
};
