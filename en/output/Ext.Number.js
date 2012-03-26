Ext.data.JsonP.Ext_Number({"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"requires":[],"component":false,"mixins":[],"code_type":"assignment","inheritable":false,"mixedInto":[],"meta":{},"uses":[],"parentMixins":[],"aliases":{},"members":{"event":[],"property":[],"method":[{"owner":"Ext.Number","meta":{},"name":"constrain","id":"method-constrain","tagname":"method"},{"owner":"Ext.Number","meta":{},"name":"from","id":"method-from","tagname":"method"},{"owner":"Ext.Number","meta":{},"name":"snap","id":"method-snap","tagname":"method"},{"owner":"Ext.Number","meta":{},"name":"toFixed","id":"method-toFixed","tagname":"method"}],"css_var":[],"css_mixin":[],"cfg":[]},"superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Number.html#Ext-Number' target='_blank'>Number.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with numbers</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constrain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-constrain' class='name expandable'>constrain</a>( <span class='pre'>Number number, Number min, Number max</span> ) : Number</div><div class='description'><div class='short'<p>Checks whether or not the passed number is with...</p></div><div class='long'><p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : Number<div class='sub-desc'><p>The number to check\n</p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>The minimum number in the range\n</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>The maximum number in the range\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The constrained value if outside the range, otherwise the current value</p>\n</div></li></ul></div></div></div><div id='method-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-from' class='name expandable'>from</a>( <span class='pre'>Object value, Number defaultValue</span> ) : Number</div><div class='description'><div class='short'<p>Validate that a value is numeric and convert it...</p></div><div class='long'><p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<pre><code>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>defaultValue</span> : Number<div class='sub-desc'><p>The value to return if the original value is non-numeric\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>value, if numeric, defaultValue otherwise</p>\n</div></li></ul></div></div></div><div id='method-snap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-snap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snap' class='name expandable'>snap</a>( <span class='pre'>Number value, Number increment, Number minValue, Number maxValue</span> ) : Number</div><div class='description'><div class='short'<p>Snaps the passed number between stopping points...</p></div><div class='long'><p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The unsnapped value.\n</p>\n</div></li><li><span class='pre'>increment</span> : Number<div class='sub-desc'><p>The increment by which the value must move.\n</p>\n</div></li><li><span class='pre'>minValue</span> : Number<div class='sub-desc'><p>The minimum value to which the returned value must be constrained. Overrides the increment.\n</p>\n</div></li><li><span class='pre'>maxValue</span> : Number<div class='sub-desc'><p>The maximum value to which the returned value must be constrained. Overrides the increment.\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The value of the nearest snap target.</p>\n</div></li></ul></div></div></div><div id='method-toFixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-toFixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-toFixed' class='name expandable'>toFixed</a>( <span class='pre'>Number value, Number precision</span> ) : Number</div><div class='description'><div class='short'<p>Formats a number using fixed-point notation</p></div><div class='long'><p>Formats a number using fixed-point notation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The number to format\n</p>\n</div></li><li><span class='pre'>precision</span> : Number<div class='sub-desc'><p>The number of digits to show after the decimal point\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>{Ext_Number:method-toFixed:return}</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"name":"Ext.Number","html_meta":{},"tagname":"class","extends":null,"id":"class-Ext.Number","alternateClassNames":[],"inheritdoc":null,"files":[{"href":"Number.html#Ext-Number","filename":"Number.js"}]});