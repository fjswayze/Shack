import React from 'react'; 


class Info extends React.Component{
    render(){
        return(
            <div>
                <h3>#2020-07-07-ny</h3>
                <p>59</p>
                {/* <p>{this.props.channel.name}</p> */}
                <button onClick={() => this.props.logout()}>Log Out</button>
            </div>
        )
   
    }
}

export default Info; 