(this.webpackJsonppersonaltrainer=this.webpackJsonppersonaltrainer||[]).push([[0],{349:function(t,e,n){},411:function(t,e,n){"use strict";n.r(e);var c=n(22),a=n(0),r=n.n(a),i=n(15),o=n.n(i),l=(n(349),n(114)),s=n(150),u=n(336),j=n(311),d=n(441),b=n(442),f=n(439),h=n(86),O=n(226),x=n(142),p=n.n(x),m=n(116),v=n.n(m),C=n(194),S=n.n(C);var g=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){fetch("https://customerrest.herokuapp.com/api/customers").then((function(t){return t.json()})).then((function(t){return r(t.content)})).catch((function(t){return console.error(t)}))};return Object(c.jsx)("div",{style:{maxWidth:"100%"},children:Object(c.jsx)(p.a,{columns:[{title:"First Name",field:"firstname"},{title:"Last Name",field:"lastname"},{title:"Street Address",field:"streetaddress"},{title:"Post Code",field:"postcode"},{title:"City",field:"city"},{title:"E-mail",field:"email"},{title:"Phone",field:"phone"}],data:n,title:"CUSTOMERS",icons:{Clear:function(t){return Object(c.jsx)(v.a,{})},Search:function(t){return Object(c.jsx)(S.a,{})},ResetSearch:function(t){return Object(c.jsx)(v.a,{})}}})})},y=n(335),M=n.n(y);var k=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){fetch("https://customerrest.herokuapp.com/api/trainings").then((function(t){return t.json()})).then((function(t){r(t.content)})).catch((function(t){return console.error(t)}))},o=[{title:"Date",field:"date",render:function(t){return M.a.utc(t.date).format("MMMM Do YYYY, h:mm:ss a")}},{title:"Duration",field:"duration"},{title:"Activity",field:"activity"}];return Object(c.jsx)("div",{style:{maxWidth:"100%"},children:Object(c.jsx)(p.a,{columns:o,data:n,title:"TRAINING PROGRAMMES",icons:{Clear:function(t){return Object(c.jsx)(v.a,{})},Search:function(t){return Object(c.jsx)(S.a,{})},ResetSearch:function(t){return Object(c.jsx)(v.a,{})}}})})};function E(t){var e=t.children,n=t.value,a=t.index,r=Object(u.a)(t,["children","value","index"]);return Object(c.jsx)("div",Object(s.a)(Object(s.a)({role:"tabpanel",hidden:n!==a,id:"scrollable-auto-tabpanel-".concat(a),"aria-labelledby":"scrollable-auto-tab-".concat(a)},r),{},{children:n===a&&Object(c.jsx)(O.a,{p:3,children:Object(c.jsx)(h.a,{children:e})})}))}function R(t){return{id:"scrollable-auto-tab-".concat(t),"aria-controls":"scrollable-auto-tabpanel-".concat(t)}}var F=Object(j.a)((function(t){return{root:{flexGrow:1,width:"100%",backgroundColor:t.palette.background.paper}}}));function N(){var t=F(),e=r.a.useState(0),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)(d.a,{position:"static",color:"default",children:Object(c.jsxs)(b.a,{value:a,onChange:function(t,e){i(e)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(c.jsx)(f.a,Object(s.a)({label:"Customers"},R(0))),Object(c.jsx)(f.a,Object(s.a)({label:"Training programmes"},R(1)))]})}),Object(c.jsx)(E,{value:a,index:0,children:Object(c.jsx)(g,{})}),Object(c.jsx)(E,{value:a,index:1,children:Object(c.jsx)(k,{})})]})}var P=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,817)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),P()}},[[411,1,3]]]);
//# sourceMappingURL=main.c8fd26b1.chunk.js.map