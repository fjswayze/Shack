import React from 'react'; 
import { Link } from 'react-router-dom';
import UCIDropdownContainer from './UCI_dropdown_container'; 

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
        
        if(!this.props.channels[0]) return <div></div>; 
        let channelsArray; 
        channelsArray = this.props.channels
        
        let selectedChannels = channelsArray.filter(channel => (this.props.user.channel_ids.includes(channel.id))); 
        return(
        <div className="master-div">
            <div className="channels-index">
    
                <div className='title-and-info-link'>
                    <button
                    className="show-channels"
                    style={{position: 'relative'}}
                    onClick={this.handleClick}
                    > 
               
                        <p className='channels-title-uci'><i className="fas fa-caret-down"></i> Channels</p>      
            
                        {this.state.show ? (
                            <div className='user-channels-dropdown-div'>
                                <ul
                                className="user-channels-dropdown"
                                onClick={e => e.stopPropagation()}
                                style={{position: 'absolute'}}
                                >
                                {selectedChannels.map(channel =>(
            
                                    <>
                                    <Link  key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link>
                                    <br></br>
                                    </>
                            
                                ))}   
                             
                                 </ul>
                            </div>
                        ): 

                            <div className='user-channels-dropdown-div'>
                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    <Link className="ui-channel-link" to={`/channels/${selectedChannels[0].id}`}>{selectedChannels[0].name}</Link>
                            
                                </ul>
                            </div>
                        
                             

                        }
               
                    </button>
                        <div className="fake-button">
                            <UCIDropdownContainer />
                        </div>

                </div>
                
           
                    {/* <Link className="ui-channel-link-first" to={`/channels/${channelsArray[0].id}`}>{channelsArray[0].name}</Link> */}
                </div>
        </div>
        )
    }
}

export default UserChannelsIndex; 