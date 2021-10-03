//promises
let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a > 1) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})

p.then((message) => {
  console.log(`This is in the then: ${message}`)
}).catch((errMessage) => {
  console.log(`This is in the catch: ${errMessage}`)
})

//promises and async await
let poke = new Promise((resolve, reject) => {
  if (2 > 1) {
    resolve("User is angry")
  } else {
    reject("User not happy")
  }
})

let nudge = async () => {
  try {
    const pokeUser = await poke
    console.log(`User poked: ${pokeUser}`)
  } catch (err) {
    console.log(`User poked: ${err}`)
  }
}

nudge()
