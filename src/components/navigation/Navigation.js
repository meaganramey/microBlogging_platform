import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen, DeleteUserScreen } from "../../screens";
import {MessageScreen} from '../../screens/Messages'
import {SignUpScreen} from '../../screens/SignUpScreen'
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
// import { SignUpFormContainer } from '../sign-up-form'
import { ListOfUsersContainer } from '../list-of-users'
// import { DeleteUserContainer} from '../delete-user'


export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        path='/signup'
        component={SignUpScreen}
      />
      <ConnectedRoute
        exact path = '/messagefeed'
        component = {MessageScreen}
      />
      <ConnectedRoute 
        exact path ='/delete'
        component={DeleteUserScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
