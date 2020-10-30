import {RECEIVE_CURRENT_USER} from '../actions/session_actions'; 
import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions'; 
import {RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP} from '../actions/channel_membership_actions'; 
import {RECEIVE_CHANNEL} from '../actions/channel_actions'
import {RECEIVE_USERS_DIRECT_MESSAGES} from '../actions/direct_message_actions'; 

const UsersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_USER: 
            return Object.assign(newState, {[action.user.id]: action.user}); 
        case RECEIVE_CHANNEL_MEMBERSHIP: 
            
            newState[action.channelMembership.user_id].channel_ids.push(action.channelMembership.channel_id)
            return newState;
        case REMOVE_CHANNEL_MEMBERSHIP: 
            let selectedArray = newState[action.channelMembership.userId].channel_ids.filter(channelId => channelId != action.channelMembership.channelId); 
            newState[action.channelMembership.userId].channel_ids = selectedArray; 
            return newState; 
        case RECEIVE_USERS_DIRECT_MESSAGES:
            let dmsArray = Object.keys(action.directMessages);
            let userId = action.userId; 
            newState[userId].direct_messages_ids = dmsArray.map(dm => {
                return parseInt(dm)
            }); 
            return newState; 
        case RECEIVE_CHANNEL:
            if(newState[action.channel.admin_id]){if(!newState[action.channel.admin_id].channel_ids.includes(action.channel.id)){
                newState[action.channel.admin_id].channel_ids.push(action.channel.id)
            }
        }
            return newState; 
        case RECEIVE_USERS:
            
            let newUsers = Object.values(action.users).filter(user => !newState[user.id])
            for(let i = 0; i < newUsers.length; i++){
                Object.assign(newState, {[newUsers[i].id]: newUsers[i]}); 
            }
            return newState
        case RECEIVE_CURRENT_USER:
        return Object.assign(newState, {[action.currentUser.id]: action.currentUser}); 
        default:
            return state;
    }
}

export default UsersReducer; 