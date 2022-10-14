"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[7492,6006,7893],{57492:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var l=t(67294),a=t(81391),s=t(87398),r=t(26006),o=t(68947),c=t(12050),i=t(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h4"},"Arrow functions as class fields"),l.createElement(o.Z,null,"A class's body has ",l.createElement(i.BI,null,"this")," context, ",l.createElement(i.I,null,"arrow functions")," as",l.createElement(i.BI,null,"class fields")," uses the class's ",l.createElement(i.BI,null,"this")," context and",l.createElement(i.BI,null,"this")," inside arrow function will point to the ",l.createElement(i.I,null,"instance"),". However, because it created a ",l.createElement(i.I,null,"closure"),", not the function's",l.createElement(c.Z,null),l.createElement(i.I,null,"own binding"),", the value of ",l.createElement(i.BI,null,"this")," will not change based on the execution context."),l.createElement(a.Z,null,'class User {\n  name = "JavaScript";\n  showName = ()=> { console.log(this.name); }\n}\n\nconst user = new User();\nuser.showName() //  "JavaScript"\n'),l.createElement(o.Z,null,l.createElement(i.B,null,'"JavaScript"')," was printed on console, because ",l.createElement(i.BI,null,"this.name")," ","refers to the class context."),l.createElement(o.Z,null,"Now let's try to change the context of ",l.createElement(i.B,null,"this"),"."),l.createElement(a.Z,null,'class User {\n  name = "JavaScript";\n  showName = ()=> { console.log(this.name); }\n}\n\nconst user = new User();\nconst { showName } = user;  // Breaking clas context here\nshowName()  // "JavaScript"'),l.createElement(o.Z,null,"Still ",l.createElement(i.B,null,'"JavaScript"')," was printed on console, because the class's arrow function always refers to ",l.createElement(i.BI,null,"this")," of the class, which",l.createElement(i.BI,null,"never changes"),". Therefore ",l.createElement(i.B,null,'"JavaScript"')," was printed on the console, otherwise undefined should have been printed."),l.createElement(o.Z,null,"Because the class's arrow function always refers to ",l.createElement(i.BI,null,"this")," of the class, which ",l.createElement(i.B,null,"never changes"),", arrow functions are often said to be",l.createElement(i.B,null,'"auto-bound methods"'),"."),l.createElement(s.Z,{as:"h4"},"Arrow function not to be used with call, apply and bind"),l.createElement(o.Z,null,"The ",l.createElement(i.BI,null,"call()"),", ",l.createElement(i.BI,null,"apply()")," and ",l.createElement(i.BI,null,"bind()")," methods are not suitable as arrow functions, as these methods were designed to allow methods to execute with ",l.createElement(i.B,null,"different scopes"),", but arrow functions on the other hand establish",l.createElement(i.BI,null,"this")," only based on the scope of the context in which the arrow function is defined."),l.createElement(a.Z,null,"const obj = { a: 10 };\nvar a = 100;\nconst sum = (num1, num2) => this.a + num1 + num2;\n\nsum.call(obj, 5, 50);\t// 155\n//Because:  100 +    5   +  50 = 155\n//     \t    this.a  num1    num2\n"),l.createElement(o.Z,null,"Although the expected result was ",l.createElement(i.B,null,"65")," ( 10 + 5 + 50), we got",l.createElement(i.B,null,"155"),", proving that arrow functions point ",l.createElement(i.BI,null,"this")," to the enclosing scope, which is the ",l.createElement(i.BI,null,"window")," here."),l.createElement(o.Z,null,"Same behavior is observed with ",l.createElement(i.BI,null,"bind()")," and ",l.createElement(i.BI,null,"apply()"),l.createElement(c.Z,null),"methods."),l.createElement(r.Z,null,"Class fields are defined on the ",l.createElement(i.B,null,"instance"),", not on the",l.createElement(i.B,null,"prototype"),", so every instance creation would create a new function reference and allocate a new closure, potentially leading to more memory usage than a normal unbound method."))}},26006:(e,n,t)=>{t.d(n,{Z:()=>P});var l=t(4942),a=t(94184),s=t.n(a),r=t(67294),o=t(14289),c=t(78146),i=t(67115),u=t(76792),m=t(32209),h=t(41485),d=t(39602),E=t(44680),w=t(85893);const f=(0,d.Z)("h4");f.displayName="DivStyledAsH4";const p=(0,E.Z)("alert-heading",{Component:f}),b=(0,E.Z)("alert-link",{Component:i.Z}),v={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},B=r.forwardRef(((e,n)=>{const{bsPrefix:t,show:l,closeLabel:a,closeVariant:r,className:i,children:d,variant:E,onClose:f,dismissible:p,transition:b,...v}=(0,o.Ch)(e,{show:"onClose"}),B=(0,u.vE)(t,"alert"),Z=(0,c.Z)((e=>{f&&f(!1,e)})),g=!0===b?m.Z:b,x=(0,w.jsxs)("div",{role:"alert",...g?void 0:v,ref:n,className:s()(i,B,E&&`${B}-${E}`,p&&`${B}-dismissible`),children:[p&&(0,w.jsx)(h.Z,{onClick:Z,"aria-label":a,variant:r}),d]});return g?(0,w.jsx)(g,{unmountOnExit:!0,...v,ref:void 0,in:l,children:x}):l?x:null}));B.displayName="Alert",B.defaultProps=v;const Z=Object.assign(B,{Link:b,Heading:p});var g=t(83819),x=t(93379),y=t.n(x),I=t(7795),k=t.n(I),N=t(90569),S=t.n(N),C=t(3565),A=t.n(C),J=t(19216),j=t.n(J),T=t(44589),H=t.n(T),L=t(11137),U={};U.styleTagTransform=H(),U.setAttributes=A(),U.insert=S().bind(null,"head"),U.domAPI=k(),U.insertStyleElement=j(),y()(L.Z,U),L.Z&&L.Z.locals&&L.Z.locals;var _=function(e){var n=e.children,t=e.noteText,a=void 0===t?"Note":t,o=e.variant,c=void 0===o?"primary":o,i=s()((0,l.Z)({},"".concat(g.HL,"-note"),!0));return r.createElement("div",{className:i},r.createElement("div",{className:"note-text"},a),r.createElement(Z,{key:c,variant:c},n))};const P=(0,r.memo)(_)},11137:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(8081),a=t.n(l),s=t(23645),r=t.n(s)()(a());r.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const o=r}}]);