import * as APIUtil from '../util/direct_message_api_util';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES'
export const REMOVE_DIRECT_MESSAGE = 'REMOVE_DIRECT_MESSSAGE'; 
export const RECEIVE_USERS_DIRECT_MESSAGES = 'RECEIVE_USERS_DIRECT_MESSAGES'; 


const receiveDirectMessages = directMessages => ({
    type: RECEIVE_DIRECT_MESSAGES, 
    directMessages
})

const receiveDirectMessage = directMessage => ({
    type: RECEIVE_DIRECT_MESSAGE,
    directMessage
})

const removeDirectMessage = directMessageId => ({
    type: REMOVE_DIRECT_MESSAGE, 
    directMessageId
})

const receiveUsersDirectMessages = (userId, directMessages) => ({
    type: RECEIVE_USERS_DIRECT_MESSAGES,
    directMessages, 
    userId
})


export const fetchDirectMessages = () => dispatch => (
    APIUtil.fetchDirectMessages()
        .then(directMessages => dispatch(receiveDirectMessages(directMessages)))
)

export const fetchUserDirectMessages = (userId) => dispatch => (
    APIUtil.fetchUserDirectMessages(userId)
        .then(directMessages => dispatch(receiveUsersDirectMessages(userId, directMessages)))
)

export const fetchDirectMessage = directMessageId => dispatch => (
    APIUtil.fetchDirectMessage(directMessageId)
        .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
)

export const createDirectMessage = directMessage => dispatch => (
    APIUtil.createDirectMessage(directMessage)
        .then(createdDirectMessage => dispatch(receiveDirectMessage(createdDirectMessage)))
)

export const updateDirectMessage = directMessage => dispatch => (
    APIUtil.updateDirectMessage(directMessage)
        .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
)

export const deleteDirectMessage = directMessageId => dispatch => (
    APIUtil.deleteDirectMessage(directMessageId)
        .then(() => dispatch(removeDirectMessage(directMessageId)))
)

