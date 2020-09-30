import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { fetchUsers } from '../../../actions/user_actions';
import { createChannelMembership} from '../../../actions/channel_membership_actions'; 
import {fetchChannel} from '../../../actions/channel_actions'

const mSTP = (state) => {
    return {
        users: Object.values(state.entities.users) || []
    }

}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createChannelMembership: (channelMembership) => dispatch(createChannelMembership(channelMembership)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(UsersIndex); 