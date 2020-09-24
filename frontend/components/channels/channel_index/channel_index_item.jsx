import React from 'react'; 

class ChannelIndexItem extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.channel.name}</p>
            </div>
        )
    }
}

export default ChannelIndexItem; 