import PropTypes from "prop-types";
import React from "react";

import "./style.css";

export default function RadioGroup({ options, onChange }) {
  function handleOnChange(e) {
    if (typeof onChange === "function") {
      onChange(e);
    }
  }
  return (
    <div className="radio-group">
      {options.map((item) => (
        <div key={item.value} className="radio-input">
          <input
            type="radio"
            name={item.name}
            value={item.value}
            id={item.value}
            onChange={handleOnChange}
            defaultChecked={item.defaultChecked}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
