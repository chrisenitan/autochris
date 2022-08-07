//import { ff } from './scripts/index.js'
import { locals, globals } from 'autochris-scripts'

console.log(locals)
console.log(globals["four"])

;(async () => {
    setInterval(
      async () => (
        log(`\x1b[34m------------[auto messenger]----------- \x1b[0m  \n`), await queue(allRecipients)
      ),
      60000
    )
  })()