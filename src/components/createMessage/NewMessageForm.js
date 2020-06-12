import React, { useState } from 'react';
import {Loader} from '../loader';
import ProptTypes from 'prop-types';
import './CreateMessage.css';

export const NewMessageForm = ({newMessage, loading, error}) => {

    const [state, setState] = useState({
        text:'',
    })

    const handleCreate = (event) => {
        event.preventDefault()
        console.log(event.currentTarget)        
        newMessage(state)
    }

    const handleChange =(event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({...prevState, [inputName]: inputValue}))
    }

    return(
        <>
        <form id="new-message-form" onSubmit={handleCreate}>
      <label htmlFor="text">Enter message</label>
      <input
       type="text"
       name="text"
       value={state.text}
       autoFocus
       required
       onChange={handleChange}
     />
     <button type="submit" disabled={loading}>
     Submit
     </button>
   </form>
   {loading && <Loader />}
   {error && <p style={{ color: "red" }}>{error.message}</p>}
     </>
    )
}

NewMessageForm.propTypes = {
    newMessage: ProptTypes.func.isRequired,
    loading: ProptTypes.bool,
    error: ProptTypes.string,
  };

 

