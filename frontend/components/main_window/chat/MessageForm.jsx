import React from 'react'; 

class MessageForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault(); 
        App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, user_id: this.props.user.id, username: this.props.user.username, messageable_id: this.props.channel.id, messageable_type: 'Channel'})
        this.setState({body: ""}); 
    }

    submitOnEnter(e) {
        
        if (e.which === 13) {
            e.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
            e.preventDefault();
        }
    }

    render(){
        if(!this.props.channel) return null; 
        const messageFormBtn = this.state.body === '' ? (
            <button className="message-form-btn-inactive" type="submit"><i class="far fa-paper-plane"></i></button>
        ) : (<button className="message-form-btn-active" type="submit"><i class="far fa-paper-plane"></i></button>)
        return(
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                <div className="fake-text-area">
                    <textarea
                    onKeyPress={this.submitOnEnter}
                    className="message-form-input"
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder={`Message ${this.props.channel.name} here`}
                    />
                </div>
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