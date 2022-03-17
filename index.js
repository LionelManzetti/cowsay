const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hey guys, ${userInfo.name} from ${userInfo.campus} here !`,
    e : "oO",
    T : "U "
}));