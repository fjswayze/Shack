
export const fetchDirectMessages = () => {
    return $.ajax({
        url: 'api/direct_messages'
    })
}

export const fetchUserDirectMessages = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/direct_messages`
    })
}

export const fetchDirectMessage= directMessageId => {
    return $.ajax({
        url: `api/direct_messages/${directMessageId}`
    })
}

export const createDirectMessage = direct_message => {
    debugger
    return $.ajax({
        url: 'api/direct_messages',
        method: 'POST',
        data: { direct_message }
    })
}

export const deleteDirectMessage = directMessageId => {
    
    return $.ajax({
        url: `api/direct_messages/${directMessageId}`,
        method: 'DELETE'
    })
}

export const updateDirectMessage = directMessage => {
    return $.ajax({
        url: `api/direct_messages/${directMessage.id}`,
        method: 'PATCH',
        data: { directMessage }
    })
}
