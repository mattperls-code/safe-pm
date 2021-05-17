const Command = require("./command.js")

const init = require("./callbacks/init.js")
const install = require("./callbacks/install")

const cliCommands = [
    new Command("init", init),
    new Command(["install", "i"], install)
]

module.exports = cliCommands