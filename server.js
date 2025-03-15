const express = require("express");
const puppeteer = require("puppeteer");
const os = require("os");
const app = express();
app.use(express.json()); // Parse JSON body
app.use(require("cors")()); // Allow external requests

let browser;
let page;

// Determine the correct Chrome executable path based on OS
function getChromeExecutablePath() {
	const platform = os.platform();
	if (platform === "win32") {
		// Windows path
		return "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
	} else if (platform === "darwin") {
		// macOS path
		return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
	} else {
		// Linux path
		return "/usr/bin/chromium";
	}
}

async function startBrowser(url) {
	const chromePath = getChromeExecutablePath();
	browser = await puppeteer.launch({
		headless: false,
		executablePath: chromePath,
		args: [
			"--disable-web-security",
			"--enable-widevine",
			"--disable-gpu", // ⛔ Disables hardware acceleration (Forces software rendering)
			"--autoplay-policy=no-user-gesture-required",
			"--disable-blink-features=AutomationControlled",
			"--kiosk", // Remove address bar, tabs, and UI elements
		],
		defaultViewport: null, // Remove Puppeteer's viewport constraints
	});

	const pages = await browser.pages();
	page = pages.length > 0 ? pages[0] : await browser.newPage();
	await page.evaluateOnNewDocument(() => {
		Object.defineProperty(navigator, "webdriver", { get: () => false });
	});
	console.log(`Loading ${url}...`);
	await page.goto(url, { waitUntil: "networkidle0" });
	console.log("Page loaded. You can control it via API.");
}

// 🔹 API: Press a key in the open browser
app.post("/press", async (req, res) => {
	if (!page) return res.status(500).send({ error: "Browser not started yet!" });
	const { word } = req.body;
	if (!word) return res.status(400).send({ error: "Missing word parameter" });
	console.log(`Simulating typing: ${word}`);
	// Type the word character by character
	await page.keyboard.type(word);
	// Press Enter (Optional: Remove if not needed)
	await page.keyboard.press("Enter");
	res.send({ success: true, message: `Typed word: ${word}` });
});

// Start server & browser
const PORT = 3000;
app.listen(PORT, async () => {
	console.log(`🚀 API listening on http://localhost:${PORT}`);
	await startBrowser("https://nindtz.github.io");
});
