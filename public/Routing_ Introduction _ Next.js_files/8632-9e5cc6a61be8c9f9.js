(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8632],{83946:function(t,e,u){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}u.d(e,{Z:function(){return r}})},66671:function(t,e,u){"use strict";u.d(e,{Z:function(){return R}});var r=u(12274),n=u(35077),D=u(83946),a=u(19013),o=u(13882);function i(t,e){(0,o.Z)(2,arguments);var u=(0,a.Z)(t).getTime(),r=(0,D.Z)(e);return new Date(u+r)}function c(t,e){(0,o.Z)(2,arguments);var u=(0,D.Z)(e);return i(t,-u)}function s(t,e){for(var u=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return u+r}var f={y:function(t,e){var u=t.getUTCFullYear(),r=u>0?u:1-u;return s("yy"===e?r%100:r,e.length)},M:function(t,e){var u=t.getUTCMonth();return"M"===e?String(u+1):s(u+1,2)},d:function(t,e){return s(t.getUTCDate(),e.length)},a:function(t,e){var u=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return u.toUpperCase();case"aaaaa":return u[0];default:return"am"===u?"a.m.":"p.m."}},h:function(t,e){return s(t.getUTCHours()%12||12,e.length)},H:function(t,e){return s(t.getUTCHours(),e.length)},m:function(t,e){return s(t.getUTCMinutes(),e.length)},s:function(t,e){return s(t.getUTCSeconds(),e.length)},S:function(t,e){var u=e.length,r=t.getUTCMilliseconds();return s(Math.floor(r*Math.pow(10,u-3)),e.length)}},l=864e5;function d(t){(0,o.Z)(1,arguments);var e=1,u=(0,a.Z)(t),r=u.getUTCDay(),n=(r<e?7:0)+r-e;return u.setUTCDate(u.getUTCDate()-n),u.setUTCHours(0,0,0,0),u}function h(t){(0,o.Z)(1,arguments);var e=(0,a.Z)(t),u=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(u+1,0,4),r.setUTCHours(0,0,0,0);var n=d(r),D=new Date(0);D.setUTCFullYear(u,0,4),D.setUTCHours(0,0,0,0);var i=d(D);return e.getTime()>=n.getTime()?u+1:e.getTime()>=i.getTime()?u:u-1}function F(t){(0,o.Z)(1,arguments);var e=h(t),u=new Date(0);u.setUTCFullYear(e,0,4),u.setUTCHours(0,0,0,0);var r=d(u);return r}var E=6048e5;function C(t,e){(0,o.Z)(1,arguments);var u=e||{},r=u.locale,n=r&&r.options&&r.options.weekStartsOn,i=null==n?0:(0,D.Z)(n),c=null==u.weekStartsOn?i:(0,D.Z)(u.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,a.Z)(t),f=s.getUTCDay(),l=(f<c?7:0)+f-c;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function g(t,e){(0,o.Z)(1,arguments);var u=(0,a.Z)(t,e),r=u.getUTCFullYear(),n=e||{},i=n.locale,c=i&&i.options&&i.options.firstWeekContainsDate,s=null==c?1:(0,D.Z)(c),f=null==n.firstWeekContainsDate?s:(0,D.Z)(n.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,f),l.setUTCHours(0,0,0,0);var d=C(l,e),h=new Date(0);h.setUTCFullYear(r,0,f),h.setUTCHours(0,0,0,0);var F=C(h,e);return u.getTime()>=d.getTime()?r+1:u.getTime()>=F.getTime()?r:r-1}function w(t,e){(0,o.Z)(1,arguments);var u=e||{},r=u.locale,n=r&&r.options&&r.options.firstWeekContainsDate,a=null==n?1:(0,D.Z)(n),i=null==u.firstWeekContainsDate?a:(0,D.Z)(u.firstWeekContainsDate),c=g(t,e),s=new Date(0);s.setUTCFullYear(c,0,i),s.setUTCHours(0,0,0,0);var f=C(s,e);return f}var m=6048e5;var v="midnight",p="noon",b="morning",y="afternoon",T="evening",U="night",x={G:function(t,e,u){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return u.era(r,{width:"abbreviated"});case"GGGGG":return u.era(r,{width:"narrow"});default:return u.era(r,{width:"wide"})}},y:function(t,e,u){if("yo"===e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return u.ordinalNumber(n,{unit:"year"})}return f.y(t,e)},Y:function(t,e,u,r){var n=g(t,r),D=n>0?n:1-n;return"YY"===e?s(D%100,2):"Yo"===e?u.ordinalNumber(D,{unit:"year"}):s(D,e.length)},R:function(t,e){return s(h(t),e.length)},u:function(t,e){return s(t.getUTCFullYear(),e.length)},Q:function(t,e,u){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return u.ordinalNumber(r,{unit:"quarter"});case"QQQ":return u.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return u.quarter(r,{width:"narrow",context:"formatting"});default:return u.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,u){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return s(r,2);case"qo":return u.ordinalNumber(r,{unit:"quarter"});case"qqq":return u.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return u.quarter(r,{width:"narrow",context:"standalone"});default:return u.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,u){var r=t.getUTCMonth();switch(e){case"M":case"MM":return f.M(t,e);case"Mo":return u.ordinalNumber(r+1,{unit:"month"});case"MMM":return u.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return u.month(r,{width:"narrow",context:"formatting"});default:return u.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,u){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return u.ordinalNumber(r+1,{unit:"month"});case"LLL":return u.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return u.month(r,{width:"narrow",context:"standalone"});default:return u.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,u,r){var n=function(t,e){(0,o.Z)(1,arguments);var u=(0,a.Z)(t),r=C(u,e).getTime()-w(u,e).getTime();return Math.round(r/m)+1}(t,r);return"wo"===e?u.ordinalNumber(n,{unit:"week"}):s(n,e.length)},I:function(t,e,u){var r=function(t){(0,o.Z)(1,arguments);var e=(0,a.Z)(t),u=d(e).getTime()-F(e).getTime();return Math.round(u/E)+1}(t);return"Io"===e?u.ordinalNumber(r,{unit:"week"}):s(r,e.length)},d:function(t,e,u){return"do"===e?u.ordinalNumber(t.getUTCDate(),{unit:"date"}):f.d(t,e)},D:function(t,e,u){var r=function(t){(0,o.Z)(1,arguments);var e=(0,a.Z)(t),u=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),n=u-r;return Math.floor(n/l)+1}(t);return"Do"===e?u.ordinalNumber(r,{unit:"dayOfYear"}):s(r,e.length)},E:function(t,e,u){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return u.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return u.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return u.day(r,{width:"short",context:"formatting"});default:return u.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,u,r){var n=t.getUTCDay(),D=(n-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(D);case"ee":return s(D,2);case"eo":return u.ordinalNumber(D,{unit:"day"});case"eee":return u.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return u.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return u.day(n,{width:"short",context:"formatting"});default:return u.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,u,r){var n=t.getUTCDay(),D=(n-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(D);case"cc":return s(D,e.length);case"co":return u.ordinalNumber(D,{unit:"day"});case"ccc":return u.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return u.day(n,{width:"narrow",context:"standalone"});case"cccccc":return u.day(n,{width:"short",context:"standalone"});default:return u.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,u){var r=t.getUTCDay(),n=0===r?7:r;switch(e){case"i":return String(n);case"ii":return s(n,e.length);case"io":return u.ordinalNumber(n,{unit:"day"});case"iii":return u.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return u.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return u.day(r,{width:"short",context:"formatting"});default:return u.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,u){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return u.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return u.dayPeriod(r,{width:"narrow",context:"formatting"});default:return u.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,u){var r,n=t.getUTCHours();switch(r=12===n?p:0===n?v:n/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return u.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return u.dayPeriod(r,{width:"narrow",context:"formatting"});default:return u.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,u){var r,n=t.getUTCHours();switch(r=n>=17?T:n>=12?y:n>=4?b:U,e){case"B":case"BB":case"BBB":return u.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return u.dayPeriod(r,{width:"narrow",context:"formatting"});default:return u.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,u){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),u.ordinalNumber(r,{unit:"hour"})}return f.h(t,e)},H:function(t,e,u){return"Ho"===e?u.ordinalNumber(t.getUTCHours(),{unit:"hour"}):f.H(t,e)},K:function(t,e,u){var r=t.getUTCHours()%12;return"Ko"===e?u.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},k:function(t,e,u){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?u.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},m:function(t,e,u){return"mo"===e?u.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):f.m(t,e)},s:function(t,e,u){return"so"===e?u.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):f.s(t,e)},S:function(t,e){return f.S(t,e)},X:function(t,e,u,r){var n=(r._originalDate||t).getTimezoneOffset();if(0===n)return"Z";switch(e){case"X":return A(n);case"XXXX":case"XX":return B(n);default:return B(n,":")}},x:function(t,e,u,r){var n=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return A(n);case"xxxx":case"xx":return B(n);default:return B(n,":")}},O:function(t,e,u,r){var n=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+M(n,":");default:return"GMT"+B(n,":")}},z:function(t,e,u,r){var n=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+M(n,":");default:return"GMT"+B(n,":")}},t:function(t,e,u,r){var n=r._originalDate||t;return s(Math.floor(n.getTime()/1e3),e.length)},T:function(t,e,u,r){return s((r._originalDate||t).getTime(),e.length)}};function M(t,e){var u=t>0?"-":"+",r=Math.abs(t),n=Math.floor(r/60),D=r%60;if(0===D)return u+String(n);var a=e||"";return u+String(n)+a+s(D,2)}function A(t,e){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):B(t,e)}function B(t,e){var u=e||"",r=t>0?"-":"+",n=Math.abs(t);return r+s(Math.floor(n/60),2)+u+s(n%60,2)}var O=x;function Z(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function k(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var P={p:k,P:function(t,e){var u,r=t.match(/(P+)(p+)?/),n=r[1],D=r[2];if(!D)return Z(t,e);switch(n){case"P":u=e.dateTime({width:"short"});break;case"PP":u=e.dateTime({width:"medium"});break;case"PPP":u=e.dateTime({width:"long"});break;default:u=e.dateTime({width:"full"})}return u.replace("{{date}}",Z(n,e)).replace("{{time}}",k(D,e))}},Y=u(24262),N=["D","DD"],_=["YY","YYYY"];function S(t){return-1!==N.indexOf(t)}function H(t){return-1!==_.indexOf(t)}function q(t,e,u){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(u,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(u,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(u,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(u,"`; see: https://git.io/fxCyr"))}var L=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,j=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,z=/''/g,Q=/[a-zA-Z]/;function R(t,e,u){(0,o.Z)(2,arguments);var i=String(e),s=u||{},f=s.locale||n.Z,l=f.options&&f.options.firstWeekContainsDate,d=null==l?1:(0,D.Z)(l),h=null==s.firstWeekContainsDate?d:(0,D.Z)(s.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var F=f.options&&f.options.weekStartsOn,E=null==F?0:(0,D.Z)(F),C=null==s.weekStartsOn?E:(0,D.Z)(s.weekStartsOn);if(!(C>=0&&C<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!f.localize)throw new RangeError("locale must contain localize property");if(!f.formatLong)throw new RangeError("locale must contain formatLong property");var g=(0,a.Z)(t);if(!(0,r.Z)(g))throw new RangeError("Invalid time value");var w=(0,Y.Z)(g),m=c(g,w),v={firstWeekContainsDate:h,weekStartsOn:C,locale:f,_originalDate:g},p=i.match(j).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,f.formatLong,v):t})).join("").match(L).map((function(u){if("''"===u)return"'";var r=u[0];if("'"===r)return W(u);var n=O[r];if(n)return!s.useAdditionalWeekYearTokens&&H(u)&&q(u,e,t),!s.useAdditionalDayOfYearTokens&&S(u)&&q(u,e,t),n(m,u,f.localize,v);if(r.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return u})).join("");return p}function W(t){return t.match(G)[1].replace(z,"'")}},12274:function(t,e,u){"use strict";u.d(e,{Z:function(){return D}});var r=u(19013),n=u(13882);function D(t){(0,n.Z)(1,arguments);var e=(0,r.Z)(t);return!isNaN(e)}},65977:function(t,e,u){"use strict";var r=u(63036);Object.defineProperty(e,"XJ",{enumerable:!0,get:function(){return D(r).default}});var n=u(99196);function D(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"Zo",{enumerable:!0,get:function(){return D(n).default}})},99196:function(t,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withMDXComponents=void 0;var r,n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r])}return t},D=u(27378),a=(r=D)&&r.__esModule?r:{default:r};var o=a.default.createContext({}),i=o.Provider,c=o.Consumer;e.withMDXComponents=function(t){return function(e){return a.default.createElement(c,null,(function(u){return a.default.createElement(t,n({},e,{components:e.components||u}))}))}};e.default=function(t){return a.default.createElement(i,{value:t.components},t.children)}},63036:function(t,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r])}return t},D=function(){function t(t,e){for(var u=0;u<e.length;u++){var r=e[u];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,u,r){return u&&t(e.prototype,u),r&&t(e,r),e}}(),a=u(27378),o=(r=a)&&r.__esModule?r:{default:r},i=u(99196);function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var f={inlineCode:"code",wrapper:"div"},l=function(t){function e(){return c(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),D(e,[{key:"render",value:function(){var t=this.props,e=t.name,u=t.parentName,r=t.props,D=void 0===r?{}:r,a=t.children,i=t.components,c=void 0===i?{}:i,s=t.Layout,l=t.layoutProps,d=c[u+"."+e]||c[e]||f[e]||e;return s?o.default.createElement(s,n({components:c},l),o.default.createElement(d,D,a)):o.default.createElement(d,D,a)}}]),e}(a.Component);e.default=(0,i.withMDXComponents)(l)},45969:function(t,e,u){var r=u(51605);function n(){if(!(this instanceof n))return new n;this.reset()}t.exports=n,n.prototype.slug=function(t,e){var u=this,n=function(t,e){var u=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,n="-";if("string"!==typeof t)return"";e||(t=t.replace(/[A-Z]+/g,a));return t.trim().replace(u,"").replace(r(),"").replace(D,n)}(t,e=!0===e),o=u.occurrences[n];return u.occurrences.hasOwnProperty(n)?o++:o=0,u.occurrences[n]=o,o&&(n=n+"-"+o),n},n.prototype.reset=function(){this.occurrences={}};var D=/\s/g;function a(t){return t.toLowerCase()}},51605:function(t){t.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}}}]);