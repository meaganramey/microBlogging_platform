import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ProfileImage = ({
  sendProfileImage,
  loading,
  error,
  photo,
  username,
}) => {
  let url = "";
  const [state, setState] = useState(null);
  const handleChange = (event) => {
    // console.log(event.target.files[0])
    // Update the document title using the browser API
    setState(event.target.files[0]);
  };
  const submitForm = async (event) => {
    event.preventDefault();
    await sendProfileImage(state);
    window.location.reload(true)
  }
  url = "https://kwitter-api.herokuapp.com/users/"+username+"/picture"
  // console.log(url)
  return (
    <>
      <Card style={{width: 18+"rem", }}>
        <img
          className="card-img-top"
          alt="The User"
          src={url}
          style={{ width: 200 + "px", margin: 0+" auto" }}
        />
        {/* <Card.Body>About info:</Card.Body> */}
        {/* card can be used as above with Card.whatever or as below with className="card-whatever" */}
        <div className="card-footer">
          <form onSubmit={submitForm}>
            <div className="input-group mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01 picture"
                accept="image/*"
                onChange={handleChange}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
            {/* <input type="file" name="picture" id="picture" accept='image/*' onChange={handleChange}/> */}
            <Button
              type="button submit"
              className="btn btn-primary btn-sm btn-block"
            >
              Upload your Profile Picture
            </Button>
          </form>
        </div>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Card>
    </>
  );
};

ProfileImage.propTypes = {
  sendProfileImage: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  photo: ProptTypes.string,
};
