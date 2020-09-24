import { connect } from 'react-redux';
import UserChannelsIndex from './user_channels_index';
import fetchChannels from '../../../actions/channel_actions'; 

const mSTP = (state) => {
    return {
        user: state.entities.users[state.session.id],
        channelIds: state.entities.users[state.session.id].channel_ids,
        channels: state.entities.channels
    }

}

const mDTP = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels)
})

export default connect(mSTP, mDTP)(UserChannelsIndex); 