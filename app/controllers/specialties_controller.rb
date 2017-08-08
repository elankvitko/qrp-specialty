class SpecialtiesController < ApplicationController
  def index
    if params[ "article" ]
      @article = params[ "article" ]
    end
  end

  def get_article
    article = params[ "article" ]
    render partial: article, layout: false
  end
end
