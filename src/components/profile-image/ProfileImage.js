import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";

export const ProfileImage = ({
  sendProfileImage,
  loading,
  error,
  photo,
  username,
}) => {
  let url = ""
  const [state, setState] = useState(null);
  const handleChange = (event) => {
    // console.log(event.target.files[0])
    // Update the document title using the browser API
    setState( event.target.files[0])
  }
  const submitForm = async (event) => {
    event.preventDefault();
    await sendProfileImage(state);
    window.location.reload(true)
  }
  url = "https://kwitter-api.herokuapp.com/users/"+username+"/picture"
  console.log(url)
  return (
    <>
    <form onSubmit={submitForm}>
      <input type="file" name="picture" id="picture" accept='image/*' onChange={handleChange}/>
      <img alt="The User" src={url} style={{width: 200+"px"}}/>
      <button type="button submit" className="profileButtonSuccess">Upload your Profile Picture</button>
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
