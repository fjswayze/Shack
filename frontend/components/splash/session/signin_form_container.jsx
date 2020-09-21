import { connect } from "react-redux"
import {loginAction} from "../../../actions/session_actions"; 
import SessionForm from './session_form'; 

const mSTP = (state) => ({
    errors: state.errors,
    formType: 'Sign In'
})

const mDTP = (dispatch) => ({
    processForm: user => dispatch(loginAction(user))
})

export default connect(mSTP, mDTP)(SessionForm); 