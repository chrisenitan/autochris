const outer = (req) => {
  console.log(req)
  process.exit(0)
}

module.exports = { outer }
