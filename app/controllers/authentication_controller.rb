class AuthenticationController < ApplicationController
  # authorize_request passed down from application_controllerrails 
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    # find user based on provided username
    @user = User.find_by(username: login_params[:username])
    # ensure provided password matches encoded digest
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      # create token
      token = encode({id: @user.id})
      render json: {
        # hold back digest
        user: @user.attributes.except("password_digest"),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
