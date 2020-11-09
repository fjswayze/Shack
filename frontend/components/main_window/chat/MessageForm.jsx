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
        if(this.props.type === 'DM'){
            App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, user_id: this.props.user.id, username: this.props.user.username, messageable_id: this.props.page.id, messageable_type: 'DirectMessage' })
        } else{
            App.cable.subscriptions.subscriptions[0].speak({ body: this.state.body, user_id: this.props.user.id, username: this.props.user.username, messageable_id: this.props.page.id, messageable_type: 'Channel' })
        }
        this.setState({body: ""}); 
    }

    generateUserNames(){
        let userNameArray = [];

        this.props.page.user_ids.map(id => {
            if (this.props.users[id] && id !== this.props.user.id) {
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
        
    

    submitOnEnter(e) {
        
        if (e.which === 13) {
            e.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
            e.preventDefault();
        }
    }

    render(){
        if(!this.props.page) return null; 
        let placeholder; 
        if(this.props.page.user_ids.length > Object.values(this.props.users).length) return null; 
        
        if(this.props.type === 'DM'){
            placeholder = `Message ${this.generateUserNames()}`
        } else {
           placeholder = `Message ${this.props.page.name} `
        }; 
        
        const messageFormBtn = this.state.body === '' ? (
            <button className="message-form-btn-inactive" type="submit"><i className="far fa-paper-plane"></i></button>
        ) : (<button className="message-form-btn-active" type="submit"><i className="far fa-paper-plane"></i></button>)
        return(
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                <div className="fake-text-area">
                    <textarea
                    onKeyPress={this.submitOnEnter}
                    className="message-form-input"
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder={placeholder}
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