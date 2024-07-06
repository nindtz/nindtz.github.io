var playerInstance = jwplayer("jwplayerDiv");



playerInstance.setup({
      file: "https://melon-live-cdn.mncnow.id/live/eds/MNCSports3-HD/sa_dash_vmx/MNCSports3-HD.mpd",
      image: "images/video.jpg",
      type: "dash",
      "drm": {
      "widevine": {
            "headers": [
            {
            "name": "referer",
            "value": "https://www.visionplus.id/"
            }],
            "url": "https://mrpw.ptmnc01.verspective.net/?deviceId=NzEwNGYwNjEtNzBjNC0zNmJjLTkwZGMtMGQ1Yjg3ZWJhZTBi"
            }
          }
    });


/*
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
*/
