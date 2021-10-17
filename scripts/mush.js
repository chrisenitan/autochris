//simple cli tool
const readline = require("readline")
const args = process.argv[2]
const usageHint = `Usage:
  mush <command>\n
  All Commands:
  mush help: overview of commands
  mush date: returns the full dateTimeZone
  mush flipcoin: flips a coin and returns 'heads' or 'tails'
  mush talk: asks a question and responds
  `

//general output logger
let outer = (req) => {
  console.log(req)
  process.exit(0)
}

//get and privide some user interation
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

//main process
let processRequest = (args) => {
  //sanitise input array
  var errMessage = ""
  if (process.argv.length != 3) {
    errMessage = "Invalid request recieved"
    args = "help"
  }
  //engine
  switch (args) {
    case "help":
      outer(`mush CLI: ${process.cwd()}\n${errMessage}\n${usageHint}`)
      break
    case "date":
      outer(new Date())
      break
    case "flipcoin":
      if (new Date().getSeconds() % 2 != 0) {
        var coin = "Heads"
      } else {
        var coin = "Tails"
      }
      outer(coin)
      break
    case "talk":
      /* talker()
        .then((res) => {
          outer(`${res}? That's one way to feel.`)
        })
        .catch((errMessage) => {
          console.log(`Did not get a clear response`)
        }) */
      let nudge = async () => {
        try {
          const replyUser = await talker()
          console.log(`${replyUser}? That's one way to feel.`)
        } catch {
          console.log(`Did not get a clear response`)
        }
      }
      nudge()
      break
    default:
      outer(`Could not parse the request\n${usageHint}`)
  }
}
processRequest(args)
