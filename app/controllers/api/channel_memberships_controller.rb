class Api::ChannelMembershipsController < ApplicationController 

        skip_before_action :verify_authenticity_token 

    def create 
        @channel_membership = ChannelMembership.new(channel_membership_params)
        if @channel_membership.save 
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end


    def destroy 
        @channel_membership = ChannelMembership.find(params[:id])
        if @channel_membership.destroy 
            render :show 
        else
             render json: @channel.errors.full_messages, status: 422
        end
    end


    private 

    def channel_membership_params
        params.require(:channel_membership).permit(:user_id, :channel_id)
    end
end
