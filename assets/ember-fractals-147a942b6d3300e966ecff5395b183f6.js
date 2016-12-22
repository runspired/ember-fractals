"use strict";define("ember-fractals/app",["exports","ember","ember-fractals/resolver","ember-load-initializers","ember-fractals/config/environment"],function(e,t,r,n,a){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:r.default}),(0,n.default)(l,a.default.modulePrefix),e.default=l}),define("ember-fractals/components/pythagoras-container",["exports","ember","npm:d3-selection","npm:d3-scale","ember-fractals/templates/components/pythagoras-container"],function(e,t,r,n,a){var l=function(){function e(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var i,f=e[Symbol.iterator]();!(n=(i=f.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&f.return&&f.return()}finally{if(a)throw l}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t.default.Component,f=t.default.String.htmlSafe,o=t.default.run,u=r.default.select,s=r.default.mouse,c=n.default.scaleLinear;e.default=i.extend({layout:a.default,tagName:"svg",attributeBindings:["width","height","style"],style:f("border: 1px solid lightgray"),width:1280,height:600,currentMax:0,baseW:80,heightFactor:0,lean:0,realMax:11,didInsertElement:function(){var e=this;u(this.element).on("mousemove",function(){o.join(e,e.onMouseMove)}),this.next()},next:function(){var e=this,t=this.get("currentMax");t<this.realMax&&(this.incrementProperty("currentMax"),o.later(function(){return e.next()},500))},onMouseMove:function(){if(!this.running){this.running=!0;var e=this.height,t=this.width,r=this.element,n=s(r),a=l(n,2),i=a[0],f=a[1],o=c().domain([e,0]).range([0,.8]),u=c().domain([0,t/2,t]).range([.5,0,-.5]);this.setProperties({heightFactor:o(f),lean:u(i)}),this.running=!1}},init:function(){this._super(),this.running=!1,this.initialX=this.width/2-40,this.initialY=this.height-this.baseW}})}),define("ember-fractals/components/pythagoras-rect",["exports","ember","npm:d3-scale","ember-fractals/utils/memoized-calc","ember-fractals/templates/components/pythagoras-rect"],function(e,t,r,n,a){var l=t.default.Component,i=t.default.String.htmlSafe,f=r.default.interpolateViridis;e.default=l.extend({layout:a.default,tagName:"",recalculateParams:function(){var e=this.x,t=this.y,r=this.left,a=this.right,l=this.lvl,o=this.maxlvl,u=this.w,s=this.heightFactor,c=this.lean,m={w:u,heightFactor:s,lean:c},p=(0,n.default)(m),d=p.A,b=p.B,h=p.nextLeft,g=p.nextRight,x=-h,y=u-g,P=-g,j=l+1,O=l<o&&u>=1,v=i("fill: "+f(l/o)),w="";r?w="rotate("+-d+" 0 "+u+")":a&&(w="rotate("+b+" "+u+" "+u+")");var z="translate("+e+" "+t+") "+w,M={nextLvl:j,nextLeft:h,nextRight:g,nextYLeft:x,nextXRight:y,nextYRight:P,shouldRender:O,squareFillStyle:v,transformStyle:z};this.setProperties(M)},init:function(){this._super(),this.nextXLeft=0},didReceiveAttrs:function(e){this._super(e),this.recalculateParams()}})}),define("ember-fractals/helpers/abs",["exports","ember-math-helpers/helpers/abs"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"abs",{enumerable:!0,get:function(){return t.abs}})}),define("ember-fractals/helpers/acos",["exports","ember-math-helpers/helpers/acos"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"acos",{enumerable:!0,get:function(){return t.acos}})}),define("ember-fractals/helpers/acosh",["exports","ember-math-helpers/helpers/acosh"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"acosh",{enumerable:!0,get:function(){return t.acosh}})}),define("ember-fractals/helpers/add",["exports","ember-math-helpers/helpers/add"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"add",{enumerable:!0,get:function(){return t.add}})}),define("ember-fractals/helpers/app-version",["exports","ember","ember-fractals/config/environment"],function(e,t,r){function n(){return a}e.appVersion=n;var a=r.default.APP.version;e.default=t.default.Helper.helper(n)}),define("ember-fractals/helpers/asin",["exports","ember-math-helpers/helpers/asin"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"asin",{enumerable:!0,get:function(){return t.asin}})}),define("ember-fractals/helpers/asinh",["exports","ember-math-helpers/helpers/asinh"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"asinh",{enumerable:!0,get:function(){return t.asinh}})}),define("ember-fractals/helpers/atan",["exports","ember-math-helpers/helpers/atan"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"atan",{enumerable:!0,get:function(){return t.atan}})}),define("ember-fractals/helpers/atan2",["exports","ember-math-helpers/helpers/atan2"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"atan2",{enumerable:!0,get:function(){return t.atan2}})}),define("ember-fractals/helpers/atanh",["exports","ember-math-helpers/helpers/atanh"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"atanh",{enumerable:!0,get:function(){return t.atanh}})}),define("ember-fractals/helpers/cbrt",["exports","ember-math-helpers/helpers/cbrt"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"cbrt",{enumerable:!0,get:function(){return t.cbrt}})}),define("ember-fractals/helpers/ceil",["exports","ember-math-helpers/helpers/ceil"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ceil",{enumerable:!0,get:function(){return t.ceil}})}),define("ember-fractals/helpers/clz32",["exports","ember-math-helpers/helpers/clz32"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"clz32",{enumerable:!0,get:function(){return t.clz32}})}),define("ember-fractals/helpers/cos",["exports","ember-math-helpers/helpers/cos"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"cos",{enumerable:!0,get:function(){return t.cos}})}),define("ember-fractals/helpers/cosh",["exports","ember-math-helpers/helpers/cosh"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"cosh",{enumerable:!0,get:function(){return t.cosh}})}),define("ember-fractals/helpers/div",["exports","ember-math-helpers/helpers/div"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"div",{enumerable:!0,get:function(){return t.div}})}),define("ember-fractals/helpers/exp",["exports","ember-math-helpers/helpers/exp"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"exp",{enumerable:!0,get:function(){return t.exp}})}),define("ember-fractals/helpers/expm1",["exports","ember-math-helpers/helpers/expm1"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"expm1",{enumerable:!0,get:function(){return t.expm1}})}),define("ember-fractals/helpers/floor",["exports","ember-math-helpers/helpers/floor"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"floor",{enumerable:!0,get:function(){return t.floor}})}),define("ember-fractals/helpers/fround",["exports","ember-math-helpers/helpers/fround"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"fround",{enumerable:!0,get:function(){return t.fround}})}),define("ember-fractals/helpers/hypot",["exports","ember-math-helpers/helpers/hypot"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hypot",{enumerable:!0,get:function(){return t.hypot}})}),define("ember-fractals/helpers/imul",["exports","ember-math-helpers/helpers/imul"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"imul",{enumerable:!0,get:function(){return t.imul}})}),define("ember-fractals/helpers/log-e",["exports","ember-math-helpers/helpers/log-e"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"logE",{enumerable:!0,get:function(){return t.logE}})}),define("ember-fractals/helpers/log10",["exports","ember-math-helpers/helpers/log10"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"log10",{enumerable:!0,get:function(){return t.log10}})}),define("ember-fractals/helpers/log1p",["exports","ember-math-helpers/helpers/log1p"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"log1p",{enumerable:!0,get:function(){return t.log1p}})}),define("ember-fractals/helpers/log2",["exports","ember-math-helpers/helpers/log2"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"log2",{enumerable:!0,get:function(){return t.log2}})}),define("ember-fractals/helpers/max",["exports","ember-math-helpers/helpers/max"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"max",{enumerable:!0,get:function(){return t.max}})}),define("ember-fractals/helpers/min",["exports","ember-math-helpers/helpers/min"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"min",{enumerable:!0,get:function(){return t.min}})}),define("ember-fractals/helpers/mod",["exports","ember-math-helpers/helpers/mod"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return t.mod}})}),define("ember-fractals/helpers/mult",["exports","ember-math-helpers/helpers/mult"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"mult",{enumerable:!0,get:function(){return t.mult}})}),define("ember-fractals/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-fractals/helpers/pow",["exports","ember-math-helpers/helpers/pow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"pow",{enumerable:!0,get:function(){return t.pow}})}),define("ember-fractals/helpers/random",["exports","ember-math-helpers/helpers/random"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"random",{enumerable:!0,get:function(){return t.random}})}),define("ember-fractals/helpers/round",["exports","ember-math-helpers/helpers/round"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"round",{enumerable:!0,get:function(){return t.round}})}),define("ember-fractals/helpers/sign",["exports","ember-math-helpers/helpers/sign"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"sign",{enumerable:!0,get:function(){return t.sign}})}),define("ember-fractals/helpers/sin",["exports","ember-math-helpers/helpers/sin"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"sin",{enumerable:!0,get:function(){return t.sin}})}),define("ember-fractals/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-fractals/helpers/sqrt",["exports","ember-math-helpers/helpers/sqrt"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"sqrt",{enumerable:!0,get:function(){return t.sqrt}})}),define("ember-fractals/helpers/sub",["exports","ember-math-helpers/helpers/sub"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"sub",{enumerable:!0,get:function(){return t.sub}})}),define("ember-fractals/helpers/tan",["exports","ember-math-helpers/helpers/tan"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"tan",{enumerable:!0,get:function(){return t.tan}})}),define("ember-fractals/helpers/tanh",["exports","ember-math-helpers/helpers/tanh"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"tanh",{enumerable:!0,get:function(){return t.tanh}})}),define("ember-fractals/helpers/trunc",["exports","ember-math-helpers/helpers/trunc"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"trunc",{enumerable:!0,get:function(){return t.trunc}})}),define("ember-fractals/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-fractals/config/environment"],function(e,t,r){var n=r.default.APP,a=n.name,l=n.version;e.default={name:"App Version",initialize:(0,t.default)(a,l)}}),define("ember-fractals/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-fractals/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-fractals/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("ember-fractals/initializers/export-application-global",["exports","ember","ember-fractals/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var a,l=r.default.exportApplicationGlobal;a="string"==typeof l?l:t.default.String.classify(r.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-fractals/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-fractals/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-fractals/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-fractals/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-fractals/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-fractals/router",["exports","ember","ember-fractals/config/environment"],function(e,t,r){var n=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});n.map(function(){}),e.default=n}),define("ember-fractals/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-fractals/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"s0wwCZR6",block:'{"statements":[["open-element","h1",[]],["flush-element"],["text","ember-fractals"],["close-element"],["text","\\n\\n"],["append",["unknown",["pythagoras-container"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ember-fractals/templates/application.hbs"}})}),define("ember-fractals/templates/components/pythagoras-container",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"js2OHoQm",block:'{"statements":[["append",["helper",["pythagoras-rect"],null,[["w","h","heightFactor","lean","x","y","lvl","maxlvl"],[["get",["baseW"]],["get",["baseW"]],["get",["heightFactor"]],["get",["lean"]],["get",["initialX"]],["get",["initialY"]],0,["get",["currentMax"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ember-fractals/templates/components/pythagoras-container.hbs"}})}),define("ember-fractals/templates/components/pythagoras-rect",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"xT4bzY1E",block:'{"statements":[["block",["if"],[["get",["shouldRender"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","g",[]],["dynamic-attr","transform",["unknown",["transformStyle"]],null],["flush-element"],["text","\\n\\n    "],["open-element","rect",[]],["dynamic-attr","width",["unknown",["w"]],null],["dynamic-attr","height",["unknown",["w"]],null],["static-attr","x","0"],["static-attr","y","0"],["dynamic-attr","style",["unknown",["squareFillStyle"]],null],["flush-element"],["close-element"],["text","\\n\\n    "],["append",["helper",["pythagoras-rect"],null,[["w","x","y","lvl","maxlvl","heightFactor","lean","left"],[["get",["nextLeft"]],["get",["nextXLeft"]],["get",["nextYLeft"]],["get",["nextLvl"]],["get",["maxlvl"]],["get",["heightFactor"]],["get",["lean"]],true]]],false],["text","\\n\\n    "],["append",["helper",["pythagoras-rect"],null,[["w","x","y","lvl","maxlvl","heightFactor","lean","right"],[["get",["nextRight"]],["get",["nextXRight"]],["get",["nextYRight"]],["get",["nextLvl"]],["get",["maxlvl"]],["get",["heightFactor"]],["get",["lean"]],true]]],false],["text","\\n      \\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"ember-fractals/templates/components/pythagoras-rect.hbs"}})}),define("ember-fractals/utils/memoized-calc",["exports"],function(e){var t=function(e){return e*(180/Math.PI)},r=function(){var e={},r=function(e){var t=e.w,r=e.heightFactor,n=e.lean;return[t,r,n].join("-")};return function(n){var a=r(n);if(e[a])return e[a];var l=n.w,i=n.heightFactor,f=n.lean,o=i*l,u={nextRight:Math.sqrt(Math.pow(o,2)+Math.pow(l*(.5+f),2)),nextLeft:Math.sqrt(Math.pow(o,2)+Math.pow(l*(.5-f),2)),A:t(Math.atan(o/((.5-f)*l))),B:t(Math.atan(o/((.5+f)*l)))};return e[a]=u,u}}();e.default=r}),define("ember-fractals/config/environment",["ember"],function(e){var t="ember-fractals";try{var r=t+"/config/environment",n=document.querySelector('meta[name="'+r+'"]').getAttribute("content"),a=JSON.parse(unescape(n)),l={default:a};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-fractals/app").default.create({name:"ember-fractals",version:"0.0.0+f0f29257"});