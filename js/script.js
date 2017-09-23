var Options={navbarOffset:300,navbarTolerance:5};!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(t.AnchorJS=e(),t.anchors=new t.AnchorJS)}(this,function(){"use strict";return function(t){function e(t){t.icon=t.hasOwnProperty("icon")?t.icon:"",t.visible=t.hasOwnProperty("visible")?t.visible:"hover",t.placement=t.hasOwnProperty("placement")?t.placement:"right",t.class=t.hasOwnProperty("class")?t.class:"",t.truncate=t.hasOwnProperty("truncate")?Math.floor(t.truncate):64}function A(t){var e;if("string"==typeof t||t instanceof String)e=[].slice.call(document.querySelectorAll(t));else{if(!(Array.isArray(t)||t instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(t)}return e}function n(){if(null===document.head.querySelector("style.anchorjs")){var t,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(t=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(e):document.head.insertBefore(e,t),e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",e.sheet.cssRules.length),e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",e.sheet.cssRules.length),e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",e.sheet.cssRules.length),e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',e.sheet.cssRules.length)}}this.options=t||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(t){var o,i,s,r,a,c,l,h,d,u,m,f,p=[];if(e(this.options),"touch"===(f=this.options.visible)&&(f=this.isTouchDevice()?"always":"hover"),t||(t="h2, h3, h4, h5, h6"),0===(o=A(t)).length)return this;for(n(),i=document.querySelectorAll("[id]"),s=[].map.call(i,function(t){return t.id}),a=0;a<o.length;a++)if(this.hasAnchorJSLink(o[a]))p.push(a);else{if(o[a].hasAttribute("id"))r=o[a].getAttribute("id");else if(o[a].hasAttribute("data-anchor-id"))r=o[a].getAttribute("data-anchor-id");else{d=h=this.urlify(o[a].textContent),l=0;do{void 0!==c&&(d=h+"-"+l),c=s.indexOf(d),l+=1}while(-1!==c);c=void 0,s.push(d),o[a].setAttribute("id",d),r=d}u=r.replace(/-/g," "),(m=document.createElement("a")).className="anchorjs-link "+this.options.class,m.href="#"+r,m.setAttribute("aria-label","Anchor link for: "+u),m.setAttribute("data-anchorjs-icon",this.options.icon),"always"===f&&(m.style.opacity="1"),""===this.options.icon&&(m.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(m.style.lineHeight="inherit")),"left"===this.options.placement?(m.style.position="absolute",m.style.marginLeft="-1em",m.style.paddingRight="0.5em",o[a].insertBefore(m,o[a].firstChild)):(m.style.paddingLeft="0.375em",o[a].appendChild(m))}for(a=0;a<p.length;a++)o.splice(p[a]-a,1);return this.elements=this.elements.concat(o),this},this.remove=function(t){for(var e,n,o=A(t),i=0;i<o.length;i++)(n=o[i].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(o[i]))&&this.elements.splice(e,1),o[i].removeChild(n));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(t){var A=/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\]/g;return this.options.truncate||e(this.options),t.trim().replace(/\'/gi,"").replace(A,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(t){var e=t.firstChild&&(" "+t.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,A=t.lastChild&&(" "+t.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||A||!1}}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Headroom=e()}(this,function(){"use strict";function t(t){this.callback=t,this.ticking=!1}function e(t){return t&&"undefined"!=typeof window&&(t===window||t.nodeType)}function A(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var n,o,i=t||{};for(o=1;o<arguments.length;o++){var s=arguments[o]||{};for(n in s)"object"!=typeof i[n]||e(i[n])?i[n]=i[n]||s[n]:i[n]=A(i[n],s[n])}return i}function n(t){return t===Object(t)?t:{down:t,up:t}}function o(t,e){e=A(e,o.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=n(e.tolerance),this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}var i={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,t.prototype={constructor:t,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){if(o.cutsTheMustard)return this.debouncer=new t(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!1,this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.notTop,t.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,A=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||A},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var A=t>this.lastKnownScrollY,n=t>=this.offset;return A&&n&&e},shouldPin:function(t,e){var A=t<this.lastKnownScrollY,n=t<=this.offset;return A&&e||n},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",A=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,A)?this.unpin():this.shouldPin(t,A)&&this.pin(),this.lastKnownScrollY=t)}},o.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},o.cutsTheMustard=void 0!==i&&i.rAF&&i.bind&&i.classList,o});var ScrollPosStyler=function(t,e){"use strict";function A(){o=e.pageYOffset;for(var t=[],A=0;a[A];++A){var n=a[A],i=n.getAttribute(h)||s,r=n.classList.contains(c);r&&o>i?t.push({element:n,addClass:l,removeClass:c}):!r&&o<=i&&t.push({element:n,addClass:c,removeClass:l})}return t}function n(t){for(var e=0;t[e];++e){var A=t[e];A.element.classList.add(A.addClass),A.element.classList.remove(A.removeClass)}i=!1}var o=0,i=!1,s=1,r="sps",a=t.getElementsByClassName(r),c="sps--abv",l="sps--blw",h="data-sps-offset",d={init:function(o){i=!0,o&&(o.spsClass&&(r=o.spsClass,a=t.getElementsByClassName(r)),s=o.scrollOffsetY||s,c=o.classAbove||c,l=o.classBelow||l,h=o.offsetTag||h);var d=A();d.length>0?e.requestAnimationFrame(function(){n(d)}):i=!1}};return t.addEventListener("DOMContentLoaded",function(){e.setTimeout(d.init,1)}),e.addEventListener("scroll",function(){if(!i){var t=A();t.length>0&&(i=!0,e.requestAnimationFrame(function(){n(t)}))}}),d}(document,window);"loading"!==document.readyState?window.setTimeout(function(){anchors.add(".anchored")},1):document.addEventListener("DOMContentLoaded",function(){anchors.add(".anchored")}),function(){function t(t){for(var A=0;t[A];++A)t[A].addEventListener("click",function(){e.lastKnownScrollY=e.getScrollerHeight(),window.requestAnimationFrame(function(){e.pin()})})}var e=new Headroom(document.querySelector(".js-nvbr"),{offset:Options.navbarOffset,tolerance:Options.navbarTolerance});e.init(),"loading"!==document.readyState?window.setTimeout(function(){t(document.getElementsByClassName("js-sdbr-itm")),t(document.getElementsByClassName("anchorjs-link"))},1):document.addEventListener("DOMContentLoaded",function(){t(document.getElementsByClassName("js-sdbr-itm")),t(document.getElementsByClassName("anchorjs-link"))})}();