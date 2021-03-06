import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from './users';
import { listOfUsersReducer } from './listOfUsers';
import { listOfMessagesReducer } from './messages'
import { deleteUserReducer } from './deleteUser'
import { addProfileImageReducer } from './profile-image'
import { createMessageReducer } from "./createMessage";
import { getUserInfoReducer } from './getUserInfo'
import { updateUserInfoReducer } from './updateUserInfo'

export default combineReducers({ 
    auth: authReducer, 
    users: userReducer, 
    listOfUsers: listOfUsersReducer, 
    deleteUser: deleteUserReducer,
    addProfileImage: addProfileImageReducer,
    listOfMessages: listOfMessagesReducer,
    createMessage: createMessageReducer,
    getUserInfo: getUserInfoReducer,
    updateUserInfo: updateUserInfoReducer,
});
