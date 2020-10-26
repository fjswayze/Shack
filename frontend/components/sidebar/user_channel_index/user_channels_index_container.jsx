import { connect } from 'react-redux';
import UserChannelsIndex from './user_channels_index';
import {fetchChannel} from '../../../actions/channel_actions'; 
import {withRouter} from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        channels: state.entities.channels || [1, 3],
        channel: state.entities.channels[ownProps.match.params.channelId]  || {}
    }

}

const mDTP = dispatch => ({
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(UserChannelsIndex)); 