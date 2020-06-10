import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen } from "../../screens";
import {MessageScreen} from '../../screens/Messages'
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { SignUpFormContainer } from '../sign-up-form'
import { ListOfUsersContainer } from '../list-of-users'

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
        component={SignUpFormContainer}
      />
      <ConnectedRoute
<<<<<<< HEAD
      exact
      path='/listofusers'
      component={ListOfUsersContainer}
    />
=======
        exact path = '/messagefeed'
        component = {MessageScreen}
      />
>>>>>>> d73e4fe792b4327a5e180f79aacf6637e3e20f71
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
