export default async function(context) {
	let state = context.x_state;
	let null_template = {	hint:'Allowed node type that must not generate code',
							func:async function(node) {
								return context.reply_template({ hasChildren:false });
							}
						};
	/*
	//special node names you can define:
	'not_found': {
		//executed when no there is no matching command for a node.
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
		x_text_contains: '',
		x_level: '2,>2,<5,..',
		x_all_hasparent: 'def_padre_otro',
		x_or_hasparent: '',
		x_or_isparent: '',
		autocomplete: {
			'key_text': 'otro', //activate autocomplete if the node text equals to this
			'key_icon': 'idea', //activate autocomplete if the node has this icon
			'hint': 'Testing node',
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
		'cancel': {...null_template,...{ x_icons:'button_cancel'} },
		'def_config': {...null_template,...{ x_icons:'desktop_new', x_level:'2', x_text_contains:'config' } },
		'def_modelos': {...null_template,...{ x_icons:'desktop_new', x_level:'2', x_text_contains:'modelos|database' } },
		'def_assets': {...null_template,...{ x_icons:'desktop_new', x_level:'2', x_text_contains:'assets' } },

		'def_example': {
			x_icons: 'idea',
			x_level: '>2',
			hint: 'Example node func where node text is an html tag.',
			func: async function(node) {
				let resp = context.reply_template();
				resp.open = `<${node.text}>`;
				resp.close = `</${node.text}>`;
				return resp;
			}
		},

		'def_example_image': {
			x_not_icons:'button_cancel,desktop_new,help',
			x_not_empty:'attributes[:src]',
			x_empty:'',
			x_level:'>2',
			hint: 'Example node func that renders an image tag with the node`s image',
			func:async function(node) {
				let resp = context.reply_template({ inherit_this_to_next_node_func:'Pablo', hasChildren:false });
				resp.open = `<img src='${node.image}'/>`;
				return resp;
			}
		}
	}
};