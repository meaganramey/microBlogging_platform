import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const ProfileImage = ({
  sendProfileImage,
  loading,
  error,
  photo,
  // username,
  loggedInUser,
  // redirect,
}) => {
  let username = useParams();
  let url = "";
  const [state, setState] = useState(null);
  let [redirect, redirectSetState] = useState(false);
  const handleChange = (event) => {
    // console.log(event.target.files[0])
    // Update the document title using the browser API
    setState(event.target.files[0]);
  };
  const submitForm = async (event) => {
    event.preventDefault();
    await sendProfileImage(state);
    window.location.reload(true);
  };
  url =
    "https://kwitter-api.herokuapp.com/users/" + username.username + "/picture";
  // console.log(url)
  const redirectToUpdateUserPage = (event) => {
    event.preventDefault();
    redirectSetState((redirect = !redirect));
  };
  let defaultImage = require("../../images/default.png");
  return (
    <>
      <Card style={{ width: 18 + "rem" }}>
        <img
          className="card-img-top rounded"
          alt={url ? "The User" : "This user has not set a Profile Picture."}
          src={url}
          style={{
            width: 300 + "px",
            minHeight: 200 + "px",
            margin: 0 + " auto",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
        {/* <Card.Body>About info:</Card.Body> */}
        {/* card can be used as above with Card.whatever or as below with className="card-whatever" */}
        {loggedInUser === username.username && (
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
            <Button
              className="btn btn-primary btn-sm btn-block"
              onClick={redirectToUpdateUserPage}
            >
              {" "}
              Update Your Profile
            </Button>
          </div>
        )}
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {redirect && <Redirect key={uuidv4()} push to="/updateInformation" />}
      </Card>
    </>
  );
};

ProfileImage.propTypes = {
  sendProfileImage: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  photo: ProptTypes.string,
  // redirect: ProptTypes.bool,
};
