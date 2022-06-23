import { REGISTER_SUCCESS, LOGOUT_SUCCESS, USER_LOGIN_SUCCESS} from "../types/adminTypes";
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
    
    if(type === REGISTER_SUCCESS || type === USER_LOGIN_SUCCESS) {
        const myInfo = tokenDecode(payload.token)
        return {
            ...state,
            isAdmin: payload.isAdmin,
            myInfo: myInfo,
            authenticate: true,
        }
    }

    if(type === LOGOUT_SUCCESS) {
        return {
            ...state,
            authenticate : false,
            myInfo: ""
        }
    }

    return state
}