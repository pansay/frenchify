!function(e){function r(n){if(t[n])return t[n].exports;var s=t[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";angular.module("frenchify",[]).constant("texts",t(1)).service("showdown",[t(2).Converter]).constant("frenchify",t(3)).constant("rules",t(4)).constant("rules_langs",{fr:t(5),en:t(6)}).controller("MainController",t(7))},function(e,r){e.exports={title:"Frenchify",source:"source",from:"from",html:"html output",rendered:"rendered output",nolang:"no language",lang:{fr:"frenchify",en:"englishify"},helpers:"helpers",markdown:"markdown to html",convert:"convert"}},function(e,r,t){var n;/*! showdown 19-10-2015 */
(function(){function s(e){"use strict";var r={omitExtraWLInCodeBlocks:{"default":!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{"default":!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{"default":!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{"default":!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{"default":!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{"default":!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{"default":!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{"default":!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{"default":!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{"default":!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{"default":!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{"default":!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{"default":!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n]["default"]);return t}function a(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",n={valid:!0,error:""};i.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var a=t+" sub-extension "+s+": ",o=e[s];if("object"!=typeof o)return n.valid=!1,n.error=a+"must be an object, but "+typeof o+" given",n;if(!i.helper.isString(o.type))return n.valid=!1,n.error=a+'property "type" must be a string, but '+typeof o.type+" given",n;var c=o.type=o.type.toLowerCase();if("language"===c&&(c=o.type="lang"),"html"===c&&(c=o.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return n.valid=!1,n.error=a+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',n;if("listener"===c){if(i.helper.isUndefined(o.listeners))return n.valid=!1,n.error=a+'. Extensions of type "listener" must have a property called "listeners"',n}else if(i.helper.isUndefined(o.filter)&&i.helper.isUndefined(o.regex))return n.valid=!1,n.error=a+c+' extensions must define either a "regex" property or a "filter" method',n;if(o.listeners){if("object"!=typeof o.listeners)return n.valid=!1,n.error=a+'"listeners" property must be an object but '+typeof o.listeners+" given",n;for(var u in o.listeners)if(o.listeners.hasOwnProperty(u)&&"function"!=typeof o.listeners[u])return n.valid=!1,n.error=a+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+typeof o.listeners[u]+" given",n}if(o.filter){if("function"!=typeof o.filter)return n.valid=!1,n.error=a+'"filter" must be a function, but '+typeof o.filter+" given",n}else if(o.regex){if(i.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!o.regex instanceof RegExp)return n.valid=!1,n.error=a+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",n;if(i.helper.isUndefined(o.replace))return n.valid=!1,n.error=a+'"regex" extensions must implement a replace string or function',n}}return n}function o(e,r){"use strict";var t=r.charCodeAt(0);return"~E"+t+"E"}var i={},c={},u={},l=s(!0),p={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:s(!0)};i.helper={},i.extensions={},i.setOption=function(e,r){"use strict";return l[e]=r,this},i.getOption=function(e){"use strict";return l[e]},i.getOptions=function(){"use strict";return l},i.resetOptions=function(){"use strict";l=s(!0)},i.setFlavor=function(e){"use strict";if(p.hasOwnProperty(e)){var r=p[e];for(var t in r)r.hasOwnProperty(t)&&(l[t]=r[t])}},i.getDefaultOptions=function(e){"use strict";return s(e)},i.subParser=function(e,r){"use strict";if(i.helper.isString(e)){if("undefined"==typeof r){if(c.hasOwnProperty(e))return c[e];throw Error("SubParser named "+e+" not registered!")}c[e]=r}},i.extension=function(e,r){"use strict";if(!i.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=i.helper.stdExtName(e),i.helper.isUndefined(r)){if(!u.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return u[e]}"function"==typeof r&&(r=r()),i.helper.isArray(r)||(r=[r]);var t=a(r,e);if(!t.valid)throw Error(t.error);u[e]=r},i.getAllExtensions=function(){"use strict";return u},i.removeExtension=function(e){"use strict";delete u[e]},i.resetExtensions=function(){"use strict";u={}},i.validateExtension=function(e){"use strict";var r=a(e,null);return!!r.valid||(console.warn(r.error),!1)},i.hasOwnProperty("helper")||(i.helper={}),i.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},i.helper.forEach=function(e,r){"use strict";if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},i.helper.isArray=function(e){"use strict";return e.constructor===Array},i.helper.isUndefined=function(e){"use strict";return"undefined"==typeof e},i.helper.stdExtName=function(e){"use strict";return e.replace(/[_-]||\s/g,"").toLowerCase()},i.helper.escapeCharactersCallback=o,i.helper.escapeCharacters=function(e,r,t){"use strict";var n="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";t&&(n="\\\\"+n);var s=new RegExp(n,"g");return e=e.replace(s,o)},i.helper.matchRecursiveRegExp=function(e,r,t,n){"use strict";var s,a,o,i,c,u=n||"",l=u.indexOf("g")>-1,p=new RegExp(r+"|"+t,u),f=new RegExp(r,u.replace(/g/g,"")),h=[];do for(s=0;o=p.exec(e);)if(f.test(o[0]))s++||(i=o[0],a=p.lastIndex);else if(s&&!--s){c=o[0];var d=e.slice(a,o.index);if(h.push([i+d+c,d]),!l)return h}while(s&&(p.lastIndex=a));return h},i.helper.isUndefined(console)&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),i.Converter=function(e){"use strict";function r(){e=e||{};for(var r in l)l.hasOwnProperty(r)&&(o[r]=l[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(var n in e)e.hasOwnProperty(n)&&(o[n]=e[n]);o.extensions&&i.helper.forEach(o.extensions,t)}function t(e,r){if(r=r||null,i.helper.isString(e)){if(e=i.helper.stdExtName(e),r=e,i.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void n(i.extensions[e],e);if(i.helper.isUndefined(u[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=u[e]}"function"==typeof e&&(e=e()),i.helper.isArray(e)||(e=[e]);var t=a(e,r);if(!t.valid)throw Error(t.error);for(var o=0;o<e.length;++o){switch(e[o].type){case"lang":c.push(e[o]);break;case"output":f.push(e[o])}if(e[o].hasOwnProperty(h))for(var l in e[o].listeners)e[o].listeners.hasOwnProperty(l)&&s(l,e[o].listeners[l])}}function n(e,r){"function"==typeof e&&(e=e(new i.Converter)),i.helper.isArray(e)||(e=[e]);var t=a(e,r);if(!t.valid)throw Error(t.error);for(var n=0;n<e.length;++n)switch(e[n].type){case"lang":c.push(e[n]);break;case"output":f.push(e[n]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function s(e,r){if(!i.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");h.hasOwnProperty(e)||(h[e]=[]),h[e].push(r)}var o={},c=[],f=[],h={};r(),this._dispatch=function(e,r,t){if(h.hasOwnProperty(e))for(var n=0;n<h[e].length;++n){var s=h[e][n](e,r,this,t);s&&"undefined"!=typeof s&&(r=s)}return r},this.listen=function(e,r){return s(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:c,outputModifiers:f,converter:this};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e="\n\n"+e+"\n\n",e=i.subParser("detab")(e,o,r),e=i.subParser("stripBlankLines")(e,o,r),i.helper.forEach(c,function(t){e=i.subParser("runExtension")(t,e,o,r)}),e=i.subParser("githubCodeBlocks")(e,o,r),e=i.subParser("hashHTMLBlocks")(e,o,r),e=i.subParser("hashHTMLSpans")(e,o,r),e=i.subParser("stripLinkDefinitions")(e,o,r),e=i.subParser("blockGamut")(e,o,r),e=i.subParser("unhashHTMLSpans")(e,o,r),e=i.subParser("unescapeSpecialChars")(e,o,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),i.helper.forEach(f,function(t){e=i.subParser("runExtension")(t,e,o,r)}),e},this.setOption=function(e,r){o[e]=r},this.getOption=function(e){return o[e]},this.getOptions=function(){return o},this.addExtension=function(e,r){r=r||null,t(e,r)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(p.hasOwnProperty(e)){var r=p[e];for(var t in r)r.hasOwnProperty(t)&&(o[t]=r[t])}},this.removeExtension=function(e){i.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<c.length;++n)c[n]===t&&c[n].splice(n,1);for(var s=0;s<f.length;++n)f[s]===t&&f[s].splice(n,1)}},this.getAllExtensions=function(){return{language:c,output:f}}},i.subParser("anchors",function(e,r,t){"use strict";e=t.converter._dispatch("anchors.before",e,r);var n=function(e,r,n,s,a,o,c,u){i.helper.isUndefined(u)&&(u=""),e=r;var l=n,p=s.toLowerCase(),f=a,h=u;if(!f)if(p||(p=l.toLowerCase().replace(/ ?\n/g," ")),f="#"+p,i.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;f=""}else f=t.gUrls[p],i.helper.isUndefined(t.gTitles[p])||(h=t.gTitles[p]);f=i.helper.escapeCharacters(f,"*_",!1);var d='<a href="'+f+'"';return""!==h&&null!==h&&(h=h.replace(/"/g,"&quot;"),h=i.helper.escapeCharacters(h,"*_",!1),d+=' title="'+h+'"'),d+=">"+l+"</a>"};return e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r)}),i.subParser("autoLinks",function(e,r,t){"use strict";function n(e,r){var t=i.subParser("unescapeSpecialChars")(r);return i.subParser("encodeEmailAddress")(t)}e=t.converter._dispatch("autoLinks.before",e,r);var s=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,a=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,o=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=e.replace(a,'<a href="$1">$1</a>'),e=e.replace(c,n),r.simplifiedAutoLink&&(e=e.replace(s,'<a href="$1">$1</a>'),e=e.replace(o,n)),e=t.converter._dispatch("autoLinks.after",e,r)}),i.subParser("blockGamut",function(e,r,t){"use strict";e=t.converter._dispatch("blockGamut.before",e,r),e=i.subParser("blockQuotes")(e,r,t),e=i.subParser("headers")(e,r,t);var n=i.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=i.subParser("lists")(e,r,t),e=i.subParser("codeBlocks")(e,r,t),e=i.subParser("tables")(e,r,t),e=i.subParser("hashHTMLBlocks")(e,r,t),e=i.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r)}),i.subParser("blockQuotes",function(e,r,t){"use strict";return e=t.converter._dispatch("blockQuotes.before",e,r),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var s=n;return s=s.replace(/^[ \t]*>[ \t]?/gm,"~0"),s=s.replace(/~0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=i.subParser("githubCodeBlocks")(s,r,t),s=i.subParser("blockGamut")(s,r,t),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),i.subParser("hashBlock")("<blockquote>\n"+s+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r)}),i.subParser("codeBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("codeBlocks.before",e,r),e+="~0";var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=e.replace(n,function(e,n,s){var a=n,o=s,c="\n";return a=i.subParser("outdent")(a),a=i.subParser("encodeCode")(a),a=i.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(c=""),a="<pre><code>"+a+c+"</code></pre>",i.subParser("hashBlock")(a,r,t)+o}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r)}),i.subParser("codeSpans",function(e,r,t){"use strict";return e=t.converter._dispatch("codeSpans.before",e,r),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var s=n;return s=s.replace(/^([ \t]*)/g,""),s=s.replace(/[ \t]*$/g,""),s=i.subParser("encodeCode")(s),r+"<code>"+s+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r)}),i.subParser("detab",function(e){"use strict";return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),i.subParser("encodeAmpsAndAngles",function(e){"use strict";return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),i.subParser("encodeBackslashEscapes",function(e){"use strict";return e=e.replace(/\\(\\)/g,i.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,i.helper.escapeCharactersCallback)}),i.subParser("encodeCode",function(e){"use strict";return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=i.helper.escapeCharacters(e,"*_{}[]\\",!1)}),i.subParser("encodeEmailAddress",function(e){"use strict";var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),i.subParser("escapeSpecialCharsWithinTagAttributes",function(e){"use strict";var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=i.helper.escapeCharacters(r,"\\`*_",!1)})}),i.subParser("githubCodeBlocks",function(e,r,t){"use strict";return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,s){var a=r.omitExtraWLInCodeBlocks?"":"\n";return s=i.subParser("encodeCode")(s),s=i.subParser("detab")(s),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+s+a+"</code></pre>",i.subParser("hashBlock")(s,r,t)}),e=e.replace(/~0/,""),e=t.converter._dispatch("githubCodeBlocks.after",e,r)):e}),i.subParser("hashBlock",function(e,r,t){"use strict";return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),i.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),i.subParser("hashHTMLBlocks",function(e,r,t){"use strict";return e=e.replace(/\n/g,"\n\n"),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,i.subParser("hashElement")(e,r,t)),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside|address|audio|canvas|figure|hgroup|output|video)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,i.subParser("hashElement")(e,r,t)),e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,i.subParser("hashElement")(e,r,t)),e=e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,i.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,i.subParser("hashElement")(e,r,t)),e=e.replace(/\n\n/g,"\n")}),i.subParser("hashHTMLSpans",function(e,r,t){"use strict";for(var n=i.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),s=0;s<n.length;++s)e=e.replace(n[s][0],"~L"+(t.gHtmlSpans.push(n[s][0])-1)+"L");return e}),i.subParser("unhashHTMLSpans",function(e,r,t){"use strict";for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),i.subParser("headers",function(e,r,t){"use strict";function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),s===!0&&(s="section"),i.helper.isString(s)?s+r:r}e=t.converter._dispatch("headers.before",e,r);var s=r.prefixHeaderId,a=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),o=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,c=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(o,function(e,s){var o=i.subParser("spanGamut")(s,r,t),c=r.noHeaderId?"":' id="'+n(s)+'"',u=a,l="<h"+u+c+">"+o+"</h"+u+">";return i.subParser("hashBlock")(l,r,t)}),e=e.replace(c,function(e,s){var o=i.subParser("spanGamut")(s,r,t),c=r.noHeaderId?"":' id="'+n(s)+'"',u=a+1,l="<h"+u+c+">"+o+"</h"+u+">";return i.subParser("hashBlock")(l,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,s,o){var c=i.subParser("spanGamut")(o,r,t),u=r.noHeaderId?"":' id="'+n(o)+'"',l=a-1+s.length,p="<h"+l+u+">"+c+"</h"+l+">";return i.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r)}),i.subParser("images",function(e,r,t){"use strict";function n(e,r,n,s,a,o,c,u){var l=t.gUrls,p=t.gTitles,f=t.gDimensions;if(n=n.toLowerCase(),u||(u=""),""===s||null===s){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),s="#"+n,i.helper.isUndefined(l[n]))return e;s=l[n],i.helper.isUndefined(p[n])||(u=p[n]),i.helper.isUndefined(f[n])||(a=f[n].width,o=f[n].height)}r=r.replace(/"/g,"&quot;"),r=i.helper.escapeCharacters(r,"*_",!1),s=i.helper.escapeCharacters(s,"*_",!1);var h='<img src="'+s+'" alt="'+r+'"';return u&&(u=u.replace(/"/g,"&quot;"),u=i.helper.escapeCharacters(u,"*_",!1),h+=' title="'+u+'"'),a&&o&&(a="*"===a?"auto":a,o="*"===o?"auto":o,h+=' width="'+a+'"',h+=' height="'+o+'"'),h+=" />"}e=t.converter._dispatch("images.before",e,r);var s=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,a=/!\[(.*?)][ ]?(?:\n[ ]*)?\[(.*?)]()()()()()/g;return e=e.replace(a,n),e=e.replace(s,n),e=t.converter._dispatch("images.after",e,r)}),i.subParser("italicsAndBold",function(e,r,t){"use strict";return e=t.converter._dispatch("italicsAndBold.before",e,r),r.literalMidWordUnderscores?(e=e.replace(/(^|\s|>|\b)__(?=\S)([^]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>"),e=e.replace(/(^|\s|>|\b)_(?=\S)([^]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>"),e=e.replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>"),e=e.replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),e=e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")),e=t.converter._dispatch("italicsAndBold.after",e,r)}),i.subParser("lists",function(e,r,t){"use strict";function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var s=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,a=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(s,function(e,n,s,o,c,u,l){l=l&&""!==l.trim();var p=i.subParser("outdent")(c,r,t),f="";return u&&r.tasklists&&(f=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return l&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=i.subParser("githubCodeBlocks")(p,r,t),p=i.subParser("blockGamut")(p,r,t)):(p=i.subParser("lists")(p,r,t),p=p.replace(/\n$/,""),p=a?i.subParser("paragraphs")(p,r,t):i.subParser("spanGamut")(p,r,t)),p="\n<li"+f+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function s(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(e.search(s)!==-1){!function c(e){var a=e.search(s);a!==-1?(o+="\n\n<"+r+">"+n(e.slice(0,a),!!t)+"</"+r+">\n\n",r="ul"===r?"ol":"ul",s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,c(e.slice(a))):o+="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r),e+="~0";var a=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(a,function(e,r,t){var n=t.search(/[*+-]/g)>-1?"ul":"ol";return s(r,n,!0)}):(a=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(a,function(e,r,t,n){var a=n.search(/[*+-]/g)>-1?"ul":"ol";return s(t,a)})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r)}),i.subParser("outdent",function(e){"use strict";return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),i.subParser("paragraphs",function(e,r,t){"use strict";e=t.converter._dispatch("paragraphs.before",e,r),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),s=[],a=n.length,o=0;o<a;o++){var c=n[o];c.search(/~K(\d+)K/g)>=0?s.push(c):c.search(/\S/)>=0&&(c=i.subParser("spanGamut")(c,r,t),c=c.replace(/^([ \t]*)/g,"<p>"),c+="</p>",s.push(c))}for(a=s.length,o=0;o<a;o++)for(;s[o].search(/~K(\d+)K/)>=0;){var u=t.gHtmlBlocks[RegExp.$1];u=u.replace(/\$/g,"$$$$"),s[o]=s[o].replace(/~K\d+K/,u)}return e=t.converter._dispatch("paragraphs.after",e,r),s.join("\n\n")}),i.subParser("runExtension",function(e,r,t,n){"use strict";if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),i.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r),e=i.subParser("codeSpans")(e,r,t),e=i.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=i.subParser("encodeBackslashEscapes")(e,r,t),e=i.subParser("images")(e,r,t),e=i.subParser("anchors")(e,r,t),e=i.subParser("autoLinks")(e,r,t),e=i.subParser("encodeAmpsAndAngles")(e,r,t),e=i.subParser("italicsAndBold")(e,r,t),e=i.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r)}),i.subParser("strikethrough",function(e,r,t){"use strict";return r.strikethrough&&(e=t.converter._dispatch("strikethrough.before",e,r),e=e.replace(/(?:~T){2}([^~]+)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r)),e}),i.subParser("stripBlankLines",function(e){"use strict";return e.replace(/^[ \t]+$/gm,"")}),i.subParser("stripLinkDefinitions",function(e,r,t){"use strict";var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,s,a,o,c,u){return n=n.toLowerCase(),t.gUrls[n]=i.subParser("encodeAmpsAndAngles")(s),c?c+u:(u&&(t.gTitles[n]=u.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&a&&o&&(t.gDimensions[n]={width:a,height:o}),"")}),e=e.replace(/~0/,"")}),i.subParser("tables",function(e,r,t){"use strict";var n=function(){var e,n={};return n.th=function(e,n){var s="";return e=e.trim(),""===e?"":(r.tableHeaderId&&(s=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=i.subParser("spanGamut")(e,r,t),n=n&&""!==n.trim()?' style="'+n+'"':"","<th"+s+n+">"+e+"</th>")},n.td=function(e,n){var s=i.subParser("spanGamut")(e.trim(),r,t);return n=n&&""!==n.trim()?' style="'+n+'"':"","<td"+n+">"+s+"</td>"},n.ths=function(){var e="",r=0,t=[].slice.apply(arguments[0]),s=[].slice.apply(arguments[1]);for(r;r<t.length;r+=1)e+=n.th(t[r],s[r])+"\n";return e},n.tds=function(){var e="",r=0,t=[].slice.apply(arguments[0]),s=[].slice.apply(arguments[1]);for(r;r<t.length;r+=1)e+=n.td(t[r],s[r])+"\n";return e},n.thead=function(){var e,r=[].slice.apply(arguments[0]),t=[].slice.apply(arguments[1]);return e="<thead>\n",e+="<tr>\n",e+=n.ths.apply(this,[r,t]),e+="</tr>\n",e+="</thead>\n"},n.tr=function(){var e,r=[].slice.apply(arguments[0]),t=[].slice.apply(arguments[1]);return e="<tr>\n",e+=n.tds.apply(this,[r,t]),e+="</tr>\n"},e=function(e){var r,t,s=0,a=e.split("\n"),o=[];for(s;s<a.length;s+=1){if(r=a[s],r.trim().match(/^[|].*[|]$/)){r=r.trim();var i=[],c=a[s+1].trim(),u=[],l=0;if(c.match(/^[|][-=|: ]+[|]$/))for(u=c.substring(1,c.length-1).split("|"),l=0;l<u.length;++l)u[l]=u[l].trim(),u[l].match(/^[:][-=| ]+[:]$/)?u[l]="text-align:center;":u[l].match(/^[-=| ]+[:]$/)?u[l]="text-align:right;":u[l].match(/^[:][-=| ]+$/)?u[l]="text-align:left;":u[l]="";if(i.push("<table>"),t=r.substring(1,r.length-1).split("|"),0===u.length)for(l=0;l<t.length;++l)u.push("text-align:left");if(i.push(n.thead.apply(this,[t,u])),r=a[++s],r.trim().match(/^[|][-=|: ]+[|]$/)){for(r=a[++s],i.push("<tbody>");r.trim().match(/^[|].*[|]$/);)r=r.trim(),i.push(n.tr.apply(this,[r.substring(1,r.length-1).split("|"),u])),r=a[++s];i.push("</tbody>"),i.push("</table>"),o.push(i.join("\n"));continue}r=a[--s]}o.push(r)}return o.join("\n")},{parse:e}};if(r.tables){e=t.converter._dispatch("tables.before",e,r);var s=n();e=s.parse(e),e=t.converter._dispatch("tables.after",e,r)}return e}),i.subParser("unescapeSpecialChars",function(e){"use strict";return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})});"undefined"!=typeof e&&e.exports?e.exports=i:(n=function(){"use strict";return i}.call(r,t,r,e),!(void 0!==n&&(e.exports=n)))}).call(this)},function(e,r){"use strict";e.exports=function(e,r){return r.forEach(function(r){e=e.replace(new RegExp(r.from,"gmi"),r.to)}),console.log(e),e}},function(e,r){e.exports=[{from:"--",to:"—"},{from:"'",to:"’"},{from:"[ ]{2,}",to:" "},{from:"(?!^)\\((\\d*)\\)",to:'<sup><a href="#footnote-$1" id="fn-ref-$1">$1</a></sup>'},{from:"^\\((\\d*)\\)",to:'<sup><a href="#fn-ref-$1" id="footnote-$1">$1</a></sup>'}]},function(e,r){e.exports=[{from:'([^=])"([^=]*?)"',to:"$1«&nbsp;$2&nbsp;»"},{from:" :",to:"&nbsp;:"},{from:" ([;|?|!])",to:"&#8239;$1"}]},function(e,r){e.exports=[{from:'([^=])"([^=]*?)"',to:"$1“$2”"}]},function(e,r){"use strict";e.exports=["$scope","$sce","showdown","texts","rules","rules_langs","frenchify",function(e,r,t,n,s,a,o){function i(e,r,n,i){return i&&(e=o(e,a[i])),n&&(e=o(e,s)),r&&(e=t.makeHtml(e)),e}e.txt=n,e.convert=function(){e.convert.html=i(e.convert.from,e.convert.markdown,e.convert.helpers,e.convert.lang),e.convert.html=r.trustAsHtml(e.convert.html)}}]}]);