var playerInstance = jwplayer("jwplayerDiv");

playerInstance.setup({
      file: "https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "8bcfc55359e24bd7ad1c5560a96ddd3c",
          "key": "b5dcf721ab522af92a9d3bf0bd55b596"
        }
      }
    });

  function switchToDRM1() {
    playerInstance.setup({
      file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "6a9e4204f3f8577ebf6e79b3b18573f8",
          "key": "5a8964c25a3a6eba7319f8e4c7efa3aa"
        }
      }
    });
  }

  // Function to switch to DRM 2
  function switchToDRM2() {
    playerInstance.setup({
      file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "06341bf3dd635e6ca5c71188d0210373",
          "key": "201e9857b48590ef73291e35f182a604"
        }
      }
    });
  }
