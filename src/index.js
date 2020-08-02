import concepto from 'concepto'

// VUE DSL Class
/**
* Concepto VUE DSL Class: A class for compiling vue.dsl Concepto diagrams into VueJS WebApps.
* @name 	vue
* @module 	vue
**/
import internal_commands from './commands'
export default class vue extends concepto {

	constructor({ file,config }) {
		// we can get class name, from package.json name key (after its in its own project)
		let my_config = {
			class: 'vue',
			debug: true
		};
		let nuevo_config = {...my_config,...config};
		super({ file:file, config:nuevo_config }); //,...my_config
	}

	commands() {
		let me = this, nodes = {
			'def_mapa': {
				x_icons:'idea',
				func:function(node) {
					let resp = me.reply_template({ otro:'Pablo' });
					console.log('text:' + this.x_text + ' node dice Hola!',this);
					return resp;												
				}
			}
		};
		// add extra commands
		return nodes;
	}

	// ******************************
	// methods to be event called
	// ******************************

	async onInit() {
		this.x_console.outT({ message:`hello from vue`, color:`yellow` });
		//console.log('hello from vue');
		await this.addCommands(internal_commands);
		//let test=this.x_commands['def_otro'].func({});
		//console.log('test def internal_commands exec',test);
		this.debug('x_commands',this.x_commands);
		//if (this.x_config.debug) this.x_console.out({ message:'x_commands',data:this.x_commands });
		//console.log('dsl_parser says:',this.dsl_parser);
	}

	/** testing definition methods...
	*/
	onlyOnVue(x_id,x_text) {
		console.log('i am only on vue class')
	}

	
	onlyOnVue2({x_id='def_mapa',x_text='mapa'}={}) {
		console.log('i am another method in vue 2 con dump',x_id);
	}
}

