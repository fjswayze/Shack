class Api::MessagesController < ApplicationController 
    skip_before_action :verify_authenticity_token 

    def index 
        
       
            @channel = Channel.find(params[:channel_id])
            @messages = @channel.messages 
           
    end
    

    def create 
         
        @message = Message.new(message_params)
         
        if @message.save 
            render :show 
        else
            render json: @message.errors.full_messages 
        end
    end

    def update 
        @message = Message.find(params[:id])
        if @message.update(message_params)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def destroy 
        @message = Message.find(params[:id])
        if @message.destroy 
            render :show 
        else
            render json: @message.errors.full_messages
        end
    end

    private 

    def message_params 
        params.require(:message).permit(:body, :messageable_id, :messageable_type, :user_id, :username)
    end
end
