// import { REGISTER_FAIL, REGISTER_SUCCESS, SUCCESS_MESSAGE_CLEAR, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, LOGOUT_SUCCESS } from  "../types/authType"
// import deCodeToken from  "jwt-decode"
import {CREATE_COURSE_SUCCESS, REGISTER_SUCCESS} from "../types/adminTypes";
import deCodeToken from  "jwt-decode"

const authState = {
    authenticate : false,
    isAdmin: false,
    myInfo: ""
}

const tokenDecode = (token) => {
    const tokenDecoded = deCodeToken(token)
    const expTime = new Date(tokenDecode.exp*1000)
    if(new Date()>expTime) {
        return null
    }
    return tokenDecoded
}

const getToken = localStorage.getItem("authTokenBuild")

if(getToken) {
    const getInfo = tokenDecode(getToken)
    if(getInfo) {
        authState.myInfo = getInfo
        authState.authenticate = true
    }
}

export const authReducer = (state = authState, action) => {
    const {payload, type} = action
    
    if(type === REGISTER_SUCCESS) {
        const myInfo = tokenDecode(payload.token)
        return {
            ...state,
            isAdmin: payload.isAdmin,
            myInfo: myInfo,
            authenticate: true,
        }
    }

    return state
}