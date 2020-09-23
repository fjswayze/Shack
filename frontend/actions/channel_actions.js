import * as APIUtil from '../util/channel_api_util'; 
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'; 
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'


const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
})
const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel 
})

const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId
})

export const fetchChannels = () => dispatch => (
    APIUtil.fetchChannels()
        .then(channels => dispatch(receiveChannels(channels)))
); 

export const fetchChannel = (channelId) => dispatch => (
    APIUtil.fetchChannel(channelId)
        .then(channel => dispatch(receiveChannel(channel)))
); 

export const createChannel = channel => dispatch => (
    APIUtil.createChannel(channel)
        .then(createdChannel => dispatch(receiveChannel(createdChannel)))
); 

export const updateChannel = channel => dispatch => (
    APIUtil.updateChannel(channel)
        .then(updatedChannel => dispatch(receiveChannel(updatedChannel)))
); 

export const deleteChannel = channelId => dispatch => (
    APIUtil.deleteChannel(channelId)
        .then(() => dispatch(removeChannel(channelId)))
); 




