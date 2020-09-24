import {fetchChannel} from "../../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../../actions/session_actions";
import Info from './info'; 


const mSTP = (state, ownProps) =>  {
    debugger
    return { 
        channel: state.entities.channels[ownProps.match.params.channelId] || {}, 
        user: state.entities.users[state.session.id]
    }
    
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction()),
    fetchChannel: () => channelId => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(Info); 

