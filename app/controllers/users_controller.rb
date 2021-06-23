class UsersController < ApplicationController

  # POST /users
  def create
    @user = User.new(user_params)

  if @user.save
      @token = encode({ id: @user.id   })
      render json: {
        # remove digest from being sent to front-end
        user: @user.attributes.except('password_digest'),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :first_name, :last_name, :password)
    end
end
