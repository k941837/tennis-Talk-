$(function() {

  var search_list = $(".contents.row");

  function appendTweet(tweet) {
    

    var html = `<div class="content_post" style="background-image: url('${tweet.image}');">
                  <div class="more">
                    <div class="detail">
                      <li>
                        <a class="racketname" data-method="get" href="/tweets/16">${tweet.racket}</a>
                      </li>
                    </div>
                  </div>
                  <span class="name">
                  </span>
              </div>`
    search_list.append(html);
   }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }

  $(".search-input").on("keyup", function() {
    var input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/searches',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets) {
      search_list.empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })

    .fail(function() {
      alert('error');
    });
  });
});