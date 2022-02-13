"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[836],{6836:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,c,o=t(8152),i=t(168),s=t(6871),u=t(3504),p=t(2791),l=t(5751),h=t(8183),d=t(184),f=l.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px auto 0;\n  max-width: 800px;\n"]))),v=l.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  font-size: 20px;\n  line-height: 1.23;\n  padding: 20px;\n  justify-content: center;\n  color: black;\n  li + li {\n    margin-left: 20px;\n  }\n  a:hover {\n    color: blue;\n  }\n"]))),g=l.ZP.button(c||(c=(0,i.Z)(["\n  align-self: flex-start;\n  border-radius: 0.5rem;\n  height: 34px;\n  border: 1px solid grey;\n  background-color: grey;\n  cursor: pointer;\n  color: white;\n  font-weight: 700;\n  padding: 0.5rem;\n\n  :hover {\n    background-color: white;\n    color: grey;\n  }\n"])));function x(){var n=(0,s.UO)().movieId,e=(0,p.useState)(null),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,s.s0)();return(0,p.useEffect)((function(){(0,h.Pg)(n).then(a).catch((function(n){console.log(n)}))}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{onClick:function(){return c(-1)},children:"go back"}),r&&(0,d.jsxs)(f,{children:[(0,d.jsx)("img",{width:200,src:r.poster_path,alt:"poster"}),(0,d.jsxs)("h1",{children:[r.title,"(",r.release_year,")"]}),(0,d.jsx)("p",{children:"User Score: ".concat(r.vote_average)}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:r.overview}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:r.genres.join(" ")}),(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)(v,{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"/movies/".concat(n,"/cast"),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})})]}),(0,d.jsx)(s.j3,{context:n})]})]})}},8183:function(n,e,t){t.d(e,{Hg:function(){return l},qF:function(){return h},Pg:function(){return d},gI:function(){return f},Xj:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),s="https://api.themoviedb.org/3",u="aa799e6d0297de166f5b00a47e312b46",p="https://critics.io/img/movies/poster-placeholder.png",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/trending/movie/day?api_key=").concat(u),n.next=3,i().get(e);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=1&include_adult=false"),n.next=3,i().get(t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"?api_key=").concat(u),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data,(o=g(a)).genres=o.genres.map((function(n){return n.name})),n.abrupt("return",o);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data.cast,n.abrupt("return",a.map(x));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data.results,o=a.map((function(n){return{author:n.author,content:n.content}})),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(n){var e=Object.assign({},n);return e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path:e.poster_path=p,e.release_year=e.release_date?e.release_date.slice(0,4):"Unknown",e.vote_average="".concat(10*e.vote_average,"%"),e},x=function(n){var e=n.original_name,t=n.profile_path,r={name:e,character:n.character};return r.path=t?"https://image.tmdb.org/t/p/w500"+t:p,r}}}]);
//# sourceMappingURL=836.9e9074a0.chunk.js.map