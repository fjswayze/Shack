import {connect} from 'react-redux'
import UserDMsIndex from './user_dms_index'; 
import {fetchDirectMessage, fetchUserDirectMessages} from '../../../actions/direct_message_actions';
import {withRouter} from 'react-router-dom'; 
import {fetchDMUsers} from '../../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        dm: state.entities.dms[ownProps.match.params.dmId] || {},
        users: state.entities.users, 
        dms: state.entities.dms || [1]
    }
}

const mDTP = dispatch => ({
    fetchDM: (directMessageId) => dispatch(fetchDirectMessage(directMessageId)),
    fetchUserDirectMessages: userId => dispatch(fetchUserDirectMessages(userId)), 
    fetchDMUsers: dmID => dispatch(fetchDMUsers(dmID))
})

export default withRouter(connect(mSTP, mDTP)(UserDMsIndex))