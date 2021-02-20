import PropTypes from "prop-types";
import React from "react";

import "./style.css";

export default function UserDetails({
  firstName,
  lastName,
  age,
  contact,
  email,
  phoneNumber,
  address,
}) {
  const contactLabel = contact === "email" ? "Email" : "Phone Number";
  const contactDetails = contact === "email" ? email : phoneNumber;
  return (
    <div className="form-review">
      <h3>Delivery address</h3>
      <h4 className="form-review-element">
        {firstName} {lastName}
      </h4>
      <span className="form-review-element">
        Age: {age}
      </span>
      <span className="form-review-element">
        Contact method: {contactLabel}
      </span>
      <span className="form-review-element">
        {contactLabel}: {contactDetails}
      </span>
      <span className="form-review-element">Address: {address}</span>
    </div>
  );
}

UserDetails.propTypes = {
  address: PropTypes.string,
  age: PropTypes.any,
  contact: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string
}
