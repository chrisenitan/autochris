

// what if we switched the values 😉
const stringer = (e) => {
  let es = `${e}`
  return es
}
const numberer = (e) => {
  let es = 0
  return es
}
let loads = {
  name: "meta",
  meta: {
    string: "number",
    number: "string",
  },
}


for (let [key, value] of Object.entries(loads.meta)) {
  switch (key) {
    case "string":
      key = stringer(value)
      console.log(key)
      console.log(`Returns a string thats called ${value}`)
      break
    case "number":
      key = numberer(value)
      console.log(key)
      console.log(`Returns a number thats the value of ${key}`)
      break
    default:
      console.log("error")
  }
  
}

//mushsick