const figlet = require("figlet")
const { greenBright, bold } = require("colorette")

figlet("SAFE-PM", {
    horizontalLayout: "full",
    font: "Big"
}, (error, result) => {
    if(error){
        console.log(bold(greenBright("Welcome To SPM")))
    } else {
        console.log(bold(greenBright(result)))
    }
})