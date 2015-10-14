// project app js
google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(20);
  feed.load(function(result) {
    if (!result.error) {
      var $feedContainer = $('#feed');
      var feedId = 0;
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        $feedDiv = $('<div>');
        $feedDiv.addClass('col-md-4 feedDiv');
        feedId++;
        $feedInfo = $('<div>').addClass('div-info collapse').attr('id', feedId );
        $feedTitle = $('<h4>').addClass('div-toggle').html('<a href="#" data-toggle="collapse" data-target="#' + feedId + '">' + entry.title);

        $feedContent = $('<p>').append(entry.contentSnippet);
        $feedBtn = $('<p>').addClass('btn btn-danger').html('<a target="_blank" class="white" href="' + entry.link + '">' + 'Read More'); // window.open(this.entry.link);
        $feedDate = $('<small>').append(entry.publishedDate).addClass('pull-right');
        $feedInfo.append($feedContent, $feedBtn, $feedDate);
        $feedDiv.append($feedTitle, $feedInfo);
        $feedContainer.append($feedDiv);
       
        console.log(entry);
      } // end for loop
    }

  }); // end load
} // end initialize

google.setOnLoadCallback(initialize);
