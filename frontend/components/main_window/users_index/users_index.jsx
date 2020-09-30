import React from 'react'

class UsersIndex extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.fetchChannel(this.props.channel)
    }

    render(){
        debugger
        let usersArray = this.props.users; 
        
        // if(!this.props.channel.name){ return null; 
        // } else {
        //     usersArray = this.props.users 
        // }
        return(
           
                <div className="all-users-index">
                    <h3>Add people </h3>
                <h4>{this.props.channel.name}</h4>
                
                    <form>
                       
                        <input 
                        className="add-people-search"
                        type="text"
                        defaultValue="Search by name or email"
                        ></input>
                        <br></br>
                        <button className="this-guy">Add</button>
                 
                    </form>
             
                </div>
         
        )
     }
    }

export default UsersIndex; 
