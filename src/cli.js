const process = require("process")
const cliCommands = require("./commands/cliCommands")
const { error } = require("./util/output")

const cli = (args) => {
    if(args.length <= 2){
        error("Please Enter A Complete Command. To See A List Of Commands, Run \"safe-pm help\"")
        process.exit(0)
    } else {
        const primaryCommand = args[2]
        const params = args.slice(3).join(" ")

        let hasMatched = false
        for(let i = 0;i<cliCommands.length;i++){
            if(!hasMatched && cliCommands[i].matches(primaryCommand)){
                cliCommands[i].execute(params)
                hasMatched = true
            }
        }
        if(!hasMatched){
            error(`No Command "${primaryCommand}" Found. To See A List Of Commands, Run \"safe-pm help\"`)
            process.exit(0)
        }
    }
}

module.exports = cli