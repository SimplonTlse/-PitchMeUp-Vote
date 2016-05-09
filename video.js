$(".video").hide();

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
var player = null;

window.initPlayer = function(){
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      player = new YT.Player('player', {
                  height: '300',
                  width: '500',
                  id: 'video',
                  videoId: 'dQw4w9WgXcQ',
                  events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                  }
            });
}

window.timeup = function(){  
      player.playVideo();
};

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
      event.target.playVideo();
      player.seekTo(43);
      player.playVideo();
      player.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
            player.pauseVideo();
            player.playVideo();
            setTimeout(stopVideo, 17000);
            done = true;
      }
}

function stopVideo() {
      player.stopVideo();
      window.location = "http://simplontlse.github.io/-PitchMeUp-Vote/chrono.html";
}
