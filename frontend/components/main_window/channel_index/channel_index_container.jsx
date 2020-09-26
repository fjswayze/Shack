import { connect } from 'react-redux';
import ChannelIndex from './channel_index'; 
import {updateChannel, fetchChannels} from '../../../actions/channel_actions'; 

const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels) || []
    }

}

const mDTP = dispatch => ({
    updateChannel: channel => dispatch(updateChannel(channel)),
    fetchChannels: () => dispatch(fetchChannels())
})

export default connect(mSTP, mDTP)(ChannelIndex); 