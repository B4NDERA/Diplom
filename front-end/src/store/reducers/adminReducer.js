import {CREATE_COURSE_SUCCESS, GET_FRIENDS, GET_COURSES } from "../types/adminTypes";

const adminState = {
    teachers: [],
    courses: [],
}


export const adminReducer = (state = adminState, action) => {
    const {payload, type} = action
    
    if(type === CREATE_COURSE_SUCCESS ) {
        return {
            ...state,
            courses: payload.courses,
        }
    }
    
    if(type === GET_FRIENDS ) {
        return {
            ...state,
            teachers: payload.teachers,
        }
    }

    return state
}