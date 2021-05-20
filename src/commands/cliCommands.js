const Command = require("./command")

const help = require("./callbacks/help")
const init = require("./callbacks/init")
const install = require("./callbacks/install")
const uninstall = require("./callbacks/uninstall")

const cliCommands = [
    new Command("help", "List all commands (-a to see all commands)", true, help),
    new Command("init", "Initialize a package.json", true, init),
    new Command(["install", "i"], "Install a package from npm (see \"npm install\")", true, install),
    new Command(["uninstall", "ui"], "Uninstall a package (see \"npm uninstall\")", true, uninstall)
]

module.exports = cliCommands