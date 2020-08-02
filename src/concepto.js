/**
* Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.
* @name 	concepto
* @module 	concepto
**/
export default class concepto {

	constructor({ file=this.throwIfMissing('file'),config={} }={}) {
		let console_ = require('open_console'), me=this;
		let def_config = {
			class:'concepto',
			console:true,
			debug:false,
			cache:true,
			dsl_git:true,
			prefix:''
		};
		this.x_config = {...def_config,...config};
		this.x_console = new console_({ silent:!this.x_config.console });
		this.x_console.setPrefix({ prefix:this.x_config.class, color:'yellow' });
		this.x_flags = { init_ok:false, dsl:file, watchdog:{ start:new Date(), end:new Date() } };
		this.x_commands=this.commands();
		//if (this.x_config.extend) this.addCommands(this.x_config.extend);
		this.x_time_stats={};
		// grab class methods that start with the 'on' prefix
		/* @TODO check if this is useful or needed 1-Aug-2020
		this.x_on_methods={};
		let my_methods=getInstanceMethodNames(this);
		for (let i in my_methods) {
			let name = my_methods[i].name;
			if (name.substring(0,2)=='on') {
				delete my_methods[i].name;
				this.x_on_methods[name]=my_methods[i];
			}
		}
		console.log('x_on_methods says',this.x_on_methods);*/
	}

	// to be called by user, after using new class()
	async init() {
		if (!this.x_flags.init_ok) {
			let dsl_parser = require('dsl_parser'), path = require('path'), fs = require('fs').promises, tmp = {};
			// show title
			this.x_console.title({ 
				title: `DSL Interpreter ${this.x_config.class}\ninit:compiling file:\n${this.x_flags.dsl}`, 
				color: 'cyan',
				config: { align:'left' }
			});
			this.dsl_parser = new dsl_parser({ file:this.x_flags.dsl, config:{ cancelled:false, debug:this.x_config.debug } });
			try {
				await this.dsl_parser.process();
			} catch(d_err) {
				this.x_console.out({ message:`error: file ${this.x_flags.dsl} does't exist!`,data:d_err });
				return;
			}
			// parse nodes ..
			this.x_console.outT({ message:`parsing nodes with dates ..`, color:'cyan' });
			// @TODO I believe we should get the subnodes as cheerio references and request as needed on Writer method
			//this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:2, recurse:true });
			this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:2, recurse:false, nodes_raw:true });
			tmp.directory = path.dirname(path.resolve(this.x_flags.dsl));
			if (this.x_config.cache) {
				// @TODO implement cache (i'll port 'cache' for after testing version 1)
				//this.x_console.outT({ message:`creating dsl_cache subdir ..`, color:'cyan', data:tmp.directory });
			}
			this.x_console.outT({ message:`time passed since start .. ${this.secsPassed_()} secs`, color:'cyan' });
			// @TODO create github compatible DSL
			if (this.x_config.dsl_git) {
				this.x_console.outT({ message:`creating github compatible DSL`, color:'green' });
				let for_git = await this.dsl_parser.createGitVersion();
				// save dsl git file
				if (typeof this.x_config.dsl_git === 'boolean') {
					tmp.dsl_git_path = path.join(tmp.directory,'dsl_git');
					this.debug(`dsl_git dir`,tmp.dsl_git_path);
					// @TODO create dsl_git dir and save file contents as dsl_git/(filename).dsl
					try { 
						await fs.mkdir(tmp.dsl_git_path);
					} catch(cpath_err) {}
					let git_target = path.join(tmp.dsl_git_path,path.basename(this.x_flags.dsl));
					await fs.writeFile(git_target,for_git,'utf-8');
					this.debug(`dsl_git file saved as: ${git_target}`);
				} else if (typeof this.x_config.dsl_git === 'function') {
					// if dsl_git is a function, call it with out ready content; maybe to send it though sockets, further processing or saving in a diferent location
					this.debug(`calling dsl_git custom method ${this.x_config.dsl_git.name}`);
					await this.x_config.dsl_git(for_git);
				}
				//
				this.x_console.outT({ message:`ready github compatible DSL`, color:'green' });
			}
			// continue
			this.x_flags.init_ok = true;
			await this.onInit();
		} else {
			// this was already called!
			this.x_console.out({ message:`you may only call method init() once!` });
		}
	}

	// **********************************
	// template methods (to be extended)
	// **********************************

	//defines default reply for command's functions
	reply_template(init={}) {
		let resp = { init:'', open:'', close:'', hasChildren:true, type:'simple', valid:true, _meta:{ _set:{}, cache:true } };
		return {...resp,...init};
	}

	//Called after init method finishes
	async onInit() {
		console.log('hello from concepto.js')
	}

	//Called after parsing nodes
	async onAfterWritter(processedNodes) {
		return processedNodes;
	}

	//Called for defining the title of class/page by testing node.
	async onDefineTitle(node) {
		let resp = node.text, i;
		for (i in node.attributes) {
			if (node.attributes[i]=='title' || node.attributes[i]=='titulo') {
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

	// ********************
	// private methods
	// ********************
	commands() {
		return {};
	}

	async addCommands(command_func) {
		if (command_func && typeof command_func === 'function') { 
			let t = await command_func(this);
			if (typeof t === 'object') {
				this.x_commands = {...this.x_commands,...t};
			} else {
				throw new Error('error! addCommands() argument doesn\'t reply with an Object');
			}
		} else if (command_func && typeof command_func === 'object') {
			this.x_commands = {...this.x_commands,...command_func};
		}
	}

	async findCommand(node,justone) {
		let resp = { name:'not_found', hint:'failover command'};
		/*let command_defaults = {
			x_icons:'',
			x_not_icons:'',
			x_not_empty:'',
			x_not_text_contains:'',
			x_empty:'',
			x_text_starts:'',
			x_text_contains:'',
			x_all_hasparent:'',
			x_or_hasparent:'',
			x_or_isparent:'',
			x_level:''
		};*/
		let keys = 'x_icons,x_not_icons,x_not_empty,x_not_text_contains,x_empty,x_text_starts,x_text_contains,x_all_hasparent,x_or_hasparent,x_or_isparent,x_level';
		let command_defaults = setObjectKeys(keys,'');
		console.log('command_defaults',command_defaults);
		let command_features = node_features = command_defaults;
		let def_matched = setObjectKeys(keys,true);
		console.log('def_matched',def_matched);
		/*let def_matched = {
			x_icons:true,
			x_not_icons:true,
			x_not_empty:true,
			x_not_text_contains:true,
			x_empty:true,
			x_text_starts:true,
			x_text_contains:true,
			x_all_hasparent:true,
			x_or_hasparent:true,
			x_or_isparent:true,
			x_level:true
		};*/
		return resp;
	}

	

	// ********************
	// internal methods
	// ********************

	secsPassed_() {
		let tmp = new Date().getTime() - this.x_flags.watchdog.start.getTime();
		return tmp/1000;
	}

	throwIfMissing(name) {
        throw new Error('Missing '+name+' parameter!');
    }

    // helpers
    debug(message,data) {
		if (this.x_config.debug) {
			if (data) {
				this.x_console.outT({ prefix:'debug,dim', color:'dim', message:message, data:data });
			} else {
				this.x_console.outT({ prefix:'debug,dim', color:'dim', message:message });
			}
		}
	}

}

// private helper methods; not to be exported
function getInstanceMethodNames(obj, stop) {
  let array = [];
  let proto = Object.getPrototypeOf (obj);
  let me = this;
  while (proto && proto !== stop) {
  	console.log('processing proto:',proto);
    Object.getOwnPropertyNames (proto)
      .forEach ((name,pos) => {
        if (name !== 'constructor') {
          if (hasMethod (proto, name)) {
        	array.push ({ name:name, pos:pos, class:proto, params:getParamNames(proto[name]) });
          }
        }
      });
    proto = Object.getPrototypeOf (proto);
    stop = proto; //we only need the first record, not our parents.
  }
  return array;
}

function getParamNames(func) {
	let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	let ARGUMENT_NAMES = /([^\s,]+)/g;
	let fnStr = func.toString().replace(STRIP_COMMENTS, '');
	// @TODO 30-jul-20 add support for params of type spread (ex. onlyOnVue2)
	let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
	if(result === null)
	 result = [];
	return result;
}

function hasMethod (obj, name) {
	const desc = Object.getOwnPropertyDescriptor (obj, name);
	return !!desc && typeof desc.value === 'function';
}

//sets the same value to all keys in an object, or creates an object with keys and value
function setObjectKeys(obj,value) {
	let resp=obj;
	if (typeof resp === 'string') {
		resp = {}
		let keys=obj.split(',');
		for (let i in keys) {
			resp[keys[i]]=value;
		}
	} else {
		for (let i in resp) {
			resp[i]=value;
		}
	}
	return resp;
}
// end: private helper methods