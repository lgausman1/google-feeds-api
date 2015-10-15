// project app js
google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(20);
  feed.load(function(result) {
    if (!result.error) {
      var $feedContainer = $('#feed');
      // create a feed Id to reference for data-target value
      var feedId = 0;
      // loop through the feed
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        // build the content
        $feedDiv = $('<div>');
        $feedDiv.addClass('col-md-6 feedDiv');
        feedId++;
        $feedRow = $('<div>').addClass('row');
        // add the bootstrap accordion animation dynamically
        $feedInfo = $('<div>').addClass('div-info collapse').attr('id', feedId );
        $feedTitle = $('<h4 style="height: 40px;">').addClass('div-toggle').html('<a data-toggle="collapse" data-target="#' + feedId + '">' + entry.title);
        
        $feedPhoto = $('<img style="width: 360px;" src="' + entry.mediaGroups[0].contents[0].thumbnails[0].url + '">');
        $feedContent = $('<p>').append(entry.content);
        $feedBtn = $('<p>').addClass('btn btn-primary btn-sm').html('<a target="_blank" class="white" href="' + entry.link + '">' + 'Read More'); 
        $feedDate = $('<small>').append(entry.publishedDate).addClass('pull-right');
        $feedInfo.append($feedContent, $feedBtn, $feedDate);

        $feedDiv.append($feedTitle, $feedPhoto, $feedInfo);
        
        // load into the DOM
        $feedContainer.append($feedDiv);
        //console.log(entry);
        //console.log(entry.mediaGroups[0].contents[0].thumbnails[0].url);
      } // end for loop
    }

  }); // end load
} // end initialize

google.setOnLoadCallback(initialize);
