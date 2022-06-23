// import { REGISTER_FAIL, REGISTER_SUCCESS, SUCCESS_MESSAGE_CLEAR, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, LOGOUT_SUCCESS } from  "../types/authType"
// import deCodeToken from  "jwt-decode"
import {CREATE_COURSE_SUCCESS, REGISTER_SUCCESS} from "../types/adminTypes";

const authState = {
    authenticate : false,
    isAdmin: false,
    error: "",
    successMessage: "",
    myInfo: ""
}

export const authReducer = (state = authState, action) => {
    const {payload, type} = action
    
    if(type === REGISTER_SUCCESS) {
        return {
            ...state,
            isAdmin: payload.isAdmin
        }
    }

    return state
}