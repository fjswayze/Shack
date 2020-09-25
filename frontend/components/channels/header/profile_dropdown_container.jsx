import { connect } from 'react-redux'; 
import ProfileDropdown from './profile_dropdown';

const mSTP = state => ({
    user: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(ProfileDropdown); 