import * as MessageUtil from '../util/messages_api_util'; 

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'; 
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'; 
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'; 

export const receiveMessage = message => {
    
    return {
    type: RECEIVE_MESSAGE, 
    message 
    }
}

const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES, 
    messages
})

const removeMessage = messageId => ({
    type: REMOVE_MESSAGE, 
    messageId
})


export const fetchChannelMessages = (channelId) => dispatch => {
    
  return MessageUtil.fetchChannelMessages(channelId)
        .then(messages => dispatch(receiveMessages(messages)))
}

export const createMessage = message => dispatch => (
    MessageUtil.createMessage(message)
        .then(createdMessage => dispatch(receiveMessage(createdMessage)))
)

export const updateMessage = message => dispatch => (
    MessageUtil.updateMessage(message)
        .then(updatedMessage => dispatch(receiveMessage(updatedMessage)))
)

export const deleteMessage = messageId => dispatch => (
    MessageUtil.deleteMessage(messageId)
        .then(() => dispatch(removeMessage(messageId)))
)