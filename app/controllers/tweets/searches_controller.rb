class Tweets::SearchesController < ApplicationController
  def index
    # @tweets = Tweet.search(params[:keyword])
    @tweets = Tweet.where('racket LIKE ?', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end
end
