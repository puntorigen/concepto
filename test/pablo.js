const vue = require('../lib/index');
var myArgs = process.argv.slice(2);

(async () => {
    // testing code here
    let file = (myArgs.length>0)?myArgs[0]:'vue.dsl';
    let base = new vue({ file:file, config:{ debug:true } });
    await base.addCommands(require('./more_commands.js'));
    await base.init();
    await base.findCommand('xx',false);
    // call writer (when it exists haha)
    //

})().catch(err => {
    console.error(err);
});
