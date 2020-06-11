import React from "react";
import { LoginFormContainer, MenuContainer, } from "../components";
import { Link } from 'react-router-dom'



export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    {/* <SignUpFormContainer /> */}
    <h5>New user? Sign up <Link to="/signup">here.</Link></h5>
  </>
);
