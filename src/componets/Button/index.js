import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export default function Button({ onClick, children, type }) {
  function handleOnClick(e) {
    if (typeof onClick === "function") {
      onClick(e);
    }
  }
  return (
    <button className="button" type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string
}
