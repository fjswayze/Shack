import { connect } from 'react-redux';
import DMInfo from './dm_info';
import { withRouter } from 'react-router-dom'
import {fetchDMUsers} from '../../../actions/user_actions'; 
import {fetchDirectMessage} from '../../../actions/direct_message_actions'


const mSTP = (state, ownProps) => {
    
    return {
        dm: state.entities.dms[ownProps.match.params.dmId] || {},
        dmId: ownProps.match.params.dmId,
        user: state.entities.users[state.session.id],
        users: state.entities.users
    }

}

const mDTP = dispatch => ({
   fetchDMUsers: dmId => dispatch(fetchDMUsers(dmId)),
   fetchDM: dmId => dispatch(fetchDirectMessage(dmId))
})

export default withRouter(connect(mSTP, mDTP)(DMInfo));

