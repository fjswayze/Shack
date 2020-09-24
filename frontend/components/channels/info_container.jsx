import {fetchUserChannels} from "../../actions/channel_actions"; 
import { connect } from 'react-redux'; 
import { logoutAction } from "../../actions/session_actions";
import Info from './info'; 


const mSTP = (state, ownProps) =>  {
    debugger
    return { 
        user: state.entities.users[state.session.id]
    }
    
}

const mDTP = dispatch => ({
    fetchUserChannels: userId => dispatch(fetchUserChannels(userId)),
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(Info); 

