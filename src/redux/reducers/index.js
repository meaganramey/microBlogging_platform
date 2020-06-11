import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from './users';
import { listOfUsersReducer } from './listOfUsers';
import { deleteUserReducer } from './deleteUser'
import { addProfileImageReducer } from './profile-image'

export default combineReducers({ 
    auth: authReducer, 
    users: userReducer, 
    listOfUsers: listOfUsersReducer, 
    deleteUser: deleteUserReducer,
    addProfileImage: addProfileImageReducer,
});