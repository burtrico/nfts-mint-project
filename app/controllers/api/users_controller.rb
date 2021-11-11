class Api::UsersController < ApplicationController
    skip_before_action :confirm_authentication
      
    def index
      users = User.all
      render json: users
    end

    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { user: 'not logged in' }, status: :unauthorized
      end
    end
  
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

    def update
      user = User.find_by(id: params[:id])
      if user.update(eth_params)
        render json: user, status: :ok
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

    # def update
    #   if current_user.update(update_user_params)
    #     render json: current_user, status: :created
    #   else
    #     render json: current_user.errors, status: :unprocessable_entity
    #   end
    # end

        # def destroy
    #   user = current_user.votes.find_by(id: params[:id])
    #   user.destroy
    #   render json: user, status: :ok
    # end
  
    private
  
    # ens_domain replaces our standard username
    def user_params
      params.permit(:ens_domain, :wallet_address, :password, :password_confirmation, :ethereum)
    end

    # Only allowed to update the "ethereum" amount that the current user holds
    def eth_params
      params.permit(:ethereum)
    end

    # def update_user_params
    #   params.permit(:profile_picture_url, :profile_picture_thumbnail_url)
    # end


end
