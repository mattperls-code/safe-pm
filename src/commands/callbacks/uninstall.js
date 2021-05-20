const process = require("process")
const {
    exec
} = require("child_process")
const packagePresent = require("../../util/packagePresent")
const {
    log,
    error
} = require("../../util/output")

const npmUninstall = (params) => {
    exec("npm uninstall" + params, (err, stdout, stderr) => {
        if (err) {
            error(error)
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

const uninstall = (params) => {
    packagePresent((isPresent) => {
        if (isPresent) {
            log("Running \"npm uninstall" + params + "\"")
            npmUninstall(params)
        }
    })
}

module.exports = uninstall