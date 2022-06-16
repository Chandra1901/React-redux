import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUserRequest = () => {

    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}


export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


// this function doesn't have to be pure  it is allowed to have the sideEffects such as Async API Calls

export const fetchUsers = () => {

  return (dispatch) => {
    dispatch(fetchUserRequest)   
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
        const errMsg = error.message
        dispatch(fetchUsersFailure(errMsg))
    })
  }
}

