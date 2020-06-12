import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
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
      authWindow.close()
      if(!event || !event.data || !event.data.token) {
        // google login failure, dispatch an action here
        alert('Please log in to your Google account first')
        console.log('something happened')
        return 
      }
      
      loginGoogle(event.data);
    };
   
  };
  // const responseGoogle = (response) => {
  //   console.log(response)
  // }
  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
        <p onClick={startAuthentication}>Login using Google</p>
      </form>
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