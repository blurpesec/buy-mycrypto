(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8xh/":function(e,n,t){"use strict";var o=t("vOnD"),r=t("MA6f");function a(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    padding: 0 1.5rem;\n  "]);return a=function(){return e},e}var i=o.default.div.withConfig({displayName:"Container",componentId:"sc-1d6av2z-0"})(["width:100%;max-width:120rem;margin:auto;box-sizing:border-box;",";"],Object(r.a)("xl","max")(a()));t.d(n,"a",function(){return i})},QeBL:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),a=t("vOnD"),i=t("TZi5"),c=a.default.div.withConfig({displayName:"MoonpayWidget__WidgetContainer",componentId:"sc-8u2ydo-0"})(["display:block;flex:1;justify-content:center;align-items:center;outline:none;min-height:675px;z-index:-1;"]),u=a.default.iframe.withConfig({displayName:"MoonpayWidget__MoonpayWidgetIFrame",componentId:"sc-8u2ydo-1"})(["height:100%;width:100%;min-height:425px;"]),d=function(){var e=Object(o.useState)(!1),n=e[0],t=e[1],a=Object(i.c)("currencyCode",i.b),d=a[0],l=(a[1],Object(i.c)("walletAddress",i.b)),s=l[0];l[1];console.debug("[MoonpayWidget]: search",d,s);var f="https://buy-staging.moonpay.io?apiKey=pk_test_3aM6rCKM7VxglAXwpo6xEm031iQWBbZq&colorCode=%23163150";return d&&s&&(console.log("[MoonpayWidget]: 3"),f+="&walletAddress="+s,f+="&currencyCode="+d),Object(o.useEffect)(function(){t(!0)},[]),console.debug("[MoonpayWidget]: moonpaySrcAddress",f),r.a.createElement(c,{role:"group"},n&&r.a.createElement(u,{allow:"accelerometer; autoplay; camera; gyroscope; payment",frameBorder:0,src:f},r.a.createElement("p",null,"Your browser does not support iframes.")),"search: "+d+" - "+s,r.a.createElement("br",null),"moonpaySrcAddress: "+f)},l=t("8xh/"),s=t("fv+h"),f=t("MA6f");function m(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    flex-direction: column;\n  "]);return m=function(){return e},e}var p=Object(a.default)(l.a).withConfig({displayName:"pages__HomeContainer",componentId:"sc-9vb10l-0"})(["display:flex;flex-direction:row;flex:1;height:100%;",";"],Object(f.a)("lg","max")(m()));n.default=function(){return r.a.createElement(s.a,null,r.a.createElement(p,null,r.a.createElement(d,null)))}},"fv+h":function(e,n,t){"use strict";var o=t("vOnD"),r=t("MA6f");function a(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n    margin-top: 7.7rem;\n  "]);return a=function(){return e},e}var i=o.default.div.withConfig({displayName:"PageContainer",componentId:"sc-9f332i-0"})(["width:100%;flex:1;background:",";z-index:0;",";"],function(e){return e.theme.subHeaderBackground},Object(r.a)("lg","max")(a()));t.d(n,"a",function(){return i})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-92868cb0a5808b40b275.js.map