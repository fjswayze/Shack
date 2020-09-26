import React from 'react'; 

class ChannelForm extends React.Component{
    constructor(props){
        debugger
        super(props);
        this.state = this.props.channel; 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
   

    handleSubmit(e){
        e.preventDefault(); 
        this.props.action(this.state); 
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
    const {form} = this.props; 
        return(
         

                <div className="form">
                    <h3>{form}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name 
                            <br></br>
                            <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            /> 
                        </label>
                        <br></br>
                        <label>Description
                            <br></br>
                            <input
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            />
                        </label>
                        <br></br>
                        <button type="submit">{form}</button>
                    </form>
            
                </div>
           
        )
    }
}

export default ChannelForm; 