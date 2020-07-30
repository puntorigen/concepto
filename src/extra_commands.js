export default function extra_commands(context) {
	let me = context;
	return {
		'def_otro': {
			x_icons:'cancel',
			func:function(node) {
				let resp = me.reply_template({ otro:'Pablo' });
				console.log('text:' + this.x_text + ' node dice Hola! from external commands',this);
				return resp;
			}
		}
	}
};