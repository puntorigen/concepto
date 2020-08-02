export default async function(context) {
	let me = context;
	/*
	//special node names you can define:
	'not_found': {
		//executed when no there was no matching command for a node.
		func: async function(node) {
			return me.reply_template();
		}
	}

	full node example:
	'def_otro': {
		x_priority: 'lowest,last,highest,first',
		x_icons: 'cancel,desktop_new,idea,..',
		x_not_icons: '',
		x_not_empty: 'attribute[name]',
		x_not_text_contains: '',
		x_empty: '',
		x_text_starts: '',
		x_text_contains: '',
		x_all_hasparent: 'def_padre_otro',
		x_or_hasparent: '',
		x_or_isparent: '',
		x_level: '2,>2,<5,..',
		autocomplete: {
			'key_text': 'otro', //activate autocomplete if the node text equals to this
			'key_icon': 'idea', //activate autocomplete if the node has this icon
			'description': 'Testing node',
			'attributes': {
				'from': {
					'type': 'int',
					'description': 'If defined, sets the start offset for the node. (example)'
				}
			}
		},
		func: async function(node) {
			let resp = me.reply_template();
			return resp;
		}
	}
	*/
	return {
		'def_otro': {
			x_icons:'cancel',
			func:async function(node) {
				let resp = me.reply_template({ otro:'Pablo' });
				//console.log('text:' + this.x_text + ' node dice Hola! from external commands',this);
				return resp;
			}
		}
	}
};