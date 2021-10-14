//simple cli tool
const args = process.argv[2]
const usageHint =
  "\nUsage:\nmush <command>\n\nAll Commands:\nmush date: returns the full dateTimeZone"
let outer = (req) => {
  console.log(req)
}
let processRequest = (args) => {
  //sanitise
  var errMessage = ""
  if (process.argv.length != 3) {
    errMessage = "Invalid request recieved"
    args = "help"
  }
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
    default:
      outer(`Could not parse request\n${usageHint}`)
  }
}
processRequest(args)
