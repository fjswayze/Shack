import { connect } from "react-redux"
import { signupAction } from "../../../actions/session_actions";
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = (state) => ({
    errors: state.errors,
    formType: 'Sign Up'
})

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signupAction(user))
})

export default connect(mSTP, mDTP)(SessionForm); 