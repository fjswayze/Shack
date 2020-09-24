import { connect } from 'react-redux';
import UserChannelsIndex from './user_channels_index';

const mSTP = (state) => {
    return {
        user: state.entities.users[state.session.id],
        channelIds: state.entities.users[state.session.id].channel_ids,
        channels: state.entities.channels
    }

}

const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(UserChannelsIndex); 