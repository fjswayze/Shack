import {combineReducers} from 'redux'; 
import UsersReducer from './users_reducer'; 
import ChannelReducer from './channels_reducer'
import ChannelMembershipReducer  from './channel_memberships_reducer'; 
import MessagesReducer from './messages_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    channels: ChannelReducer,
    channelMemberships: ChannelMembershipReducer,
    messages: MessagesReducer
})

export default EntitiesReducer; 