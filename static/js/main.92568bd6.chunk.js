(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(7),r=t.n(l),c=t(1),i=t(5),s=(t(13),t(4));t(14),t(15);function u(e){var a=e.data,t=e.callback,n=[].concat(Object(c.a)(a.languages),Object(c.a)(a.tools));return o.a.createElement("div",{className:"card"+(a.featured?" border":"")},o.a.createElement("div",null,o.a.createElement("img",{src:a.logo,alt:""}),o.a.createElement("div",{className:"desc"},o.a.createElement("div",{className:"group"},o.a.createElement("h4",null,a.company),a.new&&o.a.createElement("label",{className:"new"},"NEW!"),a.featured&&o.a.createElement("label",{className:"featured"},"FEATURED")),o.a.createElement("h5",null,a.position),o.a.createElement("div",{className:"group"},o.a.createElement("p",null,a.postedAt),o.a.createElement("p",null,a.contract),o.a.createElement("p",null,a.location)))),o.a.createElement("div",null,n.map((function(e){return o.a.createElement("button",{key:e,onClick:function(){return t(e)}},e)}))))}function d(e){var a=e.cardsData,t=e.callback;return o.a.createElement("div",{className:"list-container"},o.a.createElement("div",{className:"list"},a.map((function(e){return o.a.createElement(u,{key:e.id,data:e,callback:t})}))))}t(16);function m(e){var a=e.name,t=e.callback,n=e.callbackAll;return o.a.createElement("div",{className:"filter"+(0===a.length?" hide-display":"")},o.a.createElement("div",null,a.map((function(e){return o.a.createElement("label",{key:e,className:"button"},o.a.createElement("p",null,e),o.a.createElement("span",{onClick:function(){return t(e)}},o.a.createElement("img",{src:"./images/icon-remove.svg",alt:""})))}))),o.a.createElement("label",{onClick:function(){return n()}},"Clear"))}var g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(s),u=Object(i.a)(r,2),g=u[0],p=u[1];return Object(n.useEffect)((function(){var e=s.filter((function(e){return[].concat(Object(c.a)(e.languages),Object(c.a)(e.tools)).filter((function(e){return t.includes(e)})).length===t.length}));t.length>0?p(e):p(s)}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("img",{src:"./images/bg-header-desktop.svg",alt:"header"})),o.a.createElement(m,{name:t,callback:function(e){return function(e){var a=t.filter((function(a){return a!==e}));l(a)}(e)},callbackAll:function(){l([])}}),o.a.createElement(d,{cardsData:g,callback:function(e){return a=e,void(t.indexOf(a)<=-1&&l([].concat(Object(c.a)(t),[a])));var a}}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.92568bd6.chunk.js.map