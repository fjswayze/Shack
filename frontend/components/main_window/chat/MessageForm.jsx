import React from 'react'; 

class MessageForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {body: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault(); 
        App.cable.subscriptions.subscriptions[0].speak({message: this.state.body})
        this.setState({body: ""}); 
    }

    render(){
        const messageFormBtn = this.state.body === '' ? (
            <button className="message-form-btn-inactive" type="submit"><i class="far fa-paper-plane"></i></button>
        ) : (<button className="message-form-btn-active" type="submit"><i class="far fa-paper-plane"></i></button>)
        return(
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input
                    className="message-form-input"
                    type="textarea"
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder="Message (insert channel name) here"
                    />
                    <div className="message-form-btn-container">
                        <div></div>
                        {messageFormBtn}

                    </div>
                </form>
            </div>
        )
    }
}

export default MessageForm; 