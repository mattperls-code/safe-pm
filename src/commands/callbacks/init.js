const process = require("process")
const fs = require("fs")
const { exec, spawn } = require("child_process")
const packagePresent = require("../../util/packagePresent.js")
const prompt = require("prompt")


const npmInit = (params) => {
    if(params.trim() == "-y"){
        npmInitDashY()
    } else {
        prompt.start()
        prompt.get(["name", "version", "author", "description", "keywords", "license"], (err, res) => {
            if(err){ console.error(err) };
            fs.writeFileSync("package.json", JSON.stringify(res, null, 4), {
                encoding: "utf8"
            })
        })
    }
}

const npmInitDashY = () => {
    exec("npm init -y", (error, stdout, stderr) => {
        console.log(stdout);
        process.exit(0);
    })
}

const confirmInit = (firstTimeAsking, params) => {
    console.log(firstTimeAsking ? "The current directory already has a package.json. Would you still like to init? (y/n) " : "Your answer was not valid, please respond with \"y\" or \"n\"")
    prompt.start()
    prompt.get(["confirm"], (err, res) => {
        if(err){
            console.error(err)
        }
        if(res.confirm == "y"){
            console.log("Running \"npm init" + params + "\"")
            npmInit(params)
        } else if(res.confirm != "n") {
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