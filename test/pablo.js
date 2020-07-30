const vue = require('../lib/index');
var myArgs = process.argv.slice(2);

(async () => {
    // testing code here
    let base = new vue({ file:'' });
    //

})().catch(err => {
    console.error(err);
});
