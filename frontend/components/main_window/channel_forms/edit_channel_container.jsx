import { connect } from "react-redux";
import { updateChannel, fetchChannel} from "../../../actions/channel_actions";
import EditForm from './edit_form'; 
import {withRouter} from 'react-router-dom'; 



const mSTP = (state, ownProps) => {
   return {
    channel: state.entities.channels[ownProps.match.params.channelId] || {},
    form: 'Edit Channel'
    }
}

const mDTP = dispatch => ({
    action: channel => dispatch(updateChannel(channel)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(EditForm)); 