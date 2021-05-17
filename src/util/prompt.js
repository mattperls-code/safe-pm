const process = require("process")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = (question, callback) => {
    readline.question(question, (answer) => {
        callback(answer)
        readline.close()
    })
}

module.exports = prompt