const process = require("process")
const { exec } = require("child_process")
const packagePresent = require("../../util/packagePresent.js")
const prompt = require("../../util/prompt.js")

const npmInstall = (params) => {
    exec("npm install" + params, (error, stdout, stderr) => {
        if(error){
            console.log(error)
        }
        console.log(stdout)
        console.log(stderr)
        process.exit(0)
    })
}

const confirmInstall = (firstTimeAsking, params) => {
    const question = firstTimeAsking ? "The current directory does not already have a package.json. Would you still like to install? (y/n)" : "Your answer was not valid, please respond with \"y\" or \"n\""
    prompt(question, (answer) => {
        if(answer == "y"){
            console.log("Running \"npm install" + params + "\"")
            npmInstall(params)
        } else if(answer != "n"){
            confirmInstall(false, params)
        }
    })
}

const install = (params) => {
    packagePresent((isPresent) => {
        if(isPresent){
            console.log("Running \"npm install" + params + "\"")
            npmInstall(params)
        } else {
            confirmInstall(true, params)
        }
    })
}

module.exports = install