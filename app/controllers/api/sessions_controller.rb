class Api::SessionsController < ApplicationController
  skip_before_action :confirm_authentication, only: [:create]
  
    # post '/login'
  def create
    user = User.find_by(ens_domain: params[:ens_domain])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {error: 'invalid ens_domain or password'}, status: :unauthorized
    end
  end

   # delete '/logout'
  def destroy
    session.delete(:user_id)
    head :no_content
  end
end
