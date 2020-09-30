import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import {fetchUsers} from '../actions/user_actions'; 
import Modal from './modal';
import { fetchChannel } from '../actions/channel_actions';

const mSTP = (state, ownProps) => ({
    modal: state.ui.modal,
    channel: state.entities.channels[ownProps.match.params.channelId] || {}, 
})

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        fetchUsers: () => dispatch(fetchUsers()),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId))

    }
}

export default connect(mSTP, mDTP)(Modal); 