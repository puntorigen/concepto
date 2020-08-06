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
		// define and assign commands
		await this.addCommands(internal_commands);
		this.debug('x_commands',this.x_commands);
		// init vue
		this.x_state.config_node = await this._readConfig();
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
	* Grabs the configuration from node named 'config'
	*/
	async _readConfig() {
		let resp = { id:'', meta:[], seo:{} }, config_node = {};
		let search = this.dsl_parser.getNodes({ text:'config', level:2, icon:'desktop_new', recurse:true });
		//
		if (search.length>0) {
			config_node = search[0];
			// define default font_face
			resp.default_face = config_node.font.face;
			resp.default_size = config_node.font.size;
			// apply children nodes as keys/value for resp
			for (let key of config_node.nodes) {
				if (key.text.toLowerCase()=='meta') {
					for (let meta_child of key.nodes) {
						// apply grand_childs as meta tags
						if (meta_child.text.toLowerCase()=='keywords') {
							resp.seo['keywords'] = meta_child.nodes.map(x=>x.text);
							resp.meta.push({ hid:this.hash(meta_child.nodes[0].text), name:'keywords', content:resp.seo['keywords'].join(',') });
						} else if (meta_child.text.toLowerCase()=='language') {
							

						} else if (meta_child.text.toLowerCase()=='charset') {
							
						} else {

						}
						//
					}			
				} else {
					// apply keys as config
				}
			}
		}
		return resp;
	}
}

