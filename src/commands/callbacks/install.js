const process = require("process")
const { exec } = require("child_process")
const prompt = require("prompt")
const packagePresent = require("../../util/packagePresent")
const {
    log,
    warn,
    error
} = require("../../util/output")

const npmInstall = (params) => {
    exec("npm install" + params, (err, stdout, stderr) => {
        if (err) {
            error(err)
        }
        if (stdout) {
            console.log(stdout)
        }
        if (stderr) {
            console.log(stderr)
        }
        process.exit(0)
    })
}

const confirmInstall = (firstTimeAsking, params) => {
    warn(firstTimeAsking ? "The current directory does not already have a package.json. Would you still like to install? (y/n) " : "Your answer was not valid, please respond with \"y\" or \"n\" ")
    prompt.start()
    prompt.get([{
        name: "confirm",
        description: "(y/n) "
    }], (err, res) => {
        if (err) {
            error(err)
        }
        if (res.confirm == "y") {
            npmInstall(params)
        } else if (res.confirm != "n") {
            confirmInstall()
        }
    })
}

const install = (params) => {
    packagePresent((isPresent) => {
        if (isPresent) {
            log("Running \"npm install" + params + "\"")
            npmInstall(params)
        } else {
            confirmInstall(true, params)
        }
    })
}

module.exports = install