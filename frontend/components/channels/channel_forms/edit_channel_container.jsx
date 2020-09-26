import { connect } from "react-redux";
const { updateChannel, fetchChannel} = require("../../../util/channel_api_util");
import React from 'react'; 

class EditChannelForm extends React.Component {
    componentDidMount(){
        this.props.fetchChannel(this.props.match.params.channelId)
    }

    render(){
        if(!channel) return null; 
        return(
            <ChannelForm
                action={this.props.action}
                post={this.props.channel}
                form={this.props.form}
            />
        )
     
    }
}

const mSTP = (state, ownProps) => ({
    post: state.entities.channels[ownProps.match.params.channelId],
    form: 'Edit Channel'
})

const mDTP = dispatch => ({
    action: channel => dispatch(updateChannel(channel)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
})

export default connect(mSTP, mDTP)(EditChannelForm); 