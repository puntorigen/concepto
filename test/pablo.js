const vue = require('../lib/index');
const more = require('./more_commands.js');
var myArgs = process.argv.slice(2);

(async () => {
    // testing code here
    let file = (myArgs.length>0)?myArgs[0]:'vue.dsl';
    let base = new vue({ file:file, config:{ extend:more, debug:true } });
    await base.init();
    // call writer (when it exists haha)
    //

})().catch(err => {
    console.error(err);
});
