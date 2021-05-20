class Command {
    constructor(keys, description, callback) {
        if (typeof keys == "string") {
            this.keys = [keys]
        } else {
            this.keys = keys
        }
        this.description = description
        this.callback = callback
    }
    matches(primaryCommand) {
        return this.keys.includes(primaryCommand)
    }
    execute(params) {
        this.callback(
            typeof params != "string" || params.trim() == "" ? "" : " " + params
        )
    }
}

module.exports = Command