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

    player.on("ready", () => {
        const container = document.getElementById("plyrPlayer");

        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.mozRequestFullScreen) { // Firefox
            container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) { // Chrome, Safari, Opera
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) { // IE/Edge
            container.msRequestFullscreen();
        }
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
    } else {
        console.error("Shaka Player is not supported on this browser.");
    }
}

  function switchTo4() {
      playerInstance.setup({
      file: "https://cdnjkt4.transvision.co.id:1001/live/master/4/4028c685651d7bcc01651f0db0bf0097/manifest.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
            "widevine": {
                  "url": "https://lic-cubmux.konslet.workers.dev/4rr0w/play.wv"
            }
      },
      autostart: true
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
      file: "https://ssc-extra1-ak.akamaized.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "ecbc9e6fe6b145efb6658fb5cf7427f8",
          "key": "03c17e28911f71221acbc0b11f900401"
        }
      },
      autostart: true
    });
  }

  function switchToExtra2() {
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
