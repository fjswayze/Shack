import React from 'react'

class ChannelMembersIndex extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.fetchChannel(this.props.channel.id)
    }

    handleClick(channelId, userId){
        this.props.deleteChannelMembership(channelId, userId); 
       
    }

    render(){
        
        if(!this.props.channel) return null; 
        let usersArray = Object.values(this.props.users); 
        let count = usersArray.filter(user => this.props.channel.user_ids.includes(user.id))
        let selectedUsers = usersArray.filter(user => this.props.channel.user_ids.includes(user.id)); 
        let  channelMembersLength; 
        
        if(count.length === 1){
            channelMembersLength = <h1> 1 member in {this.props.channel.name}</h1>
        } else{
            channelMembersLength = <h1>{selectedUsers.length} members in {this.props.channel.name}</h1>
        }



        return(
            <div className="channel_members_index">
              {channelMembersLength}
                <p onClick={this.props.openModal}>Add people</p>
              
                    {selectedUsers.map(user => {
                    return(   <div className="channel_members_index_ele">
                            <div className="channel-members-index-profile-username-div">
                                <img className="channel_members_index_profile" src={window.profileURL} />
                                <div>{user.username}</div>
                                {user.id === this.props.user.id ?
                                <div>(you)</div> : <div></div>}
                            </div>
                            
                        <button onClick={() => this.handleClick(this.props.channel.id, user.id)}>Remove</button>
                         
                        </div> )
            })}
              
            </div>
        )
    }
}

export default ChannelMembersIndex; 