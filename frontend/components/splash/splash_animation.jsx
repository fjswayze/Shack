import React from 'react'; 
import { Link } from 'react-router-dom';

const SplashAnimation = () => (
    <div className="animation">
        <div className="animation-row-1">
            <div className="ani-row-1-col-1">
                <h1>Welcome to your new HQ</h1>
                <p>Finding people to talk about shacks with can be hard… 
                but why would you talk about anything else? That’s why we 
                made Shack — a place where people talk about shacks, together.</p>
                <Link to='/signup'><button>TRY FOR FREE</button></Link> 
            </div>
            <div className="ani-row-1-col-2">
                <img className="splash-shack" src={window.splash_shack_1URL} />
                <p>Insert picture 2</p>
                <p>Insert animation</p>
            </div>
        </div>
        <div className="animation-row-2">
            <h1>A better way to talk Shack</h1>
            <p>Unlike real life, conversations in Shack are all about shacks. 
                Norwegian Shacks, shacks in Montana, you name it, we 
                talk about it it.</p>
        </div>
        <div className="animation-row-3">
            <p>Insert animation here</p>
        </div>
    </div>
)

export default SplashAnimation