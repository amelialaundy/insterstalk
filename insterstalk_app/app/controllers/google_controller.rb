class GoogleController < ApplicationController
  def address_search
    no_spaces_search_address = (params[:address]).gsub(" ", "%20")
    @google_query = Google.search(no_spaces_search_address)
    @results = @google_query['results']
    json @results
  end
end
