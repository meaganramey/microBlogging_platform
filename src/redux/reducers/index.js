import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from './users';
import { listOfUsersReducer } from './listOfUsers';
import { listOfMessagesReducer } from './messages'

export default combineReducers({ auth: authReducer, users: userReducer, listOfUsers: listOfUsersReducer, listOfMessages: listOfMessagesReducer });
