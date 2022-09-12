(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(768),t.b),l=i()(a()),p=s()(d);l.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dirty-white:#f1f0f0;\n    --black-gradient: rgba(0, 0, 0, 0.6);\n    --font: font-family: 'Bitter', serif;\n    --font-style: 'Montserrat Subrayada', sans-serif;\n    --biege: #e1c699;\n    --border: 2px;\n\n}\n\na {\n    text-decoration: none;\n    text-transform: capitalize;\n}\n\nbutton {\n    border: none;\n    background: none;\n    font-size: 1rem;\n    letter-spacing: .2ch;\n    color:  var(--dirty-white);\n    text-transform: uppercase;\n}\n\n.nav {\n    display: flex;\n    gap: 3rem;\n    padding: 0 2.5rem 1rem;\n    font-size: 1rem;\n    background-color: var(--black-gradient);\n    width: 100vw;\n    justify-content: center;\n\n    border-bottom: var(--border) solid var(--biege);\n}\n\n/* Nav Links */\n\n.header p {\n    font-family: var(--font-style);\n    font-size: 2.5rem;\n    display: flex;\n    justify-content: center;\n    color: var(--dirty-white);\n    background-color: var(--black-gradient);\n    width: 100vw;\n\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-image: url("+p+");\n    background-attachment: fixed;\n    background-position: center center;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n/* Home Section */\n\n.home {\n    /* make the main content take all the space available */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1; \n    flex-direction: column;\n    align-items: center;\n\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--black-gradient);\n\n    gap: 1.5rem;\n}\n\n.menuBtn {\n    padding: 1rem;\n}\n\n.titleElement p {\n    font-family: 'Bitter', serif;\n    color: var(--biege);\n    font-size: 3.5rem;\n    font-weight: 500;\n}\n\nhr {\n    width: 250px;\n    border: 1px solid var(--biege);\n}\n\n.pContainer {\n    display: flex;\n    justify-content: center;\n    color: var(--dirty-white);\n    letter-spacing: .2ch;\n    width: 30vw;\n    text-align: center;\n}\n\n/* About Section */\n.aboutContainer {\n    display: flex;\n\n}\n.aboutP {\n    color: var(--biege);\n    font-family: 'Bitter', serif;\n}\n\n/* Menu Section */\n\n.menuSection {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(250px, 1fr));\n    height: 100%;\n}\n\n/* Footer Section */\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding: 1rem;\n\n    background-color: var(--black-gradient);\n    width: 100vw;\n    color: var(--dirty-white);\n    text-transform: uppercase;\n    border-top: 2px solid var(--biege);\n   \n}\n\n.footer p {\n    font-size: .8rem;\n    letter-spacing: .3ch;\n    font-family: sans-serif;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},768:(e,n,t)=>{e.exports=t.p+"0ca7527d03dca64b42ca.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("p"),a=document.createElement("p"),o=document.createElement("div"),i=document.createElement("button"),c=document.createElement("hr");return r.innerText="Kamusta?",i.innerText="Click Me!",a.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam deleniti eveniet cum id? Dolorum deserunt blanditiis tempora unde esse corporis accusantium, soluta cupiditate, aliquid numquam nobis! Illo, esse corporis!",n.append(r),t.append(a),e.append(n),e.append(c),e.append(t),o.append(i),e.append(o),n.classList.add("titleElement"),t.classList.add("pContainer"),e.classList.add("home"),i.classList.add("menuBtn"),e},v=[{name:"Sinigang na Baka with Banana",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor iste a nisi, fuga id dicta tempora pariatur. Dolor, ut tempore doloremque vitae minima possimus harum nemo aperiam explicabo ipsam atque.",price:"4$"},{name:"Crispy Tadyang (Beef)",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nostrum deleniti itaque culpa saepe ea, dicta velit earum dolor. Iusto fugit repudiandae quibusdam possimus officia? Quasi nam reiciendis dicta dolorem!",price:"7$"},{name:"Kare Kare with Ox Tail",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat labore tenetur eaque pariatur voluptatum unde! Repellendus officia voluptatibus ut perspiciatis quisquam dolor. Expedita ex eligendi ratione sint deleniti at dolore.",price:"5$"}],h=()=>{const e=document.createElement("div");return v.forEach((n=>{const t=document.createElement("p");t.innerText=`${n.name}`,e.append(t)})),e},b=()=>{const e=document.createElement("div"),n=document.createElement("button");n.innerText="Home";const t=document.createElement("button");t.innerText="Menu";const r=document.createElement("button");return r.innerText="About",t.addEventListener("click",g()),e.append(n),e.append(t),e.append(r),e.classList.add("nav"),e},y=()=>{const e=document.createElement("div"),n=document.createElement("p");return n.innerText="All Time Hapag Chupaan",e.append(n),e.classList.add("header"),e},x=()=>{const e=document.createElement("div"),n=document.createElement("p");return n.textContent=`Copyright © ${(new Date).getFullYear()} bomszx`,e.append(n),e.classList.add("footer"),e},w=()=>{content.append(y()),content.append(b())},E=()=>{content.append(x())},T=e=>{"HOME"==e.target.innerText&&(content.innerHTML="",w(),content.append(g()),E()),"MENU"==e.target.innerText&&(content.innerHTML="",w(),content.append(h()),E()),"ABOUT"==e.target.innerText&&(content.innerHTML="",w(),content.append((()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("p");return r.innerText="Come find us!",n.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.129687706838!2d120.96377329222749!3d14.626469275848427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b59322808915%3A0xbaceda73259cf52c!2sBUILDING%2012%20URBAN%20DECA%20HOMES!5e0!3m2!1sen!2sph!4v1661790762613!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',t.append(r),e.append(t),e.append(n),r.classList.add("aboutP"),e.classList.add("home"),e})()),E())};(()=>{const e=document.getElementById("content");document.addEventListener("click",T),e.append(y()),e.append(b()),e.append(h()),e.append(x())})()})()})();