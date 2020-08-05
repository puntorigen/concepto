# Punto Origen OPEN Framework : ES6 Classes
<sup>Note: you need to pass all arguments as an Object with keys.</sup>

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
    * _inner_
        * [~NodeDSL](#module_concepto..NodeDSL) : <code>Object</code>
        * [~Arrow](#module_concepto..Arrow) : <code>Object</code>

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
| arrows | <code>Array.&lt;Arrow&gt;</code> | Visual connections of this node with other nodes [Arrow](Arrow). |
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


* * *

&copy; 2020 Pablo Schaffner &lt;pablo@puntorigen.com&gt;.
Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).