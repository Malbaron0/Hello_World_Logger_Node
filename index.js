let _ = require("lodash");
let Logger = require('./lib/logger');
let logs = require('./data/logs');

let logger = new Logger();



_.forEach(logs, function(value){
    
    console.log(value.level);
    
    logger.log(value.message, value.level);
});
