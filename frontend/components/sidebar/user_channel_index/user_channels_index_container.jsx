import { connect } from 'react-redux';
import UserChannelsIndex from './user_channels_index';
import {fetchChannel} from '../../../actions/channel_actions'; 

const mSTP = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[state.session.id],
        channels: Object.values(state.entities.channels) || [1, 3],
        channel: state.entities.channels[ownProps.match.params.channelId]
    }

}

const mDTP = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(UserChannelsIndex); 