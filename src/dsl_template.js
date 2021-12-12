import concepto from 'concepto'

/**
* Concepto DSL Class Template: A class for compiling x.dsl Concepto diagrams into whatever you want.
* @name 	template
* @module 	template
**/
import internal_commands from './commands'
export default class template extends concepto {

	constructor(file,config={}) {
		// we can get class name, from package.json name key (after its in its own project)
		let my_config = {
			class: 'template',
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
		//this.x_console.outT({ message:`hello from template dsl parser`, color:`yellow` });
		// define and assign commands
		await this.addCommands(internal_commands);
		this.debug('x_commands',this.x_commands);
		// init dsl parser
		// set any variables you want to share with command on this.x_state object.
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

	// **************************
	// 	Helper Methods
	// **************************

	/*
	* Example that grabs the configuration from node named 'config'
	* 
	async _readConfig() {
		let resp = {};
		let config_node = this.dsl_parser.getNodes({ text:'config', recurse:false });
		return resp;
	}
	*/
}

