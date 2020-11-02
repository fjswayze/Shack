import React from 'react';

export const DMSearchFilter = (props) => (
    <div>
        <input
            className="add-people-search"
            value={props.value}
            onChange={props.handleChange}
            placeholder="Type the name of a person"
        ></input>
    </div>
)

export default DMSearchFilter; 