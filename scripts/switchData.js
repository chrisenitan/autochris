



// 
const stringer = (e) => {
  let es = `string`
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
  switch (value) {
    case "string":
      value = stringer(key)
      console.log(value)
      console.log(`Returns a string thats called ${value}`)
      break
    case "number":
      value = numberer(key)
      console.log(value)
      console.log(`Returns a number thats the value of ${value} thats called ${value}`)
      break
    default:
      console.log("error")
  }
}

//mushsick
