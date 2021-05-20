const process = require("process")
const {
    exec
} = require("child_process")
const fs = require("fs")
const prompt = require("prompt")
const packagePresent = require("../../util/packagePresent")
const {
    log,
    warn,
    error
} = require("../../util/output")

const npmInit = (params) => {
    if (params.trim() == "-y") {
        npmInitDashY()
    } else {
        log("package.json")
        prompt.start()
        prompt.get([
            "name",
            "version",
            "author",
            "description",
            "license"
        ], (err, res) => {
            if (err) {
                return error("Internal FileSystem Error")
            }
            fs.writeFileSync("package.json", JSON.stringify(res, null, 4), {
                encoding: "utf8"
            })
        })
    }
}

const npmInitDashY = () => {
    exec("npm init -y", (err, stdout, stderr) => {
        if (err) {
            error(err)
        }
        if (stdout) {
            console.log(stdout)
        }
        if (stderr) {
            console.log(stderr)
        }
        process.exit(0);
    })
}

const confirmInit = (firstTimeAsking, params) => {
    warn(firstTimeAsking ? "The current directory already has a package.json, and continuing will overwrite it. Would you still like to initialize a new package.json?" : "Your answer was not valid, please respond with \"y\" or \"n\"")
    prompt.start()
    prompt.get([{
        name: "confirm",
        description: "(y/n) "
    }], (err, res) => {
        if (err) {
            error(err)
        }
        if (res.confirm == "y") {
            log("Running \"npm init" + params + "\"")
            npmInit(params)
        } else if (res.confirm != "n") {
            confirmInit(false, params)
        }
    })
}

const init = (params) => {
    packagePresent((isPresent) => {
        if (!isPresent) {
            log("Running \"npm init" + params + "\"")
            npmInit(params)
        } else {
            confirmInit(true, params)
        }
    })
}

module.exports = init