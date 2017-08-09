class ContactController < ApplicationController
  def index
    if params[ "success" ]
      @contact_success = "true"
    end
  end

  def send_mail
    @first_name = params[ "first_name" ]
    @last_name = params[ "last_name" ]
    @city = params[ "city" ]
    @state = params[ "state" ]
    @phone = params[ "phone" ]
    @email = params[ "email" ]
    @message = params[ "message" ]
    ContactMailer.new_contact( @first_name, @last_name, @city, @state, @phone, @email, @message ).deliver_now
    redirect_to controller: 'contact', action: 'index', success: 'true'
  end
end
