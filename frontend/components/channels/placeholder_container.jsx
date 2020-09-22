import { logoutAction } from "../../actions/session_actions";
import { connect } from 'react-redux'; 
import Placeholder from './placeholder';

const mDTP = dispatch => {
    return{
        action: () => dispatch(logoutAction())
    }
}

export default connect(null, mDTP)(Placeholder)