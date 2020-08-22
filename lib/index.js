(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.concepto = factory());
}(this, (function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
  * Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.
  * @name 	concepto
  * @module 	concepto
  **/

  /**
   * A node object representation of a DSL node.
   * @typedef {Object} NodeDSL
   * @property {number} id - Node unique ID.
   * @property {number} level - Indicates the depth level from the center of the dsl map.
   * @property {string} text - Indicates the text defined in the node itself.
   * @property {string} text_rich - Indicates the html defined in the node itself.
   * @property {string} text_note - Indicates the text/html defined in the notes view of the node (if any).
   * @property {string} image - Image link defined as an image within the node.
   * @property {Object} cloud - Cloud information of the node.
   * @property {string} cloud.bgcolor - Background color of cloud.
   * @property {boolean} cloud.used - True if cloud is used, false otherwise. 
   * @property {Arrow[]} arrows - Visual connections of this node with other nodes {@link #module_concepto..Arrow}.
   * @property {NodeDSL[]} nodes - Children nodes of current node.
   * @property {Object} font - Define font, size and styles of node texts.
   * @property {Object} font.face - Font face type used on node.
   * @property {Object} font.size - Font size used on node.
   * @property {Object} font.bold - True if node text is in bold.
   * @property {Object} font.italic - True if node text is in italics.
   * @property {string} style - Style applied to the node.
   * @property {string} color - Text color of node.
   * @property {string} bgcolor - Background color of node.
   * @property {string} link - Link defined on node.
   * @property {string} position - Position in relation of central node (left,right).
   * @property {Object} attributes - Object with each attribute (key is attribute name, value is attribute value).
   * @property {string[]} icons - Array with icon names used in the node.
   * @property {date} date_modified - Date of node when it was last modified.
   * @property {date} date_created - Date of node when it was created.
   */

  /**
   * Arrow object definition, for connections to other nodes within a DSL.
   * @typedef {Object} Arrow
   * @property {string} target - Target node ID of connection.
   * @property {string} color - Color of visual connection.
   * @property {string} style - Graphical representation type of link (source-to-target, target-to-source, both-ways). 
  */
  class concepto {
    constructor(file) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (arguments.length != 2 || typeof arguments[0] === 'object') throw new Error('fatal error! missing file parameter for parser!');

      var console_ = require('open_console');

      var def_config = {
        class: 'concepto',
        console: true,
        debug: false,
        cache: true,
        dsl_git: true,
        prefix: ''
      };
      this.x_config = _objectSpread2(_objectSpread2({}, def_config), config);
      this.x_console = new console_({
        silent: !this.x_config.console
      });
      this.x_console.setPrefix({
        prefix: this.x_config.class,
        color: 'yellow'
      });
      this.x_flags = {
        init_ok: false,
        dsl: file,
        watchdog: {
          start: new Date(),
          end: new Date()
        }
      };
      this.x_commands = {}; //this.commands();

      this.x_time_stats = {
        times: {},
        tables: {}
      };
      this.x_state = {}; // for dsl parser to share variables within commands and onMethods.

      this.x_memory_cache = {
        findCommand: {},
        findValidCommand: {},
        isExactParentID: {},
        hasBrotherBefore: {},
        hasBrotherNext: {}
      }; // grab class methods that start with the 'on' prefix

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
    /**
    * Initializes/starts the class 
    * @async
    */


    init() {
      var _this = this;

      return _asyncToGenerator(function* () {
        if (!_this.x_flags.init_ok) {
          var dsl_parser = require('dsl_parser'),
              path = require('path'),
              fs = require('fs').promises,
              tmp = {}; // show title


          _this.x_console.title({
            title: "DSL Interpreter ".concat(_this.x_config.class, "\ninit:compiling file:\n").concat(_this.x_flags.dsl),
            color: 'cyan',
            config: {
              align: 'left'
            }
          });

          _this.dsl_parser = new dsl_parser({
            file: _this.x_flags.dsl,
            config: {
              cancelled: false,
              debug: _this.x_config.debug
            }
          });

          try {
            yield _this.dsl_parser.process();
          } catch (d_err) {
            _this.x_console.out({
              message: "error: file ".concat(_this.x_flags.dsl, " does't exist!"),
              data: d_err
            });

            return;
          } // @TODO I believe we should get the subnodes as cheerio references and request as needed on Writer method
          //this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:2, recurse:true });
          // 7-ago-2020 x_dsl_nodes commented out, because its not used anymore (was used for git version).

          /*
          // parse nodes ..
          this.x_console.outT({ message:`parsing nodes with dates ..`, color:'cyan' });
          this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:'2', nodes_raw:true });
          */


          tmp.directory = path.dirname(path.resolve(_this.x_flags.dsl));

          if (_this.x_config.cache) ;

          _this.x_console.outT({
            message: "time passed since start .. ".concat(_this.secsPassed_(), " secs"),
            color: 'cyan'
          }); // @TODO create github compatible DSL


          if (_this.x_config.dsl_git) {
            _this.x_console.outT({
              message: "creating github compatible DSL",
              color: 'green'
            });

            var for_git = yield _this.dsl_parser.createGitVersion(); // save dsl git file

            if (typeof _this.x_config.dsl_git === 'boolean') {
              tmp.dsl_git_path = path.join(tmp.directory, 'dsl_git');

              _this.debug("dsl_git dir", tmp.dsl_git_path); // @TODO create dsl_git dir and save file contents as dsl_git/(filename).dsl


              try {
                yield fs.mkdir(tmp.dsl_git_path);
              } catch (cpath_err) {}

              var git_target = path.join(tmp.dsl_git_path, path.basename(_this.x_flags.dsl));
              yield fs.writeFile(git_target, for_git, 'utf-8');

              _this.debug("dsl_git file saved as: ".concat(git_target));
            } else if (typeof _this.x_config.dsl_git === 'function') {
              // if dsl_git is a function, call it with out ready content; maybe to send it though sockets, further processing or saving in a diferent location
              _this.debug("calling dsl_git custom method ".concat(_this.x_config.dsl_git.name));

              yield _this.x_config.dsl_git(for_git);
            } //


            _this.x_console.outT({
              message: "ready github compatible DSL",
              color: 'green'
            });
          } // continue


          _this.x_flags.init_ok = true;
          yield _this.onInit();
        } else {
          // this was already called!
          _this.x_console.out({
            message: "you may only call method init() once!"
          });
        }
      })();
    } // **********************************
    // template methods (to be extended)
    // **********************************

    /**
    * Sets the default reply Object for commands
    * @param 	{Object}	[init]				- Merges given object keys with default defined template
    * @return 	{Object}
    */


    reply_template() {
      var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var resp = {
        init: '',
        open: '',
        close: '',
        hasChildren: true,
        type: 'simple',
        valid: true,
        _meta: {
          _set: {},
          cache: true
        }
      };
      return _objectSpread2(_objectSpread2({}, resp), init);
    }
    /**
    * Gets automatically executed after init method finishes.
    * You should place any parser preparation steps here (ex. load commands)
    * @async
    */


    onInit() {
      return _asyncToGenerator(function* () {
        console.log('hello from concepto.js');
      })();
    }
    /**
    * Gets automatically executed after parsing all nodes level 2 of the given dsl (before onCompleteCodeTemplate)
    * @async
    * @param 	{Object}		processedNode		- reply content of process method per processed level2 node (keys of reply_template method)
    * @return 	{Object}
    */


    onAfterProcess(processedNode) {
      return _asyncToGenerator(function* () {
        return processedNode;
      })();
    }
    /**
    * Gets automatically executed within writer method for setting the title for a node level 2.
    * @async
    * @param 	{NodeDSL}		node		- node to process
    * @return 	{String}
    */


    onDefineTitle(node) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var resp = node.text;
        Object.keys(node.attributes).map(function (i) {
          if (i == 'title' || i == 'titulo') {
            resp = node.attributes[i];
            return false;
          }
        }.bind(_this2));
        /*
        for (i in node.attributes) {
        	if (node.attributes[i]=='title' || node.attributes[i]=='titulo') {
        		resp = node.attributes[i];
        		break;
        	}
        }*/

        return resp;
      })();
    }
    /**
    * Gets automatically executed for naming filename of class/page by testing node (you could use a slud method here).
    * @async
    * @param 	{NodeDSL}		node		- node to process
    * @return 	{String}
    */


    onDefineFilename(node) {
      return _asyncToGenerator(function* () {
        return node.text;
      })();
    }
    /**
    * Gets automatically called for naming the class/page by testing node (similar to a filename, but for objects reference).
    * @async
    * @param 	{NodeDSL}		node		- node to process
    * @return 	{String}
    */


    onDefineNodeName(node) {
      return _asyncToGenerator(function* () {
        return node.text.replace(' ', '_');
      })();
    }
    /**
    * Defines template for code given the processedNodes of writer(). Useful to prepend/append code before writting code to disk.
    * @async
    * @param 	{Object}		processedNode		- reply content of process method per processed level2 node (keys of reply_template method)
    * @return 	{Object}
    */


    onCompleteCodeTemplate(processedNode) {
      return _asyncToGenerator(function* () {
        return processedNode;
      })();
    }
    /**
    * Defines preparation steps before processing nodes.
    * @async
    */


    onPrepare() {
      return _asyncToGenerator(function* () {})();
    }
    /**
    * Gets automatically called after errors have being found while processing nodes (with the defined commands)
    * @async
    * @param 	{string[]}		errors		- array of errors messages
    */


    onErrors(errors) {
      return _asyncToGenerator(function* () {})();
    }
    /**
    * Gets automatically called after all processing on nodes has being done. You usually create the files here using the received processedNodes array.
    * @async
    * @param 	{Object[]}		processedNodes		- array of nodes already processed (keys of reply_template method) ready to be written to disk
    */


    onCreateFiles(processedNodes) {
      return _asyncToGenerator(function* () {})();
    } // ********************
    // helper methods
    // ********************

    /**
    * A command object specifying requirements for a node to execute its function.
    * @typedef {Object} Command
    * @property {string} [x_icons] 				- List of required icons that the node must define to be a match for this command.
    * @property {string} [x_not_icons] 			- List of icons that the node cannot define to be a match for this command.
    * @property {string} [x_not_empty] 			- List of keys that must not be empty to be a match for this command (can be any key from a NodeDSL object). Example: 'attribute[src],color'
    * @property {string} [x_not_text_contains] 	- List of strings, which cannot be within the node text.
    * @property {string} [x_empty] 				- List of NodeDSL keys that must be empty to be a match for this command.
    * @property {string} [x_text_contains]		- List of strings, that can be contain in node text (if delimiter is comma) or that must be all contained within the node text (if delimiter is |).
    * @property {string} [x_level] 				- Numeric conditions that the level of the node must met (example: '>2,<5' or '2,3,4').
    * @property {string} [x_all_hasparent] 		- List of commands ids (keys), which must be ancestors of the node to be a match for this command.
    * @property {string} [x_or_hasparent] 		- List of commands ids (keys), which at least one must be an ancestor of the node to be a match for this command.
    * @property {string} [x_or_isparent] 		- List of commands ids (keys), which at least one must be the exact parent of the node to be a match for this command.
    * @property {Object} [autocomplete] 			- Describes the node for the autocomplete feature of Concepto DSL software and its related documentation. The feature also takes into account the definition of the command (x_level and x_icons)
    * @property {string} [autocomplete.key_text] 	- String that the node text must have for this command to be suggested.
    * @property {string} [autocomplete.hint] 		- Text description for this command to be shown on Concepto DSL.
    * @property {Function} func - Function to execute with a matching node. Receives one argument and it must be a NodeDSL object.
    */

    /**
    * Add commands for processing nodes with the current class
    * @async
    * @param 	{Function}		command_func		- async function returning an object with commands objects ({@link Command}) where each key is the command id, and its value a Command object.
    */


    addCommands(command_func) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        if (!_this3.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        if (command_func && typeof command_func === 'function') {
          var t = yield command_func(_this3);

          if (typeof t === 'object') {
            _this3.x_commands = _objectSpread2(_objectSpread2({}, _this3.x_commands), t);
          } else {
            throw new Error('error! addCommands() argument doesn\'t reply with an Object');
          }
        } else if (command_func && typeof command_func === 'object') {
          _this3.x_commands = _objectSpread2(_objectSpread2({}, _this3.x_commands), command_func);
        }
      })();
    }
    /**
    * Finds one or more commands defined that matches the specs of the given node.
    * @async
    * @param 	{NodeDSL}		node			- node for which to find commands that match
    * @param 	{boolean}		[justone=true]	- indicates if you want just the first match (true), or all commands that match the given node (false)
    * @return 	{Command|Command[]}
    */


    findCommand() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator(function* () {
        var {
          node = _this4.throwIfMissing('node'),
          justone = true,
          show_debug = true
        } = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
        if (!_this4.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        var resp = _objectSpread2(_objectSpread2({}, _this4.reply_template()), {
          id: 'not_found',
          hint: 'failover command'
        }),
            xtest = [];

        if (typeof node.icons === 'undefined') {
          if (show_debug) _this4.debug('error: findCommand was given a blank node!');
          return resp;
        }

        if (node.id in _this4.x_memory_cache.findCommand) {
          if (show_debug) _this4.debug("using memory_cache for findCommand for node ID ".concat(node.id));
          return _this4.x_memory_cache.findCommand[node.id];
        } else {
          if (show_debug) _this4.debug("findCommand for node ID ".concat(node.id));
          var keys = 'x_icons,x_not_icons,x_not_empty,x_not_text_contains,x_empty,x_text_starts,x_text_contains,x_level,x_or_hasparent,x_all_hasparent,x_or_isparent';
          var command_requires1 = setObjectKeys(keys, '');

          var node_features = _objectSpread2({}, command_requires1);

          var command_defaults = _objectSpread2({}, command_requires1);

          var def_matched = setObjectKeys(keys, true);
   // iterate through commands

          for (var key in _this4.x_commands) {
            //let comm_keys = Object.keys(this.x_commands[key]);
            // reset defaults for current command
            var matched = _objectSpread2({}, def_matched); // build template for used keys


            var command_requires = _objectSpread2(_objectSpread2({}, command_defaults), _this4.x_commands[key]);

            delete command_requires.func; // test command features vs node features
            // test 1: icon match
            //if (this.x_config.debug) this.x_console.time({ id:`${key} x_icons` });

            if (command_requires['x_icons'] != '') {
              _this4.debug_time({
                id: "".concat(key, " x_icons")
              });

              for (var qi of command_requires.x_icons.split(',')) {
                matched.x_icons = node.icons.includes(qi) ? true : false;
                if (!matched.x_icons) break;
                yield setImmediatePromise();
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_icons")
              });
            } //if (this.x_config.debug) this.x_console.timeEnd({ id:`${key} x_icons` });
            // test 2: x_not_icons


            if (command_requires['x_not_icons'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_not_icons")
              }); // special case first


              if (node.icons.length > 0 && command_requires['x_not_icons'] != '' && ['*'].includes(command_requires['x_not_icons'])) {
                matched.x_not_icons = false;
              } else if (command_requires['x_not_icons'] != '') {
                // if node has any icons of the x_not_icons, return false aka intersect values, and if any assign false.
                matched.x_not_icons = _this4.array_intersect(command_requires['x_not_icons'].split(','), node.icons).length > 0 ? false : true;
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_not_icons")
              });
            } // test 3: x_not_empty. example: attributes[event,name] aka key[value1||value2] in node
            // supports multiple requirements using + as delimiter "attributes[event,name]+color"


            if (command_requires['x_not_empty'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_not_empty")
              }); //this.debug(`test x_not_empty: ${command_requires['x_not_empty']}`);
              // transform x_not_empty value => ex. attributes[event,name]+color => attributes[event+name],color in com_reqs


              var com_reqs = command_requires['x_not_empty'].replace(/\+/g, '/').replace(/\,/g, '+').replace(/\//g, ',').split(','); //this.debug(':transformed x_not_empty',com_reqs.join(','));

              for (var test of com_reqs) {
                // start tests
                if (test.indexOf('.') != -1) {
                  // struct type definition: ex. cloud.bgcolor (if exists, it must not be empty, or false if doesnt exist)
                  var testpath = getVal(node, test);

                  if (typeof testpath === 'string' && testpath == '' || typeof testpath === 'boolean' && testpath == false) {
                    matched.x_not_empty = false;
                    break;
                  }
                } else if (test.indexOf('[') != -1) {
                  (function () {
                    // array type definition: ex. attributes[value1,value2..] (attributes is an array type)
                    // it must exist value1,value2,.. within array attributes of objects to be true
                    var array_key = test.split('[')[0];

                    var keys = _this4.dsl_parser.findVariables({
                      text: test,
                      symbol: '[',
                      symbol_closing: ']'
                    }).split('+');

                    var has_keys = [];

                    if (array_key != 'attributes' && node[array_key]) {
                      for (var obj of node[array_key]) {
                        Object.keys(obj).filter(function (x) {
                          has_keys.push(x);
                        });
                      }
                    } else if (array_key == 'attributes') {
                      Object.keys(node.attributes).filter(function (x) {
                        has_keys.push(x);
                      });
                    }

                    if (_this4.array_intersect(has_keys, keys).length != keys.length) {
                      matched.x_not_empty = false;
                    }
                  })();
                } else {
                  // single attribute
                  if (test in node && typeof node[test] === 'string' && node[test] == '') {
                    matched.x_not_empty = false;
                  } else if (test in node && typeof node[test] === 'boolean' && node[test] == false) {
                    matched.x_not_empty = false;
                  } else if (typeof node[test] === 'undefined') {
                    matched.x_not_empty = false;
                  }
                }

                yield setImmediatePromise();
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_not_empty")
              });
            } // test 4: x_not_text_contains
            // can have multiple values.. ex: margen,arriba


            if (command_requires['x_not_text_contains'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_not_text_contains")
              });

              for (var word of command_requires['x_not_text_contains'].split(',')) {
                if (node.text.indexOf(word) != -1) {
                  matched.x_not_text_contains = false;
                  break;
                }

                yield setImmediatePromise();
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_not_text_contains")
              });
            } // test 5: x_empty (node keys that must be empty (undefined also means not empty))


            if (command_requires['x_empty'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_empty")
              });

              for (var _key of command_requires['x_empty'].split(',')) {
                var _testpath = getVal(node, _key);

                if (typeof _testpath === 'string' && _testpath != '') {
                  matched.x_empty = false;
                  break;
                } else if (typeof _testpath === 'object' && _testpath.length > 0) {
                  matched.x_empty = false;
                  break;
                } else if (typeof _testpath === 'undefined') {
                  matched.x_empty = false;
                  break;
                }

                yield setImmediatePromise();
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_empty")
              });
            } // test 6: x_text_contains


            if (allTrue(matched, keys) && command_requires['x_text_contains'] != '') {
              _this4.debug_time({
                id: "".concat(key, " x_text_contains")
              }); // @TODO here we are


              if (command_requires['x_text_contains'].indexOf('|') != -1) {
                // 'or' delimiter
                var n_match = false;

                for (var _key2 of command_requires['x_text_contains'].split('|')) {
                  if (node.text.indexOf(_key2) != -1) {
                    n_match = true;
                    break;
                  }
                }

                matched.x_text_contains = n_match;
              } else if (command_requires['x_text_contains'].indexOf(',') != -1) {
                // 'and' delimiter
                for (var _key3 of command_requires['x_text_contains'].split(',')) {
                  if (node.text.indexOf(_key3) == -1) {
                    matched.x_text_contains = false;
                    break;
                  }
                }
              } else if (node.text.toLowerCase().indexOf(command_requires['x_text_contains'].toLowerCase()) == -1) {
                matched.x_text_contains = false;
              }

              _this4.debug_timeEnd({
                id: "".concat(key, " x_text_contains")
              });
            } // test 7: x_level - example: '2,3,4' (any) or '>2,<7' (all)


            if (command_requires['x_level'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_level")
              });

              matched.x_level = numberInCondition(node.level, command_requires['x_level']);

              _this4.debug_timeEnd({
                id: "".concat(key, " x_level")
              });
            } // test 8: x_or_hasparent


            if (command_requires['x_or_hasparent'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_or_hasparent")
              }); //matched.x_or_hasparent=false;


              matched.x_or_hasparent = yield _this4.hasParentID(node.id, command_requires['x_or_hasparent']);

              _this4.debug_timeEnd({
                id: "".concat(key, " x_or_hasparent")
              });
            } // test 9: x_all_hasparent


            if (command_requires['x_all_hasparent'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_all_hasparent")
              });

              matched.x_all_hasparent = yield _this4.hasParentID(node.id, command_requires['x_all_hasparent'], true);

              _this4.debug_timeEnd({
                id: "".concat(key, " x_all_hasparent")
              });
            } // test 10: x_or_isparent


            if (command_requires['x_or_isparent'] != '' && allTrue(matched, keys)) {
              _this4.debug_time({
                id: "".concat(key, " x_or_isparent")
              });

              var is_direct = false;

              for (var _key4 of command_requires['x_or_isparent'].split(',')) {
                is_direct = yield _this4.isExactParentID(node.id, _key4);
                if (is_direct == true) break;
                yield setImmediatePromise();
              }

              matched.x_or_isparent = is_direct;

              _this4.debug_timeEnd({
                id: "".concat(key, " x_or_isparent")
              });
            } // ***************************
            // if we passed all tests ... 
            // ***************************


            if (allTrue(matched, keys)) {
              // count num of defined requires on matched command (more is more exact match, aka priority)
              var count = Object.entries(command_requires).reduce((n, x) => n + (x[1] != ''), 0); // assign resp

              resp = _objectSpread2(_objectSpread2(_objectSpread2({}, {
                x_priority: -1
              }), _this4.x_commands[key]), {
                x_id: key,
                priority: count
              });

              if (!justone) {
                xtest.push(resp);
              } else {
                break;
              }
            }
            /*if (node.id=='ID_923953027') {
            console.log(`${node.text}: ${key} command_requires`,command_requires);
            console.log(`${node.text}: matched`,matched);
            }*/


            yield setImmediatePromise();
          } // sort by priority


          if (show_debug) _this4.debug_time({
            id: "sorting by priority"
          });
          var sorted = xtest.sort(function (a, b) {
            if (a.x_priority != -1 && b.x_priority != -1) {
              // sort by x_priority
              return b.x_priority - a.x_priority;
            } else {
              // sort by priority (number of features)
              return b.priority - a.priority;
            }
          });
          if (show_debug) _this4.debug_timeEnd({
            id: "sorting by priority"
          }); // reply

          if (!justone) {
            /*
            // get just the ids
            let sorted_ids = sorted.map(function(elem,value) {
            	return elem.id;	
            });
            */
            // return the array of commands, sorted by 'priority' key
            resp = sorted;
          } //console.log(`findCommand resp`,resp);


          _this4.x_memory_cache.findCommand[node.id] = resp;
          return resp;
        }
      })();
    }
    /**
    * Finds the valid/best command match for the given node.
    * Also tests the command for its 'valid' attribute, in case the command func specified aditional conditions.
    * If no command is found, returns false.
    *
    * @async
    * @param 	{NodeDSL}		node			- node for which to find the command
    * @param 	{boolean}		[object=false]	- if false returns the command reference, true returns the command execution answer
    * @return 	{Command|boolean}
    */


    findValidCommand() {
      var _arguments2 = arguments,
          _this5 = this;

      return _asyncToGenerator(function* () {
        var {
          node = _this5.throwIfMissing('node'),
          object = false,
          x_command_shared_state = {},
          show_debug = true
        } = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
        if (!_this5.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        if (node.id in _this5.x_memory_cache.findValidCommand) {
          //if (show_debug) this.debug({ message:`findValidCommand called for node ${node.id}, level:${node.level}, text:${node.text} using CACHE`, color:'green' });
          return _this5.x_memory_cache.findValidCommand[node.id];
        } else {
          if (show_debug) _this5.debug({
            message: "findValidCommand called for node ".concat(node.id, ", level:").concat(node.level, ", text:").concat(node.text),
            color: 'yellow'
          });
          var reply = {};
          var commands_ = yield _this5.findCommand({
            node,
            justone: false,
            show_debug: show_debug
          }); // @TODO debug and test

          if (commands_.length == 0) {
            _this5.debug({
              message: 'findValidCommand: no command found.',
              color: 'red'
            });
          } else if (commands_.length == 1) {
            reply = _objectSpread2({}, commands_[0]); // try executing the node on the found commands_

            try {
              var test = yield _this5.x_commands[reply.x_id].func(node, x_command_shared_state);
              reply.exec = test; // @TODO test if _f4e is used; because its ugly

              reply._f4e = commands_[0].x_id;
              if (show_debug) _this5.debug({
                message: "findValidCommand: 1/1 applying command ".concat(commands_[0].x_id, " ... VALID MATCH FOUND! (nodeid:").concat(node.id, ")"),
                color: 'green'
              });
            } catch (test_err) {
              if (show_debug) _this5.debug({
                message: "findValidCommand: 1/1 applying command ".concat(commands_[0].x_id, " ... ERROR! (nodeid:").concat(node.id, ")"),
                color: 'red'
              }); // @TODO emit('internal_error','findValidCommand')

              reply.error = true;
              reply.valid = false;
              reply.catch = test_err; //throw new Error(test_err); // @TODO we should throw an error, so our parents catch it (9-AGO-20)
            }
          } else {
            // more than one command found
            if (show_debug) _this5.debug({
              message: "findValidCommand: ".concat(commands_.length, " commands found: (nodeid:").concat(node.id, ")"),
              color: 'green'
            }); // test each command

            for (var qm_index in commands_) {
              var qm = commands_[qm_index];

              try {
                var _test = yield _this5.x_commands[qm.x_id].func(node, x_command_shared_state);

                if (_test.valid) {
                  if (show_debug) _this5.debug({
                    message: "findValidCommand: ".concat(parseInt(qm_index) + 1, "/").concat(commands_.length, " testing command ").concat(qm.x_id, " ... VALID MATCH FOUND! (nodeid:").concat(node.id, ")"),
                    color: 'green'
                  });
                  if (show_debug) _this5.debug({
                    message: '---------------------',
                    time: false
                  });

                  if (object) {
                    reply = _test;
                  } else {
                    // @TODO test if _f4e is used; because its ugly
                    reply = qm;
                    reply.exec = _test;
                    reply._f4e = qm.x_id;
                  }

                  break;
                }
              } catch (test_err1) {
                if (show_debug) _this5.debug({
                  message: "findValidCommand: error executing command ".concat(qm, " (nodeid:").concat(node.id, ")"),
                  data: test_err1,
                  color: 'red'
                });
                reply.error = true;
                reply.valid = false;
                reply.catch = test_err1; // @TODO we should throw an error, so our parents catch it (9-AGO-20) and break the loop
              }
            }
          }

          if (Object.keys(reply).length == 0) reply = false;
          _this5.x_memory_cache.findValidCommand[node.id] = reply;
          return reply;
        }
      })();
    } // ****************************
    // ADVANCED PROCESSING METHODS
    // ****************************

    /**
    * This method traverses the dsl parsed tree, finds/execute x_commands and generated code as files.
    * @return 	{Object}
    */


    process() {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        if (!_this6.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        _this6.debug_time({
          id: 'process/writer'
        });

        var resp = {
          nodes: []
        }; // read nodes

        _this6.x_console.outT({
          prefix: 'process,yellow',
          message: "processing nodes ..",
          color: 'cyan'
        });

        var x_dsl_nodes = yield _this6.dsl_parser.getNodes({
          level: 2,
          nodes_raw: true
        });

        _this6.debug('calling onPrepare');

        _this6.debug_time({
          id: 'onPrepare'
        });

        yield _this6.onPrepare();

        _this6.debug_timeEnd({
          id: 'onPrepare'
        }); // 


        for (var level2 of x_dsl_nodes) {
          //this.debug('node',node);
          // remove await when in production (use Promise.all after loop then)
          var main = yield _this6.process_main(level2, {}); // append to resp

          resp.nodes.push(main);
          yield setImmediatePromise();
        } // @TODO enable when not debugging
        //resp.nodes = await Promise.all(resp.nodes);


        _this6.debug_timeEnd({
          id: 'process/writer'
        }); // check if there was some error


        var were_errors = false;
        resp.nodes.map(function (x) {
          if (x.error == true) {
            were_errors = true;
            return false;
          }
        }); // if there was no error

        if (!were_errors) {
          // request creation of files
          yield _this6.onCreateFiles(resp.nodes);

          _this6.x_console.title({
            title: "Interpreter ".concat(_this6.x_config.class.toUpperCase(), " ENDED. Full Compilation took: ").concat(_this6.secsPassed_(), " secs"),
            color: 'green'
          });

          _this6.debug_table('Amount of Time Per Command');
        } else {
          // errors occurred
          _this6.x_console.title({
            title: "Interpreter ".concat(_this6.x_config.class.toUpperCase(), " ENDED with ERRORS.\nPlease check your console history.\nCompilation took: ").concat(_this6.secsPassed_(), " secs"),
            color: 'red'
          }); //this.debug_table('Amount of Time Per Command');

        } // some debug
        //this.debug('after nodes processing, resp says:',resp);
        //this.debug('app state says:',this.x_state);


        return resp;
      })();
    } // process helper methods 
    // improved in my imagination ...


    sub_process(source_resp, nodei, custom_state) {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        var resp = _objectSpread2({}, source_resp);

        if (resp.hasChildren == true && resp.valid == true) {
          var sub_nodes = yield nodei.getNodes();

          var new_state = _objectSpread2({}, custom_state);

          for (var sublevel of sub_nodes) {
            var real = yield _this7.dsl_parser.getNode({
              id: sublevel.id,
              nodes_raw: true,
              recurse: false
            });
            var real2 = yield _this7.findValidCommand({
              node: real,
              object: false,
              x_command_shared_state: new_state
            }); //console.log('sub_process->findValidCommand node:'+real.text,real2);

            if (nodei.state) new_state = _objectSpread2({}, real2.state); // inherint state from last command if defined

            if (real2 && real2.exec && real2.exec.valid == true) {
              //resp.children.push(real2.exec);
              if (real2.exec.state) new_state = _objectSpread2(_objectSpread2({}, new_state), real2.exec.state); //console.log('real2 dice:',real2);

              resp.init += real2.exec.init;
              resp.code += real2.exec.open;
              if (!resp.x_ids) resp.x_ids = [];
              resp.x_ids.push(real2.x_id);
              resp = yield _this7.sub_process(resp, sublevel, new_state);
              resp.code += real2.exec.close;
            } else if (real2.error == true) {
              _this7.x_console.outT({
                message: "error: Executing func x_command:".concat(real2.x_id, " for node: id:").concat(real.id, ", level ").concat(real.level, ", text: ").concat(real.text, "."),
                data: {
                  id: real.id,
                  level: real.level,
                  text: real.text,
                  data: real2.catch,
                  x_command_state: new_state
                }
              });

              yield _this7.onErrors(["Error executing func for x_command:".concat(real2.x_id, " for node id ").concat(real.id, ", text: ").concat(real.text, " ")]);
              resp.valid = false, resp.hasChildren = false, resp.error = true;
              break;
            }

            yield setImmediatePromise();
          }
        }

        return resp;
      })();
    }

    process_main(node, custom_state) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        var resp = {
          state: custom_state,
          id: node.id,
          name: yield _this8.onDefineNodeName(node),
          file: yield _this8.onDefineFilename(node),
          init: '',
          title: yield _this8.onDefineTitle(node),
          attributes: node.attributes,
          code: '',
          open: '',
          close: '',
          x_ids: [],
          subnodes: node.nodes_raw.length
        };

        _this8.x_console.outT({
          prefix: 'process,yellow',
          message: "processing node ".concat(node.text, " .."),
          color: 'yellow'
        }); //
        //try {
        //console.log('process_main->findValidCommand node:'+node.text);


        var copy_state = _objectSpread2({}, custom_state);

        var test = yield _this8.findValidCommand({
          node: node,
          object: false,
          x_command_shared_state: copy_state
        }); //this.debug(`test para node: text:${node.text}`,test);

        if (test && test.exec && test.exec.valid == true) {
          if (test.exec.state) copy_state = _objectSpread2(_objectSpread2({}, copy_state), test.exec.state);
          resp = _objectSpread2(_objectSpread2({}, resp), test.exec);
          resp.error = false;
          resp.init += resp.init;
          resp.code += resp.open;
          if (!resp.x_ids) resp.x_ids = [];
          resp.x_ids.push(test.x_id);

          if (typeof node.getNodes === 'function') {
            resp = yield _this8.sub_process(resp, node, copy_state);
          }

          resp.code += resp.close;
          resp.x_ids = resp.x_ids.join(',');
        } else if (test.error == true) {
          _this8.x_console.outT({
            message: "error: Executing func x_command:".concat(test.x_id, " for node: id:").concat(node.id, ", level ").concat(node.level, ", text: ").concat(node.text, "."),
            data: {
              id: node.id,
              level: node.level,
              text: node.text,
              catch: test.catch,
              x_command_state: test.state
            }
          });

          yield _this8.onErrors(["Error executing func for x_command:".concat(test.x_id, " for node id ").concat(node.id, ", text: ").concat(node.text, " ")]);
          resp.valid = false, resp.hasChildren = false, resp.error = true;
        } else {
          _this8.x_console.outT({
            message: 'error: FATAL, no method found for node processing.',
            data: {
              id: node.id,
              level: node.level,
              text: node.text
            }
          });

          yield _this8.onErrors(["No method found for given node id ".concat(node.id, ", text: ").concat(node.text, " ")]);
          resp.valid = false, resp.hasChildren = false, resp.error = true;
        } // closing level2 'on' calls


        resp = yield _this8.onAfterProcess(resp);
        resp = yield _this8.onCompleteCodeTemplate(resp); //

        /*} catch(err) {
        	// @TODO currently findValidCommand doesn't throw an error when an error is found.
        	this.x_console.outT({ message:`error: Executing func x_command for node: id:${node.id}, level ${node.level}, text: ${node.text}.`, data:{ id:node.id, level:node.level, text:node.text, error:err }});
        	await this.onErrors([`Error executing func for x_command for node id ${node.id}, text: ${node.text} `]);
        	resp.valid=false, resp.hasChildren=false, resp.error=true;
        }*/
        // return

        return resp;
      })();
    } // **********************
    // public helper methods
    // **********************


    secsPassed_() {
      var tmp = new Date().getTime() - this.x_flags.watchdog.start.getTime();
      return tmp / 1000;
    }

    throwIfMissing(name) {
      throw new Error('Missing ' + name + ' parameter!');
    }
    /**
    * Helper method for obtaining the common values (which can be anything) between two arrays.
    * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
    * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
    * @return 	{string[]|Object[]|boolean[]}
    */


    array_intersect(arr1, arr2) {
      return arr1.filter(x => arr2.includes(x));
    }
    /**
    * Helper method for obtaining the first array items minus the second array items (which can be anything).
    * @param 	{string[]|Object[]|boolean[]}		arr1	- first array from which to substract
    * @param 	{string[]|Object[]|boolean[]}		arr2	- second array with items to substract from arr1
    * @return 	{string[]|Object[]|boolean[]}
    */


    array_substract(arr1, arr2) {
      return arr1.filter(x => !arr2.includes(x));
    }
    /**
    * Helper method for obtaining the unique values (which can be anything) between two arrays.
    * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
    * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
    * @return 	{string[]|Object[]|boolean[]}
    */


    array_difference(arr1, arr2) {
      return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
    }
    /**
    * Helper method for joining the values (which can be anything) between two arrays.
    * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
    * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
    * @return 	{string[]|Object[]|boolean[]}
    */


    array_union(arr1, arr2) {
      return [...arr1, ...arr2];
    } // public helpers

    /**
    * Helper method for defining how to display (or do with them; if you overload it) debug messages.
    * @param 	{string|Object}		message		- message to display. It can also be an Object of open-console params.
    * @param 	{*}					[data]		- data variable to show with message
    */


    debug(message, data) {
      var params = {};

      if (arguments.length == 1 && typeof arguments[0] === 'object') {
        params = arguments[0];
      } else {
        params = {
          message,
          data
        };
      }

      if (this.x_config.debug && params.time) {
        this.x_console.outT(_objectSpread2(_objectSpread2({}, {
          prefix: 'debug,dim',
          color: 'dim'
        }), params));
      } else if (this.x_config.debug) {
        this.x_console.out(_objectSpread2(_objectSpread2({}, {
          prefix: 'debug,dim',
          color: 'dim'
        }), params));
      }
    }
    /*
    * Creates required app folder structure needed for file generation as the given specs and returns object with absolute paths
    * optional output_dir overwrites base target directory (which is location of .dsl file + apptitle subdir)
    * @param 	{Object} 	keys 			- Object with keys for which to return absolute paths. Each key must contain a relative output directory (can be nested) to be created and returned.
    * @param 	{string} 	[output_dir]	- Overwrites the default output base directory (which is the location of the dsl file being proccessed).
    * @return 	{Object}
    */


    _appFolders(keys, output_dir) {
      var _this9 = this;

      return _asyncToGenerator(function* () {
        var fs = require('fs').promises;

        _this9.debug('_appFolders');

        var path = require('path');

        var dsl_folder = path.dirname(path.resolve(_this9.x_flags.dsl));
        if (output_dir) dsl_folder = output_dir;
        var resp = {
          base: dsl_folder,
          src: dsl_folder + path.sep + _this9.x_state.central_config.apptitle + path.sep
        };
        resp.app = path.normalize(resp.src); // depending on central config type

        for (var key in keys) {
          resp[key] = path.join(resp.app, keys[key]); // create directories as needed

          try {
            yield fs.mkdir(resp[key], {
              recursive: true
            });
          } catch (errdir) {}
        } // return


        return resp;
      })();
    }
    /**
    * Helper method for measuring (start) time in ms from this method until debug_timeEnd() method and show it in the console.
    * @param 	{string}		id		- id key (which can also have spaces and/or symbols) with a unique id to identify the stopwatch.
    */


    debug_time() {
      // instead of marking and showing time, we want in vue to build a time table and show it with another method
      if (arguments.length > 0) {
        var keys = _objectSpread2({}, arguments[0]);

        if (typeof keys.id !== 'undefined' && keys.id.indexOf('def_') != -1) {
          //&& keys.id.indexOf('_x')!=-1
          var filter_key = keys.id.split(' ')[0];

          if (typeof this.x_time_stats.times[filter_key] === 'undefined') {
            this.x_time_stats.times[filter_key] = new Date();
            this.x_time_stats.tables[filter_key] = {
              command: filter_key,
              calls: 0,
              average_call: 0,
              total_ms: 0
            };
          }
        } else if (this.x_config.debug == true) {
          this.x_console.time(_objectSpread2({}, arguments[0]));
        }
      }
    }
    /*
    debug_time() {
    	if (this.x_config.debug && arguments.length>0) {
    		this.x_console.time({...arguments[0]});
    	}
    }*/

    /**
    * Helper method for measuring (end) time in ms from the call of debug_time() method.
    * @param 	{string}		id		- id key used in the call for debug_time() method.
    */


    debug_timeEnd() {
      if (arguments.length > 0) {
        var keys = _objectSpread2({}, arguments[0]),
            filter_key = ''; // && keys.id.indexOf('_x')!=-1


        if (typeof keys.id !== 'undefined') filter_key = keys.id.split(' ')[0];

        if (typeof keys.id !== 'undefined' && keys.id.indexOf('def_') != -1 && filter_key in this.x_time_stats.times) {
          //if (!this.x_time_stats.tables[keys.id]) this.x_time_stats.tables[keys.id] = {};
          if (typeof this.x_time_stats.tables[filter_key] !== 'undefined') {
            var timePassed = new Date().getTime() - this.x_time_stats.times[filter_key].getTime();
            this.x_time_stats.tables[filter_key].calls += 1;
            this.x_time_stats.tables[filter_key].total_ms = timePassed;
            this.x_time_stats.tables[filter_key].average_call = Math.round(this.x_time_stats.tables[filter_key].total_ms / this.x_time_stats.tables[filter_key].calls);
          }
        } else if (this.x_config.debug == true) {
          this.x_console.timeEnd(_objectSpread2(_objectSpread2({}, {
            color: 'dim',
            prefix: 'debug,dim'
          }), arguments[0]));
        }
      }
    }
    /*debug_timeEnd() {
    	if (this.x_config.debug && arguments.length>0) {
    		this.x_console.timeEnd({...{ color:'dim',prefix:'debug,dim' },...arguments[0]});
    	}
    }*/

    /**
    * Helper method for showing a table with each command execution time and amount of calls
    * @param 	{string}		title		- Optional custom title for table.
    */


    debug_table(title) {
      // build a table with x_time_stats and show it on the console
      var table = [];
      Object.keys(this.x_time_stats.tables).map(function (key) {
        table.push(this.x_time_stats.tables[key]);
      }.bind(this));
      this.x_console.table({
        title: title ? title : 'Times per Command',
        data: table,
        color: 'cyan'
      });
    }
    /**
    * Helper method to return true if given node id has a brother of given command x_id
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @param 	{string}	x_id	- Command object x_id to test for
    * @return 	{Boolean}
    */


    hasBrotherID() {
      var _arguments3 = arguments,
          _this10 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : _this10.throwIfMissing('id');
        var x_id = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : _this10.throwIfMissing('x_id');

        // @TODO test it after having 'real' commands on some parser 3-ago-20
        if (id + x_id in _this10.x_memory_cache.hasBrotherID) {
          return _this10.x_memory_cache.hasBrotherID[id + x_id];
        } else {
          var brother_ids = yield _this10.dsl_parser.getBrotherNodesIDs({
            id,
            before: true,
            after: true
          }).split(',');
          var brother_x_ids = [],
              resp = false;

          for (var q of brother_ids) {
            var node = yield _this10.dsl_parser.getNode({
              id: q,
              recurse: false
            });
            var command = yield findValidCommand({
              node: node,
              show_debug: false,
              object: true
            });
            brother_x_ids.push(command.x_id);
            if (brother_x_ids.includes(x_id) == true) return true;
          } //resp = (brother_x_ids.includes(x_id));


          _this10.x_memory_cache.hasBrotherID[id + x_id] = resp;
          return resp;
        }
      })();
    }
    /**
    * Helper method to return true if given node ID has a brother before it
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @return 	{Boolean}
    */


    hasBrotherBefore() {
      var _arguments4 = arguments,
          _this11 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : _this11.throwIfMissing('id');

        if (id in _this11.x_memory_cache.hasBrotherBefore) {
          return _this11.x_memory_cache.hasBrotherBefore[id];
        } else {
          var brother_ids = yield _this11.dsl_parser.getBrotherNodesIDs({
            id,
            before: true,
            after: false
          }).split(',');
          _this11.x_memory_cache.hasBrotherBefore[id] = brother_ids.includes(id);
          return _this11.x_memory_cache.hasBrotherBefore[id];
        }
      })();
    }
    /**
    * Helper method to return true if given node ID has a brother following it
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @return 	{Boolean}
    */


    hasBrotherNext() {
      var _arguments5 = arguments,
          _this12 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : _this12.throwIfMissing('id');

        if (id in _this12.x_memory_cache.hasBrotherNext) {
          return _this12.x_memory_cache.hasBrotherNext[id];
        } else {
          var brother_ids = yield _this12.dsl_parser.getBrotherNodesIDs({
            id,
            before: false,
            after: true
          }).split(',');
          _this12.x_memory_cache.hasBrotherNext[id] = brother_ids.includes(id);
          return _this12.x_memory_cache.hasBrotherNext[id];
        }
      })();
    }
    /**
    * Helper method to return true if given Command object x_id is the exact parent for the given NodeDSL object id
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @param 	{string}	x_id	- Command object x_id to test for
    * @return 	{Boolean}
    */


    isExactParentID() {
      var _arguments6 = arguments,
          _this13 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : _this13.throwIfMissing('id');
        var x_id = _arguments6.length > 1 && _arguments6[1] !== undefined ? _arguments6[1] : _this13.throwIfMissing('x_id');

        // @TODO test it after having 'real' commands on some parser 4-ago-20
        if (id + x_id in _this13.x_memory_cache.isExactParentID) {
          return _this13.x_memory_cache.isExactParentID[id + x_id];
        } else {
          var parent_node = yield _this13.dsl_parser.getParentNode({
            id
          });
          var parent_command = yield _this13.findValidCommand({
            node: parent_node,
            show_debug: false,
            object: true
          });

          if (parent_command && parent_command.x_id == x_id) {
            _this13.x_memory_cache.isExactParentID[id + x_id] = true;
            return true;
          }

          _this13.x_memory_cache.isExactParentID[id + x_id] = false;
          return false;
        }
      })();
    }
    /**
    * Helper method to return true if given Command object x_id is the parent or is an ancestor for the given NodeDSL object id
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @param 	{string}	x_id	- Command object x_id to test for
    * @return 	{Boolean}
    */


    hasParentID() {
      var _arguments7 = arguments,
          _this14 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments7.length > 0 && _arguments7[0] !== undefined ? _arguments7[0] : _this14.throwIfMissing('id');
        var x_id = _arguments7.length > 1 && _arguments7[1] !== undefined ? _arguments7[1] : _this14.throwIfMissing('x_id');
        var onlyTrueIfAll = _arguments7.length > 2 && _arguments7[2] !== undefined ? _arguments7[2] : false;
        // @TODO test it after having 'real' commands on some parser aug-4-20, fixed on aug-15-20
        var x_ids = x_id.split(',');
        var parents = yield _this14.dsl_parser.getParentNodesIDs({
          id,
          array: true
        });
        var tested_parents_x_ids = [];

        for (var parent_id of parents) {
          var node = yield _this14.dsl_parser.getNode({
            id: parent_id,
            recurse: false
          });
          var parentCommand = yield _this14.findValidCommand({
            node,
            show_debug: false,
            object: true
          });

          if (onlyTrueIfAll == false && x_ids.includes(parentCommand.x_id)) {
            return true;
          } else if (onlyTrueIfAll == false) ; else if (onlyTrueIfAll == true) {
            // onlyTrueIfAll==true
            tested_parents_x_ids.push(parentCommand.x_id);

            if (_this14.array_intersect(tested_parents_x_ids, x_ids).length == x_ids.length) {
              return true;
            }
          }
        } // test again if we are here


        if (_this14.array_intersect(tested_parents_x_ids, x_ids).length == x_ids.length) {
          return true;
        } else {
          return false;
        } //if (!onlyTrueIfAll) return false;
      })();
    }
    /**
    * Helper method to return all Command object x_ids parents of given NodeDSL id; if array=true, 
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @param 	{Boolean}	array	- If true, returns array of objects with x_id and ids, instead of a list of NodeDSL ids.
    * @return 	{string|Object[]}
    */


    getParentIDs() {
      var _arguments8 = arguments,
          _this15 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments8.length > 0 && _arguments8[0] !== undefined ? _arguments8[0] : _this15.throwIfMissing('id');
        var array = _arguments8.length > 1 && _arguments8[1] !== undefined ? _arguments8[1] : false;
        // @TODO test it after having 'real' commands on some parser 4-ago-20
        var parents = yield _this15.dsl_parser.getParentNodesIDs({
          id,
          array: true
        });
        var resp = [];

        for (var parent_id of parents) {
          var node = yield _this15.dsl_parser.getNode({
            parent_id,
            recurse: false
          });
          var command = yield _this15.findValidCommand({
            node,
            show_debug: false
          });

          if (command && array) {
            resp.push({
              id: parent_id,
              x_id: command.x_id
            });
          } else {
            resp.push(command.x_id);
          }
        }

        if (array && array == true) return resp;
        return resp.join(',');
      })();
    }
    /**
    * Helper method to return all Command object x_ids parents of given NodeDSL id as an array (its an alias for getParentIDs) 
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @return 	{Object[]}
    */


    getParentIDs2Array() {
      var _arguments9 = arguments,
          _this16 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments9.length > 0 && _arguments9[0] !== undefined ? _arguments9[0] : _this16.throwIfMissing('id');
        return yield _this16.getParentIDs(id, true);
      })();
    } // 3-aug-20 PSB doesn't seem to be used anywhere)

    /**
    * Helper method to return all NodeDSL ids parents of given NodeDSL id 
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @return 	{Object[]}
    * @deprecated
    */


    getParentIDs2ArrayWXID() {
      var _arguments10 = arguments,
          _this17 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments10.length > 0 && _arguments10[0] !== undefined ? _arguments10[0] : _this17.throwIfMissing('id');
        // this is only used in ti.cfc: def_textonly (just for back-compatibility in case needed);
        // @deprecated 4-ago-2020
        var parents = yield _this17.getParentIDs(id, true);
        return parents.map(x => {
           x.id;
        }); // just return ids as an array of objects
      })();
    }
    /**
    * Helper method to return a tag with key/values as tag attributes
    * @param 	{Object}	struct		- Object with keys and values to transform from.
    * @return 	{string}
    */


    tagParams() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var selfclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var resp = '';
      var x_params = this.struct2params(params);

      if (x_params != '') {
        resp = "<".concat(tag, " ").concat(x_params);
        if (selfclose == true) resp += '/';
        resp += '>';
      } else {
        resp = "<".concat(tag);
        if (selfclose == true) resp += '/';
        resp += '>';
      }

      return resp;
    }

    /**
    * Helper method to transform object keys/values into params for customtags usage
    * @param 	{Object}	struct		- Object with keys and values to transform from.
    * @return 	{string}
    */
    struct2params() {
      var struct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
      var resp = [];

      for (var [key, value] of Object.entries(struct)) {
        if (typeof value !== 'object' && typeof value !== 'function' && typeof value !== 'undefined') {
          resp.push("".concat(key, "='").concat(value, "'"));
        }
      }

      return resp.join(' ');
    }

    cleanIDs4node() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('node');
      var copy = node;
      delete copy.id;
      return copy;
    }

  } // private helper methods; not to be exported


  function setObjectKeys(obj, value) {
    var resp = obj;

    if (typeof resp === 'string') {
      resp = {};
      var keys = obj.split(',');

      for (var i in keys) {
        resp[keys[i]] = value;
      }
    } else {
      for (var _i in resp) {
        resp[_i] = value;
      }
    }

    return resp;
  }

  function allTrue(object, keys) {
    //ex. allTrue(matched,'x_icons,x_not_icons');
    var resp = true;

    for (var key of keys.split(',')) {
      if (object[key] !== true) {
        resp = false;
        break;
      }
    }

    return resp;
  } //returns true if num meets the conditions listed on test (false otherwise)


  function numberInCondition(num, command_test) {
    // num is always 'number' type
    var resp = true;

    if (command_test.toString() === num.toString()) ; else if (typeof command_test === 'number') {
      // cases test: 2,5,9,1 (exact matches)
      if (num == command_test) {
        resp = true;
      } else if (num != command_test) {
        resp = false;
      }
    } else if (typeof command_test === 'string') {
      if (command_test.indexOf(',') == -1 && command_test.charAt(0) == '<') {
        // one condition: <2 or <7
        if (num >= parseInt(command_test.replace('<', ''))) {
          resp = false;
        }
      } else if (command_test.indexOf(',') == -1 && command_test.charAt(0) == '>') {
        // one condition: >2 or >7
        if (num <= parseInt(command_test.replace('>', ''))) {
          resp = false;
        }
      } else if (command_test.indexOf(',') == -1 && command_test != num.toString()) {
        resp = false;
      } else {
        // cases test:['2','>2','2,3,5']
        var test2 = command_test.split(',');

        if (command_test.indexOf('<') == -1 && command_test.indexOf('>') == -1 && test2.includes(num)) {
          // exact match;
          resp = true;
        } else if (command_test.indexOf('<') != -1 || command_test.indexOf('>') != -1) {
          // test may be >2,<5,>7
          // 'and/all' (>2,<7)
          for (var i of test2) {
            if (i.charAt(0) == '>') {
              if (num <= parseInt(i.replace('>', ''))) {
                resp = false;
                break;
              }
            } else if (i.charAt(0) == '<') {
              if (num >= parseInt(i.replace('<', ''))) {
                resp = false;
                break;
              }
            }
          }
        }
      }
    } else {
      resp = false;
    }

    return resp;
  }

  function getVal(project, myPath) {
    return myPath.split('.').reduce((res, prop) => res[prop], project);
  }

  function setImmediatePromise() {
    //for preventing freezing node thread within loops (fors)
    return new Promise(resolve => {
      setImmediate(() => resolve());
    });
  } // end: private helper methods

  return concepto;

})));
