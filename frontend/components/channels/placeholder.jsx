import React from 'react';
import {logoutAction} from "../../actions/session_actions";
const Placeholder = () => (
    <div>
        <h1>Placeholder</h1>
        <button onClick={() => logoutAction()}>Log Out</button>
    </div>
)

export default Placeholder; 