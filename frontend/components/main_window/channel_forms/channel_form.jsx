import React from 'react'; 

class ChannelForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.channel; 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
   

    handleSubmit(e){
        
        e.preventDefault(); 
        this.props.action(this.state)
        this.props.closeModal; 
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
    const {form} = this.props; 
    let description; 
    if(form === 'Create a Channel'){
        description = 'Channels are where your team communicates. They are best when organized around a topic-- #shack roof ideas, for example. '
    } else {
        description = ''
    }
        return(
         

                <div className="form">
                    <h3>{form}</h3>
                    <p>{description}
                    </p>
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
                        <label>Description (optional)
                            <br></br>
                            <input
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            />
                        </label>
                        <br></br>

                    <div className="makeprivateandbutton">
                        <div className="makeprivatewords">
                        <label>Make Private</label>
                        <p>When a channel is set to private, it can only be viewed by invitation.</p>
                        </div>

        
                        <label className='private-switch'>
                            <input type='checkbox'
                            value={true}
                            onChange={this.update('private')}
                            ></input>
                            <span className="slider"></span>
                        </label>
                        
                        <div></div>
                    <div></div>
                    </div>
                        <br></br>
                    
                        <button className='channel-form-button' type="submit">{form.split(" ")[0]}</button>
                
                    </form>

            
                </div>
           
        )
    }
}

export default ChannelForm; 