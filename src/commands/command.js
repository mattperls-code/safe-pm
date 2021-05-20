class Command {
    constructor(keys, description, isMain, callback){
        // this.keys must be an array of strings
        if(typeof keys == "string"){
            this.keys = [keys]
        } else {
            this.keys = keys
        }
        this.description = description
        this.isMain = isMain
        this.callback = callback
    }
    matches(primaryCommand){
        return this.keys.includes(primaryCommand)
    }
    execute(params){
        this.callback(
            typeof params != "string" || params.trim() == "" ? "" : " " + params
        )
    }
}

module.exports = Command