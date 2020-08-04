import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import { Button, Form } from "react-bootstrap";
export const LoginForm = ({ login, loginGoogle, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  // const authWindow = useRef(null);
  const handleLogin = (event) => {
    event.preventDefault();
    login(state);
  };
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  const startAuthentication = () => {
    const authWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank",
      "width=500,height=500"
    );
    authWindow.window.opener.onmessage = (event) => {
      authWindow.close();
      if (!event || !event.data || !event.data.token) {
        // google login failure, dispatch an action here
        alert("Please log in to your Google account first");
        // console.log('something happened')
        return;
      }

      loginGoogle(event.data);
    };
  };
  // const responseGoogle = (response) => {
  //   console.log(response)
  // }
  return (
    <React.Fragment>
      <Form id="login-form" onSubmit={handleLogin}>
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
        <Button type="submit" disabled={loading}>
          Login
        </Button>
        <Button onClick={startAuthentication}>Login using Google</Button>
      </Form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
