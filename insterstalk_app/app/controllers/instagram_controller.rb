class InstagramController < ApplicationController
  def location_search
    @instragram_query = Instagram.find(params[:lat], params[:lng])
    @results = @instragram_query["data"]
    render json: @results
  end
end
