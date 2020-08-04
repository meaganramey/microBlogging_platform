import React, { useState } from "react";
import { Loader } from "../loader";
import ProptTypes from "prop-types";
import "./CreateMessage.css";
import { Card, Form, Button } from "react-bootstrap";

export const NewMessageForm = ({ newMessage, loading, error }) => {
  const [state, setState] = useState({
    text: "",
  });

  const handleCreate = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    newMessage(state);
    window.location.reload(true);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <>
      <Card>
        <Form id="new-message-form" onSubmit={handleCreate}>
          <Form.Label htmlFor="text">Enter message</Form.Label>
          <Form.Control
            type="text"
            name="text"
            value={state.text}
            autoFocus
            required
            onChange={handleChange}
          />
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Card>
    </>
  );
};

NewMessageForm.propTypes = {
  newMessage: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
