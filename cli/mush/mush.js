//simple cli tool
const readline = require("readline")
const pLine = require("./output")
const exchanger = require("./exchange")
const args = process.argv[2]
const usageHint = `Try:
  mush <command>\n\nAll Commands:
  mush help: overview of commands
  mush date: returns the full dateTimeZone
  mush flipcoin: flips a coin and returns 'heads' or 'tails'
  mush talk: asks a question and responds
  mush exch <amount> <currency>: convert given amount currency to Euro
  `

//get and provide some user interaction
let talker = () =>
  new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question("Hi there, how are you?\n", (answer) => {
      resolve(answer)
      rl.close()
    })
  })
let getTalk = async () => {
  try {
    const replyUser = await talker()
    console.log(`${replyUser}? That's one way to feel.`)
  } catch {
    console.log(`Did not get a clear response`)
  }
}
/* talker()
  .then((res) => {
    outer(`${res}? That's one way to feel.`)
  })
  .catch((errMessage) => {
    console.log(`Did not get a clear response`)
  }) */

//main process
let processRequest = (args) => {
  //sanitise input array
  var errMessage = ""
  if (process.argv.length < 3) {
    errMessage = "Hi! I don't know how to respond to that."
    args = "help"
  }
  //engine
  switch (args) {
    case "help":
      pLine.outer(usageHint)
      break
    case "date":
      pLine.outer(new Date())
      break
    case "flipcoin":
      if (new Date().getSeconds() % 2 != 0) {
        var coin = "Heads"
      } else {
        var coin = "Tails"
      }
      pLine.outer(coin)
      break
    case "talk":
      getTalk()
      break
    case "exch":
      exchanger.exchange({
        amount: process.argv[3],
        to: process.argv[4],
      })
      break
    case "explain":
      console.log("wip")
      break
    default:
      pLine.outer(`Hi! I don't know how to respond to that.\n${usageHint}`)
  }
}
processRequest(args)
