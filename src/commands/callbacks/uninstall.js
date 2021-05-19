const process = require("process")
const { exec } = require("child_process")
const packagePresent = require("../../util/packagePresent.js")

const npmUninstall = (params) => {
    exec("npm uninstall" + params, (error, stdout, stderr) => {
        if(error){
            console.log(error)
        }
        console.log(stdout)
        console.log(stderr)
        process.exit(0)
    })
}

const uninstall = (params) => {
    packagePresent((isPresent) => {
        if(isPresent){
            console.log("Running \"npm uninstall" + params + "\"")
            npmUninstall(params)
        }
    })
}

module.exports = uninstall