import { RECEIVE_DIRECT_MESSAGE, RECEIVE_DIRECT_MESSAGES, REMOVE_DIRECT_MESSAGE, RECEIVE_USERS_DIRECT_MESSAGES} from '../actions/direct_message_actions'; 


const DMReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_DIRECT_MESSAGES: 
            debugger
            return action.directMessages; 
        case RECEIVE_USERS_DIRECT_MESSAGES:
            debugger
            return action.directMessages; 
        case RECEIVE_DIRECT_MESSAGE:
            return Object.assign(newState, {[directMessage.id]: action.directMessage}); 
        case REMOVE_DIRECT_MESSAGE:
            delete newState[action.directMessageId]; 
            return newState;
        default:
            return state;
    }
}

export default DMReducer; 