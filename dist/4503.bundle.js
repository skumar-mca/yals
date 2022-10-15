"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[4503,2108,6006,7893,6148,9045,6442,7075],{84503:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),a=n(81391),r=n(87398),s=n(68947),i=n(9167),o=n(62108);const c=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Literals"),l.createElement(s.Z,null,"Literals represent ",l.createElement(i.B,null,"values")," in JavaScript. These are the values of the variables and not the type of the variables.",l.createElement(i.cJ,null),l.createElement(i.cJ,null),l.createElement(i.GS,{unOrdered:!0,items:[{label:"Numeric Literals"},{label:"String Literals"},{label:"Boolean Literals"},{label:"Array Literals"},{label:"Object Literals"},{label:"RegExp Literals"}]}),l.createElement(r.Z,{as:"h3"},"Numeric Literals"),l.createElement(s.Z,null,"Any valid integer and floating point numbers."),l.createElement(a.Z,null,"// Examples:\nlet a = 20;\nlet b = 12.25;\nlet a = 011;\nlet a = 0x1123;\n")),l.createElement(o.default,null),l.createElement(s.Z,null,l.createElement(r.Z,{as:"h3"},"Boolean Literals"),l.createElement(s.Z,null,"Boolean type has only 2 literal values: ",l.createElement(i.BI,null,"true")," and",l.createElement(i.BI,null,"false"),".")),l.createElement(s.Z,null,l.createElement(r.Z,{as:"h3"},"Array Literals"),l.createElement(s.Z,null,"An array literal is a list of zero or more expressions enclosed in square brackets ",l.createElement(i.B,null,"[]"),"."),l.createElement(s.Z,null,l.createElement(a.Z,null,"const arr = [1, 2, 10, 20];")),l.createElement(s.Z,null,"If we put two commas in a row in an array literal, the array",l.createElement(i.B,null,"leaves the empty slot")," for the unspecified elements. Array traversal methods like ",l.createElement(i.I,null,"map()"),", skip the empty slots.",l.createElement(a.Z,null,"const arr = [1, 2, 10, , 20];   // [1, 2, 10, empty, 20]")),l.createElement(s.Z,null,"If we put a trailing comma at the end of the list, then the comma is",l.createElement(i.B,null,"ignored"),".",l.createElement(a.Z,null,"const arr = [1, 2, 10,]; // [1, 2, 10]"))),l.createElement(s.Z,null,l.createElement(r.Z,{as:"h3"},"Object Literals"),l.createElement(s.Z,null,"An object literal is a list of zero or more pairs of property name and value, enclosed in ",l.createElement(i.B,null,"{}"),"."),l.createElement(a.Z,null,'const obj = { a: 10, "invalid-key", 20 };'),l.createElement(s.Z,null,"Property names that are ",l.createElement(i.B,null,"valid identifiers"),", can be accessed with",l.createElement(i.B,null,"dot notation"),".",l.createElement(a.Z,null,"console.log(obj.a);   // 10")),l.createElement(s.Z,null,"Property names that are ",l.createElement(i.B,null,"not valid identifiers"),", can be accessed with ",l.createElement(i.B,null,"bracket notation []"),".",l.createElement(a.Z,null,'console.log(obj["invalid-key"]);    // 20'))),l.createElement(s.Z,null,l.createElement(r.Z,{as:"h3"},"RegExp Literals"),l.createElement(s.Z,null,"A regex literal is a pattern enclosed between backward slashes (",l.createElement(i.BI,null,"//"),")."),l.createElement(a.Z,null,"const re = /ab+c/;")))}},62108:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),a=n(81391),r=n(87398),s=n(26006),i=n(68947),o=n(9167);const c=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"String Literals"),l.createElement(i.Z,null,"A string literal is zero or more characters enclosed in single (') or double (\") quotes. All the ",l.createElement(o.BI,null,"String")," object methods can be called on a string literal. JavaScript automatically converts the",l.createElement(o.I,null,"string literal")," to a temporary ",l.createElement(o.BI,null,"String")," object."),l.createElement(a.Z,null,'// Examples:\nconst str = "JavaScript Literal";\n\nconsole.log("JavaScript".length); // 10\n// length is a property of the String object,\n// which can be called on string literal.\n'),l.createElement(r.Z,{as:"h4"},"Template Literals"),l.createElement(i.Z,null,"These are string values enclosed by the ",l.createElement(o.BI,null,"back-tick (`)"),"character instead of double or single quotes. Also known as"," ",l.createElement(o.B,null,"string interpolation"),". They provide syntactic sugar for constructing strings. ",l.createElement(o.B,null,"${ }")," construct is used to add dynamic/variable value to the string literal."),l.createElement(a.Z,null,'// Example 1:\n// Multi line string values can be created.\nconst multiLineStr = `I am a multiline\nstring`; \n\n\n// Example 2:\nconst name  = "John";\nconst str = `My name is: ${name}.`;\n\n// ${} construct is used to add dynamic/variable value to the string literal.\nconsole.log(str); // "My name is: John."\n'),l.createElement(r.Z,{as:"h4"},"Tagged Templates"),l.createElement(i.Z,null,"These are a compact syntax for specifying a template literal along with a call to a ",l.createElement(o.B,null,'"tag" function')," for ",l.createElement(o.B,null,"parsing"),". A tagged template is just a more succinct and semantic way to invoke a function that processes a string with a set of relevant values."),l.createElement(a.Z,null,"const formatArgument = (arg) => {\n  if(Array.isArray(arg)) {\n    return arg.map((itm) => `# ${itm}`)\n              .join('\\n');\n  }\n\n  if(typeof arg === \"object\") {\n    return JSON.stringify(arg);\n  }\n  return arg;\n}\n\nconst printStr = (segments, ...args) => {\n  let msg = segments[0];\n  segments.slice(1).forEach((segment, index) => {\n    msg += formatArgument(args[index]) + segment;\n  });\n  console.log(msg);\n}"),l.createElement(i.Z,null,l.createElement(o.BI,null,"segments:")," This holds the list of ",l.createElement(o.B,null,"fixed text")," of the string literal.",l.createElement(o.cJ,null),l.createElement(o.BI,null,"Args:")," Holds the list of ",l.createElement(o.B,null,"dynamic values")," of the string literal.",l.createElement(o.cJ,null),"For any valid template literal, there will always be ",l.createElement(o.B,null,"N args")," and ",l.createElement(o.B,null,"(N+1) string segments"),"."),l.createElement(a.Z,null,'const todos = ["JavaScript", "ReactJs", "Angular"];\nconst progress = { js: 90, react: 60, angular: 20};\n\nprintStr`I am learning:\\n${todos}\nAnd my progress is: ${progress}`\n\n// Output:\nI am learning:\n# JS\n# ReactJs\n# Angular\nAnd my progress is: { "js" : 90, "react": 60, "angular": 20 }\n        '),l.createElement(s.Z,null,l.createElement(o.B,null,"console.log()")," uses similar string interpolation.",l.createElement(o.cJ,null),'console.log("Learning %o with %o percent progress", "JS", 50);',l.createElement(o.cJ,null),"// \"Learning 'JS' with 50 percent progress”"))}},26006:(e,t,n)=>{n.d(t,{Z:()=>R});var l=n(4942),a=n(94184),r=n.n(a),s=n(67294),i=n(14289),o=n(78146),c=n(67115),m=n(76792),u=n(32209),g=n(41485),d=n(39602),E=n(44680),p=n(85893);const h=(0,d.Z)("h4");h.displayName="DivStyledAsH4";const f=(0,E.Z)("alert-heading",{Component:h}),Z=(0,E.Z)("alert-link",{Component:c.Z}),b={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},v=s.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:s,className:c,children:d,variant:E,onClose:h,dismissible:f,transition:Z,...b}=(0,i.Ch)(e,{show:"onClose"}),v=(0,m.vE)(n,"alert"),y=(0,o.Z)((e=>{h&&h(!1,e)})),x=!0===Z?u.Z:Z,B=(0,p.jsxs)("div",{role:"alert",...x?void 0:b,ref:t,className:r()(c,v,E&&`${v}-${E}`,f&&`${v}-dismissible`),children:[f&&(0,p.jsx)(g.Z,{onClick:y,"aria-label":a,variant:s}),d]});return x?(0,p.jsx)(x,{unmountOnExit:!0,...b,ref:void 0,in:l,children:B}):l?B:null}));v.displayName="Alert",v.defaultProps=b;const y=Object.assign(v,{Link:Z,Heading:f});var x=n(83819),B=n(93379),w=n.n(B),k=n(7795),A=n.n(k),L=n(90569),S=n.n(L),J=n(3565),j=n.n(J),I=n(19216),N=n.n(I),T=n(44589),C=n.n(T),$=n(11137),O={};O.styleTagTransform=C(),O.setAttributes=j(),O.insert=S().bind(null,"head"),O.domAPI=A(),O.insertStyleElement=N(),w()($.Z,O),$.Z&&$.Z.locals&&$.Z.locals;var P=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,o=void 0===i?"primary":i,c=r()((0,l.Z)({},"".concat(x.HL,"-note"),!0));return s.createElement("div",{className:c},s.createElement("div",{className:"note-text"},a),s.createElement(y,{key:o,variant:o},t))};const R=(0,s.memo)(P)},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),r=n(23645),s=n.n(r)()(a());s.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const i=s}}]);