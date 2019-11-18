class Tweets::SearchesController < ApplicationController
  def index
    # @tweets = Tweet.search(params[:keyword])
    @tweets = Tweet.where('racket LIKE ?', "%#{params[:keyword]}%")
  end
end
