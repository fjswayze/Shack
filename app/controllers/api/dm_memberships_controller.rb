class Api::ChannelMembershipsController < ApplicationController 

        # skip_before_action :verify_authenticity_token 

    def index 
        @dm_memberships = DMMembership.all 
        render :index
    end


    def create 
        @dm_membership = DMMembership.new(dm_membership_params)
        if @dm_membership.save 
            @user = User.find(@dm_membership.user_id) 
            @user.direct_messages_ids.push(@dm_membership.id)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end


    def hack_destroy 
         
        @dm_membership = DMMembership.find_by(user_id: params[:user_id], direct_message_id: params[:direct_message_id]); 
        
        if @dm_membership.destroy 
            render :show 
        else
             render json: @dm_membership.errors.full_messages, status: 422
        end
    end


    private 

    def dm_membership_params
        params.require(:dm_membership).permit(:user_id, :direct_message_id)
    end
end
