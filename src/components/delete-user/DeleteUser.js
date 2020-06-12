import React from "react";
import ProptTypes from "prop-types";
// import { Loader } from "../loader";
// import {deleteUser} from '../../redux/actions/deleteUser'


export const DeleteUser = ({deleteUser}) => {
  // Not to be confused with "this.setState" in classes
  // const [state, setState] = useState({
  //   username: "",
  //   active: true
  // });

  const handleDelete = (event) => {
    event.preventDefault();
    console.log('helloooo')
    deleteUser();
    console.log("whats up")
  };

  // const handleChange = (event) => {
  //   const inputName = event.target.name;
  //   const inputValue = event.target.value;
    // setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    // need to change state.active to false
  // };

  return (
    <React.Fragment>
      <form id="login-form" onClick={handleDelete}>
        <label htmlFor="username">Username</label>
        {/* <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        /> */}
        {/* <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        /> */}
        <button type="submit">
          Delete User
        </button>
      </form>
      {/* { <Loader />} */}
      {/* {error && <p style={{ color: "red" }}>{error.message}</p>} */}
    </React.Fragment>
  );
};

DeleteUser.propTypes = {
  deleteUser: ProptTypes.func.isRequired,
};