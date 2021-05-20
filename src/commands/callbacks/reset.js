const fs = require("fs")
const prompt = require("prompt")
const process = require("process")
const {
    log,
    warn,
    error
} = require("../../util/output")

const reset = () => {
    warn("Remove the package.json, package-lock.json, and node_modules?")
    prompt.start()
    prompt.get([{
        name: "reset",
        description: "(y/n)"
    }], (err, res) => {
        if (err) {
            error(err)
        } else if (res.reset == "y") {
            log("Your project has been reset")
            fs.unlinkSync("package.json", (err) => {
                if (err) {
                    error(err)
                }
            })
            fs.unlinkSync("package-lock.json", (err) => {
                if (err) {
                    error(err)
                }
            })
            fs.rmdirSync("node_modules", {
                recursive: true
            }, (err) => {
                error(err)
            })
        }
        process.exit(0)
    })
}

module.exports = reset