class AboutController < ApplicationController
  def index
    @article = params[ :article ]
  end
end
