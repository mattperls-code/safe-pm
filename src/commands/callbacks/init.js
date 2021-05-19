const process = require("process")
const fs = require("fs")
const { exec, spawn } = require("child_process")
const packagePresent = require("../../util/packagePresent.js")
const prompt = require("prompt")


const npmInit = (params) => {
    if(params.trim() == "-y"){
        npmInitDashY()
    } else {
        prompt.start({
            
        })
        prompt.get([
            {
                name: "name",
                description: "Name",
            },
            {
                name: "version",
                description: "Version"
                
            },
            {
                name: "author",
                description: "Author"
            },
            {
                name: "description",
                description: "Description"
            },
            {
                name: "license",
                description: "License ( Choose MIT )"
            }
        ], (err, res) => {
            if(err){ console.error(err) };
            fs.writeFileSync("package.json", JSON.stringify(res, null, 4), {
                encoding: "utf8"
            })
        })
    }
}

const npmInitDashY = () => {
    exec("npm init -y", (error, stdout, stderr) => {
        if(error){
            console.error(error)
        }
        console.log(stdout)
        console.log(stderr)
        process.exit(0);
    })
}

const confirmInit = (firstTimeAsking, params) => {
    prompt.start()
    prompt.get([
        {
            name: "confirm",
            description: firstTimeAsking ? "The current directory already has a package.json, and continuing will overwrite it. Would you still like to initialize a new package.json? " : "Your answer was not valid, please respond with \"y\" or \"n\" (y/n)",
        }
    ], (err, res) => {
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