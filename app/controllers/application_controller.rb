class ApplicationController < ActionController::Base

  
    # These are available for all views
    helper_method :current_user, :logged_in?
  
    def login!(user)
      # setting the session token in the browswer
      session[:session_token] = user.session_token
    end
  
    def logout!
      # new session token in the db
      current_user.reset_session_token!
  
      # Reset the session token in the browser
      session[:session_token] = nil
    end
  
    def current_user
      # no session token means not logged in
      return nil unless session[:session_token]
  
      # get the current user or if nil will find by the current browser token
      @current_user ||= User.find_by_session_token(session[:session_token])
    end
  
    def logged_in?
      !current_user.nil?
    end
    
    def require_logged_out
      # Prevent logged-in users from going to logged out pages
      redirect_to user_url(current_user) if logged_in?
    end
  
    def require_logged_in
      # Prevent logged-out users from logged in pages
      redirect_to new_session_url unless logged_in?
    end
end
  