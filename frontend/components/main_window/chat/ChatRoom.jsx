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

    handleJoin(data){
        this.props.createChannelMembership(data)
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
        if(this.bottom.current != null){
            let ele = document.getElementById('scroll-here')
           ele.scrollIntoView()
        }
    }

    render(){
        if(!this.props.user) return <div></div>
        if(!this.props.channelId) return <div></div>
        if(!this.props.channel.user_ids) return <div></div>
        
        if (Object.values(this.props.users).length < this.props.channel.user_ids.length - 1) return <div></div>
    
         
        let messageInput = 
        
        <div className='message-input-join'>
            <div>
                    <div className='you-are-viewing'>You are viewing <a className='messages-channel-name'>{this.props.channel.name}</a></div>
                    <button className='channels-index-join-btn'
                    onClick={() => this.handleJoin({
                        channel_id: this.props.channelId, 
                        user_id: this.props.user.id
                    })}
                    >Join Channel</button>
            </div>
        </div>; 
        
       for(let i = 0; i < this.props.channel.user_ids.length; i++){
           if (this.props.channel.user_ids[i] === parseInt(this.props.user.id)) {messageInput = <MessageForm
               channel={this.props.channel}
               user={this.props.user}
           />
           }
       }
        
        const filteredMessages = this.props.messages.filter(message => message.messageable_id === parseInt(this.props.channelId))
        
        const messageList = filteredMessages.map((message, idx) => {
            return(
                <li key={message.id}>
                    <div className="message-div">
                    <img className="message-profile" src={window.profileURL} />
                    <div>
                    <div className="username-and-timestamp-div">
                        <p className="message-username">{message.username}</p>
                        <p className="message-timestamp">
                            
                                    {(parseInt(message.created_at.split("").slice(11, 13).join("")) + 17) % 12}:
                                    {parseInt(message.created_at.split("").slice(14, 16).join(""))}
                                    {(parseInt(message.created_at.split("").slice(11, 13).join("")) > 19 || parseInt(message.created_at.split("").slice(11, 13).join("")) < 7 )? (' PM') : (' AM')}
            
                        </p>
                    </div>
                        <div className="messsage-body-div">{message.body}</div>
                    </div>
                    </div>
                
                </li> 
            ); 
        }); 
        return (
       
            <div>
                <div className="chatroom-container">  
                        <div className='message-list-container'>
                            <div className='flex-div'>
                                <div className="message-list">{messageList}
                                <div id='scroll-here' ref={this.bottom} />
                            </div>
                           
                        </div>
                        
                        </div>
             
                
                </div>
             
               
                    <div>{messageInput}</div>
              
           
            </div>
          
        )
    }
}

export default ChatRoom; 

