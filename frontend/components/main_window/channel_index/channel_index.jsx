import React from 'react'; 
import ChannelIndexItem from './channel_index_item'; 

class ChannelIndex extends React.Component{

    componentDidMount() {
        this.props.fetchChannels()
    }

    render() {
        let channelsArray;
        if (!this.props.channels[0]) {
            channelsArray = [1, 2]
        } else {
            channelsArray = this.props.channels;
        }
        return(
            <div className="master-channels-index-div">
                <div className="sidebar">
                    Sidebar
                </div>
                <div className="all-channels-index">
                    {channelsArray.map(channel => (
                     <ChannelIndexItem 
                    channel={channel}
                    />
                    ))}
                </div>
            </div>
        )
        }
}


export default ChannelIndex; 