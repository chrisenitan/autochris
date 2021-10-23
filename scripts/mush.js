//simple cli tool
const readline = require("readline")
const args = process.argv[2]
const axios = require("axios").default
const usageHint = `Usage:
  mush <command>\n\nAll Commands:
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

//get exchange rate value
let exchange = (to) => {
  axios({
    method: "GET",
    url: `http://data.fixer.io/api/latest?access_key=66c8c6f8e0e1c6e1c63daa19dd4e48c0&symbols=${to}&format=1`,
  })
    .then((response) => {
      console.log(response.data)
      outer(`One EUR is currently ${Object.values(response.data.rates)} ${to}`)
    })
    .catch((error) => {
      outer(error.data)
    })
}

//main process
let processRequest = (args) => {
  //sanitise input array
  var errMessage = ""
  if (process.argv.length < 3) {
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
      getTalk()
      break
    case "exchange":
      exchange(process.argv[3])
      break
    default:
      outer(`Could not parse the request\n${usageHint}`)
  }
}
processRequest(args)
