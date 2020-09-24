import React from 'react'; 

const ChannelIndex = props => (
    <div>
        {props.channels.map(channel => (
            <ChannelIndexItem
                channel={channel}
                key={channel.id}
                editChannel={this.props.editChannel}
                /> 
        ))}
    </div>
); 

export default ChannelIndex; 