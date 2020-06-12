import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { ProfileImageContainer, DeleteUserContainer, GetUserInfoContainer } from "../index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProfileContainer } from ".";

export const Profile = ({ loading, error, user }) => {
  console.log(user)
  return (
    <>
      <Card>
        <ProfileImageContainer />
        <GetUserInfoContainer />
        <DeleteUserContainer />
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
