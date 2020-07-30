// Concepto DSL Base Class
class concepto {

	constructor({ config }={}) {
		let def_config = {
			silent:false,
			prefix:''
		};
		this.config = {...def_config,...config};
		this.son_methods=this.getInstanceMethodNames(this);
		this.node_funcs=this.node_types();
		console.log('son methods dice',this.son_methods);
		console.log('this.node_funcs dice',this.node_funcs);
		this.onInit();
		console.log('first node executed says:',this.node_funcs['def_mapa'].func({}));
	}

	// ********************
	// template methods
	// ********************

	onInit() {
		console.log('hello from concepto.js')
	}

	reply_template(init={}) {
		let resp = { init:'', open:'', close:'', hasChildren:true, type:'simple', valid:true, _meta:{ _set:{}, cache:true } };
		return {...resp,...init};
	}

	// ********************
	// private methods
	// ********************
	node_types() {
		return [];
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

// VUE DSL Class
import extra_commands from './extra_commands'
export default class vue extends concepto {

	constructor({ config }={}) {
		super(config);
	}

	node_types() {
		let me = this, nodes = {
			'def_mapa': {
				x_text:'mapa', x_icons:'idea',
				func:function(node) {
					let resp = me.reply_template({ otro:'Pablo' });
					console.log('text:' + this.x_text + ' node dice Hola!',this);
					return resp;												
				}
			}
		};
		let external = extra_commands(me);
		return {...nodes,...external};
	}

	// ********************
	// template methods
	// ********************

	onInit() {
		console.log('hello from vue')
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

