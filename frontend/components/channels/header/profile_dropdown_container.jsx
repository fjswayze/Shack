import { connect } from 'react-redux'; 
import {logoutAction} from '../../../actions/session_actions'; 
import ProfileDropdown from './profile_dropdown';

const mSTP = state => {
    
    return{
        user: state.entities.users[state.session.id] || {}
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(ProfileDropdown); 