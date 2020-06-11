import React from 'react'
import { MenuContainer } from '../components'
import { SignUpFormContainer } from '../components/sign-up-form/index'
import { Link } from 'react-router-dom'

export const SignUpScreen = () => (
    <>
        <MenuContainer />
        <SignUpFormContainer />
        <h6>Return <Link to='/'>home.</Link> </h6>
    </>
)