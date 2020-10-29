import React from 'react'; 

class EditMessageForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = this.props.message;
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this); 
    }

    handleCancel(id) {
        let hide = document.getElementById('hide-div' + `${id}`); 
        let li = document.getElementById('message-li' + `${id}`); 
        let messageTime = document.getElementById('username-and-timestamp-div' + `${id}`);
        let body = document.getElementById('message-body-div' + `${id}`);
        let edit = document.getElementById('message-edit-div' + `${id}`);
        let tools = document.getElementById('message-actions-div' + `${id}`)
        hide.style.overflow = 'hidden';
        hide.style.height = '0px';
        hide.style.width = '0px';
        hide.style.visibility = 'hidden'; 
        li.style.backgroundColor = 'white'
        messageTime.style.height = 'auto';
        messageTime.style.width = 'auto'

        tools.style.height = 'auto';
        tools.style.width = 'auto'; 

        body.style.visibility = 'visible';
        body.style.height = 'auto';
        body.style.width = 'auto';
        
        edit.style.visibility = 'hidden';
        edit.style.height = '0px';
        edit.style.width = '0px';
    }

    handleSubmitEdit(e) {
        e.preventDefault();
        this.props.editMessage(this.state);
        this.handleCancel(this.state.id)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div id={'message-edit-div' + `${this.state.id}`} className='message-edit-div'>
                <form onSubmit={this.handleSubmitEdit}>
                    <textarea 
                    value={this.state.body}
                    onChange={this.update('body')}
                    >

                    </textarea>
                    <br></br>
                    <button onClick={() => this.handleCancel(this.state.id)} className='edit-cancel'>Cancel</button>
                    <button type='submit' className='edit-submit'>Save Changes</button>
                </form>

            </div>
        )
    }

}

export default EditMessageForm; 