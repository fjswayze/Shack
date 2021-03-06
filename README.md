# SHACK 

Shack is a clone of the messaging service Slack. Users can sign up for an account, join channels, and send/receive messages. 
[Visit Shack](https://shack-aa.herokuapp.com/#/).

# Technologies Used 

Shack's backend uses Ruby on Rails and PostgreSQL, it's front-end uses JavaScript, React.js, and Redux.js. I used CSS and HTLM5 to style the site and implemented live chat with Action Cable/WebSocket. 

# Authentication 
![auth](https://media.giphy.com/media/oKsXJSIvxCzXmTL1iW/giphy.gif)

To ensure user's safety, Shack's authentication system uses BCRYPT to hash and salt sensitive information. Users can only view, update, create, or delete channels once they are logged in.  

# Channels 

![channels](https://media.giphy.com/media/1UMGa0gzMJvZmEt1QD/giphy.gif)
  
Users can belong to many diffrent channels, which in turn have many diffrent users. Channels are essentially chat rooms that are organized around a specific topic (e.g. Norwegian Shacks). Users have the ability to create channels, join channels, and edit/delete channels that they are the admin of. 
 
# Live-Chat

![Live-Chat](https://media.giphy.com/media/9m4cR9ExcuPIwSHPrq/giphy.gif)

Shack's most intresting technical feature is live messaging between multiple users. This is acomplished by utilizing Rails’ Action Cable and Redis to manage web-socket connections. Users are able to edit and delete previously sent messages. 

# Direct Messaging 

![Direct Messaging](https://media.giphy.com/media/aSm34qbV0dSduYXCe0/giphy.gif)

Users can open direct message conversation between one or multiple other users. Unlike channels, a user can not join a DM conversation they are not already apart of. 

# Live-Updates

![shack](https://media.giphy.com/media/VzSx8FGq00P8otc21f/giphy.gif)


Developing Shack gave me a greater understanding of the data flow in a redux application. One challenge Shack presented was making sure that all the disperate parts of the application were responsive to one another. For example, users have a sidebar that displays the channels they belong to. I wanted to make sure that as soon as a user created, joined, or left a channel that the sidebar reflected this change instantaneously. To do this, I made my UsersReducer responsive to changes in channel memberships: 
  
 ``` js 
const UsersReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_USER: 
            return Object.assign(newState, {[action.user.id]: action.user}); 
        case RECEIVE_CHANNEL_MEMBERSHIP: 
            newState[action.channelMembership.user_id].channel_ids.push(action.channelMembership.channel_id)
            return newState;
        case REMOVE_CHANNEL_MEMBERSHIP: 
            let selectedArray = newState[action.channelMembership.userId].channel_ids.filter(channelId => channelId != action.channelMembership.channelId); 
            newState[action.channelMembership.userId].channel_ids = selectedArray; 
            return newState; 
        case RECEIVE_CHANNEL:
            if(newState[action.channel]){if(!newState[action.channel.admin_id].channel_ids.includes(action.channel.id)){
                newState[action.channel.admin_id].channel_ids.push(action.channel.id)
            }
        }
            return newState; 
  ```
  
Additionaly, I wanted the user experience joining and leaving channels in Shack to replicate Slack. In Shack, when a user is browsing channels, the 'Join' button only shows up when the users mouse is hovering over the channel. As soon as they join the channel, the button changes into a 'Leave' which allows them to quickly leave the channel. To achieve this effect, the return function in my Channel Browser compoment utilizes a ternerary: 
  
  
``` html
return(
                    <div 
                    onMouseLeave={this.handleMouseLeave}
                    onMouseOver={this.handleMouseOver} className="chanels-index-item">
                        <div>
                        <p className="chanels-index-item-name">{this.props.channel.name} {this.props.channel.description}</p>
                    <p className="chanels-index-item-members">{length} members</p>
                    </div>
                        {this.state.show  && this.state.joinable ? (
                    <button  onClick={this.handleJoin} className="channels-index-join-btn" >Join</button>
                    ): this.state.show && !this.state.joinable ? (
                        <button onClick={this.handleLeave} className="channels-index-leave-btn" >Leave</button>
                        ) : null}
                       
                    </div>  
```





       
