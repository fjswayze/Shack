export const fetchChannelMessages = (channelId) => {
    
    return $.ajax({
    url: `api/channels/${channelId}/messages`
    })
}



export const createMessage = (message) => (
    $.ajax({
    url: `api/messages/${message.id}`,
    method: 'POST',
    data: message
})
)

export const deleteMessage = (messageId) => (
    $.ajax({
    url: `api/messages/${messageId}`,
    method: 'DELETE'
}))


export const updateMessage = message => {
    return $.ajax({
        url: `api/messages/${message.id}`, 
        method: 'PATCH', 
        data: {message}
    })
}