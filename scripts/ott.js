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

  //try all
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
    sAtt.mailBody = "<b>Hello world?</b>"

    //send emails
    try {
      const transporter = await nodemailer.createTransport({
        host: "outlook",
        //port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "zapper01",
          pass: "crisdeven@hotmail.com",
        },
      })
      let mail = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: "enitanchris@gmail.com",
        subject: "Hello ✔",
        //text: "Hello world?",
        html: sAtt.mailBody,
      })
      console.log(mail)
    } catch (mailError) {
      console.log(mailError)
    }

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
