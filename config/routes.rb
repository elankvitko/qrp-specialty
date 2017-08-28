Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'home#index'

  get '/our-specialties', to: 'specialties#index', as: "specialties"
  get '/our-specialties/article', to: 'specialties#get_article', as: "get_specialty"
  get '/services', to: 'services#index', as: "services"
  get '/contact-us', to: 'contact#index', as: "contact"
  get '/enrollment-forms', to: 'enrollment#index', as: "enrollment"
  post '/contact/send_mail', to: 'contact#send_mail', as: "message"
  get '/about-us', to: 'about#index', as: "about"
  get '/340b', to: 'threeb#index', as: "assured"
  get '/pa', to: 'pa#index', as: "prior_auth"
end
