import { combineReducers } from "redux";
import authReducer from "./auth.js";
import currentUserReducer from "./currentUser.js";
import questionReducer from "./question.js";
import userReducer from "./users.js";

export default combineReducers({
    authReducer ,currentUserReducer,questionReducer,userReducer
})