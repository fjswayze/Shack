import { connect } from "react-redux"
import { signupAction, clearErrors, loginAction } from "../../../actions/session_actions";
import SessionForm from './session_form';
import {withRouter} from 'react-router'; 

const mSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: 'Sign Up'
})

const mDTP = (dispatch) => {
   return( {
    demo: user => dispatch(loginAction(user)),
    processForm: user => dispatch(signupAction(user)),
    clearErrors: () => dispatch(clearErrors())
   }); 

}

export default withRouter(connect(mSTP, mDTP)(SessionForm)); 