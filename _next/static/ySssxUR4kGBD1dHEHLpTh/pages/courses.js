(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{H40s:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses",function(){return n("MHXu")}])},MHXu:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),s=n("5Yp1"),c=n("n+Gj"),l=n("lXAN"),o=n("8lYe"),i=n("i1Xa"),u=n("PrCN"),m=n("dCYn"),d=n("nOHt"),N=r.a.createElement;a.default=function(e){Object(d.useRouter)().query.Name;return N(s.a,{pageTitle:"QtLearn | Courses"},N(c.a,null),N(l.a,{title:"Courses"}),N(u.ApolloProvider,{client:m.a},N(i.a,null)),N(o.a,null))}},i1Xa:function(e,a,n){"use strict";var t=n("h4VS"),r=n("PrCN"),s=n("lTCR"),c=n.n(s),l=n("q1tI"),o=n.n(l),i=n("YFqc"),u=n.n(i),m=o.a.createElement,d=function(e){var a=e.course;return m("div",{className:"col-lg-4"},m("div",{className:"course-one__single"},m("div",{className:"course-one__image"},m("img",{src:a.ImageUrl,alt:""}),null===a.coupon?"":m("span",{className:"fas fa-stack-2x"},m("i",{className:"fas fa-tags fa-stack-2x",style:{paddingLeft:"6em"}}),m("i",{className:"fas fa-stack-1x",style:{color:"white",fontSize:"0.545em",top:"0.55em",paddingLeft:"19em"}},"PCT"===a.coupon.unit?a.coupon.discount+"% off":"Sale"))),m("div",{className:"course-one__content"},m("a",{href:"#",className:"course-one__category"},a.course_category.Name),m("h2",{className:"course-one__title"},m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",null,a.Name))),m("br",null),m("div",null),m("div",{className:"course-one__meta"},m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",null,m("i",{className:"far fa-clock"})," ",a.DurationHrs," Hrs")),m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",null,m("i",{className:"far fa-folder-open"})," ",a.Frequency," /Week"))),m("br",null),null===a.coupon?m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",{className:"course-price"},a.Price?"Rs."+a.Price+"/-":"")):m("div",null,m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",{className:"course-price",style:{textDecorationLine:"line-through",textDecorationStyle:"solid"}},a.Price?"Rs."+a.Price+"/-":"")),m("br",null),m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",{className:"course-price"},"PCT"===a.coupon.unit?a.coupon.discount+"%  OFF     Rs."+(a.Price-a.Price*a.coupon.discount/100):"Rs."+(a.Price-a.coupon.discount)+"/-"))),m("div",{className:"row"},m(u.a,{href:{pathname:"/course-details",query:{Name:a.Name}}},m("a",{className:"col-sm-6 course-one__link"},"Buy This Course")),m(u.a,{href:a.Pdf},m("a",{target:"_blank",className:"col-sm-6 course-one__link-learn"},"Learn More"))))))},N=o.a.createElement;function f(){var e=Object(t.a)(["\n{\n      courses{\n      Name\n      Description\n      ImageUrl\n      Type\n      Grade\n      Pdf\n      DurationHrs\n      Sessions\n      Price\n      Frequency\n      PaymentLink\n      projects{\n          name\n        description\n        imageurl\n      }\n      course_category{\n          EndAge\n        StartAge\n        Name\n\n      }\n      coupon{\n          discount\n        unit\n        active\n        expiresBy\n      }\n    }\n  }"]);return f=function(){return e},e}var p=c()(f());a.a=function(){var e=Object(r.useQuery)(p),a=e.data,n=e.loading,t=e.error;if(n)return N("p",null,"Loading...");if(t)return N("p",null,"Error");var s=[[1,2],[3,4],[5,6],[7,8],[9]],c=a.courses;return N("section",{className:"course-one course-page"},N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-lg-12"},N("div",{className:"course-details__content"},N("div",{style:{textAlign:"center"}},N("ul",{className:"course-details_grade-tab course-details__tab-navs list-unstyled nav nav-tabs  ",role:"tablist"},s.map((function(e,a){return N("li",null,N("a",{className:a==Math.round((s.length-1)/2)?"active":"",key:a.toString(),role:"tab","data-toggle":"tab",href:"#G"+a},s.length-1==a?"Grade - "+e.toString()+" +":"Grade - "+e.toString()))})))),N("div",{className:"tab-content course-details__tab-content "},s.map((function(e,a){return N("div",{key:a.toString(),className:a==Math.round((s.length-1)/2)?"show active tab-pane animated fadeInUp":"tab-pane  animated fadeInUp",role:"tabpanel",id:"G"+a},N("div",{className:"row"},c.map((function(n){if(e.includes(parseInt(n.Grade))||s.length-1==a&&parseInt(n.Grade)>=s[s.length-1][0])return N(d,{course:n})}))))}))))))))}},lXAN:function(e,a,n){"use strict";var t=n("q1tI"),r=n.n(t),s=n("YFqc"),c=n.n(s),l=r.a.createElement;a.a=function(e){return l("section",{className:"inner-banner"},l("div",{className:"container"},l("ul",{className:"list-unstyled thm-breadcrumb"},l("li",null,l(c.a,{href:"/"},l("a",null,"Home"))),l("li",{className:"active"},l("a",{href:"#"},e.title))),l("h2",{className:"inner-banner__title"},e.title)))}}},[["H40s",0,1,2,3,4]]]);