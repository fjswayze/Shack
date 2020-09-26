import { connect } from "react-redux";
const { updateChannel, fetchChannel} = require("../../../actions/channel_actions");
import React from 'react'; 
import ChannelForm from './channel_form'; 

class EditChannelForm extends React.Component {
    componentDidMount(){
        debugger
        this.props.fetchChannel(this.props.match.params.channelId)
    }

    render(){
        
        if(!this.props.channel.name) return <div></div>; 
        return(
            <ChannelForm
                action={this.props.action}
                channel={this.props.channel}
                form={this.props.form}
            />
        )
     
    }
}

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

export default connect(mSTP, mDTP)(EditChannelForm); 