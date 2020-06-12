import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { HomeScreen, ProfileScreen, NotFoundScreen, DeleteUserScreen, MessageScreen, SignUpScreen, ListOfUsersScreen } from "../../screens";
// import { SignUpFormContainer } from '../sign-up-form'
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
      exact
      path='/listofusers'
      component={ListOfUsersScreen}
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
