import {RECEIVE_CURRENT_USER} from '../actions/session_actions'; 
import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions'; 
import {RECEIVE_CHANNEL_MEMBERSHIP} from '../actions/channel_membership_actions'; 

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_USER: 
            return Object.assign(newState, {[action.user.id]: action.user}); 
        case RECEIVE_CHANNEL_MEMBERSHIP: 
            
            return newState; 
        case RECEIVE_USERS:
            return newState; 
        case RECEIVE_CURRENT_USER:
        return Object.assign(newState, {[action.currentUser.id]: action.currentUser}); 
        default:
            return state;
    }
}

export default UsersReducer; 