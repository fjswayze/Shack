import { Link } from 'react-router-dom';
import React from 'react';


class SplashHeader extends React.Component{
    
    reload(){
        window.location.reload(); 
    }

    render(){
        const loggedIn = Boolean(this.props.session.id); 
        const buttons = loggedIn ? (
            <Link className="right" to={`/channels/${this.props.user.channel_ids[0]}`}><button>Launch Slack</button></Link>
        ) : (
            <div>
                    <Link className="right" to='/signin'>Sign In</Link>
                    <Link className="right" to='/signup'><button>TRY FOR FREE</button></Link>
            </div>
    
        )
        return(
            <div className="splash-header">
                <div className="logo-and-links-header">
                <img onClick={this.reload} className="shack-logo" src={window.shackURL} />
                <a href="https://www.linkedin.com/in/francis-swayze-729159133/">LinkedIn</a>
                <a href="https://github.com/fjswayze">GitHub</a>
                </div>
                    {buttons}
            </div>
        )
    }
}

export default SplashHeader; 