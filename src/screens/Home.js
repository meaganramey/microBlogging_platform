import React from "react";
import { LoginFormContainer, MenuContainer, } from "../components";
import { SignUpFormContainer } from "../components/sign-up-form";
import Spinner from 'react-bootstrap/Spinner'

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <SignUpFormContainer />
    {/* <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> */}
  </>
);
