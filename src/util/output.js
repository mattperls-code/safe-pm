const { green, blueBright, yellow, yellowBright, red, redBright, bold } = require("colorette")

const log = (logText) => {
    console.log(bold(green("Safe-PM: ")) + blueBright(logText))
}

const warn = (warningText) => {
    console.log(bold(yellow("Safe-PM Warning: ")) + yellowBright(warningText))
}

const error = (errorText) => {
    console.log(bold(red("Safe-PM Error: ")) + redBright(errorText))
}

module.exports = { log, warn, error }