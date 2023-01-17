import React from "react";

const PerBooking = () => {
  return (
    <div className="text-start">
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-check-square"></i>
          </span>
          <strong>10%</strong> Booking Fee
          <ul className="fa-ul">
            <strong>
              <em>Includes:</em>
            </strong>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-hand-point-right"></i>
              </span>
              Marketing on 8+ Channels
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-hand-point-right"></i>
              </span>
              Dynamic Pricing
            </li>
          </ul>
        </li>
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-check-square"></i>
          </span>
          Professional Cleaning <strong>$220*</strong>
        </li>
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-check-square"></i>
          </span>
          Property Damage Protection <strong>$30**</strong>
        </li>
      </ul>
      <p></p>
    </div>
  );
};

export default PerBooking;
