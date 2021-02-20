import React, { useState } from "react";

import Form from "./componets/Form";
import UserDetails from "./componets/UserDetails";

import "./App.css";

function App() {
  const [currentContact, setContact] = useState({
    firstName: "",
    lastName: "",
    age: "",
    contact: "email",
    phoneNumber: "",
    email: "",
    address: "",
  });

  function onChange(event) {
    setContact({
      ...currentContact,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(currentContact);
    // TODO: add a post to submit the data to server
  }

  return (
    <div className="app-wrapper">
      <Form
        contactMethod={currentContact.contact}
        onRadioChange={onChange}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div className="user-details">
        <UserDetails {...currentContact} />
      </div>
    </div>
  );
}

export default App;
