import {combineReducers} from 'redux'; 
import UsersReducer from './users_reducer'; 
import ChannelReducer from './channels_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    channels: ChannelReducer
})

export default EntitiesReducer; 