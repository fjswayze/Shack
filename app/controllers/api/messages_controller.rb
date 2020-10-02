class Api::MessagesController < ApplicationController 
    skip_before_action :verify_authenticity_token 

    def index 
        if params[:messageable_type] = "channel"
            @channel = Channel.find(params[:messageable_id])
            @messages = @channel.messages 
            render :index 
        end
    end

    def create 
        debugger 
        @message = Message.new(message_params)
        if @message.save 
            render :show 
        else
            render json: @message.errors.full_messages 
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
        params.require(:message).permit(:messageable_id, :messageable_type)
    end
end
