"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[1051],{11051:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(67294),r=i(83819),a=i(7527),o=function(){return n.createElement("div",{className:"".concat(r.HL,"-time-line-wrapper")},n.createElement(a.Z,{heading:"ECMAScript Versions",timeLineList:[{date:"June, 1997",mileStone:"ES1",title:"First edition"},{date:"June, 1998",mileStone:"ES2",title:"Editorial Changes",description:"Alignment with ISO/IEC 16262 standard"},{date:"Dec, 1999",mileStone:"ES3",title:"RegExp, Exception Handling",description:"Added RegExp, better string handling, try/catch, number formatting, new control statements, etc."},{date:"",mileStone:"ES4",title:"Fourth edition was abandoned",description:"Abandoned, due to political differences concerning language complexity."},{date:"Dec, 2009",mileStone:"ES5",title:'"strict mode", getter, JSON',description:'Added "strict mode", getter-setter, JSON support and reflection of object properties.'},{date:"June, 2011",mileStone:"ES5.1",title:"Alignment with ISO/IEC 16262:2011"},{date:"June, 2015",mileStone:"ES6",title:"class, modules, let, template literals",description:"ECMAScript 2015, added let, const, for...of, maps, sets, WeakMap, promises, etc."},{date:"June, 2016",mileStone:"ES7",title:"Block-scope, destructuring, async/await",description:"Added exponential operator (**),  Array.prototype.includes(), async/await for async programming."},{date:"June, 2017",mileStone:"ES8",title:"Object.values, Object.entries",description:"async/await constructions which use generators and promises, getOwnPropertyDescriptors"},{date:"June, 2018",mileStone:"ES9",title:"Spread operator and Rest parameters (...), finally",description:"Added Promise.prototype.finally and updates to RegExp."},{date:"June, 2019",mileStone:"ES10",title:"catch binding became optional, Array.sort() became stable",description:"Added flat(), flatMap() to Array, modified Object.fromEntries."},{date:"June, 2020",mileStone:"ES11",title:"BigInt, nullish coalescing (??) and globalThis",description:"Added optional chaining (?) for nested objects."},{date:"June, 2021",mileStone:"ES12",title:"replaceAll() for string, Promise.any, AggregateError, WeakRef",description:"Added logical assignment operators (??=, &&= , ||=). Array.sort() made more precise."},{date:"June, 2022",mileStone:"ES13",title:"at(), top level await, error.cause",description:"Better regular expression indexing, Added at() to object."}]}))};const l=(0,n.memo)(o)},7527:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(4942),r=i(94184),a=i.n(r),o=i(67294),l=i(83819),s=i(87398),c=i(68947),p=i(93379),d=i.n(p),m=i(7795),g=i.n(m),u=i(90569),f=i.n(u),x=i(3565),h=i.n(x),k=i(19216),b=i.n(k),S=i(44589),E=i.n(S),w=i(12781),y={};y.styleTagTransform=E(),y.setAttributes=h(),y.insert=f().bind(null,"head"),y.domAPI=g(),y.insertStyleElement=b(),d()(w.Z,y),w.Z&&w.Z.locals&&w.Z.locals;var A=function(e){var t=e.timeLineList,i=e.heading,r=a()((0,n.Z)({},"".concat(l.HL,"-time-line"),!0));return o.createElement(o.Fragment,null,o.createElement(c.Z,{textAlign:"center"},o.createElement(s.Z,{as:"h2"},i)),o.createElement("div",{className:r},t.map((function(e,t){return o.createElement("div",{key:e.date,className:"container ".concat(t%2==0?"left":"right")},o.createElement("div",{className:"timeStamp"},e.date),o.createElement("span",{className:"milestone"},e.mileStone),o.createElement("div",{className:"content"},o.createElement("h2",null,e.title),o.createElement("p",null,e.description)))}))))};const v=(0,o.memo)(A)},12781:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(8081),r=i.n(n),a=i(23645),o=i.n(a)()(r());o.push([e.id,".ui-geeks-time-line{position:relative;width:100%;margin:0 auto;padding:15px 0;font-size:0.8rem !important}.ui-geeks-time-line *,.ui-geeks-time-line *::before,.ui-geeks-time-line *::after{box-sizing:border-box}.ui-geeks-time-line::after{content:'';position:absolute;width:2px;background:#389e7f;top:0;bottom:0;left:50%;margin-left:-1px}.ui-geeks-time-line .container{padding:10px 30px;position:relative;background:inherit;width:50%}.ui-geeks-time-line .container.left{left:0;display:inline-block}.ui-geeks-time-line .container.right{left:25%}.ui-geeks-time-line .container::after{content:'';position:absolute;width:16px;height:16px;top:calc(50% - 8px);right:-8px;background:#389e7f;border:2px solid #389e7f;border-radius:16px;z-index:1}.ui-geeks-time-line .container.right::after{left:-8px}.ui-geeks-time-line .container::before{content:'';position:absolute;width:50px;height:2px;top:calc(50% - 1px);right:8px;background:#389e7f;z-index:1}.ui-geeks-time-line .container.right::before{left:8px}.ui-geeks-time-line .container .timeStamp{position:absolute;display:inline-block;top:calc(50% - 8px);text-align:center;font-size:14px;font-weight:bold;color:#6e45e2;text-transform:uppercase;letter-spacing:1px;z-index:1}.ui-geeks-time-line .container.left .timeStamp{right:-110px}.ui-geeks-time-line .container.right .timeStamp{left:-110px}.ui-geeks-time-line .container .milestone{position:absolute;display:inline-block;width:40px;height:40px;padding:8px 0px;top:calc(50% - 20px);background:#5765c7;border:2px solid #5765c7;border-radius:40px;text-align:center;font-size:18px;color:#ffffff;z-index:1;font-size:0.8rem}.ui-geeks-time-line .container.left .milestone{right:56px}.ui-geeks-time-line .container.right .milestone{left:56px}.ui-geeks-time-line .container .content{padding:10px 90px 10px 15px;background:#e1e1e1;position:relative;border-radius:0 15px 15px 0}.ui-geeks-time-line .container.right .content{padding:10px 15px 10px 90px;border-radius:15px 0 0 15px}.ui-geeks-time-line .container .content h2{margin:0 0 5px 0;font-size:18px;font-size:1rem;font-weight:normal;font-weight:bold}.ui-geeks-time-line .container .content p{margin:0;line-height:22px;word-break:break-word}@media (max-width: 767.98px){.ui-geeks-time-line::after{left:90px}.ui-geeks-time-line .container{width:100%;padding-left:120px;padding-right:30px}.ui-geeks-time-line .container.right{left:0%;margin-left:0}.ui-geeks-time-line .container.left::after,.ui-geeks-time-line .container.right::after{left:82px}.ui-geeks-time-line .container.left::before,.ui-geeks-time-line .container.right::before{left:98px;border-color:transparent #006e51 transparent transparent}.ui-geeks-time-line .container.left .timeStamp,.ui-geeks-time-line .container.right .timeStamp{right:auto;left:-5px}.ui-geeks-time-line .container.left .milestone,.ui-geeks-time-line .container.right .milestone{right:auto;left:146px}.ui-geeks-time-line .container.left .content,.ui-geeks-time-line .container.right .content{padding:30px 30px 30px 90px;border-radius:500px 0 0 500px}}.device-type-mobile .ui-geeks-time-line-wrapper{margin-left:25px}\n",""]);const l=o}}]);