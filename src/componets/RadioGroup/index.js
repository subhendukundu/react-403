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
        <div key={item.value}>
          <input
            type="radio"
            name={item.name}
            value={item.value}
            onChange={handleOnChange}
            defaultChecked={item.defaultChecked}
          />
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
}
