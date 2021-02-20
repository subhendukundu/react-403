import PropTypes from "prop-types";
import React from "react";

import TextInput from "../TextInput";
import Button from "../Button";
import RadioGroup from "../RadioGroup";

const options = [
  {
    value: "email",
    label: "Email",
    name: "contact",
    defaultChecked: true,
  },
  {
    value: "phone",
    label: "Phone",
    name: "contact",
  },
];

function Form({ contactMethod, onRadioChange, onChange, onSubmit }) {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <TextInput
        id="firstName"
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Enter your first name"
        onChange={onChange}
      />
      <TextInput
        id="lastName"
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        onChange={onChange}
      />
      <TextInput
        id="age"
        type="text"
        name="age"
        label="Age"
        placeholder="Enter your age"
        onChange={onChange}
      />
      <RadioGroup options={options} onChange={onRadioChange} />
      {contactMethod === "phone" && (
        <TextInput
          id="phoneNumber"
          type="phone"
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          onChange={onChange}
        />
      )}
      {contactMethod === "email" && (
        <TextInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter email"
          onChange={onChange}
        />
      )}
      <TextInput
        id="address"
        type="text"
        name="address"
        label="Address"
        placeholder="Enter your address"
        onChange={onChange}
      />
      <div className="form-element">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  contactMethod: PropTypes.string,
  onChange: PropTypes.func,
  onRadioChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default Form;
