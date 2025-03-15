const express = require("express");
const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const app = express();
app.use(express.json()); // Parse JSON body
app.use(require("cors")()); // Allow external requests

let browser;
let page;

async function startBrowser(url, outputFile) {
	const browser = await puppeteer.launch({
		headless: false,
		executablePath:
			"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // Path to Google Chrome
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
	await startBrowser("https://nindtz.github.io", "output.mp4");
});
