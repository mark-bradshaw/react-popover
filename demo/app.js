webpackJsonp([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(51),s=o(l),c=n(58),f=o(c),p=n(87);n(88);var h=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"menuClick",value:function(e){e.preventDefault(),console.log("menu item clicked")}},{key:"render",value:function(){return s["default"].createElement(p.PopoverWrapper,{className:"box"},s["default"].createElement("p",null,'Your "trigger" can be anything you want: a simple text or html: ',s["default"].createElement(p.Popover,{trigger:"open above",position:"top"},"lorem ipsum...")),s["default"].createElement("div",null,"You can use complex html for the popover content:",s["default"].createElement(p.Popover,{className:"menu",trigger:s["default"].createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"28",viewBox:"0 0 24 28"},s["default"].createElement("path",{d:"M24 21v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 13v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 5v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703z"})),position:"bottom"},s["default"].createElement("a",{href:"#",onClick:this.menuClick},"Profile"),s["default"].createElement("a",{href:"#",onClick:this.menuClick},"Settings"),s["default"].createElement("a",{href:"#",onClick:this.menuClick},"Log Out"))),s["default"].createElement("p",null,"The popover component comes with minimal styling by default but you can style it however you want:",s["default"].createElement(p.Popover,{trigger:s["default"].createElement("span",null,"web 2.0 nostalgia"),position:"right",className:"web20"},"I am oh so pretty :)",s["default"].createElement("span",{className:"beta"},"beta"))))}}]),t}(s["default"].Component);f["default"].render(s["default"].createElement(h,null),document.getElementById("react"))},87:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/lib/",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.PopoverWrapper=t.Popover=t.popoverStore=void 0;var f=n(4),p=r(f),h=n(1),d=r(h),y=n(2),v=r(y),m=function(){function e(){l(this,e),this.callbacks={}}return c(e,[{key:"on",value:function(e,t){this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(t)}},{key:"trigger",value:function(e){this.callbacks[e]&&this.callbacks[e].map(function(e){return e()})}},{key:"off",value:function(e,t){if(this.callbacks[e]){var n=this.callbacks[e].indexOf(t);n>-1&&(this.callbacks=[].concat(u(this.callbacks.slice(0,n)),u(this.callbacks.slice(n+1))))}}}]),e}(),b=t.popoverStore=new m,g=t.Popover=function(e){function t(){var e,n,o,r;l(this,t);for(var a=arguments.length,u=Array(a),s=0;a>s;s++)u[s]=arguments[s];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={isPopoverShown:!1},o.shouldComponentUpdate=v["default"],r=n,i(o,r)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){b.on("hide",this.hide.bind(this))}},{key:"componentWillUnmount",value:function(){b.off("hide",this.hide.bind(this))}},{key:"show",value:function(){this.immune=!0,this.setState({isPopoverShown:!0})}},{key:"hide",value:function(){this.immune||this.setState({isPopoverShown:!1}),this.immune=!1}},{key:"toggle",value:function(e){e.preventDefault(),this.state.isPopoverShown?this.hide():this.show()}},{key:"render",value:function(){var e=(0,d["default"])("popover",this.props.className,"popover--"+this.props.position,{"popover--active":this.state.isPopoverShown});return p["default"].createElement("div",{className:e},p["default"].createElement("a",{href:"#",onClick:this.toggle.bind(this),className:"popover__trigger"},this.props.trigger),p["default"].createElement("div",{className:"popover__content"},this.props.children))}}]),t}(p["default"].Component);g.propTypes={trigger:p["default"].PropTypes.any.isRequired,position:p["default"].PropTypes.oneOf(["top","right","bottom","left"]),className:p["default"].PropTypes.string,children:p["default"].PropTypes.node},g.defaultProps={position:"top"};var w=t.PopoverWrapper=function(e){function t(){return l(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),c(t,[{key:"hidePopovers",value:function(){b.trigger("hide")}},{key:"render",value:function(){return p["default"].createElement("div",s({onClick:this.hidePopovers,onTouchEnd:this.hidePopovers},this.props),this.props.children)}}]),t}(p["default"].Component);w.propTypes={children:p["default"].PropTypes.node},t["default"]=g},function(e,t,n){var r,i;/*!
	                                                                  Copyright (c) 2016 Jed Watson.
	                                                                  Licensed under the MIT License (MIT), see
	                                                                  http://jedwatson.github.io/classnames
	                                                                  */
!function(){function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i="undefined"==typeof r?"undefined":o(r);if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var u in r)a.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],i=function(){return n}.apply(t,r),!(void 0!==i&&(e.exports=i)))}()},function(e,t,n){function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return!(0,a["default"])(this.props,e)||!(0,a["default"])(this.state,t)}t.__esModule=!0,t["default"]=r;var i=n(3),a=o(i);e.exports=t["default"]},function(e,t){function n(e,t){if(e===t)return!0;if("object"!==("undefined"==typeof e?"undefined":o(e))||null===e||"object"!==("undefined"==typeof t?"undefined":o(t))||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),a=0;a<n.length;a++)if(!i(n[a])||e[n[a]]!==t[n[a]])return!1;return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t){e.exports=n(51)}])},88:function(e,t){}});