import { fetchChannel, updateChannel } from "../../actions/channel_actions"; 
import { connect } from 'react-redux'; 

const mSTP = (state, ownProps) => ({
    channel: state.channels[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    updateChannel: channel => dispatch(updateChannel(channel))
})

