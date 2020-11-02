class Api::ChannelsController < ApplicationController 

        skip_before_action :verify_authenticity_token 
     
    
    def index  

        if params[:user_id]
            @channels = current_user.channels 
            render :index 
        else 
            @channels = Channel.all 
            render :index 
        end
    end

    def show  
        @channel = Channel.find(params[:id])
        render 'api/channels/show'
    end

    def create 
         
        @channel = Channel.new(channel_params)
       
        
        if @channel.save 
             @membership = ChannelMembership.new({channel_id: @channel.id, user_id: @channel.admin_id}) 
             @membership.save  
            render :show 
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update 
        @channel = Channel.find(params[:id])
        if @channel.update(channel_params)
            render :show 
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy 
        @channel = Channel.find(params[:id])
        if @channel.destroy 
            render :show 
        else
             render json: @channel.errors.full_messages, status: 422
        end
    end


    private 

    def channel_params
        debugger 
        params.require(:channel).permit(:name, :description, :admin_id, :private, :user_ids)
    end
end
