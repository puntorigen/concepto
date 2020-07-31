/**
* Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.<br/><sup>Note: when using optional arguments you need to pass all used arguments as 1 object with keys.</sup>
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
			prefix:''
		};
		this.x_config = {...def_config,...config};
		this.x_console = new console_({ silent:!this.x_config.console });
		this.x_console.setPrefix({ prefix:this.x_config.class, color:'yellow' });
		this.x_flags = { init_ok:false, dsl:file, watchdog:{ start:new Date(), end:new Date() } };
		this.x_commands=this.commands();
		if (this.x_config.extend) this.addCommands(this.x_config.extend);
		//this.son_methods=this.getInstanceMethodNames(this);
		//console.log('son methods says',this.son_methods);
	}

	// to be called by user, after using new class()
	async init() {
		if (!this.x_flags.init_ok) {
			let dsl_parser = require('dsl_parser'), path = require('path'), tmp = {};
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
			this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:2, recurse:true });
			tmp.directory = path.dirname(path.resolve(this.x_flags.dsl));
			if (this.x_config.cache) {
				// @TODO implement cache (i'll leave it for after processing)
				//this.x_console.outT({ message:`creating dsl_cache subdir ..`, color:'cyan', data:tmp.directory });
			}
			this.x_console.outT({ message:`time passed since start .. ${this.secsPassed_()} secs`, color:'cyan' });
			// @TODO create github compatible DSL
			tmp.dsl_git_path = path.join(tmp.directory,'dsl_git');
			this.x_console.outT({ message:`dsl_git dir`, data:tmp.dsl_git_path });
			// continue
			this.x_flags.init_ok = true;
			await this.onInit();
		} else {
			// this was already called!
			this.x_console.out({ message:`you may only call method init() once!` });
		}
	}

	// ********************
	// template methods
	// ********************

	async onInit() {
		console.log('hello from concepto.js')
	}

	reply_template(init={}) {
		let resp = { init:'', open:'', close:'', hasChildren:true, type:'simple', valid:true, _meta:{ _set:{}, cache:true } };
		return {...resp,...init};
	}

	// ********************
	// private methods
	// ********************
	commands() {
		return {};
	}

	addCommands(command_func) {
		if (command_func && typeof command_func === 'function') { 
			let t = command_func(this);
			if (typeof t === 'object') {
				this.x_commands = {...this.x_commands,...t};
			} else {
				throw new Error('error! addCommands() argument doesn\'t reply with an Object');
			}
		} else if (command_func && typeof command_func === 'object') {
			this.x_commands = {...this.x_commands,...command_func};
		}
	}

	// ********************
	// internal methods
	// ********************

	secsPassed_() {
		let tmp = new Date().getTime() - this.x_flags.watchdog.start.getTime();
		return tmp/1000;
	}

	getInstanceMethodNames(obj, stop) {
	  let array = [];
	  let proto = Object.getPrototypeOf (obj);
	  let me = this;
	  while (proto && proto !== stop) {
	  	console.log('processing proto:',proto);
	    Object.getOwnPropertyNames (proto)
	      .forEach ((name,pos) => {
	        if (name !== 'constructor') {
	          if (me.hasMethod (proto, name)) {
            	array.push ({ name:name, pos:pos, class:proto, params:me.getParamNames(me[name]) });
	          }
	        }
	      });
	    proto = Object.getPrototypeOf (proto);
	    stop = proto; //we only need the first record, not our parents.
	  }
	  return array;
	}

	getParamNames(func) {
		let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
		let ARGUMENT_NAMES = /([^\s,]+)/g;
		let fnStr = func.toString().replace(STRIP_COMMENTS, '');
		// @TODO 30-jul-20 add support for params of type spread (ex. onlyOnVue2)
		let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
		if(result === null)
		 result = [];
		return result;
	}

	hasMethod (obj, name) {
	  const desc = Object.getOwnPropertyDescriptor (obj, name);
	  return !!desc && typeof desc.value === 'function';
	}

	throwIfMissing(name) {
        throw new Error('Missing '+name+' parameter!');
    }

}