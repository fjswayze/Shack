export const fetchChannelMessages = (channelId) => ({
    url: `api/channels/${channelId}/messages`
})



export const createMessage = (message) => ({
    url: `api/messages/${message.id}`,
    method: 'POST',
    data: message
})

export const deleteMessage = (messageId) => ({
    url: `api/messages/${messageId}`,
    method: 'DELETE'
})
