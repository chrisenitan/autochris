const nodemailer = require("nodemailer")
const fs = require("fs")
const puppeteer = require("puppeteer")

/* visit a page and take a screenshot
send the image and a link to a user.  */

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
    //define attr
    const sAtt = {}
    //foreach...reduce??
    await page.goto(req[0])
    sAtt.fileName = await page.title()
    await page.screenshot({
      type: "png",
      path: `screenshots/${sAtt.fileName}.png`,
    })
    await browser.close()
    //delete bloat files
    fs.unlink(`screenshots/${sAtt.fileName}.png`, (err) => {
      if (err) {
        console.log(err)
      }
    })
  } catch (error) {
    console.log(error)
    await browser.close()
  }
}

ott(["https://www.google.com", "https://www.twitter.com"])
