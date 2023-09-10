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
 * 
 * -----------------------------
 * This class is created to 
 * decorate the texts displayed 
 * in the console
 * -----------------------------
 * 
 */

class Console {
    constructor() {
      this.Web = "";
  
      const site = true;
  
      if (site === false) {
        this.Web = "<CommingSoon>\n";
      }
      if (site === true) {
        this.Web = ">> https://fonixcommunity.wixsite.com/bots";
      }
  
      this.nbr_er = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
    }
  
    error() {
      const errorTypes = [Error, TypeError, ZeroDivisionError, RangeError];
      throw new (errorTypes[Math.floor(Math.random() * errorTypes.length)])();
    }
  
    CR() {
      return "\x1b[0m ";
    }
  
    R_T() {
      return "\x1b[1;35m[Test Result] >\x1b[5;34m ";
    }
  
    E_R() {
      return `\x1b[1;4m\x1b[33m[Error] : ${this.error} \n\n\x1b[34m[+]\x1b[32;1[[ErrorType] : \x1b[1;0;46mFUEETC-${this.nbr_er}\x1b`;
    }
  
    R() {
      return "\x1b[1;32m[Result] >\x1b[1;34m ";
    }
  
    W_U() {
      return `\x1b[1;32m[Message] > \x1b[1;35mHello User Welcome Here !\n\n\x1b[31m[#] : \x1b[4;34m\x1b[1m This Programe Is Made By (quarkosay206) At Discord\n\n\x1b[0m\x1b[31m[#] : \x1b[1;33m Check This WebSit\x1b[1,4;31m ${this.Web}\x1b[0;0m`;
    }
  
    Ms() {
      return `\x1b[1;32m[Message] : \x1b[1;35m `;
    }
  
    B_r() {
      return "\x1b[31m[+]\x1b[32m\x1b[5;34m (~info-Bot) :\x1b[0m\x1b[36m\x1b[1m ";
    }
  
    F_r() {
      return "\x1b[31m[+]\x1b[0m\x1b[5;34m (~file) : \x1b[0m\x1b[37m\x1b[1m ";
    }
  
    New() {
      return "\x1b[35m[~@~]\x1b[0m :\x1b[1;34m  ";
    }

    ERE() {
        return "\x1b[31m[+]\x1b[0m\x1b[5;34m (~Error-detected) : \x1b[0m\x1b[35m\x1b[1m "
    }
  }

module.exports = Console;