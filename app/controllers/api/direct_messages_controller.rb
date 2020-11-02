class Api::DirectMessagesController < ApplicationController 

        skip_before_action :verify_authenticity_token 
     
    
    def index   
        if params[:user_id]
            @direct_messages = current_user.direct_messages 
            render :index 
        else 
            @direct_messages = DirectMessage.all 
            render :index 
        end
    end


    def show  
        @direct_message = DirectMessage.find(params[:id])
        render 'api/direct_messages/show'
    end

    def create 
        @direct_message = DirectMessage.new(direct_message_params)
        debugger
        if @direct_message.save   
            debugger
            params[:direct_message][:user_ids].each do |id| 
                 @membership = DMMembership.new({DM_id: @direct_message.id, user_id: id}) 
                 @membership.save 
             end
            render :show 
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def update 
        @direct_message = DirectMessage.find(params[:id])
        if @direct_message.update(direct_message_params)
            render :show 
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def destroy 
        @direct_message = DirectMessage.find(params[:id])
        if @direct_message.destroy 
            render :show 
        else
             render json: @direct_message.errors.full_messages, status: 422
        end
    end


    private 

    def direct_message_params
        debugger
        params.require(:direct_message).permit(:admin_id, :user_ids)
    end
end
