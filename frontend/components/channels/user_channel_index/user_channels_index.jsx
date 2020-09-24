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

    handleBlur(e){
        this.setState({show: false})
    }
    handleClick(){
        this.setState({show: !this.state.show})
    }
    render(){
        return(
            <div>
                <h3>Channels</h3>
            <button
            style={{position: 'relative'}}
            onBlur={this.handleBlur}
            onClick={this.handleClick}
            >
                {this.state.show ? (
                    <div>
                    <ul
                    className="dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{position: 'absolute'}}
                    >
                            {this.props.channelIds.map(id => (
                                <Link to={`/channels/${id}`}>{this.props.channels[id].name}</Link>
                            ))}
                    </ul>
                        </div>
                ): null}
            </button>
            </div>
        )
    }
}

{/* onClick="fetchChannels()" <Link to ChannelsIndex></Link> */ }
export default UserChannelsIndex; 