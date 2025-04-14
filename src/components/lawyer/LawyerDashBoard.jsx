import React from 'react';
import "../../assets/lawyerDashBoard.css"; 
import { Link } from 'react-router-dom';

export const LawyerDashBoard = () => {
  return (
    <>
      <div className="hello">
        {/* Dark overlay text wrapper */}
        <div className="hero-content">
          <h1>MANAGE YOUR CLIENT APPOINTMENTS WITH EASE</h1>
          <p>Review, accept, and schedule consultations efficiently.</p>
          <Link to="/lawyer/viewAppointments">
            <button> View Your Appointments</button>
          </Link>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-box">
          <h2>Offer Your Legal Expertise</h2>
          <p>
          Connect with clients, provide consultations, and help them navigate legal challenges.
          Your expertise makes a difference!
          </p>
        </div>
        <div className="contact-box">
          <h2>Connect With Us</h2>
          <p>
          Have questions about managing your appointments or growing your legal practice?  
          Reach out to us at{" "}
            <Link to="mailto:legalconsultationteam@gmail.com">legalconsultationteam@gmail.com</Link>
          </p>
          <p>We're here to support your journey in providing expert legal services.</p>
        </div>
      </div>
    </>
  );
};
