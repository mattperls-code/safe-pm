const Command = require("./command.js")

const init = require("./callbacks/init.js")
const install = require("./callbacks/install.js")
const uninstall = require("./callbacks/uninstall.js")

const cliCommands = [
    new Command("init", init),
    new Command(["install", "i"], install),
    new Command(["uninstall", "ui"], uninstall)
]

module.exports = cliCommands