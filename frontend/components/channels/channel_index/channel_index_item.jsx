import React from 'react'; 

class ChannelIndexItem extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.channel.name}</p>
                <p>{this.props.channel.user_ids.length}</p>
                <p>{this.props.channel.description}</p>
                <button onClick={() => this.props.editChannel(this.props.channel)}>Join</button>
            </div>
        )
    }
}

export default ChannelIndexItem; 