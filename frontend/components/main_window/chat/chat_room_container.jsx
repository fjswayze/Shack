import {connect} from 'react-redux'; 
import {fetchChannel} from '../../../actions/channel_actions'; 
import {fetchChannelUsers} from '../../../actions/user_actions';
import {fetchChannelMessages, receiveMessage, deleteMessage, updateMessage} from '../../../actions/messages_actions'; 
import {createChannelMembership} from '../../../actions/channel_membership_actions'; 

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
    receiveMessage: message => dispatch(receiveMessage(message)), 
    createChannelMembership: data => dispatch(createChannelMembership(data)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    updateMessage: message => dispatch(updateMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom); 
