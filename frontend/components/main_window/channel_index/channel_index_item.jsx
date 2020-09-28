import React from 'react'; 

class ChannelIndexItem extends React.Component{
    

    render(){
        
    let length; 
    if(!this.props.channel.user_ids){
        length = 0
    }else{
        length= this.props.channel.user_ids.length
    }
        return(
                    <div className="chanels-index-item">
                        <div>
                        <p className="chanels-index-item-name">{this.props.channel.name} {this.props.channel.description}</p>
                    <p className="chanels-index-item-members">{length} members</p>
                    </div>
            
                        <button onClick={() => this.props.createChannelMembership({channel_id: this.props.channel.id, user_id: this.props.user.id})}>Join</button>
                    </div>  
        )
    }
}

export default ChannelIndexItem; 



