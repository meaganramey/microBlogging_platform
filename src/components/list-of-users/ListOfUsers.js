import React, { useState, useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";

export const DisplayListOfUsers = ({
  listOfUsers,
  loading,
  error,
  users,
}) => {
  
  useEffect(() => {
    console.log('hello')
    // Update the document title using the browser API
    listOfUsers();
    // setState(displayUsers);
    // console.log(state);
    // console.log("listOfUsers is this:", displayUsers);
  }, []);

  return (
    <>
      <section className="listOfUsers">
        <h1>This is where the list of users would be:</h1>
        <ul className="unorderedListOfUsers">
          {users.map((user) => {
              return (
                <React.Fragment>
                  <div key={user.username} className="otherUsers">
                    <h2>{user.displayName}</h2>
                    <h4>{user.username}</h4>
                    <p>
                      About {user.displayName} : {user.about}
                    </p>
                    <p>
                      Member since : {user.createdAt}                  
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
        </ul>
      </section>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

DisplayListOfUsers.propTypes = {
  listOfUsers: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  displayUsers: ProptTypes.object,
};
