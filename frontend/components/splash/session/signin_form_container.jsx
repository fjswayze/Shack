import { connect } from "react-redux"
import {loginAction, clearErrors} from "../../../actions/session_actions"; 
import SessionForm from './session_form'; 
import {withRouter} from 'react-router-dom'

const mSTP = (state) => {
    return {
        errors: Object.values(state.errors),
        formType: 'Sign In'
    }  
}

const mDTP = (dispatch) => ({
    demo: user => dispatch(loginAction(user)),
    processForm: user => dispatch(loginAction(user)), 
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm)); 