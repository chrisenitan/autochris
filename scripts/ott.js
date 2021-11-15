const nodemailer = require("nodemailer")
const puppeteer = require("puppeteer")

/* visit a page and take a screenshot
send the image and a link to a useer.  */

let ott = async (req) => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    defaultViewport: {
      width: 1400,
      height: 760,
    },
    args: ["--window-size=1700,1024"],
  })
  const page = await browser.newPage()

  //try
  try {
    //foreach...reduce??
    await page.goto(req[0])
    await browser.close()
  } catch (error) {
    console.log(error)
    await browser.close()
  }
}

ott(["https://www.google.com", "https://www.google.com"])
