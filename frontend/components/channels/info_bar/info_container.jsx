import {fetchChannel} from "../../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../../actions/session_actions";
import {openModal} from '../../../actions/modal_actions'; 
import Info from './info'; 


const mSTP = (state, ownProps) =>  { 
    return { 
        channel: state.entities.channels[ownProps.match.params.channelId] || {}, 
        user: state.entities.users[state.session.id]
    }
    
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction()),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)), 
    openModal: () => dispatch(openModal('edit'))
})

export default connect(mSTP, mDTP)(Info); 

