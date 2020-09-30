import React from 'react'

class ChannelMembersIndex extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.fetchChannel(this.props.channel)
    }

    handleClick(channelId, userId){
        this.props.deleteChannelMembership(channelId, userId); 
    }

    render(){
        
        if(!this.props.channel) return null; 
        let usersArray = Object.values(this.props.users); 
        let selectedUsers = usersArray.filter(user => this.props.channel.user_ids.includes(user.id) && this.props.user.id != user.id); 
        return(
            <div className="channel_members_index">
                <h1>{selectedUsers.length} members in {this.props.channel.name}</h1>
                <p onClick={this.props.openModal}>Add people</p>
              
                    {selectedUsers.map(user => (
                        <div className="channel_members_index_ele">
                            <div className="channel-members-index-profile-username-div">
                                <img className="channel_members_index_profile" src={window.profileURL} />
                                <div>{user.username}</div>
                            </div>
                            
                        <button onClick={() => this.handleClick(this.props.channel.id, user.id)}>Remove</button>
                         
                        </div>
                    ))}
              
            </div>
        )
    }
}

export default ChannelMembersIndex; 