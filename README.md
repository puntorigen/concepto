<p align="center">
  <a href="http://www.puntorigen.com/" target="blank"><img src="https://user-images.githubusercontent.com/57605485/144762579-7114f229-a01a-4afd-9a18-62ec3dbf3478.png" width="320" alt="Concepto DSL Logo" /></a>
</p>
<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for visually building efficient and scalable nodejs based applications.</p>
<p align="center">
    <a href="https://www.npmjs.com/~concepto"><img src="https://img.shields.io/npm/v/@concepto/interface.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~concepto"><img src="https://img.shields.io/npm/l/@concepto/interface.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/~concepto"><img src="https://img.shields.io/npm/dm/@concepto/interface.svg" alt="NPM Downloads" /></a>
    <a href="https://www.npmjs.com/~concepto" target="_blank"><img src="https://img.shields.io/tokei/lines/github/puntorigen4u/concepto"></a>
    <a href="https://twitter.com/punt0rigen" target="_blank"><img src="https://img.shields.io/twitter/follow/punt0rigen.svg?style=social&label=Follow"></a>
</p>

## Description
Language Class Interface for creating DSL parsers for <a href="https://www.npmjs.com/package/@concepto/cli">Concepto DSL</a>

# API Reference
Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.


* [concepto](#module_concepto)
    * _instance_
        * [.init()](#module_concepto+init)
        * [.autocompleteContentTemplate(record, render)](#module_concepto+autocompleteContentTemplate) ⇒ <code>string</code>
        * [.addAutocompleteDefinition([extends_], [parentsAll], [parents], [childrenTypes], [id], [text], [type], [icons], [level], [hint], [attributes])](#module_concepto+addAutocompleteDefinition) ⇒ <code>Object</code>
        * [.reply_template([init])](#module_concepto+reply_template) ⇒ <code>Object</code>
        * [.onInit()](#module_concepto+onInit)
        * [.onAfterProcess(processedNode)](#module_concepto+onAfterProcess) ⇒ <code>Object</code>
        * [.onDefineTitle(node)](#module_concepto+onDefineTitle) ⇒ <code>String</code>
        * [.onDefineFilename(node)](#module_concepto+onDefineFilename) ⇒ <code>String</code>
        * [.onDefineNodeName(node)](#module_concepto+onDefineNodeName) ⇒ <code>String</code>
        * [.onCompleteCodeTemplate(processedNode)](#module_concepto+onCompleteCodeTemplate) ⇒ <code>Object</code>
        * [.onPrepare()](#module_concepto+onPrepare)
        * [.onErrors(errors)](#module_concepto+onErrors)
        * [.onCreateFiles(processedNodes)](#module_concepto+onCreateFiles)
        * [.onEnd()](#module_concepto+onEnd)
        * [.addCommands(command_func)](#module_concepto+addCommands)
        * [.cacheCommands()](#module_concepto+cacheCommands)
        * [.findCommand(node, [justone])](#module_concepto+findCommand) ⇒ <code>Command</code> \| <code>Array.&lt;Command&gt;</code>
        * [.abortProcessing()](#module_concepto+abortProcessing) ⇒ <code>Command</code> \| <code>boolean</code>
        * [.findValidCommand(node, [object])](#module_concepto+findValidCommand) ⇒ <code>Command</code> \| <code>boolean</code>
        * [.process()](#module_concepto+process) ⇒ <code>Object</code>
        * [.array_intersect(arr1, arr2)](#module_concepto+array_intersect) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
        * [.array_substract(arr1, arr2)](#module_concepto+array_substract) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
        * [.array_difference(arr1, arr2)](#module_concepto+array_difference) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
        * [.array_union(arr1, arr2)](#module_concepto+array_union) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
        * [.debug(message, [data])](#module_concepto+debug)
        * [.debug_time(id)](#module_concepto+debug_time)
        * [.exists(dir_or_file)](#module_concepto+exists) ⇒ <code>boolean</code>
        * [.debug_timeEnd(id)](#module_concepto+debug_timeEnd)
        * [.debug_table(title)](#module_concepto+debug_table)
        * [.hasBrotherID(id, x_id)](#module_concepto+hasBrotherID) ⇒ <code>Boolean</code>
        * [.hasBrotherBefore(id)](#module_concepto+hasBrotherBefore) ⇒ <code>Boolean</code>
        * [.hasBrotherNext(id)](#module_concepto+hasBrotherNext) ⇒ <code>Boolean</code>
        * [.isExactParentID(id, x_id)](#module_concepto+isExactParentID) ⇒ <code>Boolean</code>
        * [.hasParentID(id, x_id)](#module_concepto+hasParentID) ⇒ <code>Boolean</code>
        * [.getParentIDs(id, array)](#module_concepto+getParentIDs) ⇒ <code>string</code> \| <code>Array.&lt;Object&gt;</code>
        * [.getParentIDs2Array(id)](#module_concepto+getParentIDs2Array) ⇒ <code>Array.&lt;Object&gt;</code>
        * ~~[.getParentIDs2ArrayWXID(id)](#module_concepto+getParentIDs2ArrayWXID) ⇒ <code>Array.&lt;Object&gt;</code>~~
        * [.tagParams(struct)](#module_concepto+tagParams) ⇒ <code>string</code>
        * [.struct2params(struct)](#module_concepto+struct2params) ⇒ <code>string</code>
    * _inner_
        * [~AutocompleteItem](#module_concepto..AutocompleteItem) : <code>Object</code>
        * [~NodeDSL](#module_concepto..NodeDSL) : <code>Object</code>
        * [~Arrow](#module_concepto..Arrow) : <code>Object</code>
        * [~Command](#module_concepto..Command) : <code>Object</code>

<a name="module_concepto+init"></a>

### concepto.init()
Initializes/starts the class

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+autocompleteContentTemplate"></a>

### concepto.autocompleteContentTemplate(record, render) ⇒ <code>string</code>
Renders an HTML template for displaying an autocomplete item within the IDE
Should return the rendered HTML

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
**Returns**: <code>string</code> - - HTML template  

| Param | Type | Description |
| --- | --- | --- |
| record | <code>AutocompleteItem</code> | autocomplete item record |
| render | <code>Object</code> | render object with default methods for rendering autocomplete items |
| render.placeholders | <code>function</code> | internal function to escape {icon}:x placeholders; returns modified string with rendered icons |
| render.icon | <code>function</code> | internal function to call to render any given icon into an img tag; you can either call this or use your own method within the code |
| render.attrs | <code>function</code> | internal function to call to render the item attributes as an html table |

<a name="module_concepto+addAutocompleteDefinition"></a>

### concepto.addAutocompleteDefinition([extends_], [parentsAll], [parents], [childrenTypes], [id], [text], [type], [icons], [level], [hint], [attributes]) ⇒ <code>Object</code>
Adds the given definition for the generation of autocomplete files recods

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| [extends_] | <code>String</code> | extends autocomplete record; |
| [parentsAll] | <code>Array</code> | required node parents of this definition; empty means any; * means item must match all parents listed |
| [parents] | <code>Array</code> | posible node parents of this definition; empty means any; * means item must be partof |
| [childrenTypes] | <code>Array</code> | posible children type nodes; empty means no restrictions |
| [id] | <code>String</code> | Unique AC node identifier (usually the 'text') |
| [text] | <code>String</code> | Node text (ex. 'consultar modelo "x",') to be shown to used within list |
| [type] | <code>String</code> | Node type (ex. 'view') to be shown to used within list; empty by default |
| [icons] | <code>Array</code> | Array of icons (in order) for autocomplete node detection |
| [level] | <code>Array</code> | Array of levels of node definition to be detected (1=root, 2=child, 3=grandchild, etc) |
| [hint] | <code>String</code> | Hint to show user for command completion |
| [attributes] | <code>Object</code> | Possible node command attributes (ex. { 'id':{ required:true, type:'number', values:'1,2,3', hint:'id of datamodel' } }) |

<a name="module_concepto+reply_template"></a>

### concepto.reply\_template([init]) ⇒ <code>Object</code>
Sets the default reply Object for commands

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| [init] | <code>Object</code> | Merges given object keys with default defined template |

<a name="module_concepto+onInit"></a>

### concepto.onInit()
Gets automatically executed after init method finishes.
You should place any parser preparation steps here (ex. load commands)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+onAfterProcess"></a>

### concepto.onAfterProcess(processedNode) ⇒ <code>Object</code>
Gets automatically executed after parsing all nodes level 2 of the given dsl (before onCompleteCodeTemplate)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNode | <code>Object</code> | reply content of process method per processed level2 node (keys of reply_template method) |

<a name="module_concepto+onDefineTitle"></a>

### concepto.onDefineTitle(node) ⇒ <code>String</code>
Gets automatically executed within writer method for setting the title for a node level 2.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>NodeDSL</code> | node to process |

<a name="module_concepto+onDefineFilename"></a>

### concepto.onDefineFilename(node) ⇒ <code>String</code>
Gets automatically executed for naming filename of class/page by testing node (you could use a slud method here).

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>NodeDSL</code> | node to process |

<a name="module_concepto+onDefineNodeName"></a>

### concepto.onDefineNodeName(node) ⇒ <code>String</code>
Gets automatically called for naming the class/page by testing node (similar to a filename, but for objects reference).

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>NodeDSL</code> | node to process |

<a name="module_concepto+onCompleteCodeTemplate"></a>

### concepto.onCompleteCodeTemplate(processedNode) ⇒ <code>Object</code>
Defines template for code given the processedNodes of writer(). Useful to prepend/append code before writting code to disk.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNode | <code>Object</code> | reply content of process method per processed level2 node (keys of reply_template method) |

<a name="module_concepto+onPrepare"></a>

### concepto.onPrepare()
Defines preparation steps before processing nodes.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+onErrors"></a>

### concepto.onErrors(errors)
Gets automatically called after errors have being found while processing nodes (with the defined commands)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| errors | <code>Array.&lt;string&gt;</code> | array of errors messages |

<a name="module_concepto+onCreateFiles"></a>

### concepto.onCreateFiles(processedNodes)
Gets automatically called after all processing on nodes has being done. You usually create the files here using the received processedNodes array.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNodes | <code>Array.&lt;Object&gt;</code> | array of nodes already processed (keys of reply_template method) ready to be written to disk |

<a name="module_concepto+onEnd"></a>

### concepto.onEnd()
Gets automatically called after all processes have finished. Useful for cleaning the enviroment.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+addCommands"></a>

### concepto.addCommands(command_func)
Add commands for processing nodes with the current class

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| command_func | <code>function</code> | async function returning an object with commands objects ([Command](Command)) where each key is the command id, and its value a Command object. |

<a name="module_concepto+cacheCommands"></a>

### concepto.cacheCommands()
Detects which x_commands changed their code since last persistant cache usage. To be called before process().

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+findCommand"></a>

### concepto.findCommand(node, [justone]) ⇒ <code>Command</code> \| <code>Array.&lt;Command&gt;</code>
Finds one or more commands defined that matches the specs of the given node.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>NodeDSL</code> |  | node for which to find commands that match |
| [justone] | <code>boolean</code> | <code>true</code> | indicates if you want just the first match (true), or all commands that match the given node (false) |

<a name="module_concepto+abortProcessing"></a>

### concepto.abortProcessing() ⇒ <code>Command</code> \| <code>boolean</code>
Signals an abort event for the processing methods.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+findValidCommand"></a>

### concepto.findValidCommand(node, [object]) ⇒ <code>Command</code> \| <code>boolean</code>
Finds the valid/best command match for the given node.
Also tests the command for its 'valid' attribute, in case the command func specified aditional conditions.
If no command is found, returns false.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>NodeDSL</code> |  | node for which to find the command |
| [object] | <code>boolean</code> | <code>false</code> | if false returns the command reference, true returns the command execution answer |

<a name="module_concepto+process"></a>

### concepto.process() ⇒ <code>Object</code>
This method traverses the dsl parsed tree, finds/execute x_commands and generated code as files.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
<a name="module_concepto+array_intersect"></a>

### concepto.array\_intersect(arr1, arr2) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
Helper method for obtaining the common values (which can be anything) between two arrays.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | first array |
| arr2 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | second array |

<a name="module_concepto+array_substract"></a>

### concepto.array\_substract(arr1, arr2) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
Helper method for obtaining the first array items minus the second array items (which can be anything).

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | first array from which to substract |
| arr2 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | second array with items to substract from arr1 |

<a name="module_concepto+array_difference"></a>

### concepto.array\_difference(arr1, arr2) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
Helper method for obtaining the unique values (which can be anything) between two arrays.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | first array |
| arr2 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | second array |

<a name="module_concepto+array_union"></a>

### concepto.array\_union(arr1, arr2) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
Helper method for joining the values (which can be anything) between two arrays.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | first array |
| arr2 | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;boolean&gt;</code> | second array |

<a name="module_concepto+debug"></a>

### concepto.debug(message, [data])
Helper method for defining how to display (or do with them; if you overload it) debug messages.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> \| <code>Object</code> | message to display. It can also be an Object of open-console params. |
| [data] | <code>\*</code> | data variable to show with message |

<a name="module_concepto+debug_time"></a>

### concepto.debug\_time(id)
Helper method for measuring (start) time in ms from this method until debug_timeEnd() method and show it in the console.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id key (which can also have spaces and/or symbols) with a unique id to identify the stopwatch. |

<a name="module_concepto+exists"></a>

### concepto.exists(dir_or_file) ⇒ <code>boolean</code>
Helper to test if a given file exists or not

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| dir_or_file | <code>string</code> | full directory or file to test |

<a name="module_concepto+debug_timeEnd"></a>

### concepto.debug\_timeEnd(id)
Helper method for measuring (end) time in ms from the call of debug_time() method.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id key used in the call for debug_time() method. |

<a name="module_concepto+debug_table"></a>

### concepto.debug\_table(title)
Helper method for showing a table with each command execution time and amount of calls

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Optional custom title for table. |

<a name="module_concepto+hasBrotherID"></a>

### concepto.hasBrotherID(id, x_id) ⇒ <code>Boolean</code>
Helper method to return true if given node id has a brother of given command x_id

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |
| x_id | <code>string</code> | Command object x_id to test for |

<a name="module_concepto+hasBrotherBefore"></a>

### concepto.hasBrotherBefore(id) ⇒ <code>Boolean</code>
Helper method to return true if given node ID has a brother before it

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |

<a name="module_concepto+hasBrotherNext"></a>

### concepto.hasBrotherNext(id) ⇒ <code>Boolean</code>
Helper method to return true if given node ID has a brother following it

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |

<a name="module_concepto+isExactParentID"></a>

### concepto.isExactParentID(id, x_id) ⇒ <code>Boolean</code>
Helper method to return true if given Command object x_id is the exact parent for the given NodeDSL object id

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |
| x_id | <code>string</code> | Command object x_id to test for |

<a name="module_concepto+hasParentID"></a>

### concepto.hasParentID(id, x_id) ⇒ <code>Boolean</code>
Helper method to return true if given Command object x_id is the parent or is an ancestor for the given NodeDSL object id

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |
| x_id | <code>string</code> | Command object x_id to test for |

<a name="module_concepto+getParentIDs"></a>

### concepto.getParentIDs(id, array) ⇒ <code>string</code> \| <code>Array.&lt;Object&gt;</code>
Helper method to return all Command object x_ids parents of given NodeDSL id; if array=true,

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | ID of NodeDSL object to query |
| array | <code>Boolean</code> | <code>false</code> | If true, returns array of objects with x_id and ids, instead of a list of NodeDSL ids. |

<a name="module_concepto+getParentIDs2Array"></a>

### concepto.getParentIDs2Array(id) ⇒ <code>Array.&lt;Object&gt;</code>
Helper method to return all Command object x_ids parents of given NodeDSL id as an array (its an alias for getParentIDs)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |

<a name="module_concepto+getParentIDs2ArrayWXID"></a>

### ~~concepto.getParentIDs2ArrayWXID(id) ⇒ <code>Array.&lt;Object&gt;</code>~~
***Deprecated***

Helper method to return all NodeDSL ids parents of given NodeDSL id

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of NodeDSL object to query |

<a name="module_concepto+tagParams"></a>

### concepto.tagParams(struct) ⇒ <code>string</code>
Helper method to return a tag with key/values as tag attributes

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| struct | <code>Object</code> | Object with keys and values to transform from. |

<a name="module_concepto+struct2params"></a>

### concepto.struct2params(struct) ⇒ <code>string</code>
Helper method to transform object keys/values into params for customtags usage

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| struct | <code>Object</code> | Object with keys and values to transform from. |

<a name="module_concepto..AutocompleteItem"></a>

### concepto~AutocompleteItem : <code>Object</code>
An autocomplete object representing an item within the autocomplete list

**Kind**: inner typedef of [<code>concepto</code>](#module_concepto)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| parentsAll | <code>Array.&lt;string&gt;</code> | Optionally indicates if this node item needs to have all of these parents (node texts for now). |
| parents | <code>Array.&lt;string&gt;</code> | Optionally indicates if this node item needs to have any of these parents (node texts for now). |
| extends_ | <code>string</code> | Optionally indicates if this item extends another existing one. |
| text | <code>string</code> | Indicates the text to show; aka keyword to complete. |
| hint | <code>string</code> | Indicates the html to show as the summary for the keyword. |
| icons | <code>Array.&lt;string&gt;</code> | Array with icon names used in the node. |
| level | <code>Array.&lt;number&gt;</code> | Array with supported level numbers. |
| attributes | <code>Object</code> | Object with a key for each attribute supported by the node (the key is the attribute name, the value is an object with keys: type, default, hint - supports icon placeholders like {icon:idea} within their texts). |
| events | <code>Object</code> | Object with a key for each event supported by the node. |

<a name="module_concepto..NodeDSL"></a>

### concepto~NodeDSL : <code>Object</code>
A node object representation of a DSL node.

**Kind**: inner typedef of [<code>concepto</code>](#module_concepto)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Node unique ID. |
| level | <code>number</code> | Indicates the depth level from the center of the dsl map. |
| text | <code>string</code> | Indicates the text defined in the node itself. |
| text_rich | <code>string</code> | Indicates the html defined in the node itself. |
| text_note | <code>string</code> | Indicates the text/html defined in the notes view of the node (if any). |
| image | <code>string</code> | Image link defined as an image within the node. |
| cloud | <code>Object</code> | Cloud information of the node. |
| cloud.bgcolor | <code>string</code> | Background color of cloud. |
| cloud.used | <code>boolean</code> | True if cloud is used, false otherwise. |
| arrows | <code>Array.&lt;Arrow&gt;</code> | Visual connections of this node with other nodes [#module_concepto..Arrow](#module_concepto..Arrow). |
| nodes | <code>Array.&lt;NodeDSL&gt;</code> | Children nodes of current node. |
| font | <code>Object</code> | Define font, size and styles of node texts. |
| font.face | <code>Object</code> | Font face type used on node. |
| font.size | <code>Object</code> | Font size used on node. |
| font.bold | <code>Object</code> | True if node text is in bold. |
| font.italic | <code>Object</code> | True if node text is in italics. |
| style | <code>string</code> | Style applied to the node. |
| color | <code>string</code> | Text color of node. |
| bgcolor | <code>string</code> | Background color of node. |
| link | <code>string</code> | Link defined on node. |
| position | <code>string</code> | Position in relation of central node (left,right). |
| attributes | <code>Object</code> | Object with each attribute (key is attribute name, value is attribute value). |
| icons | <code>Array.&lt;string&gt;</code> | Array with icon names used in the node. |
| date_modified | <code>date</code> | Date of node when it was last modified. |
| date_created | <code>date</code> | Date of node when it was created. |

<a name="module_concepto..Arrow"></a>

### concepto~Arrow : <code>Object</code>
Arrow object definition, for connections to other nodes within a DSL.

**Kind**: inner typedef of [<code>concepto</code>](#module_concepto)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target node ID of connection. |
| color | <code>string</code> | Color of visual connection. |
| style | <code>string</code> | Graphical representation type of link (source-to-target, target-to-source, both-ways). |

<a name="module_concepto..Command"></a>

### concepto~Command : <code>Object</code>
A command object specifying requirements for a node to execute its function.

**Kind**: inner typedef of [<code>concepto</code>](#module_concepto)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [x_icons] | <code>string</code> | List of required icons that the node must define to be a match for this command. |
| [x_not_icons] | <code>string</code> | List of icons that the node cannot define to be a match for this command. |
| [x_not_empty] | <code>string</code> | List of keys that must not be empty to be a match for this command (can be any key from a NodeDSL object). Example: 'attribute[src],color' |
| [x_not_text_contains] | <code>string</code> | List of strings, which cannot be within the node text. |
| [x_empty] | <code>string</code> | List of NodeDSL keys that must be empty to be a match for this command. |
| [x_text_contains] | <code>string</code> | List of strings, that can be contain in node text (if delimiter is |) or that must be all contained within the node text (if delimiter is comma). |
| [x_text_pattern] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Minimatch pattern to match to be a match for this command. Can also be an array of patterns (one must match). |
| [x_level] | <code>string</code> | Numeric conditions that the level of the node must met (example: '>2,<5' or '2,3,4'). |
| [x_all_hasparent] | <code>string</code> | List of commands ids (keys), which must be ancestors of the node to be a match for this command. |
| [x_or_hasparent] | <code>string</code> | List of commands ids (keys), which at least one must be an ancestor of the node to be a match for this command. |
| [x_or_isparent] | <code>string</code> | List of commands ids (keys), which at least one must be the exact parent of the node to be a match for this command. |
| [autocomplete] | <code>Object</code> | Describes the node for the autocomplete feature of Concepto DSL software and its related documentation. The feature also takes into account the definition of the command (x_level and x_icons) |
| [autocomplete.key_text] | <code>string</code> | String that the node text must have for this command to be suggested. |
| [autocomplete.hint] | <code>string</code> | Text description for this command to be shown on Concepto DSL. |
| func | <code>function</code> | Function to execute with a matching node. Receives one argument and it must be a NodeDSL object. |


* * *

&copy; 2020-2022 Pablo Schaffner &lt;pablo@puntorigen.com&gt;.