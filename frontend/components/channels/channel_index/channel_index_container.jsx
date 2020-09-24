import { connect } from 'react-redux';
import ChannelIndex from './channel_index'; 

const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels) 
    }

}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutAction())
})

export default connect(mSTP, mDTP)(ChannelIndex); 