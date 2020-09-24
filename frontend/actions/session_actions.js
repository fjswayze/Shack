import { fetchChannel} from '../util/channel_api_util';
import * as SessionApiUtil from '../util/session_api_util'; 
import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 

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

export const loginAction = (formUser) => dispatch => {
    return (
        SessionApiUtil.login(formUser)
            .then(
                (user) => dispatch(receiveCurrentUser(user)),
                (res) => dispatch(receiveErrors(res.responseJSON)),
                (user) => fetchChannel(user.channel_ids[0])
            )
    ); 
}

export const logoutAction = () => dispatch => {

 return(  SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);}

export const signupAction = (user) => dispatch => {
    
    return(
    SessionApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            (res) => dispatch(receiveErrors(res.responseJSON))
                ));
}