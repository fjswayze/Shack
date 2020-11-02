import React from 'react';

class FilteredDMUsers extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            user_ids: [this.props.currentUser.id]
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleClick(userId){
        this.state.user_ids.push(userId); 
        let clicked = document.getElementById('filtered_users' + `${userId}`)
        clicked.style.display = 'none'; 
    }

    handleSubmit() {
        
        if(Object.values(this.state.user_ids).length > 0) this.props.createDirectMessage({admin_id: this.props.currentUser.id, user_ids: this.state.user_ids}); 
        this.props.closeModal()
    }
    render() {
        
        return (
            <div>
                {this.props.users.map(person => {
                    if(person.id === this.props.currentUser.id){
                        return <div></div>
                    } else{
                        return( <div onClick={() => this.handleClick(person.id)} className="filtered-users-ele" id={'filtered_users' + `${person.id}`}>
                            <img className="profile" src={window.profileURL} />
                            <div>{person.name}</div>
                        </div>)
                    }
                    })}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>)
    }
}

export default FilteredDMUsers; 