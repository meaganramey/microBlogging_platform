import React from "react";
import ProptTypes from "prop-types";
import Button from 'react-bootstrap/Button'


export const DeleteUser = ({deleteUser, error}) => {


  const handleDelete = (event) => {
    event.preventDefault();
    console.log('helloooo')
    deleteUser();
    console.log("whats up")
  };


  return (
    <React.Fragment>
      <form id="login-form" onClick={handleDelete}>
        <label htmlFor="username"></label>
        <Button type="submit">
          Delete Your Profile
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

DeleteUser.propTypes = {
  deleteUser: ProptTypes.func.isRequired,
  error: ProptTypes.string,
};