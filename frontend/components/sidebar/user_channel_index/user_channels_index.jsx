import React from 'react'; 
import { Link } from 'react-router-dom';
import UCIDropdownContainer from './UCI_dropdown_container'; 
import UserDmsContainer from '../user_dms_index/user_dms_container'

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

    handleSelectedClick(channelNumber) {
        // let current = document.getElementsByClassName('selected-channel');
        // current[0].className = current[0].className.replace(' selected-channel', "");
        // document.getElementById('channel' + `${channelNumber}`).className += " active-channel"
        this.props.history.push(`/channels/${channelNumber}`)
    }
  

    render(){
        
        if(!this.props.user.username) return null; 
        let channelBrowser; 
        if(this.props.channelId === 'index'){
            channelBrowser = 
            
                <div className='channels-browser'>
                    <div className='channels-browser-inner'>
                    Channel Browser
                    </div>
                    </div>
        } else{
            <a></a>
        }
        let caret = this.state.show ? (
            <div className='caret-down2'>
            <i className="fas fa-caret-down"></i>
            </div>
        ) : (
            <div className='caret-right2'>
                <i id="caret-right" className="fas fa-caret-right"></i>
            </div>
        )
        const onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index 
        }
        let uniqueChannels = this.props.user.channel_ids.filter(onlyUnique); 

        if (!Object.values(this.props.channels)[uniqueChannels.length - 1]) return <div></div>
        

        let altArray = [];
        
        for (let i = 0; i < uniqueChannels.length; i++) {
            
            altArray.push(this.props.channels[uniqueChannels[i]]);
        }
        
        altArray = altArray.map((channel) => {
                if(channel){
                    return (<li key={channel.id} id={'channel' + `${channel.id}`} className="uci-li-ele" onClick={() => this.handleSelectedClick(channel.id)} ><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>)
                }
                
        })


        
        if(!this.props.channel.id) return(

            <div className="master-div">
                {channelBrowser}
                <div className="channels-index">
                   
                    <div className='title-and-info-link'>
                        <button
                            className="show-channels2"
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
                                    <UserDmsContainer />
                                </ul>

                            ) :



                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    <UserDmsContainer />
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
        for (let i = 0; i < uniqueChannels.length; i++ ){
            channelsArray.push(this.props.channels[uniqueChannels[i]]); 
        }
        channelsArray = channelsArray.map((channel) => {
        if(channel){
        if (channel.id === this.props.channel.id) {return <li key={channel.id} id={'channel' + `${channel.id}`} className="uci-li-ele active-channel" onClick={() => this.handleChannelClick(channel.id)}><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>}
        else {
            return <li key={channel.id} id={'channel' + `${channel.id}`} className="uci-li-ele" onClick={() => this.handleChannelClick(channel.id)} ><Link key={channel.id} className="ui-channel-link" to={`/channels/${channel.id}`}>{channel.name}</Link></li>
        }; 
        }
        })


    
        
        let selectedChannel = document.getElementsByClassName('active-channel')[0];
   
        return(
        <div className="master-div">
            <div className="channels-index">
    
                <div className='title-and-info-link'>
                    <button
                    className="show-channels2"
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
                                    <UserDmsContainer /> 
                                 </ul>
                         
                        ): 

                         
                                    
                                <ul
                                    className="user-channels-dropdown"
                                    onClick={e => e.stopPropagation()}
                                    style={{ position: 'absolute' }}
                                >
                                    <li key={selectedChannel.id} id={selectedChannel.id} className="uci-li-ele selected-channel" onClick={() => this.handleChannelClick(selectedChannel.id)} ><Link key={selectedChannel.id} className="ui-channel-link" to={`/channels/${selectedChannel.id}`}>{selectedChannel.innerText}</Link></li>
                                    <UserDmsContainer /> 
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