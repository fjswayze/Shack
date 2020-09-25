import { connect } from "react-redux";
import { loginAction } from "../../actions/session_actions"; 
import { fetchChannel } from "../../actions/channel_actions";
import SplashAnimation from './splash_animation'; 

const mSTP = state => ({
    user: {
        email: '',
        password: ''
    }
})

const mDTP = dispatch => ({
    action: (user) => dispatch(loginAction(user)).then(() => console.log("hello from dispatch")),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(SplashAnimation); 
