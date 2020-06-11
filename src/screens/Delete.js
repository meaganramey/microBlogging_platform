import React from "react";
import { MenuContainer } from "../components";
import { DeleteUserContainer } from '../components/delete-user/index'


export const DeleteUserScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <DeleteUserContainer />
  </>
);