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

	async findCommand(node=this.throwIfMissing('node'),justone=false) {
		let resp = { name:'not_found', hint:'failover command'};
		let keys = 'x_icons,x_not_icons,x_not_empty,x_not_text_contains,x_empty,x_text_starts,x_text_contains,x_all_hasparent,x_or_hasparent,x_or_isparent,x_level';
		let command_requires = node_features = command_defaults = setObjectKeys(keys,'');
		let def_matched = matched = setObjectKeys(keys,true), comm;
		// iterate through commands
		for (let key in this.x_commands) {
			let comm_keys = Object.keys(this.x_commands[key]);
			// reset defaults for current command
			matched = def_matched;
			// build template for used keys
			command_requires = {...command_defaults,...this.x_commands[key]};
			delete command_requires.func;
			// test command features vs node features
			// test 1: icon match
			if (this.x_config.debug) console.time(`${key} x_icons`);
			if (command_requires['x_icons']!='') {
				for (let qi of command_requires.x_icons.split(',')) {
					matched.x_icons = (node.icons.includes(qi))?true:false;
					if (!matched.x_icons) break;
					//await setImmediatePromise();
				}
			}
			if (this.x_config.debug) console.timeEnd(`${key} x_icons`);
			// test 2: x_not_icons
			if (this.x_config.debug) console.time(`${key} x_not_icons`);
			if (matched.x_icons && command_requires['x_not_icons']!='') {
				// special case first
				if (node.icons.length>0 && command_requires['x_not_icons']!='' && ['*'].includes(command_requires['x_not_icons'])) {
					matched.x_not_icons = false;
				} else if (command_requires['x_not_icons']!='') {
					// if node has any icons of the x_not_icons, return false aka intersect values, and if any assign false.
					matched.x_not_icons = (this.array_intersect(command_requires['x_not_icons'].split(','), node.icons).length>1)?false:true;
				}
			}
			if (this.x_config.debug) console.timeEnd(`${key} x_not_icons`);
			// test 3: x_not_empty. example: attributes[event,name] aka key[value1||value2] in node
			// supports multiple requirements using + as delimiter "attributes[event,name]+color"
			if (this.x_config.debug) console.time(`${key} x_not_empty`);
			if (command_requires['x_not_empty']!='' && allTrue(matched,keys)) {
				//this.debug(`test x_not_empty: ${command_requires['x_not_empty']}`);
				// transform x_not_empty value => ex. attributes[event,name]+color => attributes[event+name],color in com_reqs
				let com_reqs=command_requires['x_not_empty'].replace(/\+/g,'/').replace(/\,/g,'+').replace(/\//g,',').split(',');
				//this.debug(':transformed x_not_empty',com_reqs.join(','));
				for(let test of com_reqs) {
					// start tests
					if(test.indexOf('.')!=-1) {
						// struct type definition: ex. cloud.bgcolor (if exists, it must not be empty, or false if doesnt exist)
						let testpath = getVal(node,test);
						if (typeof testpath === 'string' && testpath=='' ||
							typeof testpath === 'boolean' && testpath==false) {
							matched.x_not_empty=false;
							break;
						}
					} else if (test.indexOf('[')!=-1) {
						// array type definition: ex. attributes[value1,value2..] (attributes is an array type)
						// it must exist value1,value2,.. within array attributes of objects to be true
						let array_key = test.split('[')[0];
						let keys = this.dsl_parser.findVariables({ text:test, symbol:'[', symbol_closing:']' }).split('+');
						let has_keys = [];
						if (node[array_key]) {
							for(let obj of node[array_key]) {
								Object.keys(obj).filter(x => has_keys.push(x));
							}
						}
						if (this.array_intersect(has_keys,keys).length!=keys.length) {
							matched.x_not_empty=false;
						}
					} else {
						// single attribute
						if (test in node && typeof node[test] === 'string' && node[test]=='') {
							matched.x_not_empty=false;
						} else if (test in node && typeof node[test] === 'boolean' && node[test]==false) {
							matched.x_not_empty=false;
						} else if (typeof node[test] === 'undefined') {
							matched.x_not_empty=false;
						}
					}
				}
			}
			if (this.x_config.debug) console.timeEnd(`${key} x_not_empty`);
			// test 4: x_not_text_contains
			// can have multiple values.. ex: margen,arriba
			if (this.x_config.debug) console.time(`${key} x_not_text_contains`);
			if (command_requires['x_not_text_contains']!='' && allTrue(matched,keys)) {
				for (let word of command_requires['x_not_text_contains'].split(',')) {
					if (node.text.indexOf(word)!=-1) {
						matched.x_not_text_contains=false;
						break;
					}
				}
			}
			if (this.x_config.debug) console.timeEnd(`${key} x_not_text_contains`);
			// test 5: x_empty (node keys that must be empty (undefined also means not empty))
			if (this.x_config.debug) console.time(`${key} x_empty`);
			if (command_requires['x_empty']!='' && allTrue(matched,keys)) {
				for (let key of command_requires['x_empty'].split(',')) {
					let testpath = getVal(node,key);
					if (typeof testpath === 'string' && testpath!='') {
						matched.x_empty=false;
						break;
					} else if (typeof testpath === 'object' && testpath.length>0) {
						matched.x_empty=false;
						break;
					} else if (typeof testpath === 'undefined') {
						matched.x_empty=false;
						break;
					}
				}
			}
			if (this.x_config.debug) console.timeEnd(`${key} x_empty`);
			// test 6: x_text_contains
			if (command_requires['x_text_contains']!='' && allTrue(matched,keys)) {
				// @TODO here we are
			}
			/* test keys
			let list = keys.split(',');
			for (let kkey in list) {
				if (comm_keys.indexOf(list[kkey])!=-1) command_features[list[kkey]] = this.x_commands[key][list[kkey]];
			}*/
			console.log(`${node.text}: ${key} command_requires`,command_requires);
			console.log(`${node.text}: matched`,matched);
			//await setImmediatePromise();
		}
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

    //set theory group
    array_intersect(arr1,arr2) {
    	return arr1.filter(x => arr2.includes(x));
    }
    array_substract(arr1,arr2) {
    	return arr1.filter(x => !arr2.includes(x));
    }
    array_difference(arr1,arr2) {
    	return arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
    }
    array_union(arr1,arr2) {
    	return [...arr1, ...arr2];
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

//sets/creates the same value to all keys in an object
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

function allTrue(object,keys) {
	//ex. allTrue(matched,'x_icons,x_not_icons');
	let resp = true;
	for (let key of keys.split(',')) {
		if (object[key]!==true) {
			resp = false;
			break;
		}
	}
	return resp;
}

function setImmediatePromise() {
	//for preventing freezing node thread within loops (fors)
	return new Promise((resolve) => {
	  setImmediate(() => resolve());
	});
}

function getVal(project, myPath){
    return myPath.split('.').reduce ( (res, prop) => res[prop], project );
}
// end: private helper methods