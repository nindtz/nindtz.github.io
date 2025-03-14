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
      file: "https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "d84c325f36814f39bbe59080272b10c3",
          "key": "550727de4c96ef1ecff874905493580f"
        }
      },
      autostart: true
    });

    playerInstance.on('play', function() {
        playerInstance.setFullscreen(true);
    });
}

  // Function to switch to DRM 2
  function switchTo2() {
      playerInstance.setup({
      file: "https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "8bcfc55359e24bd7ad1c5560a96ddd3c",
          "key": "b5dcf721ab522af92a9d3bf0bd55b596"
        }
      },
      autostart: true
    });
  }

  function switchTo3() {
    document.getElementById("jwplayerDiv").innerHTML = '<video id="shakaPlayer" controls autoplay></video>';

    var manifestUri = "https://app.mt2dc.com/misc?id=8237";
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

  function switchTo4() {
      playerInstance.setup({
      file: "https://ssc4-ak.akamaized.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "5c672f6b85a94638872d0214f7806ed4",
          "key": "bf8756fbb866ee2d5c701c2289dd8de3"
        }
      },
      autostart: true
    });
  }

  function switchTo5() {
      playerInstance.setup({
      file: "https://ssc5-ak.akamaized.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "c88b512b17ab4f6cb09eb0ff4a1056ed",
          "key": "adc08ee1c20a734972a55c9aebbd1888"
        }
      },
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
      playerInstance.setup({
      file: "https://ssc-extra2-ak.akamaized.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "4d89249bd4ca4ebc9e70443265f9507d",
          "key": "cf074ffd2646c9c2f8513b47fa57bc30"
        }
      },
      autostart: true
    });
  }

