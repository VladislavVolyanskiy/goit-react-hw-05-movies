"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{4868:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7689),a=r(1087),s=r(3693),i="movie-list_list__x5AH+",c="movie-list_movieLink__6CRvY",u="movie-list_movieImg__sNZxs",o="movie-list_movieTitle__9AfWX",f=r(184),m=function(e){var t=e.items,r=(0,n.TH)(),m=t.map((function(e){var t=e.id,n=e.title,i=e.poster_path;return(0,f.jsx)("li",{className:c,children:(0,f.jsxs)(a.rU,{state:{from:r},to:"/movies/".concat(t),children:[(0,f.jsx)("img",{src:i?"https://image.tmdb.org/t/p/original/".concat(i):s,alt:n,className:u}),(0,f.jsx)("p",{className:o,children:n})]})},t)}));return(0,f.jsx)("ul",{className:i,children:m})}},9797:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(3433),a=r(5861),s=r(9439),i=r(7757),c=r.n(i),u=r(2791),o=r(1087),f=r(4691),m="movie-page_moviePage__title__LzrEe",p="movie-page_noResults__text__3XfgJ",l="movie-search-form_form__0tWiM",v="movie-search-form_form__input__Rq6eK",h="movie-search-form_form__btn__pv5-5",d=r(184),_=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,s.Z)(r,2),a=n[0],i=n[1];return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),i("")},className:l,children:[(0,d.jsx)("input",{className:v,name:"search",value:a,onChange:function(e){var t=e.target.value;i(t)},placeholder:"Type movie name",required:!0}),(0,d.jsx)("button",{type:"submit",className:"btn ".concat(h),children:"Find"})]})},g=r(4868),x=r(3749),b=function(){var e=(0,u.useState)([]),t=(0,s.Z)(e,2),r=t[0],i=t[1],l=(0,u.useState)(!1),v=(0,s.Z)(l,2),h=v[0],b=v[1],w=(0,u.useState)(null),j=(0,s.Z)(w,2),Z=j[0],k=j[1],y=(0,u.useState)(!1),N=(0,s.Z)(y,2),S=N[0],C=N[1],q=(0,o.lr)(),H=(0,s.Z)(q,2),R=H[0],L=H[1],T=R.get("query");(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,x.gH)(T);case 4:t=e.sent,0===(r=t.results).length&&C(!0),i((0,n.Z)(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),k(e.t0.message);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();T&&e()}),[T]);return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h2",{className:m,children:"Search movie"}),(0,d.jsx)(_,{onSubmit:function(e){i([]),k(null),C(!1),L({query:e})}}),r.length>0&&(0,d.jsx)(g.Z,{items:r}),S&&(0,d.jsxs)("p",{className:p,children:["We don't have any movies for ",(0,d.jsx)("b",{children:T})]}),h&&(0,d.jsx)("div",{className:"loading__container",children:(0,d.jsx)(f.Yt,{height:"120",width:"120",color:"#f36721",glassColor:"#ffffff"})}),Z&&(0,d.jsx)("p",{children:"Oops. Something goes wrong. Please try again."})]})}},3749:function(e,t,r){r.d(t,{Cr:function(){return f},Df:function(){return c},Yp:function(){return u},_$:function(){return o},gH:function(){return m}});var n=r(5861),a=r(7757),s=r.n(a),i=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"1d0db205f4afc65ebf6adbf1c9b73dc6"}}),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3693:function(e,t,r){e.exports=r.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=797.d7f9496f.chunk.js.map