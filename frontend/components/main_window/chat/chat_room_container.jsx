import {connect} from 'react-redux'; 
import {fetchChannel} from '../../../actions/channel_actions'; 
import {fetchUsers} from '../../../actions/user_actions'
import ChatRoom from './ChatRoom.jsx'; 

const mSTP = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId] || {},
    user: state.entities.users[state.session.id],
    users: state.entities.users 
})

const mDTP = (dispatch) => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    fetchUsers: () => dispatch(fetchUsers()) 
})

export default connect(mSTP, mDTP)(ChatRoom); 
