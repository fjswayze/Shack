import { connect } from "react-redux";
import { loginAction } from "../../actions/session_actions"; 
import SplashAnimation from './splash_animation'; 

const mSTP = state => ({
    user: {
        email: 'test1997@gmail.com',
        password: 'hello1997'
    }
})

const mDTP = dispatch => ({
    action: (user) => dispatch(loginAction(user))
})

export default connect(mSTP, mDTP)(SplashAnimation); 
