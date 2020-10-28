class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:channel_id])
    stream_for @channel if @channel
  end

  def speak(data)
    
    message = Message.create(body: data['body'], user_id: data['user_id'], messageable_id: data['messageable_id'], messageable_type: data['messageable_type'], username: data['username'])
    socket = {message: message}
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
