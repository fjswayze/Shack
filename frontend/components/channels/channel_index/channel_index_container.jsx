import { connect } from 'react-redux';
import ChannelIndex from './channel_index'; 
import {editChannel} from '../../../actions/channel_actions'; 

const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels) 
    }

}

const mDTP = dispatch => ({
    editChannel: channel => dispatch(editChannel(channel))
})

export default connect(mSTP, mDTP)(ChannelIndex); 