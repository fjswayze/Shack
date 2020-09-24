import { fetchChannel, fetchUserChannels} from "../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../actions/session_actions";
import Info from './info'; 

const mSTP = (state, ownProps) =>  {
    return { 
        user: state.entities.users[state.session.id],
        channel: state.entities.channels
    }
    
}

const mDTP = dispatch => ({
    fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(Info); 

