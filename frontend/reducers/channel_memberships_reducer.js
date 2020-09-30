import {RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP, RECEIVE_CHANNEL_MEMBERSHIPS} from '../actions/channel_membership_actions'; 

const ChannelMembershipsReducer = (state = {}, action) => { 
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    
    switch (action.type) {
        case RECEIVE_CHANNEL_MEMBERSHIP:
            return Object.assign(newState, action.channelMembership); 
        case REMOVE_CHANNEL_MEMBERSHIP:
            let array = Object.entries(newState); 
            let hash = {}
           for(let i = 0; i < array.length; i++){
               if(array[i][1].user_id != action.user_id && newState[i][1].action_id != action.channel_id) hash[array[i]] = array[i][1]; 
           }
            return hash; 
        case RECEIVE_CHANNEL_MEMBERSHIPS: 
           return action.channelMemberships; 
        default:
            return state;
    }
}

export default ChannelMembershipsReducer; 