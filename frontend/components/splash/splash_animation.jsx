import React from 'react'; 
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class SplashAnimation extends React.Component{
    render(){
        return(
            <div className="animation">
                <div className="animation-row-1">
                    <div className="ani-row-1-col-1">
                        <h1>Welcome to your new HQ</h1>
                        <p>Finding people to talk about shacks with can be hard…
                        but why would you talk about anything else? That’s why we
                made Shack — a place where people talk about shacks, together.</p>
                        <button onClick={() => 
                        this.props.action({email: 'test1997@gmail.com', password: 'hello1997'})
                        }>DEMO</button>
                    </div>
                    <div className="ani-row-1-col-2">
                        <img className="splash-shack-1" src={window.no_messageURL} />
                    </div>
                </div>
                <div className="animation-row-2">
                    <div className="animation-row-2-col1">
                        <img className="shack-channel-demo" src={window.shack_channelURL} />
                    </div>
                    <div className="animation-row-2-col-2">
                        <h1>A better way to talk Shack</h1>
                        <p>Unlike real life, conversations in Shack are all about shacks.
                        Norwegian Shacks, shacks in Montana, you name it, we
                talk about it it.</p>
                    </div>
                </div>
            </div >
        )
    }
}




export default SplashAnimation; 