(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"29EK":function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return l("dmCw")}])},dmCw:function(e,a,l){"use strict";l.r(a);var n=l("q1tI"),r=l.n(n),t=l("5Yp1"),i=l("n+Gj"),c=l("lXAN"),s=l("8lYe"),o=l("h4VS"),u=l("PrCN"),m=l("lTCR"),d=l.n(m),g=r.a.createElement,p=function(e){return e.galleryData.map((function(e,a){return g("div",{key:a.toString(),className:"col-lg-4 col-md-6"},g("div",{className:"gallery-one__single"},g("img",{className:"lazyload","data-src":e.ImgUrl,alt:"gallery"}),g("a",{href:e.ImgUrl,className:"gallery-one__popup img-popup",target:"_blank"},g("i",{className:"kipso-icon-plus-symbol"}))))}))},N=r.a.createElement;function f(){var e=Object(o.a)(["{\n    galleries{\n      ImgUrl\n      Title\n    }\n  }"]);return f=function(){return e},e}var y=d()(f()),v=function(){var e=Object(u.useQuery)(y),a=e.data,l=e.loading,n=e.error;if(l)return N("p",null,"Loading...");if(n)return N("p",null,"Error");var r=a.galleries;return N("section",{className:"gallery-one"},N("div",{className:"container"},N("div",{className:"row"},N(p,{galleryData:r}))))},w=l("dCYn"),_=r.a.createElement;a.default=function(){return _(t.a,{pageTitle:"QtLearn | Gallery"},_(i.a,null),_(c.a,{title:"Gallery"}),_(u.ApolloProvider,{client:w.a},_(v,null)),_(s.a,null))}},lXAN:function(e,a,l){"use strict";var n=l("q1tI"),r=l.n(n),t=l("YFqc"),i=l.n(t),c=r.a.createElement;a.a=function(e){return c("section",{className:"inner-banner"},c("div",{className:"container"},c("ul",{className:"list-unstyled thm-breadcrumb"},c("li",null,c(i.a,{href:"/"},c("a",null,"Home"))),c("li",{className:"active"},c("a",{href:"#"},e.title))),c("h2",{className:"inner-banner__title"},e.title)))}}},[["29EK",0,1,2,3,4]]]);