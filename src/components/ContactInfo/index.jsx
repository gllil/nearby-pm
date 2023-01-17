import React from "react";
import "./index.css";

const ContactInfo = () => {
  return (
    <div className="text-start">
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-phone"></i>
          </span>
          <a className="contact" href="tel:+1-407-243-8857">
            (407) 243-8857
          </a>
        </li>
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <a className="contact" href="mailto:support@nearbyrealtyhomes.com">
            Support@NearbyRealtyHomes.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
