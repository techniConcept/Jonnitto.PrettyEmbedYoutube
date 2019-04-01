/*!
 * Jonnitto.PrettyEmbedYoutube - created by Jon Uhlmann
 * @build 2019-04-01 20:45
 * @link https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube
 */
!function(){"use strict";var e,t=(function(e){!function(){var t,n=0,o=0,i={},r={};function a(e,o,i){return"_root"==o?i:e!==i?function(e){return t||(t=e.matches?e.matches:e.webkitMatchesSelector?e.webkitMatchesSelector:e.mozMatchesSelector?e.mozMatchesSelector:e.msMatchesSelector?e.msMatchesSelector:e.oMatchesSelector?e.oMatchesSelector:f.matchesSelector)}(e).call(e,o)?e:e.parentNode?(n++,a(e.parentNode,o,i)):void 0:void 0}function c(e,t,n,o){i[e.id]||(i[e.id]={}),i[e.id][t]||(i[e.id][t]={}),i[e.id][t][n]||(i[e.id][t][n]=[]),i[e.id][t][n].push(o)}function u(e,t,n,o){if(i[e.id])if(t)if(o||n)if(o){if(i[e.id][t][n])for(var r=0;r<i[e.id][t][n].length;r++)if(i[e.id][t][n][r]===o){i[e.id][t][n].splice(r,1);break}}else delete i[e.id][t][n];else i[e.id][t]={};else for(var a in i[e.id])i[e.id].hasOwnProperty(a)&&(i[e.id][a]={})}function d(e,t,o,d){if(this.element){e instanceof Array||(e=[e]),o||"function"!=typeof t||(o=t,t="_root");var l,s=this.id;for(l=0;l<e.length;l++)d?u(this,e[l],t,o):(i[s]&&i[s][e[l]]||f.addEvent(this,e[l],h(e[l])),c(this,e[l],t,o));return this}function h(e){return function(t){!function(e,t,o){if(i[e][o]){var c,u,d=t.target||t.srcElement,l={},s=0,h=0;for(c in n=0,i[e][o])i[e][o].hasOwnProperty(c)&&(u=a(d,c,r[e].element))&&f.matchesEvent(o,r[e].element,u,"_root"==c,t)&&(n++,i[e][o][c].match=u,l[n]=i[e][o][c]);for(t.stopPropagation=function(){t.cancelBubble=!0},s=0;s<=n;s++)if(l[s])for(h=0;h<l[s].length;h++){if(!1===l[s][h].call(l[s].match,t))return void f.cancel(t);if(t.cancelBubble)return}}}(s,t,e)}}}function f(e,t){if(!(this instanceof f)){for(var n in r)if(r[n].element===e)return r[n];return r[++o]=new f(e,o),r[o]}this.element=e,this.id=t}f.prototype.on=function(e,t,n){return d.call(this,e,t,n)},f.prototype.off=function(e,t,n){return d.call(this,e,t,n,!0)},f.matchesSelector=function(){},f.cancel=function(e){e.preventDefault(),e.stopPropagation()},f.addEvent=function(e,t,n){var o="blur"==t||"focus"==t;e.element.addEventListener(t,n,o)},f.matchesEvent=function(){return!0},e.exports&&(e.exports=f),window.Gator=f}()}(e={exports:{}},e.exports),e.exports);function n(e){var t=e.getAttribute("src");e.naturalHeight<=90&&e.naturalWidth<=120&&-1==t.indexOf("/default.jpg")&&(t=t.replace("mqdefault","default").replace("hqdefault","mqdefault").replace("sddefault","hqdefault").replace("maxresdefault","sddefault"),e.setAttribute("src",t),setTimeout(function(){e.onload=function(){n(e)}},10),setTimeout(function(){n(e)},5e3))}function o(e,t){e.forEach(function(e){document.addEventListener("Neos."+e,t,!1)})}window.prettyEmbedYoutubeFixPreview=function(e){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){void 0===e&&(e=document.querySelectorAll("img.embed-youtube-youtube-preview"));for(var t=e.length-1;t>=0;t--)n(e[t])}},t(window).on("load",function(){prettyEmbedYoutubeFixPreview()}),o(["NodeCreated","NodeSelected"],function(e){var t="Jonnitto.PrettyEmbedYoutube:YouTube";try{e.detail.element.attributes["data-node-_node-type"].value==t&&prettyEmbedYoutubeFixPreview()}catch(e){}try{var n=e.detail.node;("function"==typeof n.get&&n.get("nodeType")===t||"string"==typeof n.nodeType&&n.nodeType===t)&&prettyEmbedYoutubeFixPreview()}catch(e){}}),o(["PageLoaded","ContentModuleLoaded"],function(){prettyEmbedYoutubeFixPreview()})}();

//# sourceMappingURL=Backend.js.map
