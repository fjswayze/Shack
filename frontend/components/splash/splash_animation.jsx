import React from 'react'; 
import { Link } from 'react-router-dom';

const SplashAnimation = () => (
    <div className="animation">
        <h1>Welcome to your new HQ</h1>
        <p>Finding people to talk about shacks with can be hard… 
        but why would you talk about anything else? That’s why we 
        made Shack — a place where people talk about shacks, together.</p>
        <Link to='/signup'><button>TRY FOR FREE</button></Link> 
    </div>
)

export default SplashAnimation