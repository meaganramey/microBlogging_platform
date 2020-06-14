import React, { useEffect } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid'

export const DisplayListOfMessages = ({
  listOfMessages,
  loading,
  error,
  messages  
}) => {
  useEffect(() => {
    // Update the document title using the browser API
    listOfMessages();   
  }, [listOfMessages]);

  return (
    <>
      <section className="listOfMessages">
        {/* <h1>This is where the list of messages would be:</h1> */}
        <ul className="unorderedListOfMessages">          
          {messages.map((message) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <div className="otherUsers">                    
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
