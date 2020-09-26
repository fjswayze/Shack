import { connect } from 'react-redux';
import { logoutAction } from "../../../actions/session_actions";
import InfoClickDropdown from './info_click_dropdown'; 

const mSTP = (state) => {
    return {
        user: state.entities.users[state.session.id],
        dropdownType: 'Sign out'
    }

}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(InfoClickDropdown); 