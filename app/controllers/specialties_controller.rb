class SpecialtiesController < ApplicationController
  def index
  end

  def get_article
    article = params[ "article" ]
    render partial: article, layout: false
  end
end
