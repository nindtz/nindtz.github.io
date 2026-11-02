# QRIS Soundbox — website & web flasher

Static site for GitHub Pages: product page, Google Play badge linking to
SoundboxBridge (`id.nindita.qrissbbridge`), and a browser flasher powered by
[ESP Web Tools](https://esphome.github.io/esp-web-tools/).

## Layout

```
index.html            page (ID/EN toggle)
manifest-397.json     flasher manifest, 3.97" board
manifest-154.json     flasher manifest, 1.54" V2 board
firmware/             put the .merged.bin files here
.nojekyll             tells Pages to serve files as-is
```

## 1. Export the firmware (Arduino IDE 2, esp32 core 3.x)

1. Select the right board/partition settings for the model.
2. **Sketch → Export Compiled Binary**.
3. In `build/<board>/` take `qris_soundbox.ino.merged.bin`
   (bootloader + partitions + app in one image, flashed at offset 0).
4. Copy it to `firmware/soundbox-397.merged.bin` (or `-154`).
5. Bump `"version"` in the matching manifest.

arduino-cli equivalent:

```
arduino-cli compile --fqbn esp32:esp32:esp32s3 --export-binaries qris_soundbox
```

If your core doesn't produce a `.merged.bin`, either merge with
`esptool.py --chip esp32s3 merge_bin -o soundbox-397.merged.bin 0x0 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 app.bin`
or list the four parts with those offsets in the manifest.

## 2. Publish on GitHub Pages

1. Create a public repo (e.g. `qris-soundbox`) and push these files.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. Site appears at `https://<username>.github.io/qris-soundbox/`.
4. Optional custom domain: add it under Settings → Pages and tick *Enforce HTTPS*
   (Web Serial only works on HTTPS).

## Notes

- Flashing needs Chrome/Edge on desktop; phones and Safari/Firefox show the
  "unsupported" message.
- `new_install_prompt_erase: true` offers a full erase on first install.
- Google Play badges are loaded from Google's official URLs; don't modify them.
  You can download them into the repo if you prefer self-hosting.
- Test locally with `python3 -m http.server` and open `http://localhost:8000`
  (localhost counts as a secure context).
