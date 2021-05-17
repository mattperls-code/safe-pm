const process = require("process")
const { exec } = require("child_process")
const packagePresent = require("../../util/packagePresent.js")
const prompt = require("../../util/prompt.js")

const npmInit = (params) => {
    exec("npm init" + params, (error, stdout, stderr) => {
        if(error){
            console.log(error)
        }
        console.log(stdout)
        console.log(stderr)
        process.exit(0)
    })
}

const confirmInit = (firstTimeAsking, params) => {
    const question = firstTimeAsking ? "The current directory already has a package.json. Would you still like to init? (y/n)" : "Your answer was not valid, please respond with \"y\" or \"n\""
    prompt(question, (answer) => {
        if(answer == "y"){
            console.log("Running \"npm init" + params + "\"")
            npmInit(params)
        } else if(answer != "n"){
            confirmInit(false, params)
        }
    })
}

const init = (params) => {
    packagePresent((isPresent) => {
        if(!isPresent){
            console.log("Running \"npm init" + params + "\"")
            npmInit(params)
        } else {
            confirmInit(true, params)
        }
    })
}

module.exports = init