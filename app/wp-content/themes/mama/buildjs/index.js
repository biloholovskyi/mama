!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var o=e[i],c=n.base?o[0]+n.base:o[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:b(m,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function m(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function b(e,n){var t,r,i;if(n.singleton){var o=h++;t=p||(p=l(n)),r=m.bind(null,t,o,!1),i=m.bind(null,t,o,!0)}else t=l(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=s(t[r]);a[i].references--}for(var o=c(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=o}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=function(e){var n=e.currentTarget.id.split("tab-")[1],t=document.querySelectorAll(".dish-item");if("all"===n)t.forEach((function(e){e.classList.add("show")}));else{var r="cat-".concat(n);t.forEach((function(e){e.classList.contains(r)?e.classList.add("show"):e.classList.remove("show")}))}};function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.smallCart=document.querySelector(".inbusket"),this.busketBody=document.querySelector(".itemInBusket-body")}var n,t,r;return n=e,(t=[{key:"creatOrder",value:function(e){var n=this;this.smallCart.style.display="none",$(".dish-overlay").css("visibility","hidden"),$(".addbusket-modal").css("visibility","visible"),setTimeout((function(){$(".addbusket-modal").css("visibility","hidden"),n.smallCart.style.display="flex",n.renderOrder()}),4e3);var t=(new Date).getTime()+864e5,r=localStorage.getItem("mama-order"),i=[];r&&(i=JSON.parse(r).listOrder);var o={id:e.target.getAttribute("data-product"),count:+e.target.getAttribute("data-count")>0?e.target.getAttribute("data-count"):1};i.push(o);var a={lifeTime:t,listOrder:i},s=JSON.stringify(a);null!==localStorage.getItem("mama-order")?(localStorage.removeItem("mama-order"),localStorage.setItem("mama-order",s)):localStorage.setItem("mama-order",s)}},{key:"renderOrder",value:function(){var e=this;if(this.busketBody.querySelectorAll(".item").forEach((function(e){e.remove()})),null!==localStorage.getItem("mama-order")){var n=localStorage.getItem("mama-order"),t=JSON.parse(n);if((new Date).getTime()>t.lifeTime||t.listOrder.length<1)localStorage.removeItem("mama-order");else{this.smallCart.style.display="flex",document.querySelector(".numberOfItem").innerHTML=t.listOrder.length.toString();var r=0;t.listOrder.forEach((function(n){var t=n.id,i=n.count,o=document.getElementById(t),a=o.querySelector("h4.bold").innerHTML,s=o.getAttribute("data-gram"),c=o.querySelector(".food-img").getAttribute("src"),l=parseInt(o.querySelector(".busket").innerHTML);r+=l*i;var d=document.createElement("div");d.classList.add("item");var u=document.createElement("div");u.className="left";var m=document.createElement("div");m.className="right";var f=document.createElement("div");f.classList.add("img-container");var p=document.createElement("img");p.setAttribute("src",c),f.append(p),u.prepend(f);var h=document.createElement("div");h.classList.add("titles");var b=document.createElement("div");b.classList.add("names"),b.innerHTML=a;var g=document.createElement("div");g.classList.add("grams"),g.innerHTML=s+" грамм",h.append(b),h.append(g),u.append(h);var v=document.createElement("div");v.className="count-wrap";var y=document.createElement("div");y.className="plus";var k=document.createElement("div");k.className="minus";var w=document.createElement("div");w.className="num",w.innerHTML=i,v.append(k),v.append(w),v.append(y),m.append(v);var S=document.createElement("div");S.className="dlt-item",S.setAttribute("data-id",t),m.append(S),d.append(u),d.append(m),e.busketBody.append(d)})),document.querySelector(".item-in-busket .itemInBusket-btn .price-wrap .price").innerHTML=r+"₽"}}}},{key:"removeOrder",value:function(e){var n=e.target.getAttribute("data-id"),t=localStorage.getItem("mama-order"),r=(t=JSON.parse(t)).listOrder.findIndex((function(e){return e.id.toString()===n.toString()})),i=[].concat(s(t.listOrder.slice(0,r)),s(t.listOrder.slice(r+1))),o={lifeTime:(new Date).getTime()+864e5,listOrder:i};o=JSON.stringify(o),localStorage.removeItem("mama-order"),localStorage.setItem("mama-order",o),e.target.parentElement.parentElement.remove(),document.querySelector(".item-in-busket").style.display="flex",this.smallCart.style.display="none"}},{key:"onCount",value:function(e){var n=e.target.classList.contains("plus"),t=e.target.parentElement.nextElementSibling.getAttribute("data-id"),r=localStorage.getItem("mama-order"),i=(r=JSON.parse(r)).listOrder.findIndex((function(e){return e.id.toString()===t.toString()})),a=n?+r.listOrder[i].count+1:+r.listOrder[i].count-1;a<1&&(a=1);var c=o(o({},r.listOrder[i]),{},{count:a}),l=[].concat(s(r.listOrder.slice(0,i)),[c],s(r.listOrder.slice(i+1))),d={lifeTime:r.lifeTime,listOrder:l};localStorage.removeItem("mama-order"),localStorage.setItem("mama-order",JSON.stringify(d)),this.renderOrder()}}])&&l(n.prototype,t),r&&l(n,r),e}());$(document).ready((function(e){d.renderOrder(),$("#tabs .tab").on("click",(function(e){return function(e){$(e.currentTarget).hasClass("active")||($(e.currentTarget).siblings().removeClass("active"),$(e.currentTarget).addClass("active")),r(e)}(e)})),$("body").on("click",".item-in-busket .itemInBusket-body .item .dlt-item",(function(e){return d.removeOrder(e)})),$("body").on("click",".item-in-busket .itemInBusket-body .item .count-wrap .plus",(function(e){return d.onCount(e)})),$("body").on("click",".item-in-busket .itemInBusket-body .item .count-wrap .minus",(function(e){return d.onCount(e)})),$(".anhors").on("click",(function(e){e.preventDefault();var n=$(this).attr("href"),t=$(n).offset().top;$("body, html").animate({scrollTop:t},800),$(".header").removeClass("active")})),$("#main-slider").owlCarousel({loop:!0,margin:10,nav:!0,dots:!1,mouseDrag:!1,touchDrag:!1,items:1,animateOut:"fadeOut",animateIn:"fadeIn"}),$(".menu").on("click",(function(){$(this).children(".romb").toggleClass("active"),$(".modal-menu").toggleClass("active"),$("body").toggleClass("active"),$(".header").toggleClass("active")})),$(".modal-close2").on("click",(function(){$(".modal-menu").toggleClass("active"),$("body").removeClass("active")})),$(".count-dish").on("click",(function(){var e=parseInt($(this).html().replace(/[^\d]/g,""));$(".addBusket").attr("data-count",e),$(this).hasClass("active")||($(this).siblings().removeClass("active"),$(this).addClass("active"))})),$(".dish-item").on("click",(function(){var e=$(this),n=e.attr("id"),t=e.children(".food-img").attr("src"),r=e.children(".dish-title").find("h4").html(),i=e.children(".dish-title").find(".bold").html(),o=e.children(".dish-title").find(".gramms").html(),a=e.children(".dish-list-wrap").find(".busket").html();$(".modal-img").css("background-image","url("+t+")"),$(".modal-info h4").html(r),$(".modal-info h3").html(i),$(".info-dish .price").html(a),$(".info-dish .weight").html(o+"g"),$(".small-img").css("background-image","url("+t+")"),$(".addbusket-modal .small-title").find(".kind").html(r),$(".addbusket-modal .small-title").find(".name").html(i),$(".addBusket").attr("data-product",n),$(".dish-overlay").css("visibility","visible"),$("body").addClass("active")})),$(".modal-close").on("click",(function(){$(".dish-overlay").css("visibility","hidden"),$(".order-overlay").css("visibility","hidden"),$("body").removeClass("active")})),$(".modal-close3").on("click",(function(){$(".item-in-busket").css("display","none"),d.renderOrder()})),$(".addBusket").on("click",(function(e){return d.creatOrder(e)})),$(".inbusket").on("click",(function(){$(this).css("display","none"),$(".item-in-busket").css("display","flex")})),$(".contine").on("click",(function(){$(".item-in-busket").css("display","none"),$(".order-overlay").css("visibility","visible"),$("body").addClass("active")})),$(".burger").on("click",(function(){$(".header").toggleClass("active"),$("body").toggleClass("active")})),$(".salat_menu").on("click",(function(){$(".popular-dishes .tabs .salat_menu").addClass("active").siblings().removeClass("active")}))})),$(document).mouseup((function(e){var n=$(".modal-menu, .menu , .romb");n.is(e.target)||0!==n.has(e.target).length||(n.removeClass("active"),$("body").removeClass("active"))})),$(document).on("click",(function(e){var n=$(".modal-content, .item-in-busket"),t=$(".dish-item, .contine, .inbusket, .dlt-item");e.target.classList.contains("dlt-item")||e.target.classList.contains("plus")||e.target.classList.contains("minus")||t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||($(".dish-overlay").css("visibility","hidden"),$(".order-overlay").css("visibility","hidden"),$(".item-in-busket").css("display","none"),d.renderOrder())})),$(window).resize((function(){}))}]);