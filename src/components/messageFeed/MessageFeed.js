import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {Card} from 'react-bootstrap'

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
          {messages.map((message) => {
            return (
              <React.Fragment key={uuidv4()}>
                <Card className="otherUsers bg-light">
                  <Card.Img
                    className="card-img-top rounded"
                    alt={"The User"}
                    src={
                      "https://kwitter-api.herokuapp.com/users/" +
                      message.username +
                      "/picture"
                    }
                    style={{
                      width: 100 + "px",
                      minHeight: 50 + "px",
                      margin: 0 + " auto",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImage;
                    }}
                  />
                  <Card.Body>
                  <Card.Text className="text-secondary">From: {message.username}</Card.Text>
                  <Card.Text className="text-secondary">Posted at: {since(message.createdAt)}</Card.Text>
                  <Card.Text className="text-dark">{message.text}</Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
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
