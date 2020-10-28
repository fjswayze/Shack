import React from 'react'; 

import MessageForm from './MessageForm'; 
class ChatRoom extends React.Component {
    constructor(props){
        super(props); 
       this.state = {
           messages: this.props.messages
       }
        this.bottom = React.createRef(); 
    }

 

    componentDidMount(){
            this.props.fetchChannelMessages(this.props.channelId); 
            this.props.fetchChannelUsers(this.props.channelId)
    


        App.cable.subscriptions.create(
            {
        channel: 'ChatChannel',
        channel_id: this.props.channelId }, 
            {
                received: data => {
                    debugger
                    this.props.receiveMessage(data.message);  
                }, 
                speak: function(data){
                    return this.perform('speak', data)
                }
            }
        ); 
    }
    componentDidUpdate(prevProps){
        if(this.props.channelId !== prevProps.channelId){
            this.props.fetchChannelMessages(this.props.channelId)
        }
        // debugger
        // if(Object.values(this.props.messages).length !== Object.values(prevProps.messages)){
        //     this.props.fetchChannelMessages(this.props.channelId)
        // }
    }

    render(){
        if(!this.props.user) return <div></div>
        if(!this.props.channelId) return <div></div>
        
        if(this.props.messages.length === 0) return <div></div>; 
   
       
        
        
        const messageList = this.props.messages.map(message => {
            debugger
            return(
                <li key={message.id}>
                    <div className="message-div">
                    <img className="message-profile" src={window.profileURL} />
                    <div>
                    <div className="username-and-timestamp-div">
                        {/* <p className="message-username">{this.props.users[message.user_id].username}</p> */}
                        <p className="message-timestamp">
                            
                                    {parseInt(message.created_at.split("").slice(11, 13).join("")) % 12}:
                                    {parseInt(message.created_at.split("").slice(14, 16).join(""))}
                                    {parseInt(message.created_at.split("").slice(11, 13).join("")) > 12 ? (' PM') : (' AM')}
            
                        </p>
                    </div>
                        <div className="messsage-body-div">{message.body}</div>
                    </div>
                    </div>
                <div ref={this.bottom}/>
                </li> 
            ); 
        }); 
        return (
            <div className="chatroom=container">  
              
                <div className="message-list">{messageList}</div>
                <MessageForm 
                channel={this.props.channel}
                user={this.props.user}
                /> 
            </div>
        )
    }
}

export default ChatRoom; 

