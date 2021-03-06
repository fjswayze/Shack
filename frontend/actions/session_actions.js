import { createDispatchHook } from 'react-redux';
import * as SessionApiUtil from '../util/session_api_util'; 
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors 
})
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})



export const loginAction = (formUser) => dispatch => {
    return (
        SessionApiUtil.login(formUser)
            .then(
                (user) => dispatch(receiveCurrentUser(user)),
                (res) => dispatch(receiveErrors(res.responseJSON)),
    ))
}

export const logoutAction = () => dispatch => {

 return(  SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);}

export const signupAction = (user) => dispatch => {
    
    return(
    SessionApiUtil.signup(user)
        .then(
        (user) => dispatch(receiveCurrentUser(user)),
        (res) => dispatch(receiveErrors(res.responseJSON))
               ));
}