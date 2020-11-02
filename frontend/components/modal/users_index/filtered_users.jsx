import React from 'react'; 

class FilteredUsers extends React.Component{

    handleClick(info){

        this.props.createChannelMembership(info); 
        let clicked = document.getElementById('filtered_users' + `${info.user_id}`)
        clicked.style.display = 'none'; 
    }
    render(){
        return (
    <div>
        {this.props.users.map(person => {
            if(this.props.user.id !== person.id){
           return(
            <div onClick={() => this.handleClick({channel_id: this.props.channel.id, user_id: person.id})} className="filtered-users-ele" id={'filtered_users' + `${person.id}`}>
                <img className="profile" src={window.profileURL} />
                <div>{person.name}</div>
            </div>)}
     })}
    </div>)
    }
}

export default FilteredUsers; 