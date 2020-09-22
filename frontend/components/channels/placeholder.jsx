import React from 'react';

const Placeholder = (props) => (
    <div>
        <h1>Placeholder</h1>
        <img src={window.shackURL} />        
        <button onClick={() => props.action()}>Log Out</button>

    </div>
)

export default Placeholder; 