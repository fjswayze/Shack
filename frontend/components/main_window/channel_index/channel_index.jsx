import React from 'react'; 
import ChannelIndexItem from './channel_index_item'; 

class ChannelIndex extends React.Component{

    componentDidMount() {
        
        this.props.fetchChannels()
    }

    handleClick(channelId){
        
        this.props.history.push(`/channels/${channelId}`)
    }

    render() {
        
        if (!this.props.channels[0]) return <div></div>; 
        let channelIndexArray;
        if (!this.props.channels[0]) {
            channelIndexArray = [1, 2]
        } else {
            channelIndexArray = this.props.channels
        }
        return(
           <div>
                
                <div className="all-channels-index">
                    <div className='num-of-channels'>{channelIndexArray.length} channels</div>
                    {channelIndexArray.map((channel, idx) => {
                        debugger
                    if(idx === 0 ){
                        return(
                            <div id='first-channel-index-item'>
                            <ChannelIndexItem
                                key={channel.id}
                                channel={channel}
                                user={this.props.user}
                                joinable={!this.props.user.channel_ids.includes(channel.id)}
                                createChannelMembership={this.props.createChannelMembership}
                                deleteChannelMembership={this.props.deleteChannelMembership}
                            />
                        </div>
                        )
                    } else{
                    return(
                     <ChannelIndexItem 
                    key={channel.id}
                    channel={channel}
                    user={this.props.user}
                    joinable={!this.props.user.channel_ids.includes(channel.id)}
                    createChannelMembership={this.props.createChannelMembership}
                    deleteChannelMembership={this.props.deleteChannelMembership}
                    />)
     } })}
                </div>
            </div>
          
        )
        }
}


export default ChannelIndex; 