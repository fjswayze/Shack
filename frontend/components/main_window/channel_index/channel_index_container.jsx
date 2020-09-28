import { connect } from 'react-redux';
import ChannelIndex from './channel_index'; 
import {fetchChannels} from '../../../actions/channel_actions'; 
import {createChannelMembership} from '../../../actions/channel_membership_actions'


const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels) || [],
        user: state.entities.users[state.session.id]
    }

}

const mDTP = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    createChannelMembership: (channelMembership) => dispatch(createChannelMembership(channelMembership))
   
})

export default connect(mSTP, mDTP)(ChannelIndex); 