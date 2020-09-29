import React from 'react'; 
import ChannelIndexItem from './channel_index_item'; 

class ChannelIndex extends React.Component{

    componentDidMount() {
        this.props.fetchChannels()
    }

    render() {
        let channelIndexArray;
        if (!this.props.channels[0]) {
            channelIndexArray = [1, 2]
        } else {
            channelIndexArray = this.props.channels
        }
        return(
           <div>
                
                <div className="all-channels-index">
                    {channelIndexArray.map(channel => (
                     <ChannelIndexItem 
                    key={channel.id}
                    channel={channel}
                    user={this.props.user}
                    joinable={!this.props.user.channel_ids.includes(channel.id)}
                    createChannelMembership={this.props.createChannelMembership}
                    deleteChannelMembership={this.props.deleteChannelMembership}
                    />
                    ))}
                </div>
            </div>
          
        )
        }
}


export default ChannelIndex; 