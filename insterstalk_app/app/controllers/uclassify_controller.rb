class UclassifyController < ApplicationController
  def topic_search
    @uclassify_query = Uclassify.search(params[:search_query])
    @results = @uclassify_query
    render json: @results
  end
end
