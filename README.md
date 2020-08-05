# Punto Origen OPEN Framework : ES6 Classes

# API Reference
Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.


* [concepto](#module_concepto)
    * _instance_
        * [.init()](#module_concepto+init)
        * [.reply_template([init])](#module_concepto+reply_template) ⇒ <code>Object</code>
        * [.onInit()](#module_concepto+onInit)
        * [.onAfterWritten(processedNodes)](#module_concepto+onAfterWritten) ⇒ <code>Array.&lt;NodeDSL&gt;</code>
        * [.onDefineTitle(node)](#module_concepto+onDefineTitle) ⇒ <code>String</code>
        * [.onDefineFilename(node)](#module_concepto+onDefineFilename) ⇒ <code>String</code>
        * [.onDefineNodeName(node)](#module_concepto+onDefineNodeName) ⇒ <code>String</code>
        * [.onCompleteCodeTemplate(processedNodes)](#module_concepto+onCompleteCodeTemplate) ⇒ <code>Array.&lt;NodeDSL&gt;</code>
        * [.onPrepare()](#module_concepto+onPrepare)
        * [.onErrors(errors)](#module_concepto+onErrors)
        * [.onCreateFiles(processedNodes)](#module_concepto+onCreateFiles)
        * [.addCommands(command_func)](#module_concepto+addCommands)
        * [.findCommand(node, [justone])](#module_concepto+findCommand) ⇒ <code>Command</code> \| <code>Array.&lt;Command&gt;</code>
        * [.findValidCommand(node, [object])](#module_concepto+findValidCommand) ⇒ <code>Command</code> \| <code>boolean</code>
    * _inner_
        * [~NodeDSL](#module_concepto..NodeDSL) : <code>Object</code>
        * [~Arrow](#module_concepto..Arrow) : <code>Object</code>
        * [~Command](#module_concepto..Command) : <code>Object</code>

<a name="module_concepto+init"></a>

### concepto.init()
Initializes/starts the class

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  
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
<a name="module_concepto+onAfterWritten"></a>

### concepto.onAfterWritten(processedNodes) ⇒ <code>Array.&lt;NodeDSL&gt;</code>
Gets automatically executed after parsing all nodes of the given dsl (before onCompleteCodeTemplate)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNodes | <code>Array</code> | reply content of writer method |

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

### concepto.onCompleteCodeTemplate(processedNodes) ⇒ <code>Array.&lt;NodeDSL&gt;</code>
Defines template for code given the processedNodes of writer(). Useful to prepend/append code before writting code to disk.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNodes | <code>Array.&lt;NodeDSL&gt;</code> | array of nodes already processed before writing them to disk |

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
| processedNodes | <code>Array.&lt;NodeDSL&gt;</code> | array of nodes already processed ready to be written to disk |

<a name="module_concepto+addCommands"></a>

### concepto.addCommands(command_func)
Add commands for processing nodes with the current class

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| command_func | <code>function</code> | async function returning an object with commands objects ([Command](Command)) where each key is the command id, and its value a Command object. |

<a name="module_concepto+findCommand"></a>

### concepto.findCommand(node, [justone]) ⇒ <code>Command</code> \| <code>Array.&lt;Command&gt;</code>
Finds one or more commands defined that matches the specs of the given node.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>NodeDSL</code> |  | node for which to find commands that match |
| [justone] | <code>boolean</code> | <code>true</code> | indicates if you want just the first match (true), or all commands that match the given node (false) |

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
| attributes | <code>Array.&lt;Object&gt;</code> | Array of objects with each attribute (key is attribute name, value is attribute value). |
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
| [x_text_contains] | <code>string</code> | List of strings, that can be contain in node text (if delimiter is comma) or that must be all contained within the node text (if delimiter is |). |
| [x_level] | <code>string</code> | Numeric conditions that the level of the node must met (example: '>2,<5' or '2,3,4'). |
| [x_all_hasparent] | <code>string</code> | List of commands ids (keys), which must be ancestors of the node to be a match for this command. |
| [x_or_hasparent] | <code>string</code> | List of commands ids (keys), which at least one must be an ancestor of the node to be a match for this command. |
| [x_or_isparent] | <code>string</code> | List of commands ids (keys), which at least one must be the exact parent of the node to be a match for this command. |
| [autocomplete] | <code>Object</code> | Describes the node for the autocomplete feature of Concepto DSL software and its related documentation. The feature also takes into account the definition of the command (x_level and x_icons) |
| [autocomplete.key_text] | <code>string</code> | String that the node text must have for this command to be suggested. |
| [autocomplete.hint] | <code>string</code> | Text description for this command to be shown on Concepto DSL. |
| func | <code>function</code> | Function to execute with a matching node. Accepts one argument and it must be a node. |


* * *

&copy; 2020 Pablo Schaffner &lt;pablo@puntorigen.com&gt;.
Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).