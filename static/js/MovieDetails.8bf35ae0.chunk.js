"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{565:function(e,n,t){t.d(n,{mH:function(){return l},bI:function(){return d},l2:function(){return h},fU:function(){return p},sv:function(){return f}});var r=t(861),c=t(757),a=t.n(c),i="https://api.themoviedb.org/3",s="aa799e6d0297de166f5b00a47e312b46";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("No found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return o("".concat(i,"/trending/movie/day?api_key=").concat(s," "))}function d(e){return o("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function h(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US "))}function p(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function f(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US "))}},260:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(152),c=t(791),a=t(523),i=t(271),s=t(565),o=t(937),u="MovieDetails_description__WYtxY",l="MovieDetails_desc__0wr74",d=t(184),h=(0,c.lazy)((function(){return t.e(709).then(t.bind(t,900))})),p=(0,c.lazy)((function(){return t.e(753).then(t.bind(t,785))}));function f(){var e=(0,i.UO)().movieId,n=(0,c.useState)(null),t=(0,r.Z)(n,2),f=t[0],v=t[1],x=(0,i.$B)(),m=x.url,j=x.path;return(0,c.useEffect)((function(){s.l2(e).then((function(e){return v(e)}))}),[e]),(0,d.jsx)(d.Fragment,{children:f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h1",{children:[f.title,"(",f.release_date,")"]}),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w500".concat(f.poster_path):o,alt:f.title||f.name}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("p",{children:"Overview:"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("p",{children:"Genres :"}),(0,d.jsx)("span",{children:f.genres.map((function(e){return e.name})).join("/")}),(0,d.jsxs)("p",{children:["Use score: ",(0,d.jsx)("span",{children:f.vote_average})]})]})]}),(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.OL,{to:"".concat(m,"/cast"),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.OL,{to:"".concat(m,"/reviews"),children:"Reviews"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(c.Suspense,{children:[(0,d.jsx)(i.AW,{path:"".concat(j,"/cast"),children:f&&(0,d.jsx)(h,{movieId:e})}),(0,d.jsx)(i.AW,{path:"".concat(j,"/reviews"),children:(0,d.jsx)(p,{movieId:e})})]})]})})}},937:function(e,n,t){e.exports=t.p+"static/media/imagePlaceholder.6787cdde6ac790c7eded.png"}}]);
//# sourceMappingURL=MovieDetails.8bf35ae0.chunk.js.map