const figlet = require("figlet")

figlet("SPM", {
    horizontalLayout: "full"
}, (error, result) => {
    if(error){
        console.log("Welcome To SPM")
    } else {
        console.log(result)
    }
})