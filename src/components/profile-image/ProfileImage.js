import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import axios from 'axios'

export const ProfileImage = ({
  sendProfileImage,
  loading,
  error,
  photo,
}) => {
  const [state, setState] = useState(null);
  const handleChange = (event) => {
    console.log(event.target.files[0])
    // Update the document title using the browser API
    setState( event.target.files[0])
  }
  const submitForm = (event) => {
    event.preventDefault();
    sendProfileImage(state);
  }
  return (
    <>
    <form onSubmit={submitForm}>
      <input type="file" name="picture" id="picture" accept='image/*' onChange={handleChange}/>
      <img alt="The User's Profile Image" src={photo} />
      <button type="button" type="submit" className="profileButtonSuccess">Upload your Profile Picture</button>
    </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

ProfileImage.propTypes = {
  sendProfileImage: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  photo: ProptTypes.string,
};