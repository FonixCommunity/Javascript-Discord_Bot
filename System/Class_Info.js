/**
 * ======================================
 * "inftype" :
 * inftype her content is a json file
 * The Json File contains our 
 * infomation about your discord 
 * bot
 * ======================================
 * ++++++++++++++++++++++++++++++++++++++
 * "Class" :
 * A class in programming is a blueprint 
 * or template for creating objects. It 
 * defines the properties and behaviors 
 * that objects created from it will have, 
 * encapsulating data and functions into a 
 * single unit, promoting code organization 
 * and reuse.
 * +++++++++++++++++++++++++++++++++++++++
**/

const inftype = require('../SystemBot/Content_json/take.json')
class Runer {
    constructor(authorise){
        if (authorise==="true"||"True"){
            this.inf_runer = inftype.info.tkn_
            this.inf_guild = inftype.info.gld_
        }
        else {
            return(false)
        }
    }
}
module.exports = Runer