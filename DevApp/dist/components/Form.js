!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types"),require("prismjs"),require("marked"),require("dotnetify")):"function"==typeof define&&define.amd?define(["react","prop-types","prismjs","marked","dotnetify"],e):"object"==typeof exports?exports.Form=e(require("react"),require("prop-types"),require("prismjs"),require("marked"),require("dotnetify")):t.Form=e(t.react,t["prop-types"],t.prismjs,t.marked,t.dotnetify)}(window,function(t,e,n,r,o){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=72)}({0:function(e,n){e.exports=t},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flexAuto=e.createEventEmitter=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.deepEqual=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},e.filterChildren=function(t,e){var n=[],r=o.default.Children.map(t,function(t){return t&&t.type&&e(t)?(n.push(t),null):t});return[n,r]},e.ifBoolElse=function(t,e){return"boolean"==typeof t?t:!!e},e.isIE11=u,e.mapChildren=function(t,e,n){var r=this;return o.default.Children.map(t,function(t){if(t)return t.type&&e(t)?n(t):t.props&&t.props.children?o.default.cloneElement(t,t.props,r.mapChildren(t.props.children,e,n)):t})},e.markdown=function(t){return o.default.createElement("div",{dangerouslySetInnerHTML:{__html:(0,i.default)(t,{highlight:function(t,e){var n=e&&"html"!==e?e:"markup";return a.default.languages[n]||(n="markup"),"<span class='prism-code'>"+a.default.highlight(t,a.default.languages[n])+"</span>"}})}})},e.mergeProps=function(t){for(var e=Object.keys(t.type.propTypes||{}),n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=r.reduce(function(t,e){return Object.assign(t,e)},{}),a=Object.keys(i).filter(function(t){return"style"===t||"css"===t||e.includes(t)}).reduce(function(t,e){return Object.assign(t,function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}({},e,i[e]))},{});return Object.assign({},a,t.props)},e.resolveComponents=function(t,e){return Object.keys(t.componentTypes).map(function(n){return e[l(n)]||t.componentTypes[n]})},e.toCamelCase=l,e.toggleNavDrawer=function(t){var e=document.getElementsByTagName("nav");e.length>0&&(!1===t?e[0].classList.remove("open"):e[0].classList.toggle("open"))},e.toPixel=function(t){if(!t)return null;if("string"==typeof t&&t.endsWith("px"))return parseInt(t);var e=window.getComputedStyle(document.body,null)["font-size"];return e.endsWith("px")?parseInt(t)*parseInt(e):parseInt(t)};var o=s(n(0)),i=s(n(12)),a=s(n(11));function s(t){return t&&t.__esModule?t:{default:t}}n(10),n(9),n(8);e.createEventEmitter=function(t){var e=[];return{emit:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(n))})},subscribe:function(t){return!e.includes(t)&&e.push(t),function(){return e=e.filter(function(e){return e!==t})}}}};e.flexAuto=u()?"1 1 auto":"1";function u(){return window.navigator.userAgent.indexOf("Trident/")>0}function l(t){if("string"==typeof t)return t.substr(0,1).toLowerCase()+t.substr(1);if("object"===(void 0===t?"undefined":r(t))){var e={},n=!0,o=!1,i=void 0;try{for(var a,s=Object.keys(t)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;e[l(u)]=t[u]}}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return e}return t}},10:function(t,e){Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,string:[{pattern:/@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,greedy:!0}],"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i}),Prism.languages.insertBefore("csharp","class-name",{"generic-method":{pattern:/\w+\s*<[^>\r\n]+?>\s*(?=\()/,inside:{function:/^\w+/,"class-name":{pattern:/\b[A-Z]\w*(?:\.\w+)*\b/,inside:{punctuation:/\./}},keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.dotnet=Prism.languages.csharp},11:function(t,e){t.exports=n},12:function(t,e){t.exports=r},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Form=e.FormContextTypes=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=l(n(0)),a=n(2),s=l(n(6)),u=n(5);!function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(n(1));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=e.FormContextTypes=o({formContext:a.PropTypes.object},u.ContextTypes),d=e.Form=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={changed:!1,plainText:!!n.props.plainText},n.validators=[],n.inputs=[],n.subForms=[],n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),r(e,[{key:"plainText",get:function(){return this.context.formContext?this.context.formContext.plainText:this.props.plainText}},{key:"enteringEditMode",get:function(){var t=this._plainText&&!this.plainText;return this._plainText=this.plainText,t}}]),r(e,[{key:"componentDidMount",value:function(){this.resetForm(),this.context.formContext&&this.context.formContext.subForms.push(this)}},{key:"componentWillUpdate",value:function(t){"boolean"==typeof t.plainText&&t.plainText!==this.state.plainText&&this.setState({plainText:t.plainText})}},{key:"componentDidUpdate",value:function(){this.enteringEditMode&&this.resetForm(),this.preEditState=this.preEditState||this.getPreEditState()}},{key:"changed",value:function(t){this.state.changed||(this.setState({changed:!0}),this.props.onChanged&&this.props.onChanged(t)),this.context.formContext&&!this.context.formContext.changed&&this.context.formContext.setChanged(t)}},{key:"dispatchState",value:function(t,e){!0===e?this.context.vmContext.dispatchState(t):this.setState({changed:!0,data:Object.assign({},this.state.data,t)}),this.changed(t)}},{key:"getChildContext",value:function(){var t=this,e=this.context,n=e.vmContext,r=e.formContext,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["vmContext","formContext"]);return r=r||{subForms:this.subForms,changed:this.state.changed,plainText:this.state.plainText,setChanged:function(e){return t.changed(e)},setPlainText:function(e){return t.setState({plainText:e})},submit:function(e){return t.handleSubmit(e)},cancel:function(e){return t.handleCancel()}},o({},i,{formContext:r,vmContext:Object.assign({},n,{dispatchState:function(e,n){return t.dispatchState(e,n)},getValidator:function(e){return t.getValidator(e)},getPropAttributes:function(e){return t.getPropAttributes(n,e)}})})}},{key:"getPreEditState",value:function(){var t=this;return Object.entries(this.vmContextState).filter(function(e){return t.inputs.some(function(t){return t.propId===e[0]})}).reduce(function(t,e){return Object.assign(t,f({},e[0],e[1]))},{})}},{key:"getPropAttributes",value:function(t,e){return Object.assign({plainText:this.plainText},t.getPropAttributes(e))}},{key:"getValidator",value:function(t){var e=new s.default(t.vmContext,t.propId);return this.validators.push(e),this.inputs.push(t),e}},{key:"setInputFocus",value:function(t){var e=this.inputs.filter(function(e){return e.propId===t}).shift();e&&e.dom&&e.dom.focus()}},{key:"handleSubmit",value:function(t){var e=this;return this.subForms.length>0?this.handleSubmitSubForms(t):this.submitOnValidated(t).then(function(t){return t.valid||(e.props.onSubmitError&&e.props.onSubmitError(t),e.setInputFocus(t.failedIds[0])),t}).then(function(t){return t.valid})}},{key:"handleSubmitSubForms",value:function(t){var e=this,n={},r=function(t,e){return Object.assign(n,t?f({},t,e):e)};return Promise.all(this.subForms.map(function(t){return t.submitOnValidated(t.props.id,r)})).then(function(t){return t.reduce(function(t,e){return{failedForms:e.failedIds.length>0?[].concat(c(t.failedForms),[{formId:e.formId,failedIds:e.failedIds}]):t.failedForms,valid:t.valid&&e.valid,messages:[].concat(c(t.messages),c(e.messages))}},{valid:!0,messages:[],failedForms:[]})}).then(function(t){if(!t.valid){e.props.onSubmitError&&e.props.onSubmitError(t);var n=e.subForms.filter(function(e){return e.props.id===t.failedForms[0].formId}).shift();n&&n.setInputFocus(t.failedForms[0].failedIds[0])}return t}).then(function(r){return r.valid&&e.submit(t,n),r.valid})}},{key:"handleCancel",value:function(){this.subForms.forEach(function(t){return t.cancel()}),this.cancel()}},{key:"cancel",value:function(){this.context.vmContext.setState(this.preEditState),this.setState({changed:!1,data:null}),this.validators.forEach(function(t){return t.clear()})}},{key:"render",value:function(){return this.context.formContext?this.props.children:i.default.createElement("form",{style:{width:"inherit"},onSubmit:function(t){return t.preventDefault()}},this.props.children)}},{key:"resetForm",value:function(){this.preEditState=null,this.vmContextState=this.context.vmContext&&this.context.vmContext.getState(),this._plainText=this.plainText,this.setState({changed:!1,data:null})}},{key:"submitOnValidated",value:function(t,e){var n=this,r=this.state.data,o=!!r;return o||this.validators.some(function(t){return t.isRequired})?this.validate().then(function(i){return i.valid&&o&&(e?e(t,r):n.submit(t,r)),i}):Promise.resolve({formId:this.props.id,valid:!0,messages:[],failedIds:[]})}},{key:"submit",value:function(t,e){var n=Object.assign({},this.preEditState,e);this.props.onSubmit&&!1===this.props.onSubmit(n)||this.context.vmContext.dispatchState(t?f({},t,n):e),this.resetForm()}},{key:"validate",value:function(){var t=this;return Promise.all(this.validators.map(function(t){return t.validate()})).then(function(e){return e.reduce(function(e,n){return{formId:t.props.id,valid:e.valid&&n.valid,messages:[].concat(c(e.messages),c(n.messages)),failedIds:n.valid?e.failedIds:[].concat(c(e.failedIds),[n.inputId])}},{valid:!0,messages:[],failedIds:[]})})}}]),e}();d.contextTypes=p,d.childContextTypes=p,d.propTypes={id:a.PropTypes.string,plainText:a.PropTypes.bool,onSubmit:a.PropTypes.func,onSubmitError:a.PropTypes.func,onChanged:a.PropTypes.func}},14:function(t,e){t.exports=o},2:function(t,n){t.exports=e},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0);(r=i)&&r.__esModule;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.vmContext=e,this.propId=n}return o(t,[{key:"dispatch",value:function(t,e){this.vmContext.dispatchState(a({},this.propId,t),e)}},{key:"dispatchProp",value:function(t,e){void 0!==this.vmContext.getState(t)&&this.vmContext.setState(a({},t,e)),this.vmContext.dispatchState(a({},t,e))}},{key:"vm",get:function(){return this.vmContext.vm}},{key:"vmState",get:function(){return this.vmContext.getState()}},{key:"fullId",get:function(){return this.vmContext.vmId+"."+this.propId}},{key:"attrs",get:function(){return this.vmContext.getPropAttributes(this.propId)}},{key:"value",get:function(){return this.vmContext.getState(this.propId)},set:function(t){this.vmContext.setState(a({},this.propId,t))}}]),t}();e.default=s},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VMContext=e.ContextTypes=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=l(n(0)),a=n(2),s=l(n(14)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(1));function l(t){return t&&t.__esModule?t:{default:t}}var c=e.ContextTypes={vmContext:a.PropTypes.object,theme:a.PropTypes.object},f=e.VMContext=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onceHandlers=[],n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),o(e,[{key:"componentDidMount",value:function(){this.vmId&&(this.removeOrphan(this.vmId),this.vm=this.connect(this.vmId))}},{key:"componentWillUnmount",value:function(){this.vm.$destroy(),this.onceHandlers=[]}},{key:"connect",value:function(t){var e=this,n=r({setState:function(t){e.setState(t),e.notifyStateChange(t)}},this.props.options);return s.default.react.connect(t,this,n)}},{key:"getChildContext",value:function(){var t=this;return r({},this.context,{vmContext:{vmId:this.vmId,vm:this.vm,getState:function(e){return e?t.state&&t.state.hasOwnProperty(e)?t.state[e]:void 0:t.state},setState:function(e){return t.setState(e)},dispatchState:function(e){return t.vm.$dispatch(e)},getPropAttributes:function(e){return u.toCamelCase(t.state&&t.state[e+"__attr"]||{})},getPropValidations:function(e){return(t.state&&t.state[e+"__validation"]||[]).map(function(t){return u.toCamelCase(t)})},once:function(e,n){return new Promise(function(r){return t.onceHandlers.push({propId:e,handler:function(t){return r(t)},value:n})})}}})}},{key:"notifyStateChange",value:function(t){if(this.onceHandlers.length>0){var e=this.onceHandlers.filter(function(e){return!e.propId||t.hasOwnProperty(e.propId)&&t[e.propId]!==e.value});this.onceHandlers=this.onceHandlers.filter(function(t){return!e.includes(t)}),e.forEach(function(e){return e.handler(t[e.propId])})}this.props.onStateChange&&this.props.onStateChange(t)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.placeholder;return this.state?e:n||null}},{key:"removeOrphan",value:function(t){s.default.react.getViewModels().filter(function(e){return e.$vmId===t}).forEach(function(t){return t.$destroy()})}},{key:"vmId",get:function(){return this.context&&this.context.vmContext?this.context.vmContext.vmId+"."+this.props.vm:this.props.vm}}]),e}();f.contextTypes=c,f.childContextTypes=c,f.propTypes={vm:a.PropTypes.string,options:a.PropTypes.object,onStateChange:a.PropTypes.func}},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=(i(n(0)),i(n(4)));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.handleValidated=null,r.validations=r.vmContext.getPropValidations(n)||[],r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),r(e,[{key:"addValidation",value:function(t){var e;(e=this.validations).push.apply(e,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))}},{key:"clear",value:function(){this.handleValidated&&this.handleValidated({valid:!0,messages:[]})}},{key:"getValidator",value:function(t){if("function"==typeof t.validate)return t.validate;var e="validate"+t.type,n=Object.getPrototypeOf(this);return n.hasOwnProperty(e)?n[e].bind(this,t):function(){return!0}}},{key:"onValidated",value:function(t){"function"==typeof t&&(this.handleValidated=t)}},{key:"validate",value:function(t){var e=this;return new Promise(function(n){t=void 0===t?e.value||null:t,Promise.all(e.validations.map(function(n){return e.runValidator(n,t)})).then(function(t){var r=t.map(function(t){return!1===t.isValid?t.message:null}).filter(function(t){return t}),o={inputId:e.propId,valid:0==r.length,messages:r};e.handleValidated&&e.handleValidated(o),n(o)})})}},{key:"runValidator",value:function(t,e){var n=this.getValidator(t)(e);return n instanceof Promise?n:new Promise(function(e){return e({isValid:n,message:t.message})})}},{key:"validatePattern",value:function(t,e){return!e||new RegExp(t.pattern).test(e)}},{key:"validateRange",value:function(t,e){var n=parseFloat(e),r=!("number"==typeof t.min&&n<t.min),o=!("number"==typeof t.max&&n>t.max);return r&&o}},{key:"validateRequired",value:function(t,e){return!(void 0===e||null==e||"string"==typeof e&&0==e.trim().length)}},{key:"validateServer",value:function(t,e){var n=this.propId+"__validation_"+t.id;this.vmContext.setState(a({},n,null));var r=this.vmContext.once(n,null);return this.vmContext.dispatchState(a({},this.propId,e),!0),r.then(function(e){return{isValid:e,message:t.message}})}},{key:"isRequired",get:function(){return this.validations.filter(function(t){return t.type&&"required"===t.type.toLowerCase()}).length>0}}]),e}();e.default=s},72:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Form=void 0;var r=n(13);e.Form=r.Form},8:function(t,e){Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,punctuation:/[{}[\]);,]/,operator:/:/g,boolean:/\b(?:true|false)\b/i,null:/\bnull\b/i},Prism.languages.jsonp=Prism.languages.json},9:function(t,e){!function(t){var e=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var n=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(n).join(""):""},r=function(e){for(var o=[],i=0;i<e.length;i++){var a=e[i],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?o.length>0&&o[o.length-1].tagName===n(a.content[0].content[1])&&o.pop():"/>"===a.content[a.content.length-1].content||o.push({tagName:n(a.content[0].content[1]),openedBraces:0}):o.length>0&&"punctuation"===a.type&&"{"===a.content?o[o.length-1].openedBraces++:o.length>0&&o[o.length-1].openedBraces>0&&"punctuation"===a.type&&"}"===a.content?o[o.length-1].openedBraces--:s=!0),(s||"string"==typeof a)&&o.length>0&&0===o[o.length-1].openedBraces){var u=n(a);i<e.length-1&&("string"==typeof e[i+1]||"plain-text"===e[i+1].type)&&(u+=n(e[i+1]),e.splice(i+1,1)),i>0&&("string"==typeof e[i-1]||"plain-text"===e[i-1].type)&&(u=n(e[i-1])+u,e.splice(i-1,1),i--),e[i]=new t.Token("plain-text",u,null,u)}a.content&&"string"!=typeof a.content&&r(a.content)}};t.hooks.add("after-tokenize",function(t){"jsx"!==t.language&&"tsx"!==t.language||r(t.tokens)})}(Prism)}})});