const { exec } = require("child_process")

const packagePresent = (callback) => {
    // check if the file is empty
    exec("ls -a", (error, stdout) => {
        if(!error){
            callback(stdout.split("\n").includes("package.json"))
        }
    })
}

module.exports = packagePresent