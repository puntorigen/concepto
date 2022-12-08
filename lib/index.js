(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.concepto = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

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

  /**
  * Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.
  * @name 	concepto
  * @module 	concepto
  **/
  //import commands from '../../vue_dsl/lib/commands';

  /**
   * An autocomplete object representing an item within the autocomplete list
   * @typedef {Object} AutocompleteItem
   * @property {string[]} parents - Optionally indicates if this item needs to have any of these parents (node texts for now).
   * @property {string} extends_ - Optionally indicates if this item extends another existing one.
   * @property {string} text - Indicates the text to show; aka keyword to complete.
   * @property {string} hint - Indicates the html to show as the summary for the keyword.
   * @property {string[]} icons - Array with icon names used in the node.
   * @property {number[]} level - Array with supported level numbers.
   * @property {Object} attributes - Object with a key for each attribute supported by the node (the key is the attribute name, the value is an object with keys: type, default, hint - supports icon placeholders like {icon:idea} within their texts).
   * @property {Object} events - Object with a key for each event supported by the node.
   */

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
  //import dsl_parser from '../../dsl_parser/src/index'
  //import console_ from '../../console/src/index'
  class concepto {
    constructor(file) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (arguments.length != 2 || typeof arguments[0] === 'object') throw new Error('fatal error! missing file parameter for parser!');

      var console_ = require('@concepto/console');
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
      };
      this.x_match = require('minimatch'); // grab class methods that start with the 'on' prefix

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
        var path = require('path'),
            tmp = {};

        tmp.directory = path.dirname(path.resolve(_this.x_flags.dsl)); //adds support for generating autocomplete files

        var autocomplete_path = path.join(tmp.directory, '.concepto', '.autocomplete');

        try {
          yield fs.mkdir(autocomplete_path, {
            recursive: true
          });
        } catch (errdir) {}

        _this.autocomplete = {
          path: autocomplete_path,
          records: {},
          json: {},
          refs: {}
        }; //

        if (!_this.x_flags.init_ok) {
          var dsl_parser = require('@concepto/dsl_parser');

          var _fs = require('fs').promises; // show title


          _this.x_console.title({
            title: "DSL Interpreter ".concat(_this.x_config.class.toUpperCase(), "\ninit:compiling file:\n").concat(_this.x_flags.dsl),
            color: 'cyan',
            config: {
              align: 'left'
            }
          });

          _this.dsl_parser = new dsl_parser({
            file: _this.x_flags.dsl,
            config: {
              cancelled: true,
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
          }

          _this.x_console.outT({
            message: "time passed since start .. ".concat(_this.secsPassed_()),
            color: 'cyan'
          }); // @TODO create github compatible DSL


          if (_this.x_config.dsl_git) {
            var for_git = yield _this.dsl_parser.createGitVersion(false, function ($) {
              //search aws node (even if it doesn't have the secret icon)
              var aws = $("node[TEXT=aws] attribute[NAME*=access]").toArray();
              aws.map(function (elem) {
                var cur = $(elem);
                cur.parent('node').remove();
                /*let dad = cur.parent('node');
                dad.find('attribute').map(function(a,a_elem) {
                	let att = $(a_elem);
                	att.attr('VALUE','xxxxxxxx');
                });
                dad.append(`<icon BUILTIN="button_cancel"/>`);*/
              }); //remove nodes with secret icon within config node

              /*
              let secret_config = $(`node[TEXT=config] icon[BUILTIN=password]`).toArray();
              secret_config.map(function(elem) {
              	let cur = $(elem);
              	cur.parent('node').remove();
              }); */
              //add cancel icon to nodes with secret icon, and replace attr values.

              var secret_config = $("node[TEXT=config] icon[BUILTIN=password]").toArray();
              secret_config.map(function (elem) {
                var cur = $(elem);
                var dad = cur.parent('node');
                dad.remove();
                /*dad.find('attribute').map(function(a,a_elem) {
                	let att = $(a_elem);
                	att.attr('VALUE','xxxx');
                });
                dad.append(`<icon BUILTIN="button_cancel"/>`);*/
              }); //return modified

              return $.html();
            }); // save dsl git file

            if (typeof _this.x_config.dsl_git === 'boolean') {
              //tmp.dsl_git_path = path.join(tmp.directory,'dsl_git');
              _this.x_console.outT({
                message: "creating git compatible DSL",
                color: 'green'
              });

              tmp.dsl_git_path = tmp.directory;

              _this.debug("dsl_git dir", tmp.dsl_git_path);
              /*try { 
              	await fs.mkdir(tmp.dsl_git_path);
              } catch(cpath_err) {}*/
              //get dsl filename - this.x_flags.dsl


              var git_target = path.join(tmp.dsl_git_path, path.basename(_this.x_flags.dsl).replace('.dsl', '_git.dsl')); //,path.basename(this.x_flags.dsl)

              yield _fs.writeFile(git_target, for_git, 'utf-8');

              _this.debug("dsl_git file saved as: ".concat(git_target));

              _this.x_console.outT({
                message: "ready github compatible DSL",
                color: 'green'
              }); //

            } else if (typeof _this.x_config.dsl_git === 'function') {
              // if dsl_git is a function, call it with out ready content; maybe to send it though sockets, further processing or saving in a diferent location
              _this.debug("calling dsl_git custom method ".concat(_this.x_config.dsl_git.name));

              yield _this.x_config.dsl_git(for_git);
            } //

          } //reparse dsl without cancelled nodes


          var remove_cancelled = _this.dsl_parser.getParser();

          remove_cancelled('icon[BUILTIN*=button_cancel]').parent().remove();
          /*this.dsl_parser = new dsl_parser({ file:this.x_flags.dsl, config:{ cancelled:false, debug:false } });
          try {
          	await this.dsl_parser.process();
          } catch(d_err2) {
          }*/
          //config persistant cache

          _this.x_console.outT({
            message: "configuring cache ..",
            color: 'cyan'
          });

          _this.cache = require('node-persist');
          var cache_path = path.join(tmp.directory, '.concepto', '.dsl_cache');
          yield _this.cache.init({
            dir: cache_path,
            expiredInterval: 3 * 60 * 60 * 1000,
            //expire within 3hrs
            forgiveParseErrors: true
          });

          if (_this.x_config.clean && _this.x_config.clean == true) {
            _this.x_console.outT({
              message: "cleaning cache as requested ..",
              color: 'brightCyan'
            });

            yield _this.cache.clear();
            yield _this.cleanAutocompleteFiles(); //erase autocomplete files
          } //diff_from arg (creates {class}_diff.dsl)


          try {
            if (_this.x_config.diff_from) {
              yield* function* () {
                var show_debug = _this.x_config.debug;

                _this.x_console.outT({
                  message: "(as requested) creating ".concat(_this.x_config.class, "_diff.dsl map from ").concat(_this.x_config.diff_from),
                  color: 'brightCyan'
                });

                var fs = require('fs').promises,
                    path = require('path'); //read non _git .dsl file source


                var non_git = path.join(tmp.directory, path.basename(_this.x_flags.dsl).replace('_git.dsl', '.dsl'));
                if (show_debug) _this.debug("diff_from: reading 'non git' file ".concat(non_git));
                var non_git_content = yield fs.readFile(non_git, 'utf-8'); //read given diff_from file

                var from_dsl = path.resolve(_this.x_config.diff_from);
                if (show_debug) _this.debug("diff_from: reading 'diff_from' file ".concat(from_dsl));
                var from_content = yield fs.readFile(from_dsl, 'utf-8'); //create _diff.dsl file

                var diff_dsl = path.join(tmp.directory, path.basename(_this.x_flags.dsl).replace('_git.dsl', '.dsl').replace('.dsl', '_diff.dsl'));
                if (show_debug) _this.debug("diff_from: future target ".concat(diff_dsl)); //@todo clean CREATED and MODIFIED dates and FOLDED attributos from from_content and non_git_content, before getting differences

                var files = {};
                if (show_debug) _this.debug("diff_from: cleaning: pre-processing diff_from");
                files.from_parser = new dsl_parser({
                  file: from_dsl,
                  config: {
                    cancelled: true,
                    debug: false
                  }
                });

                try {
                  yield files.from_parser.process();
                } catch (d_err) {}

                if (show_debug) _this.debug("diff_from: cleaning: removing properties for diff");
                files.from_parser.$("node").each(function (i, elem) {
                  var me = files.from_parser;
                  me.$(elem).attr("CREATED", "1552681669876");
                  me.$(elem).attr("MODIFIED", "1552681669876");
                  me.$(elem).removeAttr("VSHIFT");
                  me.$(elem).removeAttr("HGAP");
                  me.$(elem).removeAttr("FOLDED");
                  me.$(elem).removeAttr("STYLE");
                }); //remove attribute_layout tags from comparision

                if (show_debug) _this.debug("diff_from: cleaning: removing attribute_layout for diff");
                files.from_parser.$("attribute_layout").each(function (i, elem) {
                  files.from_parser.$(elem).replaceWith('');
                });
                files.from_compare = files.from_parser.$.html();
                if (show_debug) _this.debug("diff_from: cleaning: pre-processing non_git");
                files.ng_parser = new dsl_parser({
                  file: non_git,
                  config: {
                    cancelled: true,
                    debug: false
                  }
                });

                try {
                  yield files.ng_parser.process();
                } catch (d_err) {}

                files.ng_compare_bak = files.ng_parser.$.html();
                if (show_debug) _this.debug("diff_from: cleaning: removing properties for diff");
                files.ng_parser.$("node").each(function (i, elem) {
                  var me = files.ng_parser;
                  me.$(elem).attr("CREATED", "1552681669876");
                  me.$(elem).attr("MODIFIED", "1552681669876");
                  me.$(elem).removeAttr("VSHIFT");
                  me.$(elem).removeAttr("HGAP");
                  me.$(elem).removeAttr("FOLDED");
                  me.$(elem).removeAttr("STYLE");
                }); //remove attribute_layout tags from comparision

                if (show_debug) _this.debug("diff_from: cleaning: removing attribute_layout for diff");
                files.ng_parser.$("attribute_layout").each(function (i, elem) {
                  files.ng_parser.$(elem).replaceWith('');
                });
                files.ng_compare = files.ng_parser.$.html(); //get differences
                //let compare = await this.dsl_parser.getDifferences(from_content,non_git_content);

                if (show_debug) _this.debug("diff_from: detecting remaining differences");
                var compare = yield _this.dsl_parser.getDifferences(files.from_compare, files.ng_compare); //if (show_debug) this.debug(`diff_from: raw differences`,compare);
                // reparse.... @todo improve!!!! ... this is just a hack to maintain original format and dates without taking those into account for the diff

                if (show_debug) _this.debug("diff_from: reparsing from_dsl and non_git files");
                files.from_parser = new dsl_parser({
                  file: from_dsl,
                  config: {
                    cancelled: true,
                    debug: false
                  }
                });

                try {
                  yield files.from_parser.process();
                } catch (d_err) {}

                files.from_compare = files.from_parser.$.html();
                files.ng_parser = new dsl_parser({
                  file: non_git,
                  config: {
                    cancelled: true,
                    debug: false
                  }
                });

                try {
                  yield files.ng_parser.process();
                } catch (d_err) {}

                files.ng_compare = files.ng_parser.$.html(); //

                var diff = {
                  content: ''
                }; //parse diff content

                diff.parser = files.ng_parser;
                diff.content = files.ng_compare; //diff.parser.$.html();
                //remove all previous clouds from diff.content

                if (show_debug) _this.debug("diff_from: cleaning: removing existing cloud tags");
                var clouds = diff.parser.$("cloud");
                clouds.each(function (i, elem) {
                  var cur = diff.parser.$(elem);
                  cur.replaceWith('');
                }); //for each added IDs, search and add a Green CLOUD (#d9f7be, green-2)

                if (show_debug) _this.debug("diff_from: adding green clouds to ".concat(Object.keys(compare.added).length, " new nodes"));

                for (var key in compare.added) {
                  diff.content = yield diff.parser.editNode({
                    node_id: key,
                    children: true,
                    data: function data(x) {
                      return {
                        text_note_html: {
                          p: ['ADDED NODE', x.text_note]
                        },
                        cloud: {
                          used: true,
                          bgcolor: '#d9f7be'
                        }
                      };
                    }
                  }); // get first dad node of 'key' to highlight it as containing a diff

                  /*let dads = await diff.parser.getParentNodesIDs({ id:key, array:true });
                  let first_node = dads.pop();
                  diff.content = await diff.parser.editNode({ node_id:first_node, 
                  	data:{
                  			text_note: `!! THIS NODE CONTAINS A *NEW* NODE INSIDE !!`,
                  			cloud: {
                  				used:true,
                  				bgcolor:'#f6ffed' //green-1
                  			}
                  		}
                  });*/
                } //for each modified IDs, search and add a Yellow CLOUD (gold-2)


                var from = {};
                from.parser = files.from_parser;
                /*if (show_debug) this.debug(`diff_from: grouping ${Object.keys(compare.modified).length} modified nodes`);				
                for (let key in compare.modified) {
                	let parents = await from.parser.getParentNodesIDs({ id:key, array:true });
                	let modified = Object.keys(compare.modified);
                	let intersect = this.array_intersect(parents,modified);
                	if (intersect.length>0) {
                		//there is a dad of ourself within compare.modified; erase ourselfs
                		delete compare.modified[key];
                	}
                };*/

                if (show_debug) _this.debug("diff_from: adding yellow clouds to ".concat(Object.keys(compare.modified).length, " modified nodes"));

                var _loop = function* _loop(_key) {
                  diff.content = yield diff.parser.editNode({
                    node_id: _key,
                    children: true,
                    data: function data(x) {
                      return {
                        text_note_html: {
                          p: ['MODIFIED NODE', ...compare.modified[_key], x.text_note]
                        },
                        cloud: {
                          used: true,
                          bgcolor: '#fff1b8'
                        }
                      };
                    }
                  }); // get first dad node of 'key' to highlight it as containing a diff

                  /*
                  let dads = await diff.parser.getParentNodesIDs({ id:key, array:true });
                  let first_node = dads.pop();
                  diff.content = await diff.parser.editNode({ node_id:first_node, 
                  	data:{
                  			text_note: `!! THIS NODE CONTAINS A *MODIFIED* NODE INSIDE !!`,
                  			cloud: {
                  				used:true,
                  				bgcolor:'#fffbe6' //gold-1
                  			}
                  		}
                  });*/
                };

                for (var _key in compare.modified) {
                  yield* _loop(_key);
                } //for each deleted IDs, get deleted nodes from the source and add it to diff with a red CLOUD
                //21jun21: get parents of each deleted id, if any parent is within the deleted keys, remove the tested id


                if (show_debug) _this.debug("diff_from: grouping ".concat(Object.keys(compare.deleted).length, " deleted nodes"));

                for (var _key2 in compare.deleted) {
                  var parents = yield from.parser.getParentNodesIDs({
                    id: _key2,
                    array: true
                  });
                  var deleted = Object.keys(compare.deleted);

                  var intersect = _this.array_intersect(parents, deleted);

                  if (intersect.length > 0) {
                    //there is a dad of ourself within compare.deleted; erase ourselfs
                    delete compare.deleted[_key2];
                  }
                }

                ; //

                if (show_debug) _this.debug("diff_from: recovering ".concat(Object.keys(compare.deleted).length, " deleted nodes and adding them as red cloud nodes"));

                if (Object.keys(compare.deleted).length > 0) {
                  // get deleted node from 'from_dsl' source file
                  //process
                  for (var _key3 in compare.deleted) {
                    var deleted_node = yield from.parser.getNode({
                      id: _key3,
                      recurse: true
                    });
                    deleted_node.icons = [...deleted_node.icons, 'button_cancel'];
                    deleted_node.cloud = {
                      used: true,
                      bgcolor: '#ffa39e'
                    };
                    deleted_node.text_note_html = {
                      p: ['!! DELETED NODE !!', '', deleted_node.text_note]
                    }; // get parent node of deleted_node (to add it to that location within diff)

                    var dad = yield from.parser.getParentNode({
                      id: _key3
                    }); // add deleted_node as a child of dad within diff

                    diff.content = yield diff.parser.addNode({
                      parent_id: dad.id,
                      node: deleted_node
                    });
                  }
                } //console.log('new diff content',diff.content);
                //console.log('compare results',compare);
                //save new eb_diff.dsl content from differences


                if (show_debug) _this.debug("diff_from: writing _diff.dsl file");

                try {
                  yield fs.writeFile(diff_dsl, diff.content, 'utf-8', {
                    flag: 'w'
                  }); //overwrite by default
                } catch (errwr) {
                  //delete existing file and write again
                  if (show_debug) _this.debug("diff_from: error writing _diff.dsl file", errwr);
                }

                _this.x_console.outT({
                  message: "(as requested) file ".concat(_this.x_config.class, "_diff.dsl created"),
                  color: 'brightCyan'
                }); //console.log('compare',compare);
                //process.exit(1000);

              }();
            }
          } catch (errdiff) {
            _this.x_console.outT({
              message: "warning: there was an error creating _diff.dsl differences files",
              color: 'brightRed',
              data: errdiff
            });
          } //export_html arg (creates an html representation of given dsl file)


          if (_this.x_config.export_html) {
            _this.x_console.outT({
              message: "(as requested) creating html version map to ".concat(_this.x_config.export_html),
              color: 'brightCyan'
            });

            var _fs2 = require('fs').promises,
                _path = require('path'); //use given dsl not, non git -> this.x_flags.dsl
            //transform path given to abs path


            var target_path = _path.join(tmp.directory, 'out'); //set default target path


            if (_this.x_config.export_html != '') {
              target_path = _path.resolve(_this.x_config.export_html);
            } //create target path if it doesn't exist


            try {
              yield _fs2.mkdir(target_path);
            } catch (cpath_err) {} //get our assets path


            var concepto_loc = _path.dirname(require.resolve('@concepto/interface')); ///concepto/package.json


            var export_ = _path.join(concepto_loc, 'lib', 'export');

            var runtime_ = _path.join(export_, 'runtime'); //copy runtime assets to target_path


            var copy = require('recursive-copy');

            try {
              yield copy(runtime_, target_path);
            } catch (ercp) {} //transform to .dsl file to html


            var spawn = require('await-spawn');

            var target_html = _path.join(target_path, 'index.html');

            var export_xslt = _path.join(export_, 'toxhtml.xsl');

            yield spawn('xsltproc', ['-o', target_html, export_xslt, _this.x_flags.dsl], {
              cwd: tmp.directory
            });

            var sleep = function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            };

            yield sleep(50); //search all images/assets used within generated .html

            var cheerio = require('cheerio');

            var generated_html = yield _fs2.readFile(target_html, 'utf-8');
            var $ = cheerio.load(generated_html, {
              ignoreWhitespace: false,
              xmlMode: true,
              decodeEntities: false
            });
            var images = [];
            $('img[src]').toArray().map(function (elem) {
              var src = $(elem).attr('src');

              if (src.charAt(0) != '.' && images.includes(src) == false) {
                var full_ = _path.join(tmp.directory, src);

                images.push(full_);
              }
            }); //copy existing found images to target_path

            for (var x of images) {
              var y = x.replace(tmp.directory, '');

              var target = _path.join(target_path, y);

              try {
                //console.log(`copying ${x} to ${target}`);
                yield copy(x, target);
              } catch (ercp) {}
            } //copy existing found images to target_path - , data:{images,concepto_loc,export_,runtime_,target_path}


            _this.x_console.outT({
              message: "export ready",
              color: 'brightGreen'
            }); //process.exit(1500);
            //ready

          } // continue


          if (_this.x_config.justgit && _this.x_config.justgit == true) {
            _this.x_console.out({
              message: "Stopping after creating DSL GIT version as requested!",
              color: 'brightYellow'
            });

            process.exit(1);
          } else {
            _this.x_flags.init_ok = true;

            try {
              yield _this.onInit();
            } catch (eeee) {
              _this.x_console.out({
                message: "onInit() ".concat(eeee),
                color: 'red'
              });
            }
          }
        } else {
          // this was already called!
          _this.x_console.out({
            message: "you may only call method init() once!"
          });
        }
      })();
    }

    cleanAutocompleteFiles() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        // erase all autocomplete files of project 
        var fs = require('fs').promises;

        var path = require('path');

        try {
          for (var file of yield fs.readdir(_this2.autocomplete.path)) {
            yield fs.unlink(path.join(_this2.autocomplete.path, file));
          }
        } catch (xx) {}
      })();
    }
    /**
    * Renders an HTML template for displaying an autocomplete item within the IDE
    * Should return the rendered HTML
    *
    * @async
    * @param 	{AutocompleteItem}		record					- autocomplete item record
    * @param 	{Object}				render					- render object with default methods for rendering autocomplete items
    * @param 	{function}				render.placeholders		- internal function to escape {icon}:x placeholders; returns modified string with rendered icons
    * @param 	{function}				render.icon				- internal function to call to render any given icon into an img tag; you can either call this or use your own method within the code
    * @param 	{function}				render.attrs			- internal function to call to render the item attributes as an html table
    * @return 	{string}										- HTML template
    	*/


    autocompleteContentTemplate(record, render) {
      return _asyncToGenerator(function* () {
        // param record is an autocomplete object for a given item
        // returns the template to show in an autocomplete view
        var keyword = render.placeholders(record.text);
        var hint = render.placeholders(record.hint);
        var icons = record.icons ? record.icons : [];
        record.type ? record.type : 'internal';
        var attributes = record.attributes;
        record.events ? record.events : {}; //

        var html = '';

        for (var icon of icons) {
          if (renderIcon) {
            html += render.icon(icon);
          }
        }

        html += "<b>".concat(keyword, "</b><br /><br />");

        if (record.extends_ && record.extends_ != '') {
          html += render.placeholders("Extends {icon:idea}<b>".concat(record.extends_, "</b>.&nbsp;"));
        }

        html += "".concat(hint, "<br /><br />");
        html += render.attrs(attributes, render.icon) + '<br />'; //;

        return html;
      })();
    }

    generateAutocompleteFiles() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        //reads object this.autocomplete.records and generates autocomplete files in the autocomplete folder
        _this3.x_console.outT({
          message: "generating autocomplete files",
          color: 'brightCyan'
        }); //adds support for generating autocomplete files


        var path = require('path'),
            fs = require('fs').promises;

        var tmp_directory = path.dirname(path.resolve(_this3.x_flags.dsl));
        var autocomplete_path = path.join(tmp_directory, '.concepto', '.autocomplete');

        try {
          yield fs.mkdir(autocomplete_path, {
            recursive: true
          });
        } catch (errdir) {}

        if (!_this3.autocomplete) {
          _this3.autocomplete = {
            path: autocomplete_path,
            records: {},
            json: {},
            refs: {}
          };
        } else {
          _this3.autocomplete.path = autocomplete_path;
        } //get x_commands meta data object
        //const meta_ = Object.keys(this.x_commands.meta)[0]; //x_commands meta data for first lib of x_commands 


        var meta = _this3.x_commands.meta;
        delete meta.hint;
        delete meta.func; //this.x_console.outT({ message:`DSL meta data`, color:'brightCyan', data:this.x_commands.meta });
        //get x_commands name & language definitions

        meta.name; // has the name of the compiler used (e.g. 'NuxtJS')

        var lang = meta.language; // es,en (language for the autocomplete definitions)
        //default autocomplete theme values

        var theme = {
          table_bgcolor: "#AAD3F3",
          tr0_bgcolor: "#AAD3F3",
          tr_bgcolor: "#AAD3F3",
          tr_inherited_bgcolor: "#C3C3C3",
          cellpadding: 2,
          cellspacing: 0
        }; // overwrite with given theme if defined

        var custom_theme = meta.autocomplete && meta.autocomplete.theme ? meta.autocomplete.theme : {};
        theme = _objectSpread2(_objectSpread2({}, theme), custom_theme);
        lang = lang ? lang : 'es'; //default lang is es (spanish)

        var poKeys = {
          'en': {
            'Attributes': 'Parameters',
            'Attribute': 'Param',
            'Values': 'Values',
            'Type': 'Type',
            'Default': 'Default',
            'Hint': 'Hint'
          },
          'es': {
            'Attributes': 'Parametros',
            'Attribute': 'Param',
            'Values': 'Valores',
            'Type': 'Tipo',
            'Default': 'Default',
            'Hint': 'Descripción'
          }
        }; // concepto icons REAL location (for copying autocomplete icons)
        //let path = require('path');

        var iconsPath = '';

        try {
          var root = require('find-root')(__dirname); //let concepto_loc = path.dirname(require.resolve('@concepto/interface'));


          iconsPath = path.join(root, 'lib', 'export', 'runtime', 'icons'); //this.x_console.outT({message:'iconsPath:'+iconsPath });

          var copy = require('recursive-copy');

          try {
            yield copy(iconsPath, _this3.autocomplete.path);
          } catch (ercp) {}
        } catch (eeeec) {
          _this3.x_console.outT({
            message: 'error determining iconsPath:' + iconsPath
          });
        }
        /*
        - transform keys from this.autocomplete.records into xmls
        - if generated xml name exists, search 'keyword' tag inside and if it doesn't exist, add it with the new keyword xml
        		let cheerio = require('cheerio');
        let existing_xml = await fs.readFile(keyfile,'utf-8');
        let $ = cheerio.load(existing_xml, { ignoreWhitespace: false, xmlMode:true, decodeEntities:false });
        */


        require('cheerio');

        var prepareInherited = record => {
          //this.debug('prepareInherited');
          if (record.extends_ && record.extends_ != '' && _this3.autocomplete.refs[record.extends_]) {
            //const merge = require('deepmerge');
            //this.debug('merging inherited attributes/events!!!! ',{ extends_:record.extends_, parent:this.autocomplete.refs[record.extends_] });
            //record = merge(this.autocomplete.texts[record.extends_],record);
            // determine which 'attributes' are from the extends_ record (inherited)
            var parentAttribs = Object.keys(_this3.autocomplete.refs[record.extends_].attributes);
            var recordAttribs = Object.keys(record.attributes);

            for (var recAttrib of recordAttribs) {
              if (parentAttribs.includes(recAttrib)) {
                record.attributes[recAttrib].inherited_ = true;
              }
            } // determine which 'events' are from the extends_ record (inherited)


            var parentEvents = Object.keys(_this3.autocomplete.refs[record.extends_].events);
            var recordEvents = Object.keys(record.events);

            for (var recEvent of recordEvents) {
              if (parentEvents.includes(recEvent)) {
                record.events[recEvent].inherited_ = true;
              }
            }
          }

          return record;
        };

        var attributesToHTMLTable = function attributesToHTMLTable() {
          var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var renderIcon = arguments.length > 1 ? arguments[1] : undefined;
          var html = "<table width='100%' border=1 cellspacing=".concat(theme.cellspacing, " cellpadding=").concat(theme.cellpadding, " bordercolor='").concat(theme.table_bgcolor, "'>"); //table header

          html += "<tr bgcolor='".concat(theme.tr0_bgcolor, "'>\n\t\t\t<td colspan='5' valign='top' align='left'>").concat(poKeys[lang]['Attributes'], ":</td>\n\t\t\t</tr><tr bgcolor='").concat(theme.tr0_bgcolor, "'>\n\t\t\t<td valign='top' width='10'>R</td>\n\t\t\t<td valign='top'>").concat(poKeys[lang]['Attribute'], "</td>\n\t\t\t<td valign='top'>").concat(poKeys[lang]['Type'], "</td>\n\t\t\t<td valign='top'>").concat(poKeys[lang]['Default'], "</td>\n\t\t\t<td valign='top'>").concat(poKeys[lang]['Hint'], "</td>\n\t\t\t</tr>\n"); //

          var extract = require('extractjs')({
            startExtract: '-',
            endExtract: '-'
          });

          var escapeSpecial = text_ => {
            var new_ = text_;
            new_ = new_.replaceAll('->', '-&gt;');
            new_ = new_.replaceAll('<-', '-&lt;');
            return new_;
          };

          var replaceIcons = (text_, renderIcon_) => {
            if (!renderIcon_) renderIcon_ = renderIcon;
            /* adds support for icons with {icon:x} within type */

            var new_ = text_;

            if (new_.indexOf("{icon:") != -1) {
              var icons = extract("{icon:-icon-}", new_);

              if (icons.icon) {
                new_ = new_.replace("{icon:".concat(icons.icon, "}"), renderIcon_(icons.icon));
                new_ = replaceIcons(new_);
              }
            }

            return new_;
          };

          for (var key in attributes) {
            var hint = attributes[key].hint ? attributes[key].hint : '';
            var type_ = attributes[key].type ? attributes[key].type : '';
            var default_ = attributes[key].default ? attributes[key].default : ''; //

            if (attributes[key].inherited_) {
              html += "<tr bgcolor='".concat(theme.tr_inherited_bgcolor, "'>\n");
            } else {
              html += "<tr bgcolor='".concat(theme.tr_bgcolor, "'>\n");
            }

            if (attributes[key].required) {
              html += "<td>*</td>\n";
            } else {
              html += "<td> </td>\n";
            }

            html += "<td>".concat(replaceIcons(key), "</td>\n");
            html += "<td>".concat(replaceIcons(escapeSpecial(type_)), "</td>\n");
            html += "<td>".concat(replaceIcons(default_), "</td>\n");
            html += "<td>".concat(replaceIcons(hint), "</td>\n");
            html += "</tr>\n";
          }

          html += "</table>";
          return html;
        };

        var replaceIcons = text_ => {
          /* adds support for icons with {icon:x} within type */
          var extract = require('extractjs')({
            startExtract: '-',
            endExtract: '-'
          });

          var new_ = text_;

          if (new_.indexOf("{icon:") != -1) {
            var icons = extract("{icon:-icon-}", new_);

            if (icons.icon) {
              new_ = new_.replace("{icon:".concat(icons.icon, "}"), "<img src=\"".concat(icons.icon, ".png\" align=\"left\" hspace=\"5\" vspace=\"5\" valign=\"middle\" />"));
              new_ = replaceIcons(new_);
            }
          }

          return new_;
        }; //let fs = require('fs').promises;
        //
        // generate .autocomplete/autocomplete.json file 
        //


        var jsonKeys = Object.keys(_this3.autocomplete.json);
        var autoJson = {
          nodes: []
        };

        if (jsonKeys.length > 0) {
          var file = path.join(_this3.autocomplete.path, 'autocomplete.json'); // generate the html for the hints

          for (var key of jsonKeys) {
            var record = _objectSpread2(_objectSpread2({}, _this3.autocomplete.json[key]), _this3.autocomplete.refs[key]);

            if (record.hint) {
              record.hint = yield _this3.autocompleteContentTemplate(prepareInherited(record), {
                icon: _icon => {
                  return "<img src=\"".concat(_icon, ".png\" align=\"left\" hspace=\"5\" vspace=\"5\" valign=\"middle\" />&nbsp;");
                },
                placeholders: (text, renderIcon) => {
                  if (renderIcon) {
                    //return attributesToHTMLTable(attrs,renderIcon);
                    return replaceIcons(text);
                  } else {
                    return replaceIcons(text);
                  }
                },
                attrs: (_attrs, renderIcon) => {
                  if (renderIcon) {
                    return attributesToHTMLTable(_attrs, renderIcon);
                  } else {
                    return attributesToHTMLTable(_attrs, default_render_icon);
                  }
                }
              }); //prepend base href for images

              record.hint = "<BASE href=\"file://".concat(_this3.autocomplete.path, "/\">\n") + record.hint;
            }

            _this3.autocomplete.json[key].hint = record.hint;
            record = _this3.autocomplete.json[key]; //this may not be needed anymore
            //don't push record if it is a '-private-' record key

            if (key.indexOf('-private-') == -1) {
              autoJson.nodes.push(record);
            }
          }

          var json = JSON.stringify(autoJson, null, '\t'); //this.autocomplete.json

          yield _this3.writeFile(file, json);
        }
      })();
    }
    /**
    * Adds the given definition for the generation of autocomplete files recods
    * @param 	{String}	[extends_]			- extends autocomplete record;
    * @param 	{Array}		[parents]			- posible node parents of this definition; empty means any; * means item must be partof
    * @param 	{Array}		[childrenTypes]		- posible children type nodes; empty means no restrictions
    * @param 	{String}	[text]				- Node text (ex. 'consultar modelo "x",') to be shown to used within list
    * @param 	{String}	[type]				- Node type (ex. 'view') to be shown to used within list; empty by default
    * @param 	{Array}		[icons]				- Array of icons (in order) for autocomplete node detection
    * @param 	{Array}		[level]				- Array of levels of node definition to be detected (1=root, 2=child, 3=grandchild, etc)
    * @param 	{String}	[hint]				- Hint to show user for command completion
    * @param 	{Object}	[attributes]		- Possible node command attributes (ex. { 'id':{ required:true, type:'number', values:'1,2,3', hint:'id of datamodel' } })
    * @return 	{Object}
    */


    addAutocompleteDefinition() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator(function* () {
        var {
          text = '',
          type = '',
          extends_ = '',
          parents = [],
          childrenTypes = [],
          icons = [],
          level = [],
          hint = '',
          attributes = {},
          events = {}
        } = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
        //this.autocomplete = { path:'path', records:{}, texts:{} }
        //this.autocomplete.records[hash] = { keys,bestKey,text,icons,level,hint,attributes }

        /*
            key def:
        		ex. desktop_new+bell-consultar+modelo-7.xml
        		ex. desktop_new bell,consultar modelo,7.xml
        		decomposed_key = { //break components by - sign
        			icons: ['desktop_new','bell'],
        			text: 'consultar+modelo',
        			level: 7
        		}
        */
        //prepare input text: get first 16 chars of text and replace spaces and : with +
        //const preparedText = text.trim().substring(0,16).replaceAll(' ','+').replaceAll(':','+');
        //generate all keys alternatives for this definition
        //let keys = [];

        /*
        let key = '';	//best key definition
        if (icons.length>0) {
        	key = icons.join('+');
        	keys.push(icons.join('+'));	//just the joined icons
        }
        if (preparedText.length>0) {
        	if (key.length>0) {
        		key += '-';
        	}
        	keys.push(preparedText);	//just the prepared text
        	key += preparedText;
        }
        if (level.length>0) {
        	if (key.length>0) {
        		key += '-';
        	}
        	//append the level items to keys using es6
        	for (let i of level) {
        		keys.push(key+i);	//variations of key with each level
        	}
        	keys.push(...level);	//add the listed levels as well
        	key += level[0];		//just use first level as default for bestkey
        }
        if (icons.length>0 && level.length>0) {
        	//icons-level
        	for (let i of level) {
        		keys.push(icons.join('+') + '-' + i);	//add the listed levels combinations as well	
        	}
        }
        if (icons.length>0 && preparedText.length>0) {
        	//icons-preparedText
        	keys.push(icons.join('+') + '-' + preparedText);	
        }
        if (preparedText.length>0 && level.length>0) {
        	//preparedText-level
        	for (let i of level) {
        		keys.push(preparedText + '-' + i);	//add the listed levels combinations as well
        	}
        }*/
        //add to def
        var hash = yield _this4.dsl_parser.hash(_arguments);
        _this4.autocomplete.records[hash] = {
          keys: [],
          bestKey: '',
          text,
          icons,
          level,
          hint,
          attributes,
          events,
          extends_
        }; //30-nov-22 for new autocomplete.json file support

        _this4.autocomplete.json[text] = {
          parents,
          childrenTypes,
          text,
          type,
          icons,
          level,
          hint
        };
        _this4.autocomplete.refs[text] = {
          attributes,
          events,
          extends_
        };
        return _this4.autocomplete.records[hash];
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
      var _this5 = this;

      return _asyncToGenerator(function* () {
        var resp = node.text;
        Object.keys(node.attributes).map(function (i) {
          if (i == 'title' || i == 'titulo') {
            resp = node.attributes[i];
            return false;
          }
        }.bind(_this5));
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
    }
    /**
    * Gets automatically called after all processes have finished. Useful for cleaning the enviroment.
    * @async
    */


    onEnd() {
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
    * @property {string} [x_text_contains]		- List of strings, that can be contain in node text (if delimiter is |) or that must be all contained within the node text (if delimiter is comma).
    * @property {string|string[]} [x_text_pattern]		- Minimatch pattern to match to be a match for this command. Can also be an array of patterns (one must match).
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
      var _this6 = this;

      return _asyncToGenerator(function* () {
        if (!_this6.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        if (command_func && typeof command_func === 'function') {
          var t = yield command_func(_this6);

          if (typeof t === 'object') {
            // if there was a meta, add new info as name child
            if (_this6.x_commands && _this6.x_commands.meta && t.meta && t.meta.name) {
              if (!_this6.x_commands.meta.other) _this6.x_commands.meta.other = {};
              _this6.x_commands.meta.other[t.meta.name] = t.meta;
              delete t.meta;
            }

            _this6.x_commands = _objectSpread2(_objectSpread2({}, _this6.x_commands), t);
          } else {
            throw new Error('error! addCommands() argument doesn\'t reply with an Object');
          }

          if (t.meta && t.meta.version && t.meta.name) {
            _this6.x_console.outT({
              message: "x_commands '".concat(t.meta.name, "' v").concat(t.meta.version, " ready"),
              color: 'brightYellow'
            });
          }
        } else if (command_func && typeof command_func === 'object') {
          // if there was a meta, add new info as name child
          if (_this6.x_commands && _this6.x_commands.meta && command_func.meta && command_func.meta.name) {
            if (!_this6.x_commands.meta.other) _this6.x_commands.meta.other = {};
            _this6.x_commands.meta.other[command_func.meta.name] = command_func.meta;
            delete command_func.meta;
          }

          _this6.x_commands = _objectSpread2(_objectSpread2({}, _this6.x_commands), command_func);

          if (command_func.meta && command_func.meta.version && command_func.meta.name) {
            _this6.x_console.outT({
              message: "x_commands '".concat(command_func.meta.name, "' v").concat(command_func.meta.version, "' ready"),
              color: 'brightYellow'
            });
          }
        }
      })();
    }
    /**
    * Detects which x_commands changed their code since last persistant cache usage. To be called before process().
    * @async
    */


    cacheCommands() {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        //add hash of x_commands to cache; if diferent from cache,invalidate node caches!
        var x_cmds_hashes = {},
            x_watches = {},
            watched_vars = {};

        var safe = require('safe-eval');

        for (var x in _this7.x_commands) {
          if (_this7.x_commands[x].x_watch) {
            var watched = _this7.x_commands[x].x_watch.split(',');

            for (var xi in watched) {
              var key = watched[xi];

              if (key.includes('x_state.')) {
                //this is a var value watch, not command
                if (!watched_vars[x]) watched_vars[x] = {};

                try {
                  watched_vars[x][key.trim()] = safe('this.' + key.trim(), _this7);
                } catch (doesnt_exist) {
                  watched_vars[x][key.trim()] = '';
                }
              } else {
                x_watches[watched[xi].trim()] = x;
              }
            }
          }

          if (x == 'meta') {
            x_cmds_hashes[x] = yield _this7.dsl_parser.hash(JSON.stringify(_this7.x_commands[x]));
          } else {
            x_cmds_hashes[x] = yield _this7.dsl_parser.hash(_this7.x_commands[x].func.toString());
          }
        } //console.log('obj_to_hash',x_cmds_hashes);


        var commands_hash = yield _this7.dsl_parser.hash(x_cmds_hashes);
        var commands_cache = yield _this7.cache.getItem('commands_hash');
        var commands_cached_hashes = yield _this7.cache.getItem('commands_hashes');
        var changed_x_cmds = [];
        var watched_vars_hash_now = yield _this7.dsl_parser.hash(watched_vars);
        var watched_vars_hash_cache = yield _this7.cache.getItem('watched_vars_cache');
        var watched_vars_cache = yield _this7.cache.getItem('watched_vars'); //console.log('PABLO debug: watched_vars_now',{current:watched_vars,cache:watched_vars_cache});

        _this7.x_console.outT({
          prefix: 'cache,yellow',
          message: "x_commands hash: ".concat(commands_hash),
          color: 'dim'
        });

        if (commands_cache != commands_hash || watched_vars_hash_now != watched_vars_hash_cache) {
          if (typeof commands_cached_hashes === 'object') {
            //compare which x_commands changed
            for (var _x in x_cmds_hashes) {
              if (_x in commands_cached_hashes && commands_cached_hashes[_x] != x_cmds_hashes[_x]) {
                changed_x_cmds.push(_x); // search x within x_watches, if x is found, also add that cmd (value) to be cleaned from cache

                if (_x in x_watches) {
                  if (!changed_x_cmds.includes(x_watches[_x])) {
                    changed_x_cmds.push(x_watches[_x]);
                  }
                }
              } // search x (cmd) is within watched_vars_cache, search var keys: if value of varkey in cache if diff from actual value, erase cmd from cache


              if (watched_vars_cache && _x in watched_vars_cache && _x in watched_vars) {
                for (var varkey in watched_vars_cache[_x]) {
                  if (watched_vars[_x][varkey] != watched_vars_cache[_x][varkey]) {
                    _this7.x_console.outT({
                      prefix: 'cache,yellow',
                      message: "watched var value by ".concat(_x, " changed! requesting rebuild of its instances"),
                      color: 'brightYellow'
                    });

                    changed_x_cmds.push(_x);
                  }
                }
              }
            }

            if (changed_x_cmds.includes('meta')) {
              //x_command version changed! wipe all cache
              _this7.x_console.outT({
                prefix: 'cache,yellow',
                message: "x_commands meta changed! wiping all cache",
                color: 'brightYellow'
              });

              yield _this7.cache.clear();
              yield _this7.cleanAutocompleteFiles();
            } else {
              if (changed_x_cmds.length > 0) _this7.x_console.outT({
                prefix: 'cache,yellow',
                message: "x_commands has changed hash! cleaning cache of x_commands: ".concat(changed_x_cmds.join(',')),
                color: 'yellow'
              }); //search which pages (within cache) are using the modified x_commands

              var meta_cache = yield _this7.cache.getItem('meta_cache');
              var amount_cleaned = 0;

              if (meta_cache && typeof meta_cache === 'object' && Object.keys(meta_cache).length > 0) {
                for (var _x2 in meta_cache) {
                  if (_this7.array_intersect(meta_cache[_x2].x_ids.split(','), changed_x_cmds).length > 0) {
                    //remove page 'hashkey' from cache
                    _this7.x_console.outT({
                      prefix: 'cache,yellow',
                      message: "removing ".concat(_x2, " file info from cache .."),
                      color: 'dim'
                    });

                    yield _this7.cache.removeItem(meta_cache[_x2].cachekey);
                    yield _this7.cache.removeItem(meta_cache[_x2].cachekey + '_x_state');
                    amount_cleaned += 1;
                  }
                }
              } //sleep a little depending on how much was cleaned...


              var sleep = function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
              };

              yield _this7.cleanAutocompleteFiles(); //erase autocomplete files

              yield sleep(5 * amount_cleaned); //
            }
          } else {
            // if cached_hashses doesn't exist, clean everything from cache (should be first upgrade)
            _this7.x_console.outT({
              prefix: 'cache,yellow',
              message: "x_commands has changed hash! cleaning all previous cache",
              color: 'yellow'
            });

            yield _this7.cache.clear();
            yield _this7.cleanAutocompleteFiles(); //erase autocomplete files
          } //set new comparision to cache


          yield _this7.cache.setItem('watched_vars', watched_vars);
          yield _this7.cache.setItem('watched_vars_hash_now', watched_vars_hash_now);
          yield _this7.cache.setItem('commands_hash', commands_hash);
          yield _this7.cache.setItem('commands_hashes', x_cmds_hashes);
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
      var _arguments2 = arguments,
          _this8 = this;

      return _asyncToGenerator(function* () {
        var {
          node = _this8.throwIfMissing('node'),
          justone = true,
          show_debug = true
        } = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
        if (!_this8.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        var resp = _objectSpread2(_objectSpread2({}, _this8.reply_template()), {
          id: 'not_found',
          hint: 'failover command'
        }),
            xtest = [];

        if (typeof node.icons === 'undefined') {
          if (show_debug) _this8.debug('error: findCommand was given a blank node!');
          return resp;
        }

        var cache_key = node.id + node.date_modified.toString(); //+node.nodes_raw.toString();

        var t_cache = yield _this8.cache.getItem(cache_key);

        if (t_cache && (Array.isArray(t_cache) && t_cache.length > 0 || t_cache.data)) {
          // node.id in this.x_memory_cache.findCommand
          if (show_debug) _this8.debug("using memory_cache for findCommand for node ID ".concat(node.id));
          return t_cache;
        } else {
          if (show_debug) _this8.debug("findCommand for node ID ".concat(node.id));
          var keys = 'x_icons,x_not_icons,x_not_empty,x_not_text_contains,x_empty,x_text_exact,x_text_contains,x_text_pattern,x_level,x_or_hasparent,x_all_hasparent,x_or_isparent';
          var command_requires1 = setObjectKeys(keys, '');

          _objectSpread2({}, command_requires1);

          var command_defaults = _objectSpread2({}, command_requires1);

          var def_matched = setObjectKeys(keys, true);
          delete _this8.x_commands['constructor']; //4-jun-21 @todo double check this; maybe we should use a cloned var
          // iterate through commands

          for (var key in _this8.x_commands) {
            //let comm_keys = Object.keys(this.x_commands[key]);
            // reset defaults for current command
            var matched = _objectSpread2({}, def_matched); // build template for used keys


            var command_requires = _objectSpread2(_objectSpread2({}, command_defaults), _this8.x_commands[key]);

            delete command_requires.func; // test command features vs node features
            // test 1: icon match
            //if (this.x_config.debug) this.x_console.time({ id:`${key} x_icons` });

            if (command_requires['x_icons'] != '') {
              _this8.debug_time({
                id: "".concat(key, " x_icons")
              });

              for (var qi of command_requires.x_icons.split(',')) {
                matched.x_icons = node.icons.includes(qi) ? true : false;
                if (!matched.x_icons) break;
                yield setImmediatePromise();
              }

              _this8.debug_timeEnd({
                id: "".concat(key, " x_icons")
              });
            } //if (this.x_config.debug) this.x_console.timeEnd({ id:`${key} x_icons` });
            // test 2: x_not_icons


            if (command_requires['x_not_icons'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_not_icons")
              }); // special case first


              if (node.icons.length > 0 && command_requires['x_not_icons'] != '' && ['*'].includes(command_requires['x_not_icons'])) {
                matched.x_not_icons = false;
              } else if (command_requires['x_not_icons'] != '') {
                // if node has any icons of the x_not_icons, return false aka intersect values, and if any assign false.
                matched.x_not_icons = _this8.array_intersect(command_requires['x_not_icons'].split(','), node.icons).length > 0 ? false : true;
              }

              _this8.debug_timeEnd({
                id: "".concat(key, " x_not_icons")
              });
            } // test 3: x_not_empty. example: attributes[event,name] aka key[value1||value2] in node
            // supports multiple requirements using + as delimiter "attributes[event,name]+color"


            if (command_requires['x_not_empty'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
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

                    var keys = _this8.dsl_parser.findVariables({
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

                    if (_this8.array_intersect(has_keys, keys).length != keys.length) {
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

              _this8.debug_timeEnd({
                id: "".concat(key, " x_not_empty")
              });
            } // test 4: x_not_text_contains
            // can have multiple values.. ex: margen,arriba


            if (command_requires['x_not_text_contains'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_not_text_contains")
              });

              for (var word of command_requires['x_not_text_contains'].split(',')) {
                if (node.text.indexOf(word) != -1) {
                  matched.x_not_text_contains = false;
                  break;
                }

                yield setImmediatePromise();
              }

              _this8.debug_timeEnd({
                id: "".concat(key, " x_not_text_contains")
              });
            } // test 5: x_empty (node keys that must be empty (undefined also means not empty))


            if (command_requires['x_empty'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_empty")
              });

              for (var _key4 of command_requires['x_empty'].split(',')) {
                var _testpath = getVal(node, _key4);

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

              _this8.debug_timeEnd({
                id: "".concat(key, " x_empty")
              });
            } // test 6: x_text_exact


            if (allTrue(matched, keys) && command_requires['x_text_exact'] != '') {
              _this8.debug_time({
                id: "".concat(key, " x_text_exact")
              });

              matched.x_text_exact = command_requires['x_text_exact'] == node.text ? true : false;

              _this8.debug_timeEnd({
                id: "".concat(key, " x_text_exact")
              });
            } // test 7: x_text_contains


            if (allTrue(matched, keys) && command_requires['x_text_contains'] != '') {
              _this8.debug_time({
                id: "".concat(key, " x_text_contains")
              }); // @TODO here we are


              if (command_requires['x_text_contains'].indexOf('|') != -1) {
                // 'or' delimiter
                var n_match = false;

                for (var _key5 of command_requires['x_text_contains'].split('|')) {
                  if (node.text.indexOf(_key5) != -1) {
                    n_match = true;
                    break;
                  }
                }

                matched.x_text_contains = n_match;
              } else if (command_requires['x_text_contains'].indexOf(',') != -1) {
                // 'and' delimiter
                for (var _key6 of command_requires['x_text_contains'].split(',')) {
                  if (node.text.indexOf(_key6) == -1 || _key6 == '' && node.text.indexOf(',') == -1) {
                    //test if empty for case where coma is required
                    matched.x_text_contains = false;
                    break;
                  }
                }
              } else if (node.text.toLowerCase().indexOf(command_requires['x_text_contains'].toLowerCase()) == -1) {
                matched.x_text_contains = false;
              }

              _this8.debug_timeEnd({
                id: "".concat(key, " x_text_contains")
              });
            } // test 8: x_level - example: '2,3,4' (any) or '>2,<7' (all)


            if (command_requires['x_level'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_level")
              });

              matched.x_level = numberInCondition(node.level, command_requires['x_level']); //console.log('x_level DEBUG:',{matched, node, command_requires});

              _this8.debug_timeEnd({
                id: "".concat(key, " x_level")
              });
            } // test 9: x_or_hasparent


            if (command_requires['x_or_hasparent'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_or_hasparent")
              }); //matched.x_or_hasparent=false;


              matched.x_or_hasparent = yield _this8.hasParentID(node.id, command_requires['x_or_hasparent']);

              _this8.debug_timeEnd({
                id: "".concat(key, " x_or_hasparent")
              });
            } // test 10: x_all_hasparent


            if (command_requires['x_all_hasparent'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_all_hasparent")
              });

              matched.x_all_hasparent = yield _this8.hasParentID(node.id, command_requires['x_all_hasparent'], true);

              _this8.debug_timeEnd({
                id: "".concat(key, " x_all_hasparent")
              });
            } // test 11: x_or_isparent


            if (command_requires['x_or_isparent'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_or_isparent")
              });

              var is_direct = false;

              for (var _key7 of command_requires['x_or_isparent'].split(',')) {
                is_direct = yield _this8.isExactParentID(node.id, _key7);
                if (is_direct == true) break;
                yield setImmediatePromise();
              }

              matched.x_or_isparent = is_direct;

              _this8.debug_timeEnd({
                id: "".concat(key, " x_or_isparent")
              });
            } // test 12: x_text_pattern
            // example: ejecutar en "*" +(segundos|minutos|horas)


            if (typeof command_requires['x_text_pattern'] === 'string' && command_requires['x_text_pattern'] != '' && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_text_pattern")
              });

              matched.x_text_pattern = _this8.x_match(node.text.trim(), command_requires['x_text_pattern']);

              _this8.debug_timeEnd({
                id: "".concat(key, " x_text_pattern")
              });
            } // test 12b: x_text_pattern as array of strings
            // any must match


            if (Array.isArray(command_requires['x_text_pattern']) == true && command_requires['x_text_pattern'].length > 0 && allTrue(matched, keys)) {
              _this8.debug_time({
                id: "".concat(key, " x_text_pattern[]")
              });

              var _test = false,
                  text_trim = node.text.trim();

              for (var xtp of command_requires['x_text_pattern']) {
                _test = _this8.x_match(text_trim, xtp);
                if (_test == true) break;
              }

              matched.x_text_pattern = _test;

              _this8.debug_timeEnd({
                id: "".concat(key, " x_text_pattern[]")
              });
            } // ***************************
            // if we passed all tests ... 
            // ***************************


            if (allTrue(matched, keys)) {
              // count num of defined requires on matched command (more is more exact match, aka priority)
              var count = Object.entries(command_requires).reduce((n, x) => n + (x[1] != ''), 0); // assign resp

              resp = _objectSpread2(_objectSpread2(_objectSpread2({}, {
                x_priority: -1
              }), _this8.x_commands[key]), {
                x_id: key,
                priority: count
              });

              if (!justone) {
                xtest.push(resp);
              } else {
                break;
              }
            }
            /*
            if (node.id=='ID_160079449') {
            	console.log(`${node.text}: ${key} command_requires`,command_requires);
            	console.log(`${node.text}: matched`,matched);
            	console.log(`${node.text}: node/keys`,{node,keys});
            }*/


            yield setImmediatePromise();
          } // sort by priority


          if (show_debug) _this8.debug_time({
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
          if (show_debug) _this8.debug_timeEnd({
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


          if (Array.isArray(resp) && resp.length > 0 || resp.data) {
            //only add to cache, if at least 1 command was found.
            yield _this8.cache.setItem(cache_key, resp);
          } //this.x_memory_cache.findCommand[node.id] = resp;


          return resp;
        }
      })();
    }
    /**
    * Signals an abort event for the processing methods.
    *
    * @async
    * @return 	{Command|boolean}
    */


    abortProcessing() {
      var _this9 = this;

      return _asyncToGenerator(function* () {
        _this9.abort = true;
        return true;
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
      var _arguments3 = arguments,
          _this10 = this;

      return _asyncToGenerator(function* () {
        var {
          node = _this10.throwIfMissing('node'),
          object = false,
          x_command_shared_state = {},
          show_debug = true
        } = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : {};
        if (!_this10.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        if (node.id in _this10.x_memory_cache.findValidCommand) {
          //if (show_debug) this.debug({ message:`findValidCommand called for node ${node.id}, level:${node.level}, text:${node.text} using CACHE`, color:'green' });
          return _this10.x_memory_cache.findValidCommand[node.id];
        } else {
          if (show_debug) _this10.debug({
            message: "findValidCommand called for node ".concat(node.id, ", level:").concat(node.level, ", text:").concat(node.text),
            color: 'yellow'
          });
          var reply = {}; //this.debug('findValidCommand, before findCommand for node '+node.id);

          var commands_ = yield _this10.findCommand({
            node,
            justone: false,
            show_debug: show_debug
          }); //this.debug('findValidCommand, after findCommand for node '+node.id);
          // @TODO debug and test

          if (commands_.length == 0) {
            _this10.debug({
              message: 'findValidCommand: no command found.',
              color: 'red'
            });

            reply.error = true;
            reply.catch = 'no command found';
          } else if (commands_.length == 1 && commands_[0].x_id != 'constructor') {
            reply = _objectSpread2({}, commands_[0]); // try executing the node on the found commands_

            try {
              //if (object==true) {
              var test = yield _this10.x_commands[reply.x_id].func(node, x_command_shared_state);
              reply.exec = test; //}
              // @TODO test if _f4e is used; because its ugly

              reply._f4e = commands_[0].x_id;
              if (show_debug) _this10.debug({
                message: "findValidCommand: 1/1 applying command ".concat(commands_[0].x_id, " ... VALID MATCH FOUND! (nodeid:").concat(node.id, ")"),
                color: 'green'
              });
            } catch (test_err) {
              if (show_debug) _this10.debug({
                message: "findValidCommand: 1/1 applying command ".concat(commands_[0].x_id, " ... ERROR! (nodeid:").concat(node.id, ")"),
                color: 'brightRed'
              });
              yield _this10.showLineError(test_err); // @TODO emit('internal_error','findValidCommand')

              reply.error = true;
              reply.valid = false;
              reply.catch = test_err; //throw new Error(`executing ${reply.x_id}:`+test_err); // @TODO we should throw an error, so our parents catch it (9-AGO-20)
            }
          } else {
            // more than one command found
            if (show_debug) _this10.debug({
              message: "findValidCommand: ".concat(commands_.length, " commands found: (nodeid:").concat(node.id, ")"),
              color: 'green'
            }); // test each command

            for (var qm_index in commands_) {
              var qm = commands_[qm_index];

              if (_this10.x_commands[qm.x_id]) {
                try {
                  var _test2 = yield _this10.x_commands[qm.x_id].func(node, x_command_shared_state);

                  if (_test2 && _test2.valid && _test2.valid == true) {
                    if (show_debug) _this10.debug({
                      message: "findValidCommand: ".concat(parseInt(qm_index) + 1, "/").concat(commands_.length, " testing command ").concat(qm.x_id, " ... VALID MATCH FOUND! (nodeid:").concat(node.id, ")"),
                      color: 'green'
                    });
                    if (show_debug) _this10.debug({
                      message: '---------------------',
                      time: false
                    });

                    if (object) {
                      //==true) { -this needs further testing 27abr21
                      reply = _test2;
                    } else {
                      // @TODO test if _f4e is used; because its ugly
                      reply = qm;
                      reply.exec = _test2;
                      reply._f4e = qm.x_id;
                    }

                    break;
                  }
                } catch (test_err1) {
                  if (show_debug) _this10.debug({
                    message: "findValidCommand: error executing command ".concat(qm, " (nodeid:").concat(node.id, ")"),
                    color: 'red'
                  });
                  yield _this10.showLineError(test_err1);
                  reply.error = true;
                  reply.valid = false;
                  reply.catch = test_err1; // @TODO we should throw an error, so our parents catch it (9-AGO-20) and break the loop
                }
              }

              yield setImmediatePromise();
            }
          }

          if (Object.keys(reply).length == 0) reply = false;
          _this10.x_memory_cache.findValidCommand[node.id] = reply;
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
      var _this11 = this;

      return _asyncToGenerator(function* () {
        yield _this11.cacheCommands();
        if (!_this11.x_flags.init_ok) throw new Error('error! the first called method must be init()!');

        _this11.debug_time({
          id: 'process/writer'
        });

        var resp = {
          nodes: []
        }; // read nodes

        _this11.x_console.outT({
          prefix: 'process,yellow',
          message: "processing nodes ..",
          color: 'cyan'
        });

        var x_dsl_nodes = yield _this11.dsl_parser.getNodes({
          level: 2,
          nodes_raw: true,
          hash_content: true
        }); // add abort support

        _this11.abort = false;

        _this11.debug('calling onPrepare');

        _this11.debug_time({
          id: 'onPrepare'
        });

        yield _this11.onPrepare();

        _this11.debug_timeEnd({
          id: 'onPrepare'
        });

        if (!_this11.x_config.debug && !_this11.x_config.silent) {
          _this11.progress_multi = {};
          _this11.multibar = _this11.x_console.progress({
            format: "{text} {bar} | {screen}",
            config: {
              barsize: 20,
              etaBuffer: 500,
              fps: 20
            },
            formatData: data => {
              //color the progress bar
              if (typeof data.error === 'undefined') data.error = false;

              if (data.error && data.error == true) {
                data.bar = data.funcs.colors.brightRed(data.bar);
                data.text = data.funcs.colors.brightRed('processing error'); //+' '+data.funcs.symbols.fail;

                if (data.screen) data.screen = data.funcs.colors.brightRed(data.screen);
                return data;
              } else if (data.percentage <= 20) {
                data.bar = data.funcs.colors.magenta(data.bar);
              } else if (data.percentage <= 60) {
                data.bar = data.funcs.colors.yellow(data.bar);
              } else {
                data.bar = data.funcs.colors.green(data.bar);
              }

              if (data.screen) data.screen = data.funcs.colors.cyan(data.screen);

              if (data.total_ && data.total_ == 'x') {
                if (data.percentage >= 100) {
                  var took = data.funcs.colors.dim(' - {duration}');
                  data._format = '{text}' + took; // | {screen}

                  data.text = data.funcs.colors.green('processing complete! ') + data.funcs.symbols.success;
                } else {
                  data._format = '{text} {bar} | {screen} ({eta} remaining)';
                  data.text = data.funcs.colors.dim('overall progress');
                }
              } else {
                if (data.sub && data.sub != '') {
                  data.sub = data.funcs.colors.dim(data.sub);
                  data.percentage = data.funcs.colors.dim(data.percentage + ' %');
                  data._format = '{text} {bar} | {screen} -> {sub} {percentage}';
                }

                if (data.percentage >= 100) {
                  var _took = data.funcs.colors.dim(' - {duration}');

                  data._format = '{text} | {screen}' + _took;
                  data.text = 'processing done! ' + data.funcs.symbols.success;
                } else {
                  data.text = data.funcs.colors.dim('processing');
                }
              }

              return data;
            }
          }); // 

          _this11.progress_multi['_total_'] = _this11.multibar.create(x_dsl_nodes.length - 1, {
            total_: 'x',
            screen: 'initializing..'
          });
        }

        var counter_ = 0;
        var meta_cache = {};
        var meta_cache_ = yield _this11.cache.getItem('meta_cache');
        if (meta_cache_) meta_cache = meta_cache_;

        var obj_diff = require('deep-object-diff').diff;

        var deep = require('deepmerge');

        for (var level2 of x_dsl_nodes) {
          //this.debug('node',level2);
          //break;
          if (!_this11.x_config.debug && !_this11.x_config.silent) {
            if (_this11.progress_last) _this11.progress_last.raw().stop();
            _this11.progress_multi[level2.text] = _this11.multibar.create(level2.nodes_raw.length - 1, {
              total_: '',
              screen: 'initializing..',
              error: false
            });

            _this11.progress_multi['_total_'].update(counter_, {
              total_: 'x',
              screen: level2.text,
              error: false
            });

            _this11.progress_last = _this11.progress_multi[level2.text];
            _this11.progress_last_screen = level2.text;
          }

          if (_this11.abort && !_this11.x_config.debug && !_this11.x_config.silent) {
            _this11.progress_multi[level2.text].raw().stop();

            break; //abort processing if request
          } else if (_this11.abort) {
            break; //abort processing if request
          } //cache: check if current node has any children that were modified since last time


          var main = yield _this11.cache.getItem(level2.hash_content); // remove await when in production (use Promise.all after loop then)

          if (!main) {
            var before_state = JSON.parse(JSON.stringify(_this11.x_state));
            main = yield _this11.process_main(level2, {});
            var state_to_save = obj_diff(before_state, _this11.x_state); //console.log('state_to_save',{ state_to_save });

            if (main.error && main.error == true) {
              //don't add main to cache if there was an error processing its inside.
              resp.nodes.push(main);
              break;
            } else {
              //meta info for controlling cache
              meta_cache[main.file] = {
                cachekey: level2.hash_content,
                x_ids: main.x_ids
              };
              yield _this11.cache.setItem(level2.hash_content, main);
              yield _this11.cache.setItem(level2.hash_content + '_x_state', state_to_save);
            } //console.log('metido al cache:'+level2.id,main);

          } else {
            var cached_state = yield _this11.cache.getItem(level2.hash_content + '_x_state');
            _this11.x_state = deep.all([_this11.x_state, cached_state]);

            if (main.error && main.error == true) {
              yield _this11.cache.removeItem(level2.hash_content); //reprocess the removed failed cached node.

              var _before_state = JSON.parse(JSON.stringify(_this11.x_state));

              main = yield _this11.process_main(level2, {});

              var _state_to_save = obj_diff(_before_state, _this11.x_state); //console.log('state_to_save2',{ state_to_save });


              if (main.error && main.error == true) ; else {
                //meta info for controlling cache
                meta_cache[main.file] = {
                  cachekey: level2.hash_content,
                  x_ids: main.x_ids
                };
                yield _this11.cache.setItem(level2.hash_content, main);
                yield _this11.cache.setItem(level2.hash_content + '_x_state', _state_to_save);
              }
            } //console.log(level2.id,main);

          } //


          if (!_this11.x_config.debug && !_this11.x_config.silent) {
            if (main.error && main.error == true) {
              //this.progress_multi['_total_'].update(counter_, { screen:'ERROR', error:true });
              //break;
              _this11.progress_multi[level2.text].raw().stop();
            } else {
              _this11.progress_multi[level2.text].total(level2.nodes_raw.length - 1);

              _this11.progress_multi[level2.text].update(level2.nodes_raw.length - 1, {
                screen: level2.text,
                sub: '',
                total_: ''
              });
            }
          } // append to resp


          resp.nodes.push(main);
          yield setImmediatePromise();
          counter_ += 1;
        }

        if (!_this11.x_config.debug && !_this11.x_config.silent) {
          _this11.progress_multi['_total_'].raw().stop(); //.remove();


          _this11.multibar.stop();
        } // @TODO enable when not debugging
        //resp.nodes = await Promise.all(resp.nodes);


        _this11.debug_timeEnd({
          id: 'process/writer'
        }); // check if there was some error


        var were_errors = false;
        resp.nodes.map(function (x) {
          if (x.error == true) {
            were_errors = true;
            return false;
          }
        }); // generate autocomplete files

        yield _this11.generateAutocompleteFiles(); // if there was no error

        if (!were_errors && !_this11.abort) {
          // request creation of files
          yield _this11.onCreateFiles(resp.nodes);

          _this11.x_console.title({
            title: "Interpreter ".concat(_this11.x_config.class.toUpperCase(), " ENDED. Full Compilation took: ").concat(_this11.secsPassed_()),
            color: 'green'
          });

          _this11.debug_table('Amount of Time Per Command');
        } else if (_this11.abort) {
          _this11.x_console.title({
            title: "Interpreter ".concat(_this11.x_config.class.toUpperCase(), " ABORTED. Partial Compilation took: ").concat(_this11.secsPassed_()),
            color: 'green'
          });
        } else {
          // errors occurred
          _this11.x_console.title({
            title: "Interpreter ".concat(_this11.x_config.class.toUpperCase(), " ENDED with ERRORS.\nPlease check your console history.\nCompilation took: ").concat(_this11.secsPassed_()),
            titleColor: 'brightRed',
            color: 'red'
          }); //await this.onErrors(errs);
          //this.debug_table('Amount of Time Per Command');

        } // some debug
        //this.debug('after nodes processing, resp says:',resp);
        //this.debug('app state says:',this.x_state);


        yield _this11.cache.setItem('last_compile_date', new Date()); //add meta cache to cache

        yield _this11.cache.setItem('meta_cache', meta_cache);
        yield _this11.onEnd();
        return resp;
      })();
    } // process helper methods 
    // improved in my imagination ...


    sub_process(source_resp, nodei, custom_state) {
      var _this12 = this;

      return _asyncToGenerator(function* () {
        var resp = _objectSpread2({}, source_resp);

        if (resp.hasChildren == true && resp.valid == true && nodei.getNodes) {
          var sub_nodes;

          try {
            sub_nodes = yield nodei.getNodes();
          } catch (errrr) {
            console.log('node que falla con getNodes()', nodei);
          }

          var new_state = {},
              xx = 0;
          if (nodei.state) new_state = _objectSpread2({}, nodei.state);
          new_state = _objectSpread2(_objectSpread2({}, new_state), custom_state);

          if (!_this12.x_config.debug && !_this12.x_config.silent) {
            _this12.progress_last.total(sub_nodes.length - 1); //this.progress_multi['_total_'].raw().updateETA();

          }

          for (var sublevel of sub_nodes) {
            xx += 1; //this.debug('sub_process before getNode sublevel.id:'+sublevel.id);

            var real = yield _this12.dsl_parser.getNode({
              id: sublevel.id,
              nodes_raw: true,
              recurse: false
            }); //this.debug('sub_process before findValidCommand node id:'+real.id);

            var real2 = yield _this12.findValidCommand({
              node: real,
              object: false,
              x_command_shared_state: new_state
            });

            if (!_this12.x_config.debug && !_this12.x_config.silent) {
              _this12.progress_last.update(xx, {
                screen: _this12.progress_last_screen,
                sub: real2.x_id,
                total_: ''
              });
            } //this.debug('sub_process after findValidCommand');
            //console.log('sub_process->findValidCommand node:'+real.text,real2);
            //if (nodei.state) new_state = {...new_state, ...nodei.state, ...real2.state}; // inherint state from last command if defined


            if (real2.state) new_state = _objectSpread2(_objectSpread2({}, new_state), real2.state); // inherint state from last command if defined

            if (real2 && real2.exec && real2.exec.valid == true) {
              //resp.children.push(real2.exec);
              if (real2.exec.state) new_state = _objectSpread2(_objectSpread2({}, new_state), real2.exec.state); //console.log('real2 dice:',real2);

              resp.init += real2.exec.init;
              resp.code += real2.exec.open;
              if (!resp.x_ids) resp.x_ids = [];
              resp.x_ids.push(real2.x_id); //this.debug('sub_process before new sub_process sublevel id:'+sublevel.id);

              resp = yield _this12.sub_process(resp, sublevel, new_state);
              resp.code += real2.exec.close;
            } else if (real2.error == true) {
              if (!_this12.x_config.debug && !_this12.x_config.silent) {
                _this12.progress_last.total(xx);

                _this12.progress_last.update(xx, {
                  screen: _this12.progress_last_screen,
                  error: true
                });
              }

              _this12.x_console.outT({
                message: "error: Executing func x_command:".concat(real2.x_id, " for node: id:").concat(real.id, ", level ").concat(real.level, ", text: ").concat(real.text, "."),
                data: {
                  id: real.id,
                  level: real.level,
                  text: real.text,
                  data: real2.catch,
                  x_command_state: new_state
                }
              });

              yield _this12.onErrors(["Error executing func for x_command:".concat(real2.x_id, " for node id ").concat(real.id, ", text: ").concat(real.text, " ")]);
              resp.valid = false, resp.hasChildren = false, resp.error = true;
              break;
            }

            yield setImmediatePromise();
          }
        }

        return resp;
      })();
    }

    showLineError(error) {
      var _this13 = this;

      return _asyncToGenerator(function* () {
        var error_info = {
          line: -1,
          col: -1,
          message: error.toString()
        };
        var raw_tmp = error.stack;

        var print_code = require('print-code');

        if (typeof raw_tmp == 'string' && raw_tmp.includes('commands.js')) {
          var extract = require('extractjs')();

          var elements = extract("at {path}commands.js:{line}:{col}\n", raw_tmp);

          if (elements.path && elements.path.includes(' (')) {
            elements = extract(" ({path}commands.js:{line}:{col}\n", raw_tmp);
          } //console.log('Pablo debug - showLine elements',elements);


          error_info.file = elements.path ? elements.path : '';
          error_info.file += 'commands.js';
          error_info.line = elements.line;

          try {
            error_info.col = elements.col.replace(')', '');
          } catch (xttt) {//console.log('error with col',{raw_tmp,error_info});
          }
        }

        if (error_info.file && (yield _this13.exists(error_info.file)) == true) {
          var _fs3 = require('fs').promises;

          var colors = require('colors/safe'); //try {


          var cmds_code = yield _fs3.readFile(error_info.file, 'utf-8');
          var toshow = print_code(cmds_code).highlight(error_info.line, error_info.line).slice(error_info.line - 3, error_info.line + 4).max_columns(200).arrow_mark(error_info.line, error_info.col).get();

          _this13.x_console.out({
            message: 'An error ocurred on file:',
            color: 'red'
          });

          _this13.x_console.out({
            message: error_info.file,
            color: 'brightCyan'
          });

          _this13.x_console.out({
            message: error_info.message,
            color: 'brightYellow'
          });

          console.log(colors.bgBlack(colors.yellow(toshow))); //this.x_console.out({ message:'\n \n'+toshow, color:'dim' });
          //}
        } else {
          console.log('referenced file with error not found', raw_tmp);
        } //

      })();
    }

    process_main(node, custom_state) {
      var _this14 = this;

      return _asyncToGenerator(function* () {
        var resp = {
          state: custom_state,
          id: node.id,
          name: yield _this14.onDefineNodeName(node),
          file: yield _this14.onDefineFilename(node),
          init: '',
          title: yield _this14.onDefineTitle(node),
          attributes: node.attributes,
          code: '',
          open: '',
          close: '',
          x_ids: [],
          subnodes: node.nodes_raw.length
        };

        if (_this14.x_config.debug && !_this14.x_config.silent) {
          _this14.x_console.outT({
            prefix: 'process,yellow',
            message: "processing node ".concat(node.text, " .."),
            color: 'yellow'
          });
        } //
        //try {
        //console.log('process_main->findValidCommand node:'+node.text);


        var copy_state = _objectSpread2({}, custom_state);

        var test = yield _this14.findValidCommand({
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
          resp.state = copy_state;
          if (!resp.x_ids) resp.x_ids = [];
          resp.x_ids.push(test.x_id);

          if (typeof node.getNodes === 'function') {
            resp = yield _this14.sub_process(resp, node, copy_state);
          }

          resp.code += resp.close;
          resp.x_ids = resp.x_ids.join(',');
        } else if (test.error == true) {
          _this14.x_console.outT({
            message: "node text: ".concat(node.text),
            color: 'red'
          }); //this.x_console.outT({ message:`error: Executing func x_command:${test.x_id} for node: id:${node.id}, level ${node.level}, text: ${node.text}.`, data:{ id:node.id, level:node.level, text:node.text, catch:test.catch, x_command_state:test.state }});


          yield _this14.onErrors(["Error executing func for x_command:".concat(test.x_id, " for node id ").concat(node.id, ", text: ").concat(node.text, " ")]);

          if (!_this14.x_config.debug && !_this14.x_config.silent) {
            _this14.progress_last.total(2);

            _this14.progress_last.update(1, {
              screen: _this14.progress_last_screen + '\n',
              error: true
            });
          } // improved error logging


          yield _this14.showLineError(test.catch);
          resp.valid = false, resp.hasChildren = false, resp.error = true;
        } else {
          _this14.x_console.outT({
            message: 'error: FATAL, no method found for node processing.',
            data: {
              id: node.id,
              level: node.level,
              text: node.text
            }
          });

          yield _this14.onErrors(["No method found for given node id ".concat(node.id, ", text: ").concat(node.text, " ")]);
          resp.valid = false, resp.hasChildren = false, resp.error = true;
        } // closing level2 'on' calls


        resp = yield _this14.onAfterProcess(resp);
        resp = yield _this14.onCompleteCodeTemplate(resp); //

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

      var humanize = require('humanize-duration');

      return humanize(tmp, {
        maxDecimalPoints: 0
      }); //tmp/1000
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

      if (this.x_config.debug && params.time && !this.x_config.silent) {
        this.x_console.outT(_objectSpread2(_objectSpread2({}, {
          prefix: 'debug,dim',
          color: 'dim'
        }), params));
      } else if (this.x_config.debug && !this.x_config.silent) {
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


    _appFolders(keys) {
      var _arguments4 = arguments,
          _this15 = this;

      return _asyncToGenerator(function* () {
        var compile_folder = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : _this15.x_state.central_config.apptitle;
        var output_dir = _arguments4.length > 2 ? _arguments4[2] : undefined;

        var fs = require('fs').promises;

        _this15.debug('_appFolders');

        var path = require('path');

        var dsl_folder = path.dirname(path.resolve(_this15.x_flags.dsl)) + path.sep;
        if (output_dir) dsl_folder = output_dir;
        var resp = {
          base: dsl_folder,
          src: dsl_folder + (compile_folder ? compile_folder : _this15.x_state.central_config.apptitle) + path.sep
        };
        resp.app = path.normalize(resp.src);
        resp.compile_folder = compile_folder; // depending on central config type

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

          if (typeof this.x_time_stats.times[filter_key] === 'undefined' && filter_key.indexOf('def_') != -1) {
            this.x_time_stats.times[filter_key] = new Date();
            this.x_time_stats.tables[filter_key] = {
              command: filter_key,
              calls: 0,
              average_call: 0,
              total_ms: 0
            };
          } else if (this.x_config.debug == true && !this.x_config.silent) {
            this.x_console.time(_objectSpread2({}, arguments[0]));
          }
        } else if (this.x_config.debug == true && !this.x_config.silent) {
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
    * Helper to test if a given file exists or not
    * @param {string} 		dir_or_file 	- full directory or file to test
    * @return {boolean}
    */


    exists(dir_or_file) {
      return _asyncToGenerator(function* () {
        var fs = require('fs').promises;

        try {
          yield fs.access(dir_or_file);
          return true;
        } catch (e) {
          return false;
        }
      })();
    }
    /**
    * Helper method for measuring (end) time in ms from the call of debug_time() method.
    * @param 	{string}		id		- id key used in the call for debug_time() method.
    */


    debug_timeEnd() {
      if (arguments.length > 0) {
        var keys = _objectSpread2({}, arguments[0]),
            filter_key = ''; // && keys.id.indexOf('_x')!=-1


        if (typeof keys.id !== 'undefined') filter_key = keys.id.split(' ')[0];

        if (typeof keys.id !== 'undefined' && filter_key.indexOf('def_') != -1 && filter_key in this.x_time_stats.times) {
          //if (!this.x_time_stats.tables[keys.id]) this.x_time_stats.tables[keys.id] = {};
          if (typeof this.x_time_stats.tables[filter_key] !== 'undefined') {
            var timePassed = new Date().getTime() - this.x_time_stats.times[filter_key].getTime();
            this.x_time_stats.tables[filter_key].calls += 1;
            this.x_time_stats.tables[filter_key].total_ms = timePassed;
            this.x_time_stats.tables[filter_key].average_call = Math.round(this.x_time_stats.tables[filter_key].total_ms / this.x_time_stats.tables[filter_key].calls);
          }
        } else if (this.x_config.debug == true && !this.x_config.silent) {
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

      try {
        Object.keys(this.x_time_stats.tables).map(function (key) {
          table.push(this.x_time_stats.tables[key]);
        }.bind(this));
        this.x_console.table({
          title: title ? title : 'Times per Command',
          data: table,
          color: 'cyan'
        });
      } catch (e) {
        this.x_console.outT({
          message: "used cache for finding every command",
          color: 'cyan'
        });
      }
    }
    /**
    * Helper method to return true if given node id has a brother of given command x_id
    * @async
    * @param 	{string}	id		- ID of NodeDSL object to query
    * @param 	{string}	x_id	- Command object x_id to test for
    * @return 	{Boolean}
    */


    hasBrotherID() {
      var _arguments5 = arguments,
          _this16 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : _this16.throwIfMissing('id-brotherID');
        var x_id = _arguments5.length > 1 && _arguments5[1] !== undefined ? _arguments5[1] : _this16.throwIfMissing('x_id');

        // @TODO test it after having 'real' commands on some parser 3-ago-20
        if (id + x_id in _this16.x_memory_cache.hasBrotherID) {
          return _this16.x_memory_cache.hasBrotherID[id + x_id];
        } else {
          var brother_ids = yield _this16.dsl_parser.getBrotherNodesIDs({
            id,
            before: true,
            after: true
          }).split(',');
          var brother_x_ids = [],
              resp = false;

          for (var q of brother_ids) {
            var node = yield _this16.dsl_parser.getNode({
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


          _this16.x_memory_cache.hasBrotherID[id + x_id] = resp;
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
      var _arguments6 = arguments,
          _this17 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : _this17.throwIfMissing('id-brotherBefore');

        if (id in _this17.x_memory_cache.hasBrotherBefore) {
          return _this17.x_memory_cache.hasBrotherBefore[id];
        } else {
          var brother_ids = yield _this17.dsl_parser.getBrotherNodesIDs({
            id,
            before: true,
            after: false
          }).split(',');
          _this17.x_memory_cache.hasBrotherBefore[id] = brother_ids.includes(id);
          return _this17.x_memory_cache.hasBrotherBefore[id];
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
      var _arguments7 = arguments,
          _this18 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments7.length > 0 && _arguments7[0] !== undefined ? _arguments7[0] : _this18.throwIfMissing('id - BrotherNext');

        if (id in _this18.x_memory_cache.hasBrotherNext) {
          return _this18.x_memory_cache.hasBrotherNext[id];
        } else {
          var brother_ids = yield _this18.dsl_parser.getBrotherNodesIDs({
            id,
            before: false,
            after: true
          }).split(',');
          _this18.x_memory_cache.hasBrotherNext[id] = brother_ids.includes(id);
          return _this18.x_memory_cache.hasBrotherNext[id];
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
      var _arguments8 = arguments,
          _this19 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments8.length > 0 && _arguments8[0] !== undefined ? _arguments8[0] : _this19.throwIfMissing('id-ExactParent');
        var x_id = _arguments8.length > 1 && _arguments8[1] !== undefined ? _arguments8[1] : _this19.throwIfMissing('x_id');

        // @TODO test it after having 'real' commands on some parser 4-ago-20
        if (id + x_id in _this19.x_memory_cache.isExactParentID) {
          return _this19.x_memory_cache.isExactParentID[id + x_id];
        } else {
          var parent_node = yield _this19.dsl_parser.getParentNode({
            id
          });
          var parent_command = yield _this19.findValidCommand({
            node: parent_node,
            show_debug: false,
            object: true
          });

          if (parent_command && parent_command.x_id == x_id) {
            _this19.x_memory_cache.isExactParentID[id + x_id] = true;
            return true;
          }

          _this19.x_memory_cache.isExactParentID[id + x_id] = false;
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
      var _arguments9 = arguments,
          _this20 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments9.length > 0 && _arguments9[0] !== undefined ? _arguments9[0] : _this20.throwIfMissing('id-ParentID');
        var x_id = _arguments9.length > 1 && _arguments9[1] !== undefined ? _arguments9[1] : _this20.throwIfMissing('x_id');
        var onlyTrueIfAll = _arguments9.length > 2 && _arguments9[2] !== undefined ? _arguments9[2] : false;
        // @TODO test it after having 'real' commands on some parser aug-4-20, fixed on aug-15-20
        var x_ids = x_id.split(',');
        var parents = yield _this20.dsl_parser.getParentNodesIDs({
          id,
          array: true
        });
        var tested_parents_x_ids = [];

        for (var parent_id of parents) {
          var node = yield _this20.dsl_parser.getNode({
            id: parent_id,
            recurse: false
          });
          var parentCommand = yield _this20.findValidCommand({
            node,
            show_debug: false,
            object: true
          });

          if (onlyTrueIfAll == false && x_ids.includes(parentCommand.x_id)) {
            return true;
          } else if (onlyTrueIfAll == false) ; else if (onlyTrueIfAll == true) {
            // onlyTrueIfAll==true
            tested_parents_x_ids.push(parentCommand.x_id);

            if (_this20.array_intersect(tested_parents_x_ids, x_ids).length == x_ids.length) {
              return true;
            }
          }
        } // test again if we are here


        if (_this20.array_intersect(tested_parents_x_ids, x_ids).length == x_ids.length) {
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
      var _arguments10 = arguments,
          _this21 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments10.length > 0 && _arguments10[0] !== undefined ? _arguments10[0] : _this21.throwIfMissing('id-ParentIDs');
        var array = _arguments10.length > 1 && _arguments10[1] !== undefined ? _arguments10[1] : false;
        // @TODO test it after having 'real' commands on some parser 4-ago-20
        var parents = yield _this21.dsl_parser.getParentNodesIDs({
          id,
          array: true
        });
        var resp = [];

        for (var parent_id of parents) {
          var node = yield _this21.dsl_parser.getNode({
            id: parent_id,
            recurse: false
          });
          var command = yield _this21.findValidCommand({
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
      var _arguments11 = arguments,
          _this22 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments11.length > 0 && _arguments11[0] !== undefined ? _arguments11[0] : _this22.throwIfMissing('id - ParentIDs2Array');
        return yield _this22.getParentIDs(id, true);
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
      var _arguments12 = arguments,
          _this23 = this;

      return _asyncToGenerator(function* () {
        var id = _arguments12.length > 0 && _arguments12[0] !== undefined ? _arguments12[0] : _this23.throwIfMissing('id - ParentIDs2ArrayWXID');
        // this is only used in ti.cfc: def_textonly (just for back-compatibility in case needed);
        // @deprecated 4-ago-2020
        var parents = yield _this23.getParentIDs(id, true);
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
      var struct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id - struct2params');
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
    } // CONCEPTO_CLI helper methods


    returnPromps() {
      var _this24 = this;

      return _asyncToGenerator(function* () {
        var prompts = require('prompts');

        var prompts_ = {
          ask: function () {
            var _ask = _asyncToGenerator(function* (question) {
              var validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var resp = (yield prompts({
                type: 'text',
                name: 'value',
                message: _this24.x_console.colorize(question),
                validate: value => {
                  if (validation) return validation(value);
                  return true;
                }
              })).value;
              return resp;
            });

            function ask(_x3) {
              return _ask.apply(this, arguments);
            }

            return ask;
          }(),
          choose: function () {
            var _choose = _asyncToGenerator(function* () {
              var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
              var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var resp = (yield prompts({
                type: 'select',
                name: 'value',
                message: _this24.x_console.colorize(question),
                choices: options,
                initial: selected
              })).value;
              return resp;
            });

            function choose() {
              return _choose.apply(this, arguments);
            }

            return choose;
          }(),
          multi: function () {
            var _multi = _asyncToGenerator(function* () {
              var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
              var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var hint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
              var resp = (yield prompts({
                type: 'multiselect',
                name: 'value',
                message: _this24.x_console.colorize(question),
                choices: options,
                max,
                hint: hint ? hint : '- Space to select. Return to submit'
              })).value;
              return resp;
            });

            function multi() {
              return _multi.apply(this, arguments);
            }

            return multi;
          }()
        };
        return prompts_;
      })();
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

        if (command_test.indexOf('<') == -1 && command_test.indexOf('>') == -1 && test2.includes(num.toString())) {
          // exact match;
          resp = true;
        } else if (command_test.indexOf('<') == -1 && command_test.indexOf('>') == -1 && test2.includes(num.toString()) == false) {
          resp = false;
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

}));
