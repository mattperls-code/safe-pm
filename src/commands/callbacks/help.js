const {
    greenBright,
    green,
    blueBright,
    bold
} = require("colorette")

const help = () => {
    const cliCommands = require("../cliCommands.js")
    console.log(bold(greenBright("Safe Package Manager Commands: \n")))
    console.log(bold(greenBright("    Usage: ")) + blueBright("           safe-pm <command> <params>\n"))
    for (let i = 0; i < cliCommands.length; i++) {
        let descriptionOffset = ""
        for (let j = 0; j < 18 - (cliCommands[i].keys.join(", ") + ": ").length; j++) {
            descriptionOffset += " "
        }
        console.log("    " + green(cliCommands[i].keys.join(", ") + ": ") + descriptionOffset + blueBright(cliCommands[i].description))
    }
}

module.exports = help