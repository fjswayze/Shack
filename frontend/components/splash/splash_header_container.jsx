import { connect } from "react-redux"; 
import SplashHeader from './splash_header';

const mSTP = state => ({
    user: state.entities.users[state.session.id] || {},
    session: state.session || {}
})

const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(SplashHeader)
