import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const SignUpForm = ({ signUp, loading, error, redirect }) => {
  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleCreate = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    signUp(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <>
      <Form id="signup-form" onSubmit={handleCreate}>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={state.username}
            autoFocus
            required
            onChange={handleChange}
          />
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
          />
          <Form.Label htmlFor="dislayName">DisplayName</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            value={state.displayName}
            onChange={handleChange}
          />
          <Button type="submit" disabled={loading}>
            Sign Up
          </Button>
      </Form>
      {loading && <Loader />}
      {error && (
        <p style={{ color: "red" }}>
          {/* Sorry, that didn't go through. 
      Please make sure the username, password, and display name are between 3 and 30 characters, and then try again. */}
          {error}
        </p>
      )}
      {redirect && <Redirect to={"/profiles/:username"} />}
    </>
  );
};

SignUpForm.propTypes = {
  signUp: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  redirect: ProptTypes.bool,
};

// <Form onSubmit={handleCreate}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="text" placeholder="Enter username" />
//           <Form.Text className="text-muted">
//             Make it YOU-nique!
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Display Name</Form.Label>
//           <Form.Control type="text" placeholder='DisplayName'  />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//     </Form>
