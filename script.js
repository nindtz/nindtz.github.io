var playerInstance = jwplayer("jwplayerDiv");



playerInstance.setup({
      file: "https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd",
      image: "https://getwallpapers.com/wallpaper/full/5/1/a/777858-1080p-resolution-wallpaper-3840x2160-for-meizu.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "8bcfc55359e24bd7ad1c5560a96ddd3c",
          "key": "b5dcf721ab522af92a9d3bf0bd55b596"
        }
      }
    });
