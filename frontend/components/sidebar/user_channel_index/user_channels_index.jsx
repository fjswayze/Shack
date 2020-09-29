import React from 'react'; 
import { Link } from 'react-router-dom';
import UCIDropdownContainer from './UCI_dropdown_container'; 

class UserChannelsIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true 
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
        let caret = this.state.show ? (
            <i className="fas fa-caret-down"></i>
        ) : (
                <i id="caret-right" class="fas fa-caret-right"></i>
        )
        
        if(!this.props.channels[0]) return <div></div>; 
        let channelsArray; 
        channelsArray = this.props.channels

        let selectedChannels; 
        if (this.props.channel) {
        selectedChannels = channelsArray.filter(channel => (this.props.user.channel_ids.includes(channel.id) && this.props.channel.id != channel.id)); 
        let activeChannel = this.props.channel; 
        delete selectedChannels[activeChannel.id]; 
        selectedChannels.unshift(activeChannel); } else {
            selectedChannels = channelsArray.filter(channel => (this.props.user.channel_ids.includes(channel.id)))
        }
        return(
        <div className="master-div">
            <div className="channels-index">
    
                <div className='title-and-info-link'>
                    <button
                    className="show-channels"
                    style={{position: 'relative'}}
                    onClick={this.handleClick}
                    > 
                           
                          
                    {caret}

            
                        {this.state.show ? (
                            
                                <ul
                                className="user-channels-dropdown"
                                onClick={e => e.stopPropagation()}
                                style={{position: 'absolute'}}
                                >
                                {selectedChannels.map(channel =>(
            
                                 
                                    <li className= "uci-li-ele"><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>
                                    
                                   
                            
                                ))}   
                             
                                 </ul>
                         
                        ): 

                         
                                    
                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    <li className="uci-li-ele"><Link className="ui-channel-link" to={`/channels/${selectedChannels[0].id}`}>{selectedChannels[0].name}</Link></li>
                            
                                </ul>
                          
                        
                             

                        }
               
                    </button>
                        <div className='channels-title-uci'>Channels</div>  
                    </div>
                        <div className="fake-button">
                            <UCIDropdownContainer />
                        </div>

                
                
           
                    {/* <Link className="ui-channel-link-first" to={`/channels/${channelsArray[0].id}`}>{channelsArray[0].name}</Link> */}
                </div>
        </div>
        )
    }
}

export default UserChannelsIndex; 