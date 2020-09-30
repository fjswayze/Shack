import React from 'react'; 

export const SearchFilter = (props) => (
    <div>
        <input 
        className="add-people-search"
        value={props.value} 
        onChange={props.handleChange}
        placeholder="Search by name or email"
        ></input>
    </div>
)

export default SearchFilter; 