const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//mehod returns the system time in seconds
console.log(`The system Updtime is ${os.uptime()}`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
