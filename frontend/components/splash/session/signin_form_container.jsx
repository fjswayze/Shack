import { connect } from "react-redux"
import {loginAction, clearErrors} from "../../../actions/session_actions"; 
import SessionForm from './session_form'; 

const mSTP = (state) => {
    return {
        errors: Object.values(state.errors),
        formType: 'Sign In'
    }  
}

const mDTP = (dispatch) => ({
    processForm: user => dispatch(loginAction(user)), 
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm); 