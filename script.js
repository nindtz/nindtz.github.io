var playerInstance = jwplayer("jwplayerDiv");

// Proxy URL for bypassing CORS
const proxyUrl = "https://app.mt2dc.com/proxy?url=";

async function fetchManifestAndPlay(originalUrl, keyId, key) {
    try {
        // Fetch the manifest via proxy
        const proxyManifestUrl = proxyUrl + encodeURIComponent(originalUrl);
        const response = await fetch(proxyManifestUrl);

        if (!response.ok) {
            throw new Error(`Failed to load manifest: ${response.statusText}`);
        }

        // Convert response to text (modify manifest if needed)
        const manifestText = await response.text();

        // Set up JW Player with the **original URL** (not the proxy)
        playerInstance.setup({
            file: originalUrl, // Use the real manifest URL
            image: "images/video.jpg",
            type: "dash",
            drm: {
                "clearkey": {
                    "keyId": keyId,
                    "key": key
                }
            }
        });

        console.log("Manifest loaded successfully:", originalUrl);
    } catch (error) {
        console.error("Error fetching manifest via proxy:", error);
    }
}

// Load initial stream
fetchManifestAndPlay(
    "https://d1abp075u76pbq.cloudfront.net/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd",
    "9ba3e153ef8956d6e2b0684fcf74f58f",
    "dbc28cb5c6426080f984a5b6d436bb30"
);

// Functions to switch streams dynamically
function switchTo1() {
    fetchManifestAndPlay(
        "https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd",
        "d84c325f36814f39bbe59080272b10c3",
        "550727de4c96ef1ecff874905493580f"
    );
}

function switchTo2() {
    fetchManifestAndPlay(
        "https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd",
        "8bcfc55359e24bd7ad1c5560a96ddd3c",
        "b5dcf721ab522af92a9d3bf0bd55b596"
    );
}

function switchTo3() {
    fetchManifestAndPlay(
        "https://ssc3-ak.akamaized.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd",
        "7de5dd08ad8041d586c2f16ccc9490a1",
        "5e1503f3398b34f5099933fedab847ef"
    );
}

function switchTo4() {
    fetchManifestAndPlay(
        "https://ssc4-ak.akamaized.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd",
        "5c672f6b85a94638872d0214f7806ed4",
        "bf8756fbb866ee2d5c701c2289dd8de3"
    );
}

function switchTo5() {
    fetchManifestAndPlay(
        "https://ssc5-ak.akamaized.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd",
        "c88b512b17ab4f6cb09eb0ff4a1056ed",
        "adc08ee1c20a734972a55c9aebbd1888"
    );
}

function switchToExtra1() {
    fetchManifestAndPlay(
        "https://ssc-extra1-ak.akamaized.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd",
        "ecbc9e6fe6b145efb6658fb5cf7427f8",
        "03c17e28911f71221acbc0b11f900401"
    );
}

function switchToExtra2() {
    fetchManifestAndPlay(
        "https://ssc-extra2-ak.akamaized.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd",
        "4d89249bd4ca4ebc9e70443265f9507d",
        "cf074ffd2646c9c2f8513b47fa57bc30"
    );
}
