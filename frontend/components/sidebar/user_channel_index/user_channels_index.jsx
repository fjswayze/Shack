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

    handleChannelClick(channelNumber){
        let current = document.getElementsByClassName('active-channel'); 
        current[0].className = current[0].className.replace(' active-channel', ""); 
        document.getElementById('channel' + `${channelNumber}`).className += " active-channel"
        this.props.history.push(`/channels/${channelNumber}`)
    }

  

    render(){
        let caret = this.state.show ? (
            <i className="fas fa-caret-down"></i>
        ) : (
                <i id="caret-right" class="fas fa-caret-right"></i>
        )

        if (!Object.values(this.props.channels)[this.props.user.channel_ids.length - 1]) return <div></div>


        let altArray = [];
        for (let i = 0; i < this.props.user.channel_ids.length; i++) {
            
            altArray.push(this.props.channels[this.props.user.channel_ids[i]]);
        }
        altArray = altArray.map((channel) => {
            
                return (<li id={'channel' + `${channel.id}`} className="uci-li-ele" onClick={() => this.handleChannelClick(channel.id)} ><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>)
        })


        
        if(!this.props.channel.id) return(
            <div className="master-div">
                <div className='channels-browser'>Channel Browser</div>
                <div className="channels-index">

                    <div className='title-and-info-link'>
                       
                        <button
                            className="show-channels"
                            style={{ position: 'relative' }}
                            onClick={this.handleClick}
                        >
                            

                            {caret}


                            {this.state.show ? (

                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    {altArray}

                                </ul>

                            ) :



                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >

                                </ul>




                            }

                        </button>
                        <div className='channels-title-uci'>Channels</div>
                    </div>
                    <div className="fake-button">
                        <UCIDropdownContainer />
                    </div>




                </div>
            </div>


        ); 



      
        let channelsArray = []; 
        for(let i = 0; i < this.props.user.channel_ids.length; i++ ){
            channelsArray.push(this.props.channels[this.props.user.channel_ids[i]]); 
        }
        channelsArray = channelsArray.map((channel) => {
        if (channel.id === this.props.channel.id) {return <li id={'channel' + `${channel.id}`} className="uci-li-ele active-channel" onClick={() => this.handleChannelClick(channel.id)}><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>}
        else {
            return <li id={'channel' + `${channel.id}`} className="uci-li-ele" onClick={() => this.handleChannelClick(channel.id)} ><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>
        }; 
        })


    
        
        let selectedChannel = document.getElementsByClassName('active-channel')[0];
   
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
                                {channelsArray}   
                             
                                 </ul>
                         
                        ): 

                         
                                    
                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    <li id={selectedChannel.id} className="uci-li-ele selected-channel" onClick={() => this.handleChannelClick(selectedChannel.id)} ><Link key={selectedChannel.id} className="ui-channel-link" to={`/channels/${selectedChannel.id}`}>{selectedChannel.innerText}</Link></li>
                            
                                </ul>
                          
                        
                             

                        }
               
                    </button>
                        <div className='channels-title-uci'>Channels</div>  
                    </div>
                        <div className="fake-button">
                            <UCIDropdownContainer />
                        </div>

                
                
           
                </div>
        </div>
        )
    }
}

export default UserChannelsIndex; 