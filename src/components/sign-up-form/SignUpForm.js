import React, { useState } from 'react'
import {Loader} from '../loader'
import ProptTypes from 'prop-types'
// import  Form  from 'react-bootstrap/Form'
// import  Button  from 'react-bootstrap/Button'


export const SignUpForm = ({signUp, loading, error}) => {

    const [state, setState] = useState({
        username:'',
        displayName: '',
        password: ''
    })

    const handleCreate = (event) => {
        event.preventDefault()
        console.log(event.currentTarget)
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

 

  // <Form onSubmit={handleCreate}>
  //         <Form.Group controlId="formBasicEmail">
  //           <Form.Label>Username</Form.Label>
  //           <Form.Control type="text" placeholder="Enter username" />
  //           <Form.Text className="text-muted">
  //             Make it YOU-nique!
  //           </Form.Text>
  //         </Form.Group>

  //         <Form.Group controlId="formBasicPassword">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control type="password" placeholder="Password" />
  //         </Form.Group>
  //         <Form.Group controlId="exampleForm.ControlTextarea1">
  //           <Form.Label>Display Name</Form.Label>
  //           <Form.Control type="text" placeholder='DisplayName'  />
  //         </Form.Group>
  //         <Button variant="primary" type="submit">
  //           Submit
  //         </Button>
  //     </Form>  