webpackJsonp([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(51),p=o(l),s=n(58),c=o(s),f=n(87);n(88);var d=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"menuClick",value:function(e){e.preventDefault(),console.log("menu item clicked")}},{key:"render",value:function(){return p["default"].createElement(f.PopoverWrapper,{className:"box"},p["default"].createElement("p",null,'Your "trigger" can be anything you want: a simple text or html: ',p["default"].createElement(f.Popover,{trigger:"open above",position:"top"},"lorem ipsum...")),p["default"].createElement("div",null,"You can use complex html for the popover content:",p["default"].createElement(f.Popover,{className:"menu",trigger:p["default"].createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"28",viewBox:"0 0 24 28"},p["default"].createElement("path",{d:"M24 21v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 13v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 5v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703z"})),position:"bottom"},p["default"].createElement("a",{href:"#",onClick:this.menuClick},"Profile"),p["default"].createElement("a",{href:"#",onClick:this.menuClick},"Settings"),p["default"].createElement("a",{href:"#",onClick:this.menuClick},"Log Out"))),p["default"].createElement("p",null,"The popover component comes with minimal styling by default but you can style it however you want:",p["default"].createElement(f.Popover,{trigger:p["default"].createElement("span",null,"web 2.0 nostalgia"),position:"right",className:"web20"},"I am oh so pretty :)",p["default"].createElement("span",{className:"beta"},"beta"))))}}]),t}(p["default"].Component);c["default"].render(p["default"].createElement(d,null),document.getElementById("react"))},87:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/lib/",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PopoverWrapper=t.Popover=t.popoverStore=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(4),c=r(s),f=n(1),d=r(f),h=n(2),y=r(h),v=function(){function e(){a(this,e),this.callback=null}return p(e,[{key:"hide",value:function(){this.register(null)}},{key:"register",value:function(e){this.callback&&this.callback(),this.callback=e}},{key:"unregister",value:function(e){this.callback===e&&(this.callback=null)}}]),e}(),m=t.popoverStore=new v,b=t.Popover=function(e){function t(){var e,n,o,r;a(this,t);for(var u=arguments.length,l=Array(u),p=0;u>p;p++)l[p]=arguments[p];return n=o=i(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={isPopoverShown:!1},o.shouldComponentUpdate=y["default"],o.componentWillUnmount=function(){m.unregister(o.hide)},o.show=function(){m.register(o.hide),o.setState({isPopoverShown:!0}),o.props.onShow&&o.props.onShow()},o.hide=function(){o.setState({isPopoverShown:!1}),o.props.onHide&&o.props.onHide()},o.toggle=function(e){e.preventDefault(),e.stopPropagation(),o.state.isPopoverShown?o.hide():o.show()},r=n,i(o,r)}return u(t,e),p(t,[{key:"render",value:function(){var e=(0,d["default"])("popover",this.props.className,"popover--"+this.props.position,{"popover--active":this.state.isPopoverShown});return c["default"].createElement("div",{className:e,style:this.props.style},c["default"].createElement("a",{href:"#",onClick:this.toggle,className:"popover__trigger"},this.props.trigger),c["default"].createElement("div",{className:"popover__content"},this.props.children))}}]),t}(c["default"].Component);b.propTypes={className:c["default"].PropTypes.string,children:c["default"].PropTypes.node,trigger:c["default"].PropTypes.any.isRequired,position:c["default"].PropTypes.oneOf(["top","right","bottom","left"]),onShow:c["default"].PropTypes.func,onHide:c["default"].PropTypes.func,style:c["default"].PropTypes.object},b.defaultProps={position:"top"};var g=t.PopoverWrapper=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),p(t,[{key:"hidePopovers",value:function(){m.hide()}},{key:"render",value:function(){return c["default"].createElement("div",l({onClick:this.hidePopovers,onTouchEnd:this.hidePopovers},this.props),this.props.children)}}]),t}(c["default"].Component);g.propTypes={children:c["default"].PropTypes.node},t["default"]=b},function(e,t,n){var r,i;/*!
	                                                                  Copyright (c) 2016 Jed Watson.
	                                                                  Licensed under the MIT License (MIT), see
	                                                                  http://jedwatson.github.io/classnames
	                                                                  */
!function(){function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i="undefined"==typeof r?"undefined":o(r);if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var a in r)u.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var u={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],i=function(){return n}.apply(t,r),!(void 0!==i&&(e.exports=i)))}()},function(e,t,n){function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return!(0,u["default"])(this.props,e)||!(0,u["default"])(this.state,t)}t.__esModule=!0,t["default"]=r;var i=n(3),u=o(i);e.exports=t["default"]},function(e,t){function n(e,t){if(e===t)return!0;if("object"!==("undefined"==typeof e?"undefined":o(e))||null===e||"object"!==("undefined"==typeof t?"undefined":o(t))||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<n.length;u++)if(!i(n[u])||e[n[u]]!==t[n[u]])return!1;return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t){e.exports=n(51)}])},88:function(e,t){}});