import {fetchChannel} from "../../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../../actions/session_actions";
import Info from './info'; 
import { deleteChannel } from '../../../actions/channel_actions'; 
import { openModal } from '../../../actions/modal_actions'; 
import {withRouter} from 'react-router-dom'


const mSTP = (state, ownProps) =>  { 
    return { 
        channel: state.entities.channels[ownProps.match.params.channelId] || {}, 
        user: state.entities.users[state.session.id], 
    }
    
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction()),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)), 
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    openAddModal: () => dispatch(openModal('users index')), 
    openUsersModal: () => dispatch(openModal('channel members')),
    openEditModal: () => dispatch(openModal('edit channel'))
})

export default withRouter(connect(mSTP, mDTP)(Info)); 

