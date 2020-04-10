const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg});
    }
}

//module.exports = Logger;

const Logger = require('./refrence/logger');

const logger = new Logger();

logger.on('message',datas => console.log('Called Listener',datas));

logger.log('Hello World');

