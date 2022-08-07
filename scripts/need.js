import { setInterval } from "timers/promises"

/* const interval = 100
for await (const startTime of setInterval(interval, Date.now())) {
  const now = Date.now()
  console.log(now)
  if (now - startTime > 1000) break
}
console.log(Date.now())
 */
;(async () => {
setInterval(async () => (1000, await queue(allRecipients)))
})()

const queue = async (e) => {
  console.log("e gotten")
}
