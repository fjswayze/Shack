import {RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE} from '../actions/messages_actions'; 


const MessagesReducer = (state = {}, action) => {
    
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign(newState, action.message); 
        case RECEIVE_MESSAGES:
            return action.messages; 
        case REMOVE_MESSAGE:
            delete newState[action.messageId];
            return newState; 
        default:
            return state;
    }
}

export default MessagesReducer; 