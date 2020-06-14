import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const UpdateUserInfo = ({
  updateUserInfoAction,
  loading,
  error,
  user,
  redirect,
}) => {
  const [state, setState] = useState({
    displayName: "",
    password: "",
    about: "",
  });
  const handleCreate = (event) => {
    event.preventDefault();
    let newState = {...state}
    if (state.displayName === '') {
      delete newState.displayName
    }
    if (state.password === '') {
      delete newState.password
    }
    if (state.about === ''){
      delete newState.about
    }
    console.log(state);
    console.log(newState)
    updateUserInfoAction(newState);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="updateUserInfo" onSubmit={handleCreate}>
        <div>
          Hello,
          <em> {user.username}</em>. What would you like to update?
        </div>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <div>Current Display Name: {user.displayName}</div>
        <label htmlFor="dislayName">Update your DisplayName</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
        />
        <div>
          A little about you :
          <div>{user.about || "Add some interesting facts!"}</div>
        </div>
        <label htmlFor="about">Update your About section</label>
        <input
          type="text"
          name="about"
          value={state.about}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Submit Changes
        </button>
      </form>
      {loading && <Loader />}
      {error && (
        <p style={{ color: "red" }}>
          {/* Sorry, that didn't go through. 
      Please make sure the username, password, and display name are between 3 and 30 characters, and then try again. */}
          {error}
        </p>
      )}
      {redirect && <Redirect to={"/profiles/"+user.username} />}
    </>
  );
};

UpdateUserInfo.propTypes = {
  updateUserInfoAction: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  // user: ProptTypes.object,
};
