import React from 'react'; 

class DMInfo extends React.Component{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        this.props.fetchDM(this.props.dmId); 
        this.props.fetchDMUsers(this.props.dmId); 
    }


    generateUserNames() {

        let userNameArray = [];

        this.props.dm.user_ids.map(id => {
            if (this.props.users[id]) {
                userNameArray.push(this.props.users[id].username)
            }

        })

        let newString = '';
        for (let i = 0; i < userNameArray.length; i++) {
            if (i !== userNameArray.length - 1) { newString += userNameArray[i] + ', ' } else {
                newString += userNameArray[i]
            }
        }

        return newString;
    }


    render(){
        if(Object.values(this.props.dm).length === 0) return null; 
        
        if(Object.values(this.props.users).length < this.props.dm.user_ids.length) return null; 
        return(
            <div>
                <div className="info-div">
                    <div className="left-info">
                        <p className="workspace-name">Shack</p>

                       
                    </div>
                    <div className="right-info">
                    {this.generateUserNames()}
                    </div>
                </div>
            </div>
        )
    }
}


export default DMInfo; 