import React from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { ProfileImageContainer, DeleteUserContainer, GetUserInfoContainer } from "../index";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom'

export const Profile = ({ loading, error, loggedInUser,  }) => {
  let username = useParams()
  // console.log(user, username)
  return (
    <>
      <Card>
        <ProfileImageContainer />
        <GetUserInfoContainer />
        {username.username === loggedInUser &&
          <DeleteUserContainer /> }
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Card>
    </>
  );
};

Profile.propTypes = {
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
