class ContactMailer < ApplicationMailer
  default from: "support-sender@qrpgroup.com"

  def new_contact( first_name, last_name, city, state, phone, email, message )
    @first_name = first_name
    @last_name = last_name
    @city = city
    @state = state
    @phone = phone
    @email = email
    @message = message

    mail to: "no-reply@qrpgroup.com",
         subject: 'Specialty Inquiry'
  end
end
