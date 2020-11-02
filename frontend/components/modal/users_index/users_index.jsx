import React from 'react'
import FilteredUsers from './filtered_users'; 
import SearchFilter from './search_filter'; 

class UsersIndex extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            word: '',
            setWord: '',
            filterDisplay: [],
            setFilterDisplay: [],
        }
        this.handleChange = this.handleChange.bind(this); 

    }
    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.fetchChannel(this.props.channel);
        
    }

    handleChange(e){
        
        this.setState({word: e}); 
        let oldList = Object.values(this.props.users).map(user => (
            {name: user.username.toLowerCase(),
            id: user.id 
            }
        )); 
        
        if(this.state.word !== ""){
            let newList = []; 
            newList = oldList.filter(user =>
                user.name.includes(this.state.word.toLowerCase())
                ); 
                this.setState({filterDisplay: newList}); 
        } else {
            this.setState({
                filterDisplay:([])
            })
        }
    }

    render(){
       
        return(
           
                <div className="all-users-index">
                    <h3>Add people </h3>
                <h4>{this.props.channel.name}</h4>
        
                       <SearchFilter
                       value={this.state.word}
                       handleChange={e => this.handleChange(e.target.value)}
                       />
                       <FilteredUsers
                       user={this.props.user}
                       users={this.state.word.length < 1 ? [] : this.state.filterDisplay}
                       channel={this.props.channel}
                       createChannelMembership={this.props.createChannelMembership}
                       />
             
                </div>
         
        )
     }
    }

export default UsersIndex; 
