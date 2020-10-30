import {combineReducers} from 'redux'; 
import UsersReducer from './users_reducer'; 
import ChannelReducer from './channels_reducer'
import ChannelMembershipReducer  from './channel_memberships_reducer'; 
import MessagesReducer from './messages_reducer';
import DMReducer from './direct_messages_reducer';
import DMMembershipsReducer from './dm_memberships_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    channels: ChannelReducer,
    channelMemberships: ChannelMembershipReducer,
    dms: DMReducer,
    dmMemberships: DMMembershipsReducer, 
    messages: MessagesReducer
})

export default EntitiesReducer; 