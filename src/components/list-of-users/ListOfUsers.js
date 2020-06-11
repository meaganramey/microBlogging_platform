import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
// import { listOfUsersReducer } from "../../redux/reducers/listOfUsers";
// import UserCard from './UserCard'

export const DisplayListOfUsers = ({
  listOfUsers,
  loading,
  error,
  users,
}) => {
  useEffect(() => {
    // Update the document title using the browser API
    listOfUsers();
  }, []);

  return (
    <>
      <section className="listOfUsers">
        <h1>This is where the list of users would be:</h1>
        <div className="unorderedListOfUsers">
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
                      {/* {() => {
                        let now = new Date();
                        let joined = user.createdAt;
                        let result = now - joined;
                        return result;
                      }} */}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
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
