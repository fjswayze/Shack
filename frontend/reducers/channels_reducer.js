import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../actions/channel_actions'; 
import {RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP} from '../actions/channel_membership_actions'; 
const ChannelReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CHANNELS: 
            return action.channels; 
        case RECEIVE_CHANNEL:
            return Object.assign(newState, {[action.channel.id]: action.channel}); 
        case RECEIVE_CHANNEL_MEMBERSHIP:
            return newState; 
        case REMOVE_CHANNEL_MEMBERSHIP: 
            debugger
            let editedArray = newState[action.channelMembership.channelId].user_ids.filter(user_id => user_id != action.channelMembership.userId)
            newState[action.channelMembership.channelId].user_ids = editedArray; 
            return newState; 
        case REMOVE_CHANNEL:
            delete newState[action.channelId]; 
            return newState;
        default:
            return state;
    }
}

export default ChannelReducer; 