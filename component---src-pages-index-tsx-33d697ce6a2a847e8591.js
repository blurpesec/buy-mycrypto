(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8xh/":function(e,n,t){"use strict";var r=t("vOnD"),a=t("MA6f");function o(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    padding: 0 1.5rem;\n  "]);return o=function(){return e},e}var i=r.default.div.withConfig({displayName:"Container",componentId:"sc-1d6av2z-0"})(["width:100%;max-width:120rem;margin:auto;box-sizing:border-box;",";"],Object(a.a)("xl","max")(o()));t.d(n,"a",function(){return i})},QeBL:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("vOnD"),i=(t("sPse"),t("cr+I")),c=t.n(i),d=o.default.div.withConfig({displayName:"MoonpayWidget__WidgetContainer",componentId:"sc-8u2ydo-0"})(["display:block;flex:1;justify-content:center;align-items:center;outline:none;min-height:675px;z-index:-1;"]),u=o.default.iframe.withConfig({displayName:"MoonpayWidget__MoonpayWidgetIFrame",componentId:"sc-8u2ydo-1"})(["height:100%;width:100%;min-height:425px;"]),l=function(){var e="https://buy-staging.moonpay.io",n=c.a.parse("undefined"!=typeof window?window.location.search:""),t=Object(r.useState)(n.apiKey||void 0),o=t[0],i=t[1];return n.currencyCode&&n.walletAddress&&n.apiKey&&(console.log("[MoonpayWidget]: 3"),e+="?apiKey="+n.apiKey+"&colorCode=%23163150",e+="&walletAddress="+n.walletAddress,e+="&currencyCode="+n.currencyCode),Object(r.useEffect)(function(){o||i("pk_test_3aM6rCKM7VxglAXwpo6xEm031iQWBbZq")},[]),console.debug("[MoonpayWidget]: moonpaySrcAddress",e),a.a.createElement(d,{role:"group"},o&&a.a.createElement(u,{allow:"accelerometer; autoplay; camera; gyroscope; payment",frameBorder:0,src:e},a.a.createElement("p",null,"Your browser does not support iframes.")),"search: "+n.currencyCode+" - "+n.walletAddress,a.a.createElement("br",null),"moonpaySrcAddress: "+e)},s=t("8xh/"),f=t("fv+h"),p=t("MA6f");function m(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    flex-direction: column;\n  "]);return m=function(){return e},e}var g=Object(o.default)(s.a).withConfig({displayName:"pages__HomeContainer",componentId:"sc-9vb10l-0"})(["display:flex;flex-direction:row;flex:1;height:100%;",";"],Object(p.a)("lg","max")(m()));n.default=function(){return a.a.createElement(f.a,null,a.a.createElement(g,null,a.a.createElement(l,null)))}},"fv+h":function(e,n,t){"use strict";var r=t("vOnD"),a=t("MA6f");function o(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    margin-top: 7.7rem;\n  "]);return o=function(){return e},e}var i=r.default.div.withConfig({displayName:"PageContainer",componentId:"sc-9f332i-0"})(["width:100%;flex:1;background:",";z-index:0;",";"],function(e){return e.theme.subHeaderBackground},Object(a.a)("lg","max")(o()));t.d(n,"a",function(){return i})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-33d697ce6a2a847e8591.js.map