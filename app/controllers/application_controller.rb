class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  # encode method with expiration time limit
  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  # decode method for token
  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  # method authorize request based on authorization header
  def authorize_request
    # grab auth header
    header = request.headers['Authorization']
    # split token from header
    header = header.split(' ').last if header
    begin
      # decode to pull user info from token
      @decoded = decode(header)
      # set instance variable to using user_id
      @current_user = User.find(@decoded[:id])
    # if token not found or invalid, render mesasge 
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

end
