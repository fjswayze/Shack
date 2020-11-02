import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import {fetchUsers} from '../../actions/user_actions'; 
import Modal from './modal';
import { fetchChannel } from '../../actions/channel_actions';
import {createChannelMembership, deleteChannelMembership} from '../../actions/channel_membership_actions';
import {createDirectMessage} from '../../actions/direct_message_actions'
import {createDMMembership} from '../../actions/dm_membership_actions'; 

const mSTP = (state, ownProps) => ({
    modal: state.ui.modal,
    users: state.entities.users || {}, 
    user: state.entities.users[state.session.id], 
    channel: state.entities.channels[ownProps.match.params.channelId] || {}, 
})

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        fetchUsers: () => dispatch(fetchUsers()),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        openAddModal: () => dispatch(openModal('users index')),
        deleteChannelMembership: (channelId, userId) => dispatch(deleteChannelMembership(channelId, userId)),
        createChannelMembership: (channelMembership) => dispatch(createChannelMembership(channelMembership)),
        createDirectMessage: (directMessage) => dispatch(createDirectMessage(directMessage)),
        createDMMembership: (dmId, userId) => dispatch(createDMMembership(dmId, userId))
    }
}

export default connect(mSTP, mDTP)(Modal); 