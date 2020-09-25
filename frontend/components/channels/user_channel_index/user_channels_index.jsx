import React from 'react'; 
import { Link } from 'react-router-dom';

class UserChannelsIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false 
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.user.channel_ids.forEach(channel => (
            this.props.fetchChannel(channel)
        ))
    }

    handleBlur(e){
        this.setState({show: false})
    }
    handleClick(){
        this.setState({show: !this.state.show})
    }
    render(){
        debugger
        return(
            <div className="channels-index">
            <div className="arrows-channels">
                    

            </div>
          
                
            <button
            style={{position: 'relative'}}
            onBlur={this.handleBlur}
            onClick={this.handleClick}
            > 
            <p> <i className="fas fa-caret-down"></i> Channels</p> 
            <p className="first-channel">{this.props.channels[0].name}</p>
                {this.state.show ? (
                    <div>
                    <ul
                    className="user-channels-dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{position: 'absolute'}}
                    >
                        {this.props.channels.slice(1).map(channel =>(
                            <Link to={`/channels/${channel.id}`}>{channel.name}</Link>
                        ))}
                         
                    </ul>
                        </div>
                ): null}
            </button>
            </div>
        )
    }
}

export default UserChannelsIndex; 