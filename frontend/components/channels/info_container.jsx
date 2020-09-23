import { fetchChannel, updateChannel } from "../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../actions/session_actions";
import Info from './info'; 

const mSTP = (state) =>  {
    return {
        channel: state.channels
    }
    
}

const mDTP = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    updateChannel: channel => dispatch(updateChannel(channel)), 
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(Info); 

