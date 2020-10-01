import MessageForm from './MessageForm'; 
import {fetchChannel} from '../../../actions/channel_actions'; 
import {connect} from 'react-redux'; 


const mSTP = (state, ownProps) => ({
    message: {
        user_id: state.session.id,
        body: '',
        messageable_id: ownProps.match.params.channelId || {}, 
        messageable_type: 'Channel'
    }
})

const mDTP = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(MessageForm); 