import React from 'react'; 
import {Link} from 'react-router-dom'
class ChannelIndexItem extends React.Component{
    constructor(props){
        super(props); 
        this.state = (
            {show: false,
            joinable: this.props.joinable
            
            }
            
            
            )
        this.handleMouseOver = this.handleMouseOver.bind(this); 
        this.handleMouseLeave = this.handleMouseLeave.bind(this); 
        this.handleJoin = this.handleJoin.bind(this); 
        this.handleLeave = this.handleLeave.bind(this); 
    }

    handleMouseOver(e){
        this.setState({ show: true})
    }

    handleMouseLeave(e){
        this.setState({ show: false })
    }

    handleJoin(){
        this.setState({joinable: false});
        this.props.createChannelMembership({ channel_id: this.props.channel.id, user_id: this.props.user.id }); 
    }

    handleLeave() {
        
        this.setState({ joinable: true })
        this.props.deleteChannelMembership(this.props.channel.id, this.props.user.id); 
       
    }

    render(){
    
    let length; 
    if(!this.props.channel.user_ids){
        length = 0
    }else{
        length= this.props.channel.user_ids.length
    }
        return(
            <div
                onMouseLeave={this.handleMouseLeave}
                onMouseOver={this.handleMouseOver}
            
            className='channel-index-item-outer-div'>
                    <Link
                     className="chanels-index-item"
                    to={`/channels/${this.props.channel.id}`}
                    >
                        <div>
                        <p className="chanels-index-item-name">{this.props.channel.name} {this.props.channel.description}</p>
                    <p className="chanels-index-item-members">{length} members</p>
                    </div>
                    </Link>  
                      
            {this.state.show && this.state.joinable ? ( 

                    <button 
                        onClick={this.handleJoin} className="channels-index-join-btn" >Join</button> )

             : this.state.show && !this.state.joinable ? (

                        <button onClick={this.handleLeave} className="channels-index-leave-btn" >Leave</button>

            ) : null
        }

            </div>
        )
    }
}

export default ChannelIndexItem; 



