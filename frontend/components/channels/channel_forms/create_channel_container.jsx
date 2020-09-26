import {connect} from 'react-redux'; 
import ChannelForm from './channel_form'; 
import {createChannel} from '../../../actions/channel_actions'; 


const mSTP = state => ({
    channel: {
        name: '',
        description: '',
        admin_id: state.entities.users[state.session.id].id
    }, 
    form: 'Create Channel'
})

const mDTP = dispatch => ({
    action: (channel) => dispatch(createChannel(channel))
})

export default connect(mSTP, mDTP)(ChannelForm); 