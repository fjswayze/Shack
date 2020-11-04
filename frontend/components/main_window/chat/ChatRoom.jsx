import React from 'react'; 
import EditMessageForm from './edit_message_form'; 
import MessageForm from './MessageForm'

class ChatRoom extends React.Component {
    constructor(props){
        super(props); 
       this.state = {
           messages: this.props.messages,
           editedMessage: ''
       }
        this.bottom = React.createRef(); 
    }

    handleJoin(data){

        if(this.props.pageType === 'Channel'){
            debugger
            this.props.createPageMembership({
                channel_id: data.page_id, 
                user_id: data.user_id
            })} else {
            this.props.createPageMembership({
                dm_id: data.page_id, 
                user_id: data.user_id
            })
        }
       
    }

    handleEdit(id){
        let hide = document.getElementById('hide-div' + `${id}`); 
        let li = document.getElementById('message-li' + `${id}`)
        let body = document.getElementById('message-body-div' + `${id}`); 
        let edit = document.getElementById('message-edit-div' + `${id}`); 
        let messageTime = document.getElementById('username-and-timestamp-div' + `${id}`);  
        let tools = document.getElementById('message-actions-div' + `${id}`); 
        hide.style.overflow = 'visible'; 
        hide.style.height = 'auto'; 
        hide.style.width = 'auto'; 
        hide.style.visibility = 'visible'; 

        tools.style.height = '0px';
        tools.style.width = '0px'; 
        
        messageTime.style.height = '0px'; 
        messageTime.style.width = '0px'
        li.style.backgroundColor = '#f5cd0912'
        body.style.visibility = 'hidden'; 
        body.style.height = '0px'; 
        body.style.width = '0px'; 
        edit.style.visibility = 'visible';
        edit.style.height = '110px';
        edit.style.width = '800px';
    }



    componentDidMount(){
            this.props.fetchPageMessages(this.props.pageId); 
            this.props.fetchPageUsers(this.props.pageId)
    
        if(this.props.pageType === 'DM'){
            App.cable.subscriptions.create(
                {
                    channel: 'ChatChannel',
                    dm_id: this.props.pageId
                },
                {
                    received: data => {

                        this.props.receiveMessage(data.message);
                    },
                    speak: function (data) {
                        return this.perform('speak', data)
                    }
                }
            ); 
        } else{
            App.cable.subscriptions.create(
                {
                    channel: 'ChatChannel',
                    channel_id: this.props.pageId
                },
                {
                    received: data => {

                        this.props.receiveMessage(data.message);
                    },
                    speak: function (data) {
                        return this.perform('speak', data)
                    }
                }
            ); 
        }
    }


    componentDidUpdate(prevProps){
        if(this.props.pageId !== prevProps.pageId){
            this.props.fetchPageMessages(this.props.pageId)
        }
        if(this.bottom.current != null){
            let ele = document.getElementById('scroll-here')
           ele.scrollIntoView()
        }
    }

    render(){
        if(!this.props.user) return <div></div>
        if(!this.props.pageId) return <div></div>
        if (!this.props.page) return <div></div>
        if(!this.props.page.user_ids) return <div></div>
        
        if (Object.values(this.props.users).length < this.props.page.user_ids.length - 1) return <div></div>
    
         
        let messageInput = 
        
        <div className='message-input-join'>
            <div>
                    <div className='you-are-viewing'>You are viewing <a className='messages-channel-name'>{this.props.page.name}</a></div>
                    <button className='channels-index-join-btn'
                    onClick={() => this.handleJoin({
                        page_id: this.props.pageId, 
                        user_id: this.props.user.id
                    })}
                    >Join Channel</button>
            </div>
        </div>; 
        
       for(let i = 0; i < this.props.page.user_ids.length; i++){
           if (this.props.page.user_ids[i] === parseInt(this.props.user.id)) {messageInput = <MessageForm
               page={this.props.page}
               user={this.props.user}
               users={this.props.users}
               type={this.props.pageType}
           />
           }
       }
        
        const filteredMessages = this.props.messages.filter(message => message.messageable_id === parseInt(this.props.pageId))
        
        const messageList = filteredMessages.map((message) => {
            return(
                <li id={'message-li' + `${message.id}`} key={message.id}>


                    <div className="message-div">
                        <div className='message-profile-body'>
                        <img className="message-profile" src={window.profileURL} />
                            
                        <div>
                            <div id={'username-and-timestamp-div' + `${message.id}`} className="username-and-timestamp-div">
                                <p className="message-username">{message.username}</p>
                                <p className="message-timestamp">
                            
                                    {(parseInt(message.created_at.split("").slice(11, 13).join("")) + 17) % 12}:
                                    {(message.created_at.split("").slice(14, 16).join(""))}
                                    {(parseInt(message.created_at.split("").slice(11, 13).join("")) > 19 || parseInt(message.created_at.split("").slice(11, 13).join("")) < 7 )? (' PM') : (' AM')}
            
                                </p>
                            </div>
                                
                            <div id={'message-body-div' + `${message.id}`} className="messsage-body-div">{message.body}</div>
                            <div id={'hide-div' + `${message.id}`}className='hide-div'>
                                <EditMessageForm
                                    message={message}
                                    editMessage={this.props.updateMessage}
                                >
                                </EditMessageForm>
                            </div>

                        </div>
                        </div>
                       
                       
                            {message.user_id === this.props.user.id ?
                                <div id={'message-actions-div' + `${message.id}`} className='message-actions-div'>
                                <button onClick={() => this.props.deleteMessage(message.id)} className='delete-tool-tip'>
                                    <i className="far fa-trash-alt"></i>
                                    <span className='tooltiptext'>Delete Message</span>
                                </button>
                                <button onClick={() => this.handleEdit(message.id)} className='update-tool-tip'>
                                    <i className="far fa-edit"></i>
                                    <span  className='tooltiptextedit'>Edit Message</span>
                                </button>
                                </div>
                                :
                                <div></div>}
                     
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

