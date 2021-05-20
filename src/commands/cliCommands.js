const Command = require("./command")

const help = require("./callbacks/help")
const init = require("./callbacks/init")
const install = require("./callbacks/install")
const uninstall = require("./callbacks/uninstall")
const reset = require("./callbacks/reset")

const cliCommands = [
    new Command("help", "List all commands", help),
    new Command("init", "Initialize a package.json", init),
    new Command(["install", "i"], "Install a package from npm (see \"npm install\")", install),
    new Command(["uninstall", "ui"], "Uninstall a package (see \"npm uninstall\")", uninstall),
    new Command("reset", "Remove the package.json, package-lock.json, and node_modules", reset)
]

module.exports = cliCommands