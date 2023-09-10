/*
 * Class :
 * A class in programming is a blueprint 
 * or template for creating objects. It 
 * defines the properties and behaviors 
 * that objects created from it will have, 
 * encapsulating data and functions into a 
 * single unit, promoting code organization 
 * and reuse.
 * 
**/
/**
 * ==================================
 * Here defined application commands
 * ==================================
**/
class CommandType {
    constructor(){
    this.CommandPing = {
        name: 'ping',
        description: 'Reply By Pong'
    },
    this.CommandSay = {
        name: 'say',
        description: 'Send Your Message'
    }
  }

}
module.exports = CommandType;