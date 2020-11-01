import { connect } from 'react-redux';
import {fetchDirectMessage} from '../../../actions/direct_message_actions'; 
import {fetchDMUsers} from '../../../actions/user_actions'; 
import { fetchDMMessages, receiveMessage, deleteMessage, updateMessage } from '../../../actions/messages_actions';
import { createDMMembership } from '../../../actions/dm_membership_actions';

import ChatRoom from './ChatRoom.jsx';

const mSTP = (state, ownProps) => {
    
    return {
        pageType: 'DM', 
        pageId: ownProps.match.params.channelId || ownProps.match.params.dmId,
        page: state.entities.dms[ownProps.match.params.dmId],
        user: state.entities.users[state.session.id],
        users: state.entities.users,
        messages: Object.values(state.entities.messages) || [1, 2]
    }
}

const mDTP = (dispatch) => ({
    fetchPage: (dmId) => dispatch(fetchDirectMessage(dmId)),
    fetchPageUsers: (dmId) => dispatch(fetchDMUsers(dmId)),
    fetchPageMessages: dmId => dispatch(fetchDMMessages(dmId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    createPageMembership: data => dispatch(createDMMembership(data)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    updateMessage: message => dispatch(updateMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom); 
