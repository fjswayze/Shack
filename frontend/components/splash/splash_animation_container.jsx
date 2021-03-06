import { connect } from "react-redux";
import { loginAction } from "../../actions/session_actions"; 
import { fetchChannel } from "../../actions/channel_actions";
import SplashAnimation from './splash_animation'; 
import {withRouter} from 'react-router'; 

const mSTP = state => ({
    user: {
        email: '',
        password: ''
    }
})

const mDTP = dispatch => ({
    action: (user) => dispatch(loginAction(user)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(SplashAnimation)); 
