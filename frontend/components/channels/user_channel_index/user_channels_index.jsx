import React from 'react'; 
import { Link } from 'react-router-dom';

class UserChannelsIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.user.channel_ids.forEach(channel => (
            this.props.fetchChannel(channel)
        ))  
    }


    handleClick(){
        this.setState({show: !this.state.show})
    }
    render(){
        let channelsArray; 
        if(!this.props.channels[0]){
            channelsArray = [1, 2]
        } else{
            channelsArray = this.props.channels; 
        }
        return(
        <div className="master-div">
            <div className="channels-index">
            <div>

                
            </div>
            <div className="title-and-info-link">
            <button
            style={{position: 'relative'}}
            onClick={this.handleClick}
            > 
               
                    <p className="channels-title"> <i className="fas fa-caret-down"></i> Channels</p>      
            
                {this.state.show ? (
    
                    <ul
                    className="user-channels-dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{position: 'absolute'}}
                    >
                        {channelsArray.slice(1).map(channel =>(
                            <Link classname="ui-channel-link" Link to={`/channels/${channel.id}`}><p>{channel.name}</p></Link>
                        ))}      
                    </ul>
                ): null}
            </button>
                <div className="fake-button">
                    <Link to="/channels/index/">+</Link> 
                </div>
            </div>
         <p className="first-channel"> <Link Link to={`/channels/${channelsArray[0].id}`}><p>{channelsArray[0].name}</p></Link></p>
            </div>
            
        </div>
        )
    }
}

export default UserChannelsIndex; 