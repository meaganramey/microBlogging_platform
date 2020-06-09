import React, { useState } from 'react'
import {Loader} from '../loader'
import ProptTypes from 'prop-types'


export const SignUpForm = ({signUp, loading, error}) => {

    const [state, setState] = useState({
        username:'',
        displayName: '',
        password: ''
    })

    const handleCreate = (event) => {
        event.preventDefault()
        console.log(state)
        signUp(state)
    }

    const handleChange =(event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({...prevState, [inputName]: inputValue}))
    }

    return(
        <>
            <form id="signup-form" onSubmit={handleCreate}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <label htmlFor='dislayName'>DisplayName</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
        Sign Up
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
        </>
    )
}

SignUpForm.propTypes = {
    signUp: ProptTypes.func.isRequired,
    loading: ProptTypes.bool,
    error: ProptTypes.string,
  };