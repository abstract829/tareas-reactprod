(this["webpackJsonptareas-app"]=this["webpackJsonptareas-app"]||[]).push([[5],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"Users",(function(){return g}));var c=r(98),s=r(2),n=r(95),a=r(248),i=r(1),j=function(){var e=Object(s.h)().id,t=Object(n.a)({id:e}),r=t.user,c=t.tareas;return Object(i.jsxs)("div",{children:[r?Object(i.jsxs)("h2",{children:["Tareas de ",r.name]}):"",c.length>0?c.map((function(e){return Object(i.jsx)(a.a,{className:"tarea-item",children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)(a.a.Title,{children:e.title}),Object(i.jsx)(a.a.Text,{children:e.desc})]})},e.id)})):Object(i.jsx)("h3",{children:"El usuario no tiene tareas asignadas"})]})},d=r(0),b=r(4),o=r(9),h=r(8),l=r.n(h),O=r(10),x=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=d.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,s=e.striped,n=e.bordered,a=e.borderless,j=e.hover,d=e.size,h=e.variant,u=e.responsive,p=Object(o.a)(e,x),m=Object(O.a)(r,"table"),v=l()(c,m,h&&"".concat(m,"-").concat(h),d&&"".concat(m,"-").concat(d),s&&"".concat(m,"-striped"),n&&"".concat(m,"-bordered"),a&&"".concat(m,"-borderless"),j&&"".concat(m,"-hover")),f=Object(i.jsx)("table",Object(b.a)(Object(b.a)({},p),{},{className:v,ref:t}));if(u){var N="".concat(m,"-responsive");return"string"===typeof u&&(N="".concat(N,"-").concat(u)),Object(i.jsx)("div",{className:N,children:f})}return f})),p=r(25),m=function(e){var t=e.users;return Object(i.jsxs)(u,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Nombre"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Tareas"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:Object(i.jsx)(p.b,{to:"tareas/".concat(e.id),children:"Ver"})})]},e.id)}))})]})},v=r(42),f=[{to:"tareas/:id",path:"/tareas/:id",Component:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(j,{})})},name:"Tareas de un usuario"},{to:"",path:"/",Component:function(){var e=Object(d.useContext)(v.a).users;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Listado de usuarios"}),Object(i.jsx)("hr",{}),Object(i.jsx)(m,{users:e})]})},name:"Usuarios"}],N=r(40),T=r(61),C=r(30),g=function(){return Object(i.jsx)(C.a,{children:Object(i.jsx)(T.a,{children:Object(i.jsx)(c.a,{children:Object(i.jsx)(N.a,{children:Object(i.jsx)(s.d,{children:f.map((function(e){var t=e.path,r=e.Component;return Object(i.jsx)(s.b,{path:t,element:Object(i.jsx)(r,{})},t)}))})})})})})};t.default=g}}]);
//# sourceMappingURL=5.5a13d99b.chunk.js.map