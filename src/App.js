import React, { useState } from "react";

import "./App.css";
import TextInput from "./componets/TextInput";
import Button from "./componets/Button";
import RadioGroup from "./componets/RadioGroup";

const options = [
  {
    value: "email",
    label: "Email",
    name: "contact",
    defaultChecked: true
  },
  {
    value: "phone",
    label: "Phone",
    name: "contact",
  },
];

function App() {
  const [currentContact, setContact] = useState("email");
  function onRadioChange(event) {
    console.log(event.currentTarget.value);
    setContact(event.currentTarget.value);
  }

  return (
    <div className="app-wrapper">
      <form class="form-container">
        <TextInput
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        <TextInput
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <TextInput
          id="age"
          type="text"
          name="age"
          label="Age"
          placeholder="Enter your age"
        />
        <RadioGroup options={options} onChange={onRadioChange} />
        {currentContact === "phone" && (
          <TextInput
            id="phoneNumber"
            type="phone"
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
        )}
        {currentContact === "email" && (
          <TextInput
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter email"
          />
        )}
        <TextInput
          id="address"
          type="text"
          name="address"
          label="Address"
          placeholder="Enter your address"
        />
        <div className="form-element">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div class="form-review">div 2</div>
    </div>
  );
}

export default App;
