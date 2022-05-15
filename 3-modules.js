//Modules
const { john, peter } = require("./4-name")
const sayHi = require("./5-utils")

require("./7-mind-grenade")

const rest = require("./6-alternate-flavour")

console.log(john, peter, rest)

sayHi(john)
sayHi(peter)
