import concepto from 'concepto'

/**
* Concepto VUE DSL Class: A class for compiling vue.dsl Concepto diagrams into VueJS WebApps.
* @name 	vue
* @module 	vue
**/
import internal_commands from './commands'
export default class vue extends concepto {

	constructor(file,config={}) {
		// we can get class name, from package.json name key (after its in its own project)
		let my_config = {
			class: 'vue',
			debug: true
		};
		let nuevo_config = {...my_config,...config};
		super(file,nuevo_config); //,...my_config
	}

	// **************************
	// methods to be auto-called
	// **************************

	//Called after init method finishes
	async onInit() {
		this.x_console.outT({ message:`hello from vue`, color:`yellow` });
		//default commands:
		await this.addCommands(async function(me) {
			return {
				'def_mapa': {
					x_icons:'idea',
					func:function(node) {
						let resp = me.reply_template({ otro:'Pablo' });
						console.log('text:' + this.x_text + ' node dice Hola!',this);
						return resp;												
					}
				}
			}
		});
		//console.log('hello from vue');
		await this.addCommands(internal_commands);
		//let test=this.x_commands['def_otro'].func({});
		//console.log('test def internal_commands exec',test);
		this.debug('x_commands',this.x_commands);
		//if (this.x_config.debug) this.x_console.out({ message:'x_commands',data:this.x_commands });
		//console.log('dsl_parser says:',this.dsl_parser);
	}

	//Called after parsing nodes
	async onAfterWritten(processedNodes) {
		return processedNodes;
	}

	//Called for defining the title of class/page by testing node.
	async onDefineTitle(node) {
		let resp = node.text, i;
		for (i in node.attributes) {
			if (['title','titulo'].includes(node.attributes[i])) {
				resp = node.attributes[i];
				break;
			}
		}
		return resp;
	}

	//Called for naming filename of class/page by testing node.
	async onDefineFilename(node) {
		return node.text;
	}

	//Called for naming the class/page by testing node.
	async onDefineNodeName(node) {
		return node.text.replace(' ','_');
	}

	//Defines template for code given the processedNodes of writer()
	async onCompleteCodeTemplate(processedNodes) {
		return processedNodes;
	}

	//Defines preparation steps before processing nodes.
	async onPrepare() {
	}

	//Executed when compiler founds an error processing nodes.
	async onErrors(errors) {
	}

	//Transforms the processed nodes into files.
	async onCreateFiles(processedNodes) {
	}

	//overwrites default reply structure and value for command's functions
	/*
	reply_template(init={}) {
	}
	*/

}

