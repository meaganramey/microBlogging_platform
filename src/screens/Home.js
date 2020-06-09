import React from "react";
import { LoginFormContainer, MenuContainer, } from "../components";
import { SignUpFormContainer } from "../components/sign-up-form";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <SignUpFormContainer />
  </>
);
