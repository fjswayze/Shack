import React from 'react'; 
import DMSearchFilter from './DM_search_filter'; 
import FilteredDMUsers from './filtered_DM_users'; 

class DMForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            word: '',
            setWord: '',
            filterDisplay: [],
            setFilterDisplay: [],
        }
        this.handleChange = this.handleChange.bind(this); 
    }

    componentDidMount(){
        this.props.fetchUsers()
    }
   

    handleChange(e){
        this.setState({ word: e });
        let oldList = Object.values(this.props.users).map(user => (
            {
                name: user.username.toLowerCase(),
                id: user.id
            }
        ));

        if (this.state.word !== "") {
            let newList = [];
            newList = oldList.filter(user =>
                user.name.includes(this.state.word.toLowerCase())
            );
            this.setState({ filterDisplay: newList });
        } else {
            this.setState({
                filterDisplay: ([])
            })
        }
    }

    render(){
        return(
            <div className="all-users-index">
                <h3>Send a Direct Message </h3>
                

                <DMSearchFilter
                    value={this.state.word}
                    handleChange={e => this.handleChange(e.target.value)}
                />
                <FilteredDMUsers
                    currentUser={this.props.user}
                    users={ this.state.filterDisplay}
                    createDirectMessage={this.props.createDirectMessage}
                    createDMMembership={this.props.createDMMembership}
                    closeModal={this.props.closeModal}
                />

            </div>
        )
    }
}

export default DMForm; 