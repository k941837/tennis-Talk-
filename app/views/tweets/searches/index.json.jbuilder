json.array! @tweets do |tweet|
  json.racket tweet.racket
  json.image  tweet.image
end