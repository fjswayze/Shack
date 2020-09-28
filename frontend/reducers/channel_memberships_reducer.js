import {RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP} from '../actions/channel_membership_actions'; 

const ChannelMembershipsReducer = (state = {}, action) => { 
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_CHANNEL_MEMBERSHIP:
            return Object.assign(newState, action.channelMembership); 
        case REMOVE_CHANNEL_MEMBERSHIP:
            delete newState[action.channelMembershipId];
            return newState; 
        default:
            return state;
    }
}

export default ChannelMembershipsReducer; 