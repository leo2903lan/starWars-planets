(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),u=a.n(l);a(14);function c(){return r.a.createElement("h1",{style:{backgroundColor:"black",color:"yellow",textAlign:"center"}},"Trybe StarWars Planets")}var i=a(8),o=a(1),m=Object(n.createContext)();function s(){var e=Object(n.useState)("diameter"),t=Object(o.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)("maior que"),c=Object(o.a)(u,2),s=c[0],d=c[1],f=Object(n.useState)(0),p=Object(o.a)(f,2),E=p[0],b=p[1],v=Object(n.useContext)(m),O=v.setFilterByNumericValues,h=v.data,j=v.setDataFilter,y=v.setFilterOn,g=v.filterByNumericValues,x=v.mapOptionContext,C=v.setMapOptionContext;return r.a.createElement("form",null,r.a.createElement("select",{"data-testid":"column-filter",name:"column_filter",id:"column-filter",value:a,onChange:function(e){var t=e.target.value;l(t)}},x.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{"data-testid":"comparison-filter",name:"comparison",id:"comparison",value:s,onChange:function(e){var t=e.target.value;d(t)}},r.a.createElement("option",{selected:!0,value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a")),r.a.createElement("input",{"data-testid":"value-filter",type:"number",name:"numberCoparar",id:"numberCoparar",placeholder:"digite s\xf3 n\xfameros",value:E,onChange:function(e){var t=e.target.value;b(t)}}),r.a.createElement("button",{"data-testid":"button-filter",type:"button",onClick:function(){O([].concat(Object(i.a)(g),[{column:a,comparison:s,value:E}])),function(){var e=[];"igual a"===s&&(e=h.filter((function(e){return e[a]===E}))),"maior que"===s&&(e=h.filter((function(e){return e[a]>Number(E)})),console.log(e)),"menor que"===s&&(e=h.filter((function(e){return e[a]<Number(E)}))),j(e)}(),y(!0),function(){var e=x.filter((function(e){return e!==a}));C(e)}()}},"Add Filtro"))}function d(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],u=Object(n.useContext)(m),c=u.setFilterByName,i=u.data;return r.a.createElement("input",{"data-testid":"name-filter",value:a,onChange:function(e){var t=e.target.value;l(t),function(e){var t=i.filter((function(t){return t.name.includes(e)}));c(t)}(t)},placeholder:"pesquise um Planeta"})}function f(){var e=Object(n.useContext)(m),t=e.data,a=e.filterByName,l=e.dataFilter,u=e.filterOn,c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],d=i[1];Object(n.useEffect)((function(){t.length>0?d(!1):d(!0)}),[t]);var f=r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"climate"),r.a.createElement("th",null,"population"),r.a.createElement("th",null,"created"),r.a.createElement("th",null,"diameter"),r.a.createElement("th",null,"rotation period"),r.a.createElement("th",null,"edited"),r.a.createElement("th",null,"films"),r.a.createElement("th",null,"gravity"),r.a.createElement("th",null,"orbital period"),r.a.createElement("th",null,"surface water"),r.a.createElement("th",null,"terrain"),r.a.createElement("th",null,"url"))),r.a.createElement("tbody",null,(u?l:a).map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.climate),r.a.createElement("td",null,e.population),r.a.createElement("td",null,e.created),r.a.createElement("td",null,e.diameter),r.a.createElement("td",null,e.rotation_period),r.a.createElement("td",null,e.edited),r.a.createElement("td",null,e.films),r.a.createElement("td",null,e.gravity),r.a.createElement("td",null,e.orbital_period),r.a.createElement("td",null,e.surface_water),r.a.createElement("td",null,e.terrain),r.a.createElement("td",null,e.url))}))));return r.a.createElement("div",null,s?r.a.createElement("p",null,"Carregando..."):f)}var p=a(4),E=a.n(p),b=a(7);function v(e){var t=e.children,a=Object(n.useState)([]),l=Object(o.a)(a,2),u=l[0],c=l[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),d=s[0],f=s[1],p=Object(n.useState)([]),v=Object(o.a)(p,2),O=v[0],h=v[1],j=Object(n.useState)([]),y=Object(o.a)(j,2),g=y[0],x=y[1],C=Object(n.useState)(!1),S=Object(o.a)(C,2),k=S[0],w=S[1],F=Object(n.useState)(["diameter","population","orbital_period","rotation_period","surface_water"]),N=Object(o.a)(F,2),B=N[0],q=N[1],_={data:u,setData:c,filterByName:d,setFilterByName:f,filterByNumericValues:O,setFilterByNumericValues:h,dataFilter:g,setDataFilter:x,filterOn:k,setFilterOn:w,mapOptionContext:B,setMapOptionContext:q};function V(){return(V=Object(b.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.results,c(n),f(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]),r.a.createElement(m.Provider,{value:_},t)}var O=function(){return r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(d,null),r.a.createElement(s,null),r.a.createElement(f,null)))};a(16);u.a.render(r.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.2fe1325f.chunk.js.map