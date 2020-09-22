import { connect } from "react-redux";
import { loginAction } from "../../actions/session_actions"; 
import SplashAnimation from './splash_animation'; 

const mSTP = state => ({
    user: {
        email: '',
        password: ''
    }
})

const mDTP = dispatch => ({
    action: (user) => dispatch(loginAction(user))
})

export default connect(mSTP, mDTP)(SplashAnimation); 
