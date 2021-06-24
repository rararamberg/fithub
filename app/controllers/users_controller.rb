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

  # custom method to add user to class (PMVP)
  # def add_class 
  #   @fit_class = FitClass.find(params[:fit_class_id])
  #   @user = User.find(params[:id])

  #   @fit_class.user << @user
  #   @user.fit_classes << @fit_class
  #   render json: @user, include: :fit_classes
  # end

  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :first_name, :last_name, :password)
    end
end
