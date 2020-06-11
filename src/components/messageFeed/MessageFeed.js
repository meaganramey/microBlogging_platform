import React, { useState, useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";

export const DisplayListOfMessages = ({
  listOfMessages,
  loading,
  error,
  messages  
}) => {
  const [state, setState] = useState({});  
  useEffect(() => {
    // Update the document title using the browser API
    listOfMessages();   
  }, []);

  return (
    <>
      <section className="listOfMessages">
        <h1>This is where the list of messages would be:</h1>
        <ul className="unorderedListOfMessages">          
          {messages.map((message) => {
              return (
                <React.Fragment>
                  <div key={message.id} className="otherUsers">                    
                    <p>From: {message.username}</p>
                    <p>Posted at: {message.createdAt}</p>
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
