import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen } from "../../screens";
import {MessageScreen} from '../../screens/Messages'
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { SignUpFormContainer } from '../sign-up-form'

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
        exact path = '/messagefeed'
        component = {MessageScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
