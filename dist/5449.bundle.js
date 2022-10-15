"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5449,6006,7893,6148,9045,6442,7075],{55449:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(87398),o=n(26006),i=n(68947),s=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Default Export"),l.createElement(i.Z,null,"There can be only one ",l.createElement(s.BI,null,"default export")," per module. They can be imported with any name. Default members are imported without curly brackets ","{ }","."),l.createElement(a.Z,null,'// "./exported-module.js"\nexport default let x = 10;\nexport default function greet() { console.log("Hello!"); };'),l.createElement(o.Z,null,"If multiple default exports are written in a module, each default export will ",l.createElement(s.B,null,"overwrite")," the previous one. In the above example,",l.createElement(s.B,null,'"greet()"')," will be the default exported member."),l.createElement(a.Z,null,'// "./main-program.js"\nimport greet from "./exported-module.js";\ngreet();  // "Hello!"'),l.createElement(o.Z,null,"The export default syntax allows any expression. For example:"," ",l.createElement(s.B,null,"export default 10 + 20"),";"))}},26006:(e,t,n)=>{n.d(t,{Z:()=>F});var l=n(4942),a=n(94184),r=n.n(a),o=n(67294),i=n(14289),s=n(78146),m=n(67115),c=n(76792),d=n(32209),u=n(41485),p=n(39602),x=n(44680),f=n(85893);const h=(0,p.Z)("h4");h.displayName="DivStyledAsH4";const v=(0,x.Z)("alert-heading",{Component:h}),b=(0,x.Z)("alert-link",{Component:m.Z}),g={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:o,className:m,children:p,variant:x,onClose:h,dismissible:v,transition:b,...g}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,c.vE)(n,"alert"),E=(0,s.Z)((e=>{h&&h(!1,e)})),y=!0===b?d.Z:b,w=(0,f.jsxs)("div",{role:"alert",...y?void 0:g,ref:t,className:r()(m,Z,x&&`${Z}-${x}`,v&&`${Z}-dismissible`),children:[v&&(0,f.jsx)(u.Z,{onClick:E,"aria-label":a,variant:o}),p]});return y?(0,f.jsx)(y,{unmountOnExit:!0,...g,ref:void 0,in:l,children:w}):l?w:null}));Z.displayName="Alert",Z.defaultProps=g;const E=Object.assign(Z,{Link:b,Heading:v});var y=n(83819),w=n(93379),k=n.n(w),C=n(7795),j=n.n(C),N=n(90569),T=n.n(N),H=n(3565),A=n.n(H),B=n(19216),I=n.n(B),L=n(44589),_=n.n(L),D=n(11137),P={};P.styleTagTransform=_(),P.setAttributes=A(),P.insert=T().bind(null,"head"),P.domAPI=j(),P.insertStyleElement=I(),k()(D.Z,P),D.Z&&D.Z.locals&&D.Z.locals;var $=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,m=r()((0,l.Z)({},"".concat(y.HL,"-note"),!0));return o.createElement("div",{className:m},o.createElement("div",{className:"note-text"},a),o.createElement(E,{key:s,variant:s},t))};const F=(0,o.memo)($)},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),r=n(23645),o=n.n(r)()(a());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const i=o}}]);