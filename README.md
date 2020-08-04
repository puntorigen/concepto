# Punto Origen OPEN Framework : ES6 Classes
<sup>Note: you need to pass all arguments as an Object with keys.</sup>

# API Reference
Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.


* [concepto](#module_concepto)
    * _instance_
        * [.init()](#module_concepto+init)
        * [.reply_template([init])](#module_concepto+reply_template) ⇒ <code>Object</code>
        * [.onInit()](#module_concepto+onInit)
        * [.onAfterWritten(processedNodes)](#module_concepto+onAfterWritten) ⇒ <code>Array.&lt;Node&gt;</code>
        * [.onDefineTitle(node)](#module_concepto+onDefineTitle) ⇒ <code>String</code>
        * [.onDefineFilename(node)](#module_concepto+onDefineFilename) ⇒ <code>String</code>
    * _inner_
        * [~Node](#module_concepto..Node) : <code>Object</code>

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

### concepto.onAfterWritten(processedNodes) ⇒ <code>Array.&lt;Node&gt;</code>
Gets automatically executed after parsing all nodes of the given dsl (before onCompleteCodeTemplate)

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| processedNodes | <code>Array</code> | reply content of writer method |

<a name="module_concepto+onDefineTitle"></a>

### concepto.onDefineTitle(node) ⇒ <code>String</code>
Gets automatically executed within writer method for setting obtaining the title for a node level 2.

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | node to process |

<a name="module_concepto+onDefineFilename"></a>

### concepto.onDefineFilename(node) ⇒ <code>String</code>
Gets automatically executed for naming filename of class/page by testing node (you could use a slud method here).

**Kind**: instance method of [<code>concepto</code>](#module_concepto)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | node to process |

<a name="module_concepto..Node"></a>

### concepto~Node : <code>Object</code>
A node object representation of a DSL node.

**Kind**: inner typedef of [<code>concepto</code>](#module_concepto)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| level | <code>number</code> | Indicates the depth level from the center of the dsl map. |
| text | <code>string</code> | Indicates the text defined in the node itself. |
| text_rich | <code>string</code> | Indicates the html defined in the node itself. |
| text_note | <code>string</code> | Indicates the text/html defined in the notes view of the node (if any). |
| image | <code>string</code> | Image link defined as an image within the node. |
| style | <code>string</code> | Style applied to the node. |


* * *

&copy; 2020 Pablo Schaffner &lt;pablo@puntorigen.com&gt;.
Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).