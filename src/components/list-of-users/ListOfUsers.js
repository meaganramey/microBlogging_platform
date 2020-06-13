import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";

export const DisplayListOfUsers = ({ listOfUsers, loading, error, users }) => {
  useEffect(() => {
    // Update the document title using the browser API
    listOfUsers();
  }, []);

  return (
    <>
      <section className="listOfUsers">
        <h1>People you may know:</h1>
        <div className="unorderedListOfUsers">
          {users.map((user) => {
            return (
              <React.Fragment>
                <Card style={{ width: 18 + "rem", textAlign: "center"}}>
                  <img
                    className="card-img-top rounded zoom img-fluid"
                    alt={"This user has not set a Profile Picture."}
                    src={
                      "https://kwitter-api.herokuapp.com/users/" +
                      user.username +
                      "/picture"
                    }
                    style={{
                      width: 200 + "px",
                      minHeight: 20 + "px",
                      margin: 0 + " auto",
                    }}
                  />
                  <div key={user.username} className="card-body">
                    <Link to={"/profiles/" + user.username} className="btn btn-secondary">
                      {/* {user.displayName} */}
                      <h2 className="card-title">{user.displayName}</h2>
                    </Link>
                    <h6 className="card-text list-group-item">Username: {user.username}</h6>
                    <p className="card-text">
                      About {user.displayName} :{" "}
                      {user.about ||
                        user.displayName +
                          " is still thinking about this part..."}
                    </p>
                    <p className='card-footer'>Member since : {user.createdAt}</p>
                  </div>
                </Card>
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
