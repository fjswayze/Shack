import React from 'react'; 
import ChatRoom from './ChatRoom.jsx'; 


class ChatPage extends React.Component{
    // componentDidMount(){
    //     this.props.fetchChannel(this.props.channel.id); 
    //     
    //     if(this.props.channel.id){
    //         
    //         this.props.fetchChannelMessages(this.props.channel.id)
    //     }
    // }

render(){
    
if (!this.props.channel.id) return null; 
return(
    <ChatRoom
    channel={this.props.channel}
    fetchChannelMessages={(channelId) => this.props.fetchChannelMessages(channelId)
    }
    messages={this.props.messages}
    /> 

)
}
}

export default ChatPage