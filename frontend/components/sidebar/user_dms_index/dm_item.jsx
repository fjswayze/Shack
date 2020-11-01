import React from 'react'; 
import {Link} from 'react-router-dom'; 

class DMItem extends React.Component {
     
    constructor(props){
        
        super(props); 
    }

    componentDidMount(){
        
        this.props.fetchDMUsers(this.props.dm.id)
    }

    handleClick(){
        this.props.history.push(`/dms/${this.props.dm.id}`)
    }

    generateUserNames(dmId) {

        let userNameArray = [];

        this.props.dm.user_ids.map(id => {
            if (this.props.users[id]) {
                userNameArray.push(this.props.users[id].username)
            }

        })

        let newString = ''; 
        for(let i = 0; i < userNameArray.length; i ++){
            if(i !== userNameArray.length - 1) { newString += userNameArray[i] + ', ' } else{
                newString += userNameArray[i]
            }
        }
        
        return newString; 
    }

    render(){
        
        if(Object.values(this.props.users).length < this.props.dm.user_ids.length) return null; 
        return(
            <Link id={'dm' + ' ' + `${this.props.dm.id}`} className="udmi-li-ele"  to={`/dms/${this.props.dm.id}`}>{this.generateUserNames(this.props.dm.id)}</Link>

        )
    }
}

export default DMItem; 