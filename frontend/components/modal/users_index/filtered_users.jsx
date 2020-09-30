import React from 'react'; 

export const FilteredUsers = (props) => {
    
    return(
    <div>
        {props.users.map(person => (
            <div onClick={props.createChannelMembership({channel_id: props.channel.id, user_id: person.id})} className="filtered-users-ele">
                <img className="profile" src={window.profileURL} />
                <div>{person.name}</div>
            </div>
        ))}
    </div>)
}

export default FilteredUsers; 