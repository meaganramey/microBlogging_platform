import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const DisplayListOfMessages = ({
  listOfMessages,
  loading,
  error,
  messages,
}) => {
  useEffect(() => {
    // Update the document title using the browser API
    listOfMessages();
  }, [listOfMessages]);
  let defaultImage = require("../../images/default.png");
  let moment = require("moment")
  const since = (date) => {
    return moment(date).fromNow()
  }
  return (
    <>
      <section className="listOfMessages">
        {/* <h1>This is where the list of messages would be:</h1> */}
        <ul className="unorderedListOfMessages">
          {messages.map((message) => {
            return (
              <React.Fragment key={uuidv4()}>
                <div className="otherUsers">
                  <img
                    className="card-img-top rounded"
                    alt={"The User"}
                    src={
                      "https://kwitter-api.herokuapp.com/users/" +
                      message.username +
                      "/picture"
                    }
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
                  <p>From: {message.username}</p>
                  <p>Posted at: {since(message.createdAt)}</p>
                  <p>{message.text}</p>
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

DisplayListOfMessages.propTypes = {
  listOfMessages: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
