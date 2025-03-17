var playerInstance = jwplayer("jwplayerDiv");

playerInstance.setup({
      file: "https://av-ch-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "9ba3e153ef8956d6e2b0684fcf74f58f",
          "key": "dbc28cb5c6426080f984a5b6d436bb30"
        }
    },
      autostart: true
});

function switchTo1() {
    var playerInstance = jwplayer(); // Ensure you're referencing the correct player instance
    playerInstance.setup({      
      file: "https://video.detik.com/transtv/smil:transtv.smil/index.m3u8",
      image: "images/video.jpg",
      type: "hls",
      autostart: true
    });

    playerInstance.on('play', function() {
        playerInstance.setFullscreen(true);
    });

}

function switchTo2() {
    document.getElementById("jwplayerDiv").innerHTML = '<video id="shakaPlayer" controls autoplay></video>';

    var manifestUri = "https://op-group1-swiftservehd-1.dens.tv/h/h223/02.m3u8";
    var video = document.getElementById("shakaPlayer");

    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
        var player = new shaka.Player(video);

        player.getNetworkingEngine().registerRequestFilter((type, request) => {
            if (type === shaka.net.NetworkingEngine.RequestType.MANIFEST ||
                type === shaka.net.NetworkingEngine.RequestType.SEGMENT) {
                request.headers["User-Agent"] = "http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0";
                request.headers["Referer"] = "https://vidio.com";
            }
        });

        player.load(manifestUri).then(function () {
            console.log("The video has been loaded successfully with custom headers.");
            resizeShakaPlayer();
        }).catch(function (error) {
            console.error("Error loading video:", error);
        });  
          
    } else {
        console.error("Shaka Player is not supported on this browser.");
    }

}

  function switchTo3() {
    document.getElementById("jwplayerDiv").innerHTML = '<video id="shakaPlayer" controls autoplay></video>';

    var manifestUri = "https://app.mt2dc.com/misc?id=204";
    var video = document.getElementById("shakaPlayer");

    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
        var player = new shaka.Player(video);

        player.getNetworkingEngine().registerRequestFilter((type, request) => {
            if (type === shaka.net.NetworkingEngine.RequestType.MANIFEST ||
                type === shaka.net.NetworkingEngine.RequestType.SEGMENT) {
                request.headers["User-Agent"] = "http-user-agent=VidioPlayer/4.3.0-WITH_ADS";
                request.headers["Referer"] = "https://vidio.com";
            }
        });

        player.load(manifestUri).then(function () {
            console.log("The video has been loaded successfully with custom headers.");
            resizeShakaPlayer();
        }).catch(function (error) {
            console.error("Error loading video:", error);
        });
        video.addEventListener("playing", () => {
            requestFullscreen(video);
        });
    } else {
        console.error("Shaka Player is not supported on this browser.");
    }
}

  function switchTo4() {
      playerInstance.setup({
      file: "https://cdnjkt4.transvision.co.id:1000/live/master/4/4028c6856b8d2390016b9c3ee6c21d7c/manifest.mpd",
      image: "images/video.jpg",
      type: "dash",
      dash: {
         dashConfiguration: {
            xhrSetup: function (xhr) {
                xhr.setRequestHeader("dt-custom-data", "eyJ1c2VySWQiOiJyZWFjdC1qdy1wbGF5ZXIiLCJzZXNzaW9uSWQiOiIxMjM0NTY3ODkiLCJtZXJjaGFudCI6ImdpaXRkX3RyYW5zdmlzaW9uIn0=");
                        }
                    }
                },
      drm: {
            "widevine": {
                  "url": "https://lic-cubmux.konslet.workers.dev/4rr0w/play.wv"
            }
      },
      autostart: true
    });
      playerInstance.on("audioTracks", function(event) {
        let audioTracks = playerInstance.getAudioTracks();
        console.log("Available Audio Tracks:", audioTracks);

        if (audioTracks.length > 1) {
            // Select a specific audio track (e.g., index 1)
            playerInstance.setCurrentAudioTrack(1);
            console.log("Switched to audio track 1");
        } else {
            console.log("No alternative audio tracks available.");
        }
    });
  }

  function switchTo5() {
      playerInstance.setup({
      file: "https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/playlist.m3u8",
      image: "images/video.jpg",
      type: "hls",
      autostart: true
    });
  }

  function switchToExtra1() {
      playerInstance.setup({
      file: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "dc69b6159a0f9f0a4e03b3ff91cbacd5",
          "key": "d0dcbcd7723bc40df0bf34c9c092d51f"
        }
      },
      autostart: true
    });
  }

  function switchToExtra2() {
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
    }

        
     document.getElementById("jwplayerDiv").innerHTML = `
        <div class="plyr__video-embed" id="plyrPlayer">
            <iframe
                src="https://www.youtube.com/embed/yNKvkPJl-tg?autoplay=1&playsinline=1"
                allowfullscreen
                allow="autoplay"
            ></iframe>
        </div>
    `;


    const player = new Plyr("#plyrPlayer", {
        autoplay: true,
        controls: ["play", "volume", "fullscreen"]
    });

    player.on("ready", () => {
        requestFullscreen(document.getElementById("plyrPlayer"));
    });

}

function switchToYT(videoID) {
    console.log("Switching to YouTube video ID:", videoID);
    // Exit fullscreen if active before switching
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
    }

    // Replace content with Plyr player
    document.getElementById("jwplayerDiv").innerHTML = `
        <div class="plyr__video-embed" id="plyrPlayer">
            <iframe
                src="https://www.youtube.com/embed/${videoID}?autoplay=1&playsinline=1"
                allowfullscreen
                allow="autoplay"
            ></iframe>
        </div>
    `;

    // Initialize Plyr
    const player = new Plyr("#plyrPlayer", {
        autoplay: true,
        controls: ["play", "volume", "fullscreen"]
    });

    // Request fullscreen when the player is ready
    player.on("ready", () => {
        requestFullscreen(document.getElementById("plyrPlayer"));
    });
}


function resizeShakaPlayer() {
    let shakaContainer = document.getElementById("jwplayerDiv");
    let videoElement = document.getElementById("shakaPlayer");
    
    function adjustSize() {
        let width = shakaContainer.clientWidth;
        let height = width * (9 / 16); 
        videoElement.style.width = width + "px";
        videoElement.style.height = height + "px";
    }
    
    adjustSize();
    window.addEventListener("resize", adjustSize);
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}
