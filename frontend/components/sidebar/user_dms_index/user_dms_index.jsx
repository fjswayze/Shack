import React from 'react'; 


class UserDMsIndex extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            show: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserDirectMessages(this.props.user.id)
        this.props.user.direct_messages_ids.map(dm => {
            this.props.fetchDMUsers(dm)
        })
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }

    generateUserNames(dmId){
        let userNameArray = []; 
        debugger
        this.props.dms[dmId].user_ids.map(id =>{
            userNameArray.push(this.props.users[id].username)
        })
        
        return userNameArray; 
    }

    handleDMClick(dmNumber){
        let activeDM = document.getElementsByClassName('active-dm');
        activeDM[0].className = activeDM[0].className.replace(' active-dm', "")
        document.getElementById('dm' + `${dmNumber}`).className += " active-dm"; 
        this.props.history.push(`/dms/${dmNumber}`)
    }

    handleSelectedClick(dmNumber){
        this.props.history.push(`/dms/${dmNumber}`)
    }

    render(){
        if(!this.props.user.username) return null; 
        if(!this.props.dms[0] === 1) return null; 
        if(Object.values(this.props.user.direct_messages_ids).length === 0) return null;
        
        let caret = this.state.show ? (
            <div className='caret-down'>
            <i className="fas fa-caret-down"></i>
            </div>
        ) : (
            <div className='caret-right'>
                <i id="caret-right" class="fas fa-caret-right"></i>
            </div>
            )


        let dmsArray = Object.values(this.props.dms); 

        dmsArray = dmsArray.map((dm) => {
            return <li id={'dm' + ' ' + `${dm.id}`} className="udmi-li-ele active-dm" onClick={() => this.handleDMClick(dm.id)} >{this.generateUserNames(dm.id)}</li>
        })

        let selectedDm = document.getElementsByClassName('active-dm')[0]; 
        
        return(
            <div>
                <div>
                    <div className='margin-left-div'>
                        <button
                            className='user-dms-index-button'
                            style={{ position: 'relative' }}
                            onClick={this.handleClick}
                        >
                            {caret}
                        </button>
                        <button 
                        className='direct-message-button'
                        onClick={this.handleClick}>
                            Direct messages 
                        </button>
                        {this.state.show ? (
                            <ul>
                                {dmsArray}
                            </ul>
                        ) :
                            <ul >

                                <li id={selectedDm.id} className="udmi-li-ele" onClick={(() => this.handleDMClick(parseInt(selectedDm.id.split(" ")[1])))}>{this.generateUserNames(parseInt(selectedDm.id.split(" ")[1]))}</li>
                            </ul>

                        }
                      


                    </div>
                   
                </div>
            </div>
        )
    }

}

export default UserDMsIndex