import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../actions/channel_actions'; 

const ChannelReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CHANNELS: 
            return action.channels; 
        case RECEIVE_CHANNEL:
            return Object.assign(newState, {[action.channel.id]: action.channel}); 
        case REMOVE_CHANNEL:
            delete newState[action.channelId]; 
            return newState;
        default:
            return state;
    }
}

export default ChannelReducer; 