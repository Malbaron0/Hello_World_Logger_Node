let chalk = require("chalk");


function Logger (){
    
    this.log = function(message, level){
        if (level == "error"){ this.error(message); }
        else if(level == "info") { this.info(message); }
        else if(level == "warning") {this.warning(message);}
        else {console.log("correct level wasnt entered");}
    }

    this.error = function (message){
        console.log(chalk.bold.red(message)  + "\n");
    }
    this.warning = function (message){
        console.log(chalk.bold.yellow(message)  + "\n");
    }
    this.info = function (message){
        console.log(chalk.bold.blue(message) + "\n");
    }


}

module.exports = Logger;