import React from 'react'; 
import MessageForm from './MessageForm'; 
class ChatRoom extends React.Component {
    constructor(props){
        super(props); 
        this.state = {messages: []}; 
        this.bottom = React.createRef(); 
    }

 

    componentDidMount(){
        this.props.fetchUsers()
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
            minutes = (`0${minutes}`)
        }
        if(minutes === 0){
            minutes = '00'
        }
        debugger
        const messageList = this.state.messages.map(message => {
            return(
                <li key={message.id}>
                    <div className="message-div">
                    <img className="message-profile" src={window.profileURL} />
                    <div>
                    <div className="username-and-timestamp-div">
                        <p className="message-username">{this.props.users[message.user_id].username}</p>
                        <p className="message-timestamp">
                            {revisedHours}:{minutes} {AMorPM}
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

