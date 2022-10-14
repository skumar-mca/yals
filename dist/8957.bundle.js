"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[8957,6006,7893],{48957:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(67294),a=n(81391),r=n(87398),o=n(26006),s=n(68947),i=n(12050),c=n(9167),m=[{label:l.createElement(l.Fragment,null,l.createElement(c.B,null,"Fast"),", ",l.createElement(c.B,null,"standard")," and ",l.createElement(c.BI,null,"JIT optimizable"),l.createElement(i.Z,null)," method of setting prototype.")},{label:l.createElement(l.Fragment,null,"High ",l.createElement(c.B,null,"readability")," and ",l.createElement(c.B,null,"maintainability."))}],u=[{label:l.createElement(l.Fragment,null,"Classes, especially with ",l.createElement(c.I,null,"private")," properties are",l.createElement(c.BI,null,"less optimized"),".")},{label:l.createElement(l.Fragment,null,"Not supported in older environments and ",l.createElement(c.B,null,"may need transpilers"),".")}];const p=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Prototypes with Constructors"),l.createElement(s.Z,null,"The power of prototypes is that we can reuse a set of properties if they should be present on every instance."),l.createElement(s.Z,null,l.createElement(c.IU,null,"Example 1:"),l.createElement(a.Z,null,"function User(name) { this.name = name; }\n"),l.createElement(s.Z,null,"The below statement will add the ",l.createElement(c.BI,null,"showDetail()")," method to every",l.createElement(i.Z,null)," ",l.createElement(c.I,null,"instance")," created from ",l.createElement(c.I,null,"constructor function"),l.createElement(c.BI,null,"User()"),". This is because every ",l.createElement(c.I,null,"instance")," created from a",l.createElement(i.Z,null)," ",l.createElement(c.I,null,"constructor function")," will automatically have the constructor's prototype property as it's ",l.createElement(c.BI,null,"[[Prototype]]"),"."),l.createElement(a.Z,null,"User.prototype.showDetails = function() {\n  console.log(`Username: ${this.name}`);\n}\n"),l.createElement(a.Z,null,'const users = [new User("John"), new User("Jack")];\nusers.map((usr) => usr.showDetails());\n// Output:\n// "Username: John"\n// "Username: Jack"\n')),l.createElement(s.Z,null,l.createElement(c.IU,null,"Example 2:"),l.createElement(s.Z,null,"Implementing the same using ",l.createElement(c.I,null,"classes"),"."),l.createElement(a.Z,null,"class User{\n  constructor(name) { this.name = name; }\n  showDetail() { \n    console.log(`Username: ${this.name}`); \n  }\n}\n")),l.createElement(o.Z,null,"Because ",l.createElement(c.B,null,"prototype")," references the same object as the [[Prototype]] of all instances, we can change the behavior of all instances by",l.createElement(c.B,null,"mutating the prototype")," of the constructor function."),l.createElement(o.Z,null,"Extending any ",l.createElement(c.B,null,"built-in prototype")," can be a ",l.createElement(c.B,null,"misfeature"),". For example, defining",l.createElement(i.Z,null),l.createElement(c.B,null,"Array.prototype.myMethod = function () "),"and then using myMethod() on all array instances. This misfeature is called ",l.createElement(c.B,null,'"Monkey Patching"'),". Doing monkey patching risks forward compatibility, because if JavaScript, in future, adds",l.createElement(c.B,null,'"myMethod()"')," but with a different signature, it will break the code."),l.createElement(s.Z,null,"Due to historical reasons, some ",l.createElement(c.I,null,"built-in")," constructors ",l.createElement(i.Z,null),l.createElement(c.I,null,"prototype")," properties are ",l.createElement(c.I,null,"instances")," themselves."),l.createElement(s.Z,null,l.createElement(c.IU,null,"For Example:"),l.createElement(s.Z,null,l.createElement(c.BI,null,"Number.prototype is a number 0")," (zero)."),l.createElement(a.Z,null,"Number.prototype + 1; // 1"),l.createElement(s.Z,null,"Similarly, below prototypes are instances themselves"),l.createElement(a.Z,null,'Array.prototype.map((x) => x +1); // []\nString.prototype + "a"; // "a')),l.createElement(s.Z,null,l.createElement(c.IU,null,"Pros of using ",l.createElement(c.B,null,"prototype")),l.createElement(c.GS,{unOrdered:!0,items:m})),l.createElement(s.Z,null,l.createElement(c.IU,null,"Cons of using ",l.createElement(c.B,null,"prototype")),l.createElement(c.GS,{unOrdered:!0,items:u})))}},26006:(e,t,n)=>{n.d(t,{Z:()=>O});var l=n(4942),a=n(94184),r=n.n(a),o=n(67294),s=n(14289),i=n(78146),c=n(67115),m=n(76792),u=n(32209),p=n(41485),E=n(39602),d=n(44680),h=n(85893);const y=(0,E.Z)("h4");y.displayName="DivStyledAsH4";const f=(0,d.Z)("alert-heading",{Component:y}),b=(0,d.Z)("alert-link",{Component:c.Z}),Z={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},g=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:o,className:c,children:E,variant:d,onClose:y,dismissible:f,transition:b,...Z}=(0,s.Ch)(e,{show:"onClose"}),g=(0,m.vE)(n,"alert"),v=(0,i.Z)((e=>{y&&y(!1,e)})),w=!0===b?u.Z:b,x=(0,h.jsxs)("div",{role:"alert",...w?void 0:Z,ref:t,className:r()(c,g,d&&`${g}-${d}`,f&&`${g}-dismissible`),children:[f&&(0,h.jsx)(p.Z,{onClick:v,"aria-label":a,variant:o}),E]});return w?(0,h.jsx)(w,{unmountOnExit:!0,...Z,ref:void 0,in:l,children:x}):l?x:null}));g.displayName="Alert",g.defaultProps=Z;const v=Object.assign(g,{Link:b,Heading:f});var w=n(83819),x=n(93379),I=n.n(x),B=n(7795),k=n.n(B),U=n(90569),C=n.n(U),N=n(3565),F=n.n(N),P=n(19216),T=n.n(P),D=n(44589),S=n.n(D),A=n(11137),J={};J.styleTagTransform=S(),J.setAttributes=F(),J.insert=C().bind(null,"head"),J.domAPI=k(),J.insertStyleElement=T(),I()(A.Z,J),A.Z&&A.Z.locals&&A.Z.locals;var j=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,s=e.variant,i=void 0===s?"primary":s,c=r()((0,l.Z)({},"".concat(w.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},a),o.createElement(v,{key:i,variant:i},t))};const O=(0,o.memo)(j)},11137:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(8081),a=n.n(l),r=n(23645),o=n.n(r)()(a());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const s=o}}]);