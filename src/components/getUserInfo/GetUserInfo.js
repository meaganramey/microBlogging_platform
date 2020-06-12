import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";

export const DisplayUserInfo = ({
  getUserInfoAction,
  loading,
  error,
  user,
}) => {
  useEffect(() => {
    // Update the document title using the browser API
    getUserInfoAction();
  }, []);
  return (
    <>
      <div>{user.displayName}</div>
      <div>My Username: 
        <em>  {user.username}</em>
      </div>
      <div>
        A little about {user.username} :
        <div>{user.about || "Will be filled out soon"}</div>
      </div>
      <div>Get ahold of me on google at: {user.googleId || "GoogleID not provided at this time."}</div>
      <div>
        User since : {user.updatedAt} some form of Math might be implemented
        here... someday lol
      </div>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

DisplayUserInfo.propTypes = {
  getUserInfoAction: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  // user: ProptTypes.object,
};
