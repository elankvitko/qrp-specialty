module ApplicationHelper
  def active_class(link_path)
    url = link_path.split( "\">" )[ 1 ][ 0..-5 ]

    current_page?( url ) ? "active" : ""
  end
end
