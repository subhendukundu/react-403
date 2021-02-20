import PropTypes from "prop-types";
import React from "react";

import "./style.css";

export default function TextInput({
  label,
  name,
  type,
  id,
  defaultValue,
  placeholder,
  onChange,
}) {
  function handleOnChange(e) {
    if (typeof onChange === "function") {
      onChange(e);
    }
  }

  return (
    <div className="input-wrapper">
      <label className="input-lable">{label}</label>
      <input
        className="input"
        name={name}
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

TextInput.propTypes = {
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
}
