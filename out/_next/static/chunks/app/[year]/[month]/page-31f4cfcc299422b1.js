(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879,931],{1339:function(e,a,t){Promise.resolve().then(t.bind(t,171))},171:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var n=t(3827),s=t(4090),r=t(2991),l=t(207),c=t(3437),i=t(1263),d=t(9315),u=t(7835),o=t(9686),h=t(666),x=t(4970),b=t(5518);let m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["January","February","March","April","May","June","July","August","September","October","November","Decemeber"],v=e=>f[(0,r.j)(e)],y=(e,a)=>(0,l.J)(new Date(e,a)),p=e=>(0,c.w)((0,i.N)(e)),j=e=>(0,d.z)(e,1),w=e=>(0,u.W)(e,1),g=e=>(0,o.D)({start:(0,i.N)(e),end:(0,h.V)(e)}),N=(e,a)=>(0,x.K)(e,a),k=e=>(0,b.WU)(e,"MM-dd-yyyy");function D(e){var a;return(0,n.jsxs)("a",{href:"#",className:"relative block max-w-sm p-12 bg-white border border-gray-200 shadow hover:bg-gray-100",style:{backgroundImage:'url("'.concat(null===(a=e.data)||void 0===a?void 0:a.thumbnailSrc,'")'),backgroundSize:"100% 100%"},children:["\xa0",(0,n.jsx)("span",{className:"absolute top-3 right-5 font-bold ".concat(null!=e.data?"bg-blue-900 text-white rounded-full px-3 py-1":""),children:e.value})]})}function S(e){let[a,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{t([]),r(e.date)},[e.date]);let r=async e=>{try{let a=await fetch("https://amock.io/api/launch/new/".concat(k(e)));await a.json()}catch(e){console.log(e)}let a=[{date:new Date(2024,0,4),thumbnailSrc:"/gran-turismo-7__1x1.webp",bannerSrc:"/gran-turismo-7__16x9.webp"}],n=[];g(e).map((e,t)=>{console.log(e,new Date(2024,0,4),N(e,new Date(2024,1,4))),n.push({value:t+1,selected:a.find(a=>N(e,a.date))})}),console.log("processedData",n),t(n)};return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"grid grid-cols-7 py-3 gap-2",children:[m.map((e,a)=>(0,n.jsx)("div",{className:"text-center font-bold",children:e},a)),Array(p(e.date)).fill(1).map((e,a)=>(0,n.jsx)("div",{className:"invisible"},a)),a.map(e=>(0,n.jsx)(D,{value:e.value,data:e.selected},e.value))]})})}var _=t(1829),C=t(1399);function E(e){return(0,n.jsx)("div",{className:"p-3",children:(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"#",onClick:e.previousClick,children:(0,n.jsx)(C.bUI,{})})}),(0,n.jsxs)("div",{className:"text-2xl",children:[v(e.date)," ",(0,_.S)(e.date)]}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"#",onClick:e.nextClick,children:(0,n.jsx)(C.Dli,{})})})]})})}function M(e){let[a,t]=(0,s.useState)(new Date);return(0,s.useEffect)(()=>{y(e.year,e.month-1)&&t(new Date(e.year,e.month-1))},[e.year,e.month]),(0,n.jsxs)("div",{className:"p-3",children:[(0,n.jsx)(E,{date:a,previousClick:()=>t(w(a)),nextClick:()=>t(j(a))}),(0,n.jsx)("hr",{}),(0,n.jsx)(S,{date:a})]})}}},function(e){e.O(0,[699,366,971,69,744],function(){return e(e.s=1339)}),_N_E=e.O()}]);