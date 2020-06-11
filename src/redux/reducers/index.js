import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from './users';
import { listOfUsersReducer } from './listOfUsers';
import { addProfileImageReducer } from './profile-image'

export default combineReducers({ 
    auth: authReducer, 
    users: userReducer, 
    listOfUsers: listOfUsersReducer, 
    addProfileImage: addProfileImageReducer,
});
