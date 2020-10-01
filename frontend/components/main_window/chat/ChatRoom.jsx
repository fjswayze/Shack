import React from 'react'; 
import MessageFormContainer from './message_form_container'; 
import MessageForm from './MessageForm'; 
class ChatRoom extends React.Component {
    constructor(props){
        super(props); 
        this.state = {messages: []}; 
        this.bottom = React.createRef(); 
    }

 

    componentDidMount(){
        App.cable.subscriptions.create(
            {channel: 'ChatChannel'}, 
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.message)
                    }); 
                }, 
                speak: function(data){
                    return this.perform('speak', data)
                }
            }
        ); 
    }
    // componentDidUpdate(){
    //     this.bottom.current.scrollIntoView(); 
    // }

    render(){
        if(!this.props.user) return null; 
        if(!this.bottom) return null; 
        let date = new Date(); 
        let hours = date.getHours(); 
        let minutes = date.getMinutes(); 
        let AMorPM = hours > 12 ? ('PM') : ('AM'); 
        let revisedHours = hours % 12;
        if(minutes < 10){
            minutes = (minutes * 10)
        }
        if(minutes === 0){
            minutes = '00'
        }
        const messageList = this.state.messages.map(message => {
            return(
                <li key={message.id}>
                    <div className="message-div">
                    <img className="message-profile" src={window.profileURL} />
                    <div>
                    <div className="username-and-timestamp-div">
                        <p className="message-username">{this.props.user.username}</p>
                        <p className="message-timestamp">
                            {revisedHours}:{minutes} {AMorPM}
                        </p>
                    </div>
                        <div className="messsage-body-div">{message}</div>
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

