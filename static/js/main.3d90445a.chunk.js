(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{108:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(38),i=n.n(r),s=(n(108),n(15)),o=n(12),l=n(96),j=n(187),u=n(165),d=n(1),m=c.a.createContext();function b(e){var t=e.children,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(l.a)({palette:{mode:"light",background:{default:"#eee"},primary:{light:"#fff",main:"#eee",dark:"#ddd"},textColor:{main:"#000"},loader:{main:"#000"}}}),b=Object(l.a)({palette:{mode:"dark",background:{default:"#212E37"},primary:{light:"#2B3743",main:"#212E37",dark:"#1c262e"},textColor:{main:"#fff"},loader:{main:"#fff"}}});return Object(d.jsx)(j.a,{theme:r?b:s,children:Object(d.jsxs)(m.Provider,{value:function(){i((function(e){return!e}))},children:[Object(d.jsx)(u.a,{}),t]})})}var x=n(178),p=n(47),h=n.n(p),O=n(66),f=c.a.createContext();function g(){return Object(a.useContext)(f)}function v(e){var t=e.children,n=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all").catch(console.log);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r().then(c)}),[]),Object(a.useMemo)((function(){return n}),[n])}();return Object(d.jsx)(f.Provider,{value:n,children:t})}var y=n(177),N=n(171),C=n(20),k=n(91),S=n.n(k),w=Object(N.a)((function(e){return{searchBarContainer:{background:e.palette.primary.light,margin:"10px 0",padding:"0 20px",borderRadius:7}}}));var z=function(e){var t=e.setInput,n=w();return Object(d.jsxs)(x.a,{elevation:0,className:n.searchBarContainer,sx:{p:"2px 4px",display:"flex",alignItems:"center"},children:[Object(d.jsx)(S.a,{}),Object(d.jsx)(C.c,{sx:{ml:1,flex:1,margin:2},placeholder:"Search for a country...",inputProps:{"aria-label":"search for a country"},onChange:function(e){return t(e.target.value)}})]})},R=n(92),I=n.n(R),L=n(40),F=n(179),T=n(175),W=n(170),A=n(174),E=n(173),B=Object(N.a)((function(e){return{filterContainer:{background:e.palette.primary.light,margin:"10px 0",borderRadius:7},inputLabel:{color:"".concat(e.palette.textColor.main," !important"),fontSize:"1rem",opacity:.5}}}));function P(e){var t=e.regions,n=e.setRegions,a=e.regionNames,c=B(),r=Object(L.a)();return Object(d.jsx)(x.a,{elevation:0,className:"filter-container ".concat(c.filterContainer),children:Object(d.jsxs)(F.a,{fullWidth:!0,children:[Object(d.jsx)(T.a,{className:c.inputLabel,children:"Filter by Region"}),Object(d.jsx)(W.a,{value:t,label:"Region",multiple:!0,IconComponent:I.a,onChange:function(e){var t=e.target.value;n("string"===typeof t?t.split(","):t)},renderValue:function(e){return e.join(", ")},MenuProps:{PaperProps:{style:{marginTop:10,background:r.palette.primary.light}}},children:a.map((function(e){return Object(d.jsxs)(A.a,{value:e,children:[Object(d.jsx)(E.a,{style:{color:r.palette.textColor.main},checked:t.indexOf(e)>-1}),e]},e)}))})]})})}var D=n(184),M=n(180),J=n(181),H=n(182),V=n(183),q=Object(N.a)((function(e){return{card:{background:e.palette.primary.light,height:350,borderRadius:7},cardActionArea:{height:"100%"},cardImage:{position:"absolute",top:0,left:0,height:150},countryTitle:{fontSize:"1.2rem",margin:"20px 10px"},details:{fontSize:"1rem",margin:"5px 10px"},value:{marginLeft:5}}}));function G(e){var t=e.country,n=q(),a=Object(s.f)();return Object(d.jsx)(M.a,{elevation:0,className:n.card,onClick:function(){return a.push("/".concat(t.name.common))},children:Object(d.jsxs)(J.a,{className:n.cardActionArea,children:[Object(d.jsx)(H.a,{className:n.cardImage,component:"img",image:t.flags.svg,alt:t.name.common}),Object(d.jsxs)(V.a,{style:{marginTop:110},children:[Object(d.jsx)("h1",{className:n.countryTitle,children:t.name.common}),Object(d.jsxs)("div",{className:n.details,children:[Object(d.jsx)("strong",{className:n.key,children:"Population:"}),Object(d.jsx)("span",{className:n.value,children:t.population})]}),Object(d.jsxs)("div",{className:n.details,children:[Object(d.jsx)("strong",{className:n.key,children:"Region:"}),Object(d.jsx)("span",{className:n.value,children:t.region})]}),Object(d.jsxs)("div",{className:n.details,children:[Object(d.jsx)("strong",{className:n.key,children:"Capital:"}),Object(d.jsx)("span",{className:n.value,children:t.capital?t.capital[0]:Object(d.jsx)("em",{children:"none"})})]})]})]})})}var K=Object(N.a)((function(e){return{countriesContainer:{margin:"20px 0",flexWrap:"wrap"},loader:{color:e.palette.loader.main,margin:"100px auto",opacity:.75}}}));var Q=function(e){var t=e.input,n=e.regions,c=K(),r=g(),i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1];return Object(a.useEffect)((function(){j(r.map((function(e){return e.name.common.toLowerCase().includes(t.toLowerCase())&&(0===n.length||n.includes(e.region))?e:null})))}),[t,r,n]),Object(d.jsx)(y.a,{container:!0,alignItems:"center",justifyContent:"space-between",className:"countries-container ".concat(c.countriesContainer),children:Object(d.jsx)(d.Fragment,{children:l.length?l.map((function(e){return e?Object(d.jsx)(y.a,{item:!0,xs:12,sm:6,md:3,className:"card-container",children:Object(d.jsx)(G,{country:e})},e.name.common):null})):Object(d.jsx)(D.a,{className:c.loader})})})},U=n(185),X=n(186),Y=n(94),Z=n.n(Y),$=Object(N.a)((function(e){return{headerContainer:{background:e.palette.primary.light,padding:"20px 5%",borderRadius:0},title:{width:"max-content",fontSize:"1.4rem",cursor:"pointer"},icon:{color:e.palette.textColor.main,fontSize:"1.2rem",cursor:"pointer"},buttonText:{color:e.palette.textColor.main,fontSize:"1rem",textTransform:"capitalize",marginLeft:5}}}));var _=function(){var e=$(),t=Object(s.f)(),n=Object(a.useContext)(m);return Object(d.jsx)(x.a,{className:"header-container ".concat(e.headerContainer),children:Object(d.jsxs)(y.a,{container:!0,alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",children:[Object(d.jsx)(y.a,{item:!0,xs:8,children:Object(d.jsx)("h1",{className:"title ".concat(e.title),onClick:function(){return t.push("/")},children:"Where in the world?"})}),Object(d.jsx)(y.a,{item:!0,xs:4,textAlign:"right",children:Object(d.jsxs)(U.a,{style:{borderRadius:10,width:"max-content"},onClick:n,children:[Object(d.jsx)(Z.a,{className:"icon ".concat(e.icon)}),Object(d.jsx)(X.a,{className:"button-text ".concat(e.buttonText),children:"Dark Mode"})]})})]})})},ee=Object(N.a)((function(e){return{homeContainer:{background:e.palette.primary.main,padding:"50px 5%",borderRadius:0,minHeight:"100vh"}}}));var te=function(){var e=ee(),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsxs)(x.a,{elevation:0,className:"home-container ".concat(e.homeContainer),children:[Object(d.jsxs)(y.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(d.jsx)(y.a,{item:!0,xs:12,sm:7,md:5,children:Object(d.jsx)(z,{setInput:r})}),Object(d.jsx)(y.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(d.jsx)(P,{regions:l,setRegions:j,regionNames:["Africa","Americas","Asia","Europe","Oceania"]})})]}),Object(d.jsx)(Q,{input:c,regions:l})]})]})},ne=n(95),ae=n.n(ne),ce=Object(N.a)((function(e){return{button:{background:e.palette.primary.light,color:e.palette.textColor.main,marginBottom:50,padding:"10px 30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",borderRadius:7,textTransform:"capitalize",fontSize:"1rem"}}}));function re(){var e=ce(),t=Object(s.f)();return Object(d.jsx)(U.a,{variant:"text",startIcon:Object(d.jsx)(ae.a,{}),className:e.button,onClick:function(){t.goBack()},children:"Back"})}var ie=Object(N.a)((function(){return{line:{margin:"10px 0"},key:{fontSize:"1.1rem",fontWeight:600},value:{fontSize:"1.1rem",fontWeight:300,marginLeft:10}}}));function se(e){var t=e.country,n=ie();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Official name:"}),Object(d.jsx)("span",{className:n.value,children:t.name.official})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Population:"}),Object(d.jsx)("span",{className:n.value,children:t.population})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Region:"}),Object(d.jsx)("span",{className:n.value,children:t.region})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Subregion:"}),Object(d.jsx)("span",{className:n.value,children:t.subregion})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Capital:"}),Object(d.jsx)("span",{className:n.value,children:t.capital?t.capital:Object(d.jsx)("em",{children:"none"})})]})]})}var oe=Object(N.a)((function(){return{line:{margin:"10px 0"},key:{fontSize:"1rem",fontWeight:600},value:{fontSize:"1rem",fontWeight:300,marginLeft:10}}}));function le(e){var t=e.country,n=oe();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Top Level Domain:"}),Object(d.jsx)("span",{className:n.value,children:t.tld[0]})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Currencies:"}),Object(d.jsx)("span",{className:n.value,children:Object.keys(t.currencies).map((function(e,n){return Object(d.jsx)("span",{children:t.currencies[e].name},n)})).reduce((function(e,t){return[e,", ",t]}))})]}),Object(d.jsxs)("div",{className:n.line,children:[Object(d.jsx)("span",{className:n.key,children:"Languages:"}),Object(d.jsx)("span",{className:n.value,children:Object.keys(t.languages).map((function(e,n){return Object(d.jsx)("span",{children:t.languages[e]},n)})).reduce((function(e,t){return[e,", ",t]}))})]})]})}var je=n(14),ue=Object(N.a)((function(e){return{text:{fontSize:"1.2rem",fontWeight:600,marginRight:7},button:{background:e.palette.primary.light,color:e.palette.textColor.main,fontSize:"1rem",margin:"5px 5px 10px 5px",padding:"5px 10px",boxShadow:"0 0 5px rgba(0, 0, 0, 0.1)",borderRadius:7,textTransform:"capitalize"},loader:{position:"absolute",color:e.palette.textColor.main,top:-5,left:175,padding:10,opacity:.75}}}));function de(e){var t=e.country,n=ue(),c=Object(s.f)(),r=Object(a.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(a.useState)(!0),m=Object(o.a)(u,2),b=m[0],x=m[1],p=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/alpha/".concat(t)).catch(console.log);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return x(!0),t.borders&&t.borders.forEach((function(e){p(e).then((function(e){return j((function(t){return[].concat(Object(je.a)(t),[e[0].name.common])}))}))})),function(){j([]),x(!1)}}),[t]),Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsx)("span",{className:n.text,children:"Border Countries:"}),Object(d.jsx)(d.Fragment,{children:l.length>0?l.map((function(e){return Object(d.jsx)(U.a,{variant:"text",className:n.button,onClick:function(){c.push("/".concat(e))},children:e},e)})):Object(d.jsx)(d.Fragment,{children:b?Object(d.jsx)(D.a,{className:n.loader}):Object(d.jsx)("em",{children:"none"})})})]})}var me=Object(N.a)((function(){return{detailsContainer:{width:"100%",paddingLeft:30},countryDetails:{alignItems:"flex-start",justifyContent:"space-between"}}}));function be(e){var t=e.country,n=me();return Object(d.jsxs)(y.a,{className:"".concat(n.detailsContainer," details-container"),item:!0,xs:12,md:6,children:[Object(d.jsx)("h1",{children:t.name.common}),Object(d.jsxs)(y.a,{container:!0,className:n.countryDetails,children:[Object(d.jsx)(y.a,{item:!0,xs:12,md:6,padding:"20px 20px 0 0",children:Object(d.jsx)(se,{country:t})}),Object(d.jsx)(y.a,{item:!0,xs:12,md:6,padding:"20px 20px 0 0",children:Object(d.jsx)(le,{country:t})}),Object(d.jsx)(y.a,{item:!0,xs:12,paddingTop:5,children:Object(d.jsx)(de,{country:t})})]})]})}var xe=Object(N.a)((function(e){return{loader:{color:e.palette.textColor.main,opacity:.75,margin:" 50px auto"},text:{fontSize:"3rem",fontWeight:300,margin:"100px auto",textAlign:"center"}}}));function pe(e){var t=e.found,n=xe();return Object(d.jsx)(d.Fragment,{children:0===t?Object(d.jsx)(D.a,{className:n.loader}):Object(d.jsx)("h1",{className:n.text,children:"Country not found"})})}var he=Object(N.a)((function(e){return{infoContainer:{background:e.palette.primary.main,padding:"50px 5%",alignItems:"center",justifyContent:"space-between"},loader:{color:e.palette.textColor.main,opacity:.75,margin:" 50px auto"},flagImage:{width:"100%",paddingRight:30}}}));var Oe=function(){var e=Object(s.g)().name,t=he(),n=g(),c=Object(a.useState)({}),r=Object(o.a)(c,2),i=r[0],l=r[1],j=Object(a.useState)(0),u=Object(o.a)(j,2),m=u[0],b=u[1];return Object(a.useEffect)((function(){if(n.length>0){var t=n.find((function(t){return t.name.common.toLowerCase()===e.toLowerCase()}));return t?(l(t),void b(1)):void b(-1)}console.log(i)}),[n,e,i]),Object(d.jsxs)(y.a,{container:!0,className:t.infoContainer,children:[Object(d.jsx)(y.a,{item:!0,xs:12,children:Object(d.jsx)(re,{})}),1===m?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(y.a,{item:!0,xs:12,md:6,position:"relative",children:[Object(d.jsx)("img",{className:"".concat(t.flagImage," flag-image"),src:i.flags.svg,alt:i.name.common}),Object(d.jsx)("div",{className:"overlay"})]}),Object(d.jsx)(be,{country:i})]}):Object(d.jsx)(pe,{found:m})]})};var fe=function(){var e=g();return Object(d.jsx)(d.Fragment,{children:0===e.length?Object(d.jsxs)(v,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(Oe,{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(Oe,{})]})})};var ge=function(){return Object(d.jsx)(b,{children:Object(d.jsx)(x.a,{elevation:0,style:{width:"100%",height:"100%",borderRadius:0},children:Object(d.jsx)(v,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,from:"/",component:te}),Object(d.jsx)(s.a,{exact:!0,from:"/:name",component:fe})]})})})})},ve=n(43);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ve.a,{basename:"/",children:Object(d.jsx)(ge,{})})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.3d90445a.chunk.js.map