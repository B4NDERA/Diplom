import axios from "axios"
import { CREATE_COURSE_SUCCESS, GET_FRIENDS, REGISTER_SUCCESS, LOGOUT_SUCCESS, USER_LOGIN_SUCCESS } from "../types/adminTypes"

export const userRegister = data => async(dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/register", data)
        localStorage.setItem("authTokenBuild", response.data.token)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: {
                isAdmin : response.data.isAdmin,
                token: response.data.token
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const userLogOut = () => async(dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/user-logout")
        if(response.data.success) {
            localStorage.removeItem("authTokenBuild")
            dispatch({
                type: LOGOUT_SUCCESS
            }) 
        }
    } catch (error) {
        
    }
} 

export const userLogin = (data) => {
    return async (dispatch) => {

        const config = { 
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await axios.post("http://localhost:5000/api/build-pc/user-login", data, config)

            localStorage.setItem("authTokenBuild", response.data.token)

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    token: response.data.token,
                    isAdmin: response.data.isAdmin
                }
            })
            
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export const createTeacher = async(data) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/create-teacher", data)
        console.log(response)
        // dispatch({
        //     type: MESSAGE_SEND_SUCCESS,
        //     payload: {
        //         message : response.data.message
        //     }
        // })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const createCourse = (data) => async(dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/create-course", data)
        console.log(response)
        dispatch({
            type: CREATE_COURSE_SUCCESS,
            payload: {
                course : response.data.course
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const createMailingList = async(data) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/create-mailings", data)
        console.log(response)
        // dispatch({
        //     type: CREATE_COURSE_SUCCESS,
        //     payload: {
        //         course : response.data.course
        //     }
        // })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const createFeedback = async(data) => {
    try {
        const response = await axios.post("http://localhost:5000/api/build-pc/create-feedbacks", data)
        console.log(response)
        // dispatch({
        //     type: CREATE_COURSE_SUCCESS,
        //     payload: {
        //         course : response.data.course
        //     }
        // })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const getTeachers = () => async(dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000/api/build-pc/get-teachers")
        dispatch({
            type: GET_FRIENDS,
            payload: {
                teachers : response.data.teachers
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
}

export const getCourse = () => async(dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000/api/build-pc/get-courses")
        dispatch({
            type: CREATE_COURSE_SUCCESS,
            payload: {
                courses : response.data.courses
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
}





