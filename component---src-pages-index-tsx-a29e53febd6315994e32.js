(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8xh/":function(e,n,t){"use strict";var o=t("vOnD"),a=t("MA6f");function r(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    padding: 0 1.5rem;\n  "]);return r=function(){return e},e}var i=o.default.div.withConfig({displayName:"Container",componentId:"sc-1d6av2z-0"})(["width:100%;max-width:120rem;margin:auto;box-sizing:border-box;",";"],Object(a.a)("xl","max")(r()));t.d(n,"a",function(){return i})},QeBL:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("vOnD"),i=(t("sPse"),r.default.div.withConfig({displayName:"MoonpayWidget__WidgetContainer",componentId:"sc-8u2ydo-0"})(["display:block;flex:1;justify-content:center;align-items:center;outline:none;min-height:675px;z-index:-1;"])),c=r.default.iframe.withConfig({displayName:"MoonpayWidget__MoonpayWidgetIFrame",componentId:"sc-8u2ydo-1"})(["height:100%;width:100%;min-height:425px;"]),d=function(e){var n=e.location?e.location.search:void 0;console.debug("[MoonpayWidget]: search",e.location?n:"unknown loc");var t="https://buy-staging.moonpay.io?apiKey=pk_test_3aM6rCKM7VxglAXwpo6xEm031iQWBbZq&colorCode=%23163150",o=n?n.currencyCode:void 0,r=n?n.walletAddress:void 0;return o&&r&&(console.log("[MoonpayWidget]: 3"),t+="&walletAddress="+r,t+="&currencyCode="+o),console.debug("[MoonpayWidget]: moonpaySrcAddress",t),a.a.createElement(i,{role:"group"},a.a.createElement(c,{allow:"accelerometer; autoplay; camera; gyroscope; payment",frameBorder:0,src:t},a.a.createElement("p",null,"Your browser does not support iframes.")),"search: "+o+" - "+r,a.a.createElement("br",null),"moonpaySrcAddress: "+t)},l=t("8xh/"),u=t("fv+h"),s=t("MA6f");function f(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    flex-direction: column;\n  "]);return f=function(){return e},e}var m=Object(r.default)(l.a).withConfig({displayName:"pages__HomeContainer",componentId:"sc-9vb10l-0"})(["display:flex;flex-direction:row;flex:1;height:100%;",";"],Object(s.a)("lg","max")(f()));n.default=function(){return a.a.createElement(u.a,null,a.a.createElement(m,null,a.a.createElement(d,null)))}},"fv+h":function(e,n,t){"use strict";var o=t("vOnD"),a=t("MA6f");function r(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    margin-top: 7.7rem;\n  "]);return r=function(){return e},e}var i=o.default.div.withConfig({displayName:"PageContainer",componentId:"sc-9f332i-0"})(["width:100%;flex:1;background:",";z-index:0;",";"],function(e){return e.theme.subHeaderBackground},Object(a.a)("lg","max")(r()));t.d(n,"a",function(){return i})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a29e53febd6315994e32.js.map