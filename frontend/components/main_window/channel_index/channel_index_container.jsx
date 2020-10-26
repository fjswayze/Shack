import { connect } from 'react-redux';
import ChannelIndex from './channel_index'; 
import {fetchChannels} from '../../../actions/channel_actions'; 
import {createChannelMembership, deleteChannelMembership} from '../../../actions/channel_membership_actions'
import {withRouter} from 'react-router-dom'; 

const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels) || [],
        user: state.entities.users[state.session.id]
    }

}

const mDTP = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    createChannelMembership: (channelMembership) => dispatch(createChannelMembership(channelMembership)),
    deleteChannelMembership: (channelId, userId) => dispatch(deleteChannelMembership(channelId, userId))
   
})

export default withRouter(connect(mSTP, mDTP)(ChannelIndex)); 