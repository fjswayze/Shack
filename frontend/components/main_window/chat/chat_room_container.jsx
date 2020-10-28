import {connect} from 'react-redux'; 
import {fetchChannel} from '../../../actions/channel_actions'; 
import {fetchChannelUsers} from '../../../actions/user_actions';
import {fetchChannelMessages, receiveMessage} from '../../../actions/messages_actions'; 
import ChatRoom from './ChatRoom.jsx'; 

const mSTP = (state, ownProps) => {
    return {
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[ownProps.match.params.channelId] || {},
    user: state.entities.users[state.session.id],
    users: state.entities.users, 
    messages: Object.values(state.entities.messages) || [1, 2]
    }
}

const mDTP = (dispatch) => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)), 
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)), 
    receiveMessage: message => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom); 
