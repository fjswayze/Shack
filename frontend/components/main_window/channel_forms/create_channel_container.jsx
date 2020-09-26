import {connect} from 'react-redux'; 
import ChannelForm from './channel_form'; 
import {createChannel} from '../../../actions/channel_actions'; 
import {closeModal} from '../../../actions/modal_actions'; 


const mSTP = state => ({
    channel: {
        name: '',
        description: '',
        admin_id: state.entities.users[state.session.id].id
    }, 
    form: 'Create a Channel'
})

const mDTP = dispatch => {
    return {
        action: (channel) => dispatch(createChannel(channel)), 
        closeModal: () => dispatch(closeModal())
    }
   
}

export default connect(mSTP, mDTP)(ChannelForm); 