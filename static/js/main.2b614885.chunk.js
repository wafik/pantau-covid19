(this["webpackJsonppantau-covid19"]=this["webpackJsonppantau-covid19"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(38),a(39),a(69)),i=function(){return r.a.createElement(o.a,{bg:"dark",fixed:"top",variant:"dark"},r.a.createElement(o.a.Brand,null,"Pantau Covid-19"))},u=a(15),s=a(7),d=a(65),m=a(66),E=a(70),h=a(67),p=a(71),b=a(68),v=a(17),f=a.n(v),y=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),o=Object(s.a)(c,2),i=o[0],v=o[1],y=Object(n.useState)(0),g=Object(s.a)(y,2),j=g[0],w=g[1],O=Object(n.useState)([]),_=Object(s.a)(O,2),k=_[0],S=_[1],C=Object(n.useState)(""),x=Object(s.a)(C,2),T=x[0],H=x[1],B=Object(n.useState)([]),N=Object(s.a)(B,2),D=N[0],A=N[1],G=Object(n.useState)(""),J=Object(s.a)(G,2),L=J[0],R=J[1],W={cardHeader:{fontSize:"20px"}};Object(n.useEffect)((function(){f()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"28ace3fa3dmsha8a82e678f90957p1a2413jsnb7152ef288ed"}}).then((function(e){console.log(e.data),l(e.data.total_cases),v(e.data.total_deaths),w(e.data.total_recovered)})).catch((function(e){console.log(e)})),f()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"28ace3fa3dmsha8a82e678f90957p1a2413jsnb7152ef288ed"}}).then((function(e){console.log(e.data),S(Object(u.a)(e.data.countries_stat)),A(Object(u.a)(e.data.countries_stat)),H(e.data.statistic_taken_at)})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement(d.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(E.a,{bg:"dark",text:"white"},r.a.createElement(E.a.Header,{style:W.cardHeader},"Total Cases"),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,a))),r.a.createElement(E.a,{bg:"danger",text:"white"},r.a.createElement(E.a.Header,{style:W.cardHeader},"Total Deaths"),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,i))),r.a.createElement(E.a,{bg:"success",text:"white"},r.a.createElement(E.a.Header,{style:W.cardHeader},"Total Recovered"),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,j))),r.a.createElement(E.a,{bg:"info",text:"white"},r.a.createElement(E.a.Header,{style:W.cardHeader},"Statistic Taken At"),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,T)))),r.a.createElement("br",null),r.a.createElement(E.a,{bg:"dark"},r.a.createElement(E.a.Body,null,r.a.createElement(h.a,{className:"mb-3"},r.a.createElement(p.a,{placeholder:"Search Country","aria-label":"Search Country","aria-describedby":"basic-addon2",value:L,onChange:function(e){return function(e){console.log(e.target.value),R(e.target.value);var t=k.filter((function(t){return t.country_name.toLowerCase().includes(e.target.value.toLowerCase())}));A(Object(u.a)(t))}(e)}})),r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country Name"),r.a.createElement("th",null,"Cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"New Deaths"),r.a.createElement("th",null,"New Cases"),r.a.createElement("th",null,"Serious Critical"),r.a.createElement("th",null,"Active Cases"))),r.a.createElement("tbody",null,D.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.country_name),r.a.createElement("td",null,e.cases),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.total_recovered),r.a.createElement("td",null,e.new_deaths),r.a.createElement("td",null,e.new_cases),r.a.createElement("td",null,e.serious_critical),r.a.createElement("td",null,e.active_cases))})))))))};var g=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2b614885.chunk.js.map