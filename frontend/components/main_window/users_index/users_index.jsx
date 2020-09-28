import React from 'react'

class UsersIndex extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.fetchChannel(this.props.match.params.channelId); 
    }

    render(){
        let usersArray; 
        debugger
        if(!this.props.channel.name){ return null; 
        } else {
            usersArray = this.props.users.filter(user => (!this.props.channel.user_ids.includes(user.id))) 
        }
        return(
           
                <div className="all-users-index">
                    <h3>Add people to {this.props.channel.name}</h3>
                
                    {usersArray.map(user => (
                        <div className='users-index-item'>
                        <p>{user.username}</p>
                        <button onClick={() => this.props.createChannelMembership({user_id: user.id, channel_id: this.props.channel.id})}>Add</button>
                        </div>
                    ))}
             
                </div>
         
        )
     }
    }

export default UsersIndex; 
