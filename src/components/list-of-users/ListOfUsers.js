import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import array from "lodash/array";

export const DisplayListOfUsers = ({ listOfUsers, loading, error, users }) => {
  useEffect(() => {
    // Update the document title using the browser API
    listOfUsers();
  }, [listOfUsers]);
  let defaultImage = require("../../images/default.png");
  let moment = require("moment");
  const memberSince = (createdAt) => {
    // console.log(moment(createdAt).fromNow())
    return moment(createdAt).fromNow();
  };
  let chunkedUsers = array.chunk(users, 4);
  return (
    <>
      <section className="listOfUsers">
        <h1>People you may know:</h1>
        <div className="unorderedListOfUsers">
          {chunkedUsers.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="row">
                {row.map((user, colIndex) => {
                  return (
                    <div key={colIndex} className="col-sm">
                      <Card style={{ width: 18 + "rem", textAlign: "center" }}>
                        <img
                          className="card-img-top rounded zoom img-fluid"
                          alt={"User"}
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
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                          }}
                        />
                        <div key={user.username} className="card-body">
                          <Link
                            to={"/profiles/" + user.username}
                            className="btn btn-secondary"
                          >
                            {/* {user.displayName} */}
                            <h2 className="card-title">{user.displayName}</h2>
                          </Link>
                          <h6 className="card-text list-group-item">
                            Username: {user.username}
                          </h6>
                          <p className="card-text">
                            About {user.displayName} :{" "}
                            {user.about ||
                              user.displayName +
                                " is still thinking about this part..."}
                          </p>
                          <p className="card-footer">
                            Member since : {memberSince(user.createdAt)}
                          </p>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* {users.map((user) => {
            return (
              <React.Fragment key={uuidv4()}>
                <Card style={{ width: 18 + "rem", textAlign: "center"}}>
                  <img
                    className="card-img-top rounded zoom img-fluid"
                    alt={"User"}
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
                    onError={(e) => {e.target.onerror=null; e.target.src=defaultImage}}
                  />
                  <div key={user.username} className="card-body">
                    <Link to={"/profiles/" + user.username} className="btn btn-secondary">
                      {/* {user.displayName} */}
          {/* <h2 className="card-title">{user.displayName}</h2>
                    </Link>
                    <h6 className="card-text list-group-item">Username: {user.username}</h6>
                    <p className="card-text">
                      About {user.displayName} :{" "}
                      {user.about ||
                        user.displayName +
                          " is still thinking about this part..."}
                    </p>
                    <p className='card-footer'>
                      Member since : {memberSince(user.createdAt)}
                      </p>
                  </div>
                </Card>
              </React.Fragment> */}
          ); })} */}
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
