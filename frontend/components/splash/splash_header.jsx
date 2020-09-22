import { Link } from 'react-router-dom';
import React from 'react';

const SplashHeader = () => (
        <div className="splash-header">
            
            <img className="shack-logo" src={window.shackURL} />
            <p className="shack-title">shack</p>  
       
       
            <div>
            <Link className="right" to='/signin'><button>SIGN IN</button></Link>
            <Link className="right" to='/signup'><button>TRY FOR FREE</button></Link>  
        </div> 
         </div>
)

export default SplashHeader; 