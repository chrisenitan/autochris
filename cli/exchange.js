const axios = require("axios").default
const outer =  require('./output')


const exchange = ({ amount, to }) => {
    axios({
        method: "GET",
        url: `http://data.fixer.io/api/latest?access_key=66c8c6f8e0e1c6e1c63daa19dd4e48c0&symbols=${to}&format=1`,
      })
        .then((response) => {
         //console.log(response.data)
          var dd = parseFloat(Object.values(response.data.rates))
            var res = (dd * amount).toFixed(2)
            outer.outer(`${amount} EUR is currently ${res} ${to}`)
        })
        .catch((error) => {
            outer.outer(error.data)
        })
}

module.exports = {exchange, outer}