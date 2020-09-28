import { connect } from 'react-redux';
import { logoutAction } from "../../../actions/session_actions";
import {deleteChannel} from '../../../actions/channel_actions'; 
import InfoClickDropdown from './info_click_dropdown'; 

const mSTP = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }

}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction()),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mSTP, mDTP)(InfoClickDropdown); 