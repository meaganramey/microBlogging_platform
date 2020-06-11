import React from "react";
import { MenuContainer } from "../components";
import { ListOfUsersContainer } from '../components/list-of-users'
import { ProfileImageContainer } from '../components/profile-image'

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <ProfileImageContainer />
    <ListOfUsersContainer />
    <h2>Profile</h2>
  </>
);
