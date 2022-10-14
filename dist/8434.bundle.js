"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[8434,430,8957,2379,8049,6006,7893],{430:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var n=l(67294),a=l(81391),r=l(87398),c=l(68947),o=l(12050),m=l(9167),s=[{label:n.createElement(n.Fragment,null,"By using ",n.createElement(m.B,null,"Objet.setPrototypeOf()"))},{label:n.createElement(n.Fragment,null,"By using ",n.createElement(m.B,null,"Object.create()"))},{label:n.createElement(n.Fragment,null,"By creating ",n.createElement(m.B,null,"class"))}],u=[{label:n.createElement(n.Fragment,null,"It searched for ",n.createElement(m.I,null,'"version"')," in its ",n.createElement(m.BI,null,"own properties")," of",n.createElement(m.BI,null,'"obj"'),", ",n.createElement(m.B,null,"Not found."))},{label:n.createElement(n.Fragment,null,"Then, it searches the ",n.createElement(m.I,null,"prototype chain")," and finds the",n.createElement(o.Z,null),n.createElement(m.I,null,'"version"')," in the",n.createElement(m.BI,null,"__proto__")," ",n.createElement(m.I,null,"object")," and returns ",n.createElement(m.B,null,'"6"'),".")}],i=[{label:n.createElement(n.Fragment,null,"Searches ",n.createElement(m.I,null,'"year"')," in ",n.createElement(m.I,null,"obj's")," own properties, ",n.createElement(m.B,null,"Not Found."))},{label:n.createElement(n.Fragment,null,"Searches ",n.createElement(m.I,null,'"year"')," in ",n.createElement(m.I,null,"obj's prototype chain")," object,",n.createElement(m.B,null,"Not Found."))},{label:n.createElement(m.BI,null,"End of prototype chain reached.")},{label:n.createElement(n.Fragment,null,"Returns ",n.createElement(m.BI,null,"undefined."))}];const E=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"Inheriting Properties"),n.createElement(c.Z,null,"JavaScript ",n.createElement(m.I,null,"objects")," are dynamic ",n.createElement(m.B,null,'"bags"')," of properties, which are referred to as their ",n.createElement(m.B,null,"own properties"),". When we try to access a property of an ",n.createElement(m.I,null,"object"),", the property will not just be searched on the ",n.createElement(m.I,null,"object")," but will also be searched on ",n.createElement(m.I,null,"prototype chain"),", until either property is found or end of ",n.createElement(m.I,null,"prototype chain")," is reached."),n.createElement(a.Z,null,'const obj = {\n  name: "JavaScript",\n  __proto__: {\n      version: 6\n  }\n}'),n.createElement(m.cJ,null),n.createElement(c.Z,null,n.createElement(r.Z,{as:"h5"},"__proto__")," It is one of the ways to",n.createElement(m.B,null,"set the prototype of an object"),". There are other ways to set the prototype:",n.createElement(m.GS,{unOrdered:!0,items:s})),n.createElement(c.Z,null,n.createElement(m.IU,null,"Example 1:"),n.createElement(a.Z,null,'console.log(obj.name) // "JavaScript"')),n.createElement(c.Z,null,n.createElement(m.IU,null,"Example 2:"),n.createElement(a.Z,null,"console.log(obj.version)  // 6"),n.createElement(c.Z,null,"The reason for ",n.createElement(m.B,null,'"6"')," being printed as ",n.createElement(m.B,null,'"obj.version"')," is the",n.createElement(m.BI,null,"recursive search")," in the ",n.createElement(m.BI,null,"obj")," and the ",n.createElement(o.Z,null),n.createElement(m.I,null,"prototype chain"),".",n.createElement(m.GS,{items:u}))),n.createElement(c.Z,null,n.createElement(m.IU,null,"Example 3:"),n.createElement(c.Z,null,"Now, let's try to access a non-existing property."),n.createElement(a.Z,null,"console.log(obj.year);  // undefined"),n.createElement(c.Z,null,"The reason for ",n.createElement(m.BI,null,"undefined"),", can be traced with the below steps:",n.createElement(m.GS,{items:i}))),n.createElement(c.Z,null,n.createElement(m.IU,null,"Example 4:"),n.createElement(c.Z,null,"Let's see how properties/methods can be inherited using ",n.createElement(o.Z,null),n.createElement(m.I,null,"__proto__"),"."),n.createElement(a.Z,null,'const parent = {\n  label: "Parent Label",\n  show() { console.log(this.label); }\n}\n\nconst child = { __proto__: parent };'),n.createElement(c.Z,null,"In below code, when ",n.createElement(m.I,null,"parent.show()")," is called, ",n.createElement(m.BI,null,"this"),n.createElement(o.Z,null),"refers to the ",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"parent")," object.",n.createElement(a.Z,null,'parent.show();  // "Parent Label"')),n.createElement(c.Z,null,"In below code, when ",n.createElement(m.I,null,"child.show()")," is called, ",n.createElement(m.BI,null,"this"),n.createElement(o.Z,null)," refers to the ",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"child")," object. The property",n.createElement(m.BI,null,'"label"')," is ",n.createElement(m.I,null,"inherited")," from the ",n.createElement(m.BI,null,'"parent"'),"object.",n.createElement(a.Z,null,'child.show(); // "Parent Label"')),n.createElement(c.Z,null,"Below code ",n.createElement(m.BI,null,"shadows")," the ",n.createElement(m.I,null,'"label"')," property on the",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"parent")," by adding ",n.createElement(m.I,null,'"label"')," property to the",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"own properties")," of the ",n.createElement(m.I,null,"child")," object.",n.createElement(a.Z,null,'child.label = "Child Label";\nchild.show(); // "Child Label"'))))}},68434:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var n=l(67294),a=l(9231),r=l(59044),c=l(87398),o=l(68947),m=l(12050),s=l(9167),u=l(430),i=l(48957),E=l(22379),p=l(98049),h=function(){return(0,a.Z)("UI-Geeks: JavaScript | Inheritance and the Prototype chain"),n.createElement(r.Z,null,n.createElement(c.Z,null,"Inheritance and the Prototype chain"),n.createElement(o.Z,null,"When it comes to ",n.createElement(s.I,null,"inheritance"),", JavaScript has only one construct:",n.createElement(s.BI,null,"Objects"),". Each ",n.createElement(s.I,null,"object")," has a ",n.createElement(s.I,null,"private property")," which holds a link to another object called its ",n.createElement(s.BI,null,"prototype"),". The",n.createElement(m.Z,null)," ",n.createElement(s.I,null,"prototype")," object has a ",n.createElement(s.I,null,"prototype")," of its own, and so on until an object is reached with ",n.createElement(s.BI,null,"null")," as its",n.createElement(s.I,null,"prototype"),". By definition, ",n.createElement(s.BI,null,"null")," has no ",n.createElement(s.I,null,"prototype"),n.createElement(m.Z,null)," and acts as the final link in the ",n.createElement(s.BI,null,"prototype chain"),". ",n.createElement(m.Z,null),n.createElement(s.I,null,"Classes")," also use the same ",n.createElement(s.I,null,"inheritance")," mechanism under the hood."),n.createElement(o.Z,null,n.createElement(u.default,null),n.createElement(i.default,null),n.createElement(p.default,null),n.createElement(E.default,null)))};const d=(0,n.memo)(h)},48957:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var n=l(67294),a=l(81391),r=l(87398),c=l(26006),o=l(68947),m=l(12050),s=l(9167),u=[{label:n.createElement(n.Fragment,null,n.createElement(s.B,null,"Fast"),", ",n.createElement(s.B,null,"standard")," and ",n.createElement(s.BI,null,"JIT optimizable"),n.createElement(m.Z,null)," method of setting prototype.")},{label:n.createElement(n.Fragment,null,"High ",n.createElement(s.B,null,"readability")," and ",n.createElement(s.B,null,"maintainability."))}],i=[{label:n.createElement(n.Fragment,null,"Classes, especially with ",n.createElement(s.I,null,"private")," properties are",n.createElement(s.BI,null,"less optimized"),".")},{label:n.createElement(n.Fragment,null,"Not supported in older environments and ",n.createElement(s.B,null,"may need transpilers"),".")}];const E=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"Prototypes with Constructors"),n.createElement(o.Z,null,"The power of prototypes is that we can reuse a set of properties if they should be present on every instance."),n.createElement(o.Z,null,n.createElement(s.IU,null,"Example 1:"),n.createElement(a.Z,null,"function User(name) { this.name = name; }\n"),n.createElement(o.Z,null,"The below statement will add the ",n.createElement(s.BI,null,"showDetail()")," method to every",n.createElement(m.Z,null)," ",n.createElement(s.I,null,"instance")," created from ",n.createElement(s.I,null,"constructor function"),n.createElement(s.BI,null,"User()"),". This is because every ",n.createElement(s.I,null,"instance")," created from a",n.createElement(m.Z,null)," ",n.createElement(s.I,null,"constructor function")," will automatically have the constructor's prototype property as it's ",n.createElement(s.BI,null,"[[Prototype]]"),"."),n.createElement(a.Z,null,"User.prototype.showDetails = function() {\n  console.log(`Username: ${this.name}`);\n}\n"),n.createElement(a.Z,null,'const users = [new User("John"), new User("Jack")];\nusers.map((usr) => usr.showDetails());\n// Output:\n// "Username: John"\n// "Username: Jack"\n')),n.createElement(o.Z,null,n.createElement(s.IU,null,"Example 2:"),n.createElement(o.Z,null,"Implementing the same using ",n.createElement(s.I,null,"classes"),"."),n.createElement(a.Z,null,"class User{\n  constructor(name) { this.name = name; }\n  showDetail() { \n    console.log(`Username: ${this.name}`); \n  }\n}\n")),n.createElement(c.Z,null,"Because ",n.createElement(s.B,null,"prototype")," references the same object as the [[Prototype]] of all instances, we can change the behavior of all instances by",n.createElement(s.B,null,"mutating the prototype")," of the constructor function."),n.createElement(c.Z,null,"Extending any ",n.createElement(s.B,null,"built-in prototype")," can be a ",n.createElement(s.B,null,"misfeature"),". For example, defining",n.createElement(m.Z,null),n.createElement(s.B,null,"Array.prototype.myMethod = function () "),"and then using myMethod() on all array instances. This misfeature is called ",n.createElement(s.B,null,'"Monkey Patching"'),". Doing monkey patching risks forward compatibility, because if JavaScript, in future, adds",n.createElement(s.B,null,'"myMethod()"')," but with a different signature, it will break the code."),n.createElement(o.Z,null,"Due to historical reasons, some ",n.createElement(s.I,null,"built-in")," constructors ",n.createElement(m.Z,null),n.createElement(s.I,null,"prototype")," properties are ",n.createElement(s.I,null,"instances")," themselves."),n.createElement(o.Z,null,n.createElement(s.IU,null,"For Example:"),n.createElement(o.Z,null,n.createElement(s.BI,null,"Number.prototype is a number 0")," (zero)."),n.createElement(a.Z,null,"Number.prototype + 1; // 1"),n.createElement(o.Z,null,"Similarly, below prototypes are instances themselves"),n.createElement(a.Z,null,'Array.prototype.map((x) => x +1); // []\nString.prototype + "a"; // "a')),n.createElement(o.Z,null,n.createElement(s.IU,null,"Pros of using ",n.createElement(s.B,null,"prototype")),n.createElement(s.GS,{unOrdered:!0,items:u})),n.createElement(o.Z,null,n.createElement(s.IU,null,"Cons of using ",n.createElement(s.B,null,"prototype")),n.createElement(s.GS,{unOrdered:!0,items:i})))}},22379:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(67294),a=l(87398),r=l(68947),c=l(12050),o=l(9167),m=[{label:n.createElement(n.Fragment,null,"Allows ",n.createElement(o.B,null,"directly setting")," ",n.createElement(o.I,null,"[[Prototype]]")," of an object at the creation time, which permits the runtime to further optimize.")},{label:n.createElement(n.Fragment,null,"Allows creation of objects without a prototype, using",n.createElement(o.BI,null,"Object.create(null)"),".")}],s=[{label:n.createElement(n.Fragment,null,"It can slow down object initialization, which",n.createElement(o.B,null,"may cause performance")," ",n.createElement(c.Z,null),"issues.")}];const u=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h2"},"Object.create()"),n.createElement(r.Z,null,"This method ",n.createElement(o.BI,null,"reassigns")," the ",n.createElement(o.I,null,"prototype")," property, and for this reason it is considered as ",n.createElement(o.B,null,"bad practice"),"."),n.createElement(r.Z,null,n.createElement(o.IU,null,"Syntax:"),n.createElement(o.cJ,null),"DerivedClass.prototype =",n.createElement(o.B,null,"Object.","create"),"(BaseClass.prototype);"),n.createElement(r.Z,null,n.createElement(o.IU,null,"Pros of using ",n.createElement(o.BI,null,"Object.create()")),n.createElement(o.GS,{unOrdered:!0,items:m})),n.createElement(r.Z,null,n.createElement(o.IU,null,"Cons of using ",n.createElement(o.BI,null,"Object.create()")),n.createElement(o.GS,{unOrdered:!0,items:s})))}},98049:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(67294),a=l(81391),r=l(87398),c=l(68947),o=l(12050),m=l(9167),s=[{label:n.createElement(n.Fragment,null,"Allows the ",n.createElement(m.I,null,"dynamic manipulation")," and can even ",n.createElement(o.Z,null),n.createElement(m.I,null,"force a prototype")," on a",n.createElement(m.B,null,"prototype-less")," object created using",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"Object.create(null)"),".")}],u=[{label:n.createElement(n.Fragment,null,n.createElement(m.BI,null,"Ill performing"),", setting prototypes dynamically disrupts the optimization process.")},{label:n.createElement(n.Fragment,null,"Might cause some JavaScript Engines to ",n.createElement(m.BI,null,"recompile")," the code for",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"de-optimization"),".")}];const i=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"Object.setPrototypeOf()"),n.createElement(c.Z,null,"This method can be used to set the ",n.createElement(m.I,null,"[[Prototype]]")," of the",n.createElement(o.Z,null)," ",n.createElement(m.I,null,"constructor.prototype"),"."),n.createElement(c.Z,null,n.createElement(m.IU,null,"Syntax:"),n.createElement(m.cJ,null),n.createElement(m.B,null,"Object.","setPrototypeOf"),"(<destination-prototype>, <source-prototype>)"),n.createElement(c.Z,null,n.createElement(m.IU,null,"Example"),n.createElement(a.Z,null,"function BaseClass { /*....*/ };\nfunction DerivedClass { /*....*/ };\nObject.setPrototypeOf(DerivedClass.prototype, BaseClass.prototype);\n"),n.createElement(c.Z,null,"Above code sets the ",n.createElement(m.I,null,"BaseClass prototype")," to ",n.createElement(o.Z,null),n.createElement(m.I,null,"DerivedClass prototype"),". This is equivalent to ",n.createElement(m.BI,null,"extends"),n.createElement(o.Z,null)," of ",n.createElement(m.BI,null,"class"),".")),n.createElement(c.Z,null,n.createElement(m.IU,null,"Pros of using ",n.createElement(m.B,null,"Object.setPrototypeOf()")),n.createElement(m.GS,{unOrdered:!0,items:s})),n.createElement(c.Z,null,n.createElement(m.IU,null,"Cons of using ",n.createElement(m.B,null,"Object.setPrototypeOf()")),n.createElement(m.GS,{unOrdered:!0,items:u})))}},59044:(e,t,l)=>{l.d(t,{Z:()=>w});var n=l(4942),a=l(94184),r=l.n(a),c=l(67294),o=l(83819),m=l(93379),s=l.n(m),u=l(7795),i=l.n(u),E=l(90569),p=l.n(E),h=l(3565),d=l.n(h),b=l(19216),y=l.n(b),I=l(44589),f=l.n(I),Z=l(94364),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=y(),s()(Z.Z,g),Z.Z&&Z.Z.locals&&Z.Z.locals;var B=function(e){var t=e.children,l=r()((0,n.Z)({},"".concat(o.HL,"-container"),!0));return c.createElement("div",{className:l},t)};const w=(0,c.memo)(B)},26006:(e,t,l)=>{l.d(t,{Z:()=>A});var n=l(4942),a=l(94184),r=l.n(a),c=l(67294),o=l(14289),m=l(78146),s=l(67115),u=l(76792),i=l(32209),E=l(41485),p=l(39602),h=l(44680),d=l(85893);const b=(0,p.Z)("h4");b.displayName="DivStyledAsH4";const y=(0,h.Z)("alert-heading",{Component:b}),I=(0,h.Z)("alert-link",{Component:s.Z}),f={variant:"primary",show:!0,transition:i.Z,closeLabel:"Close alert"},Z=c.forwardRef(((e,t)=>{const{bsPrefix:l,show:n,closeLabel:a,closeVariant:c,className:s,children:p,variant:h,onClose:b,dismissible:y,transition:I,...f}=(0,o.Ch)(e,{show:"onClose"}),Z=(0,u.vE)(l,"alert"),g=(0,m.Z)((e=>{b&&b(!1,e)})),B=!0===I?i.Z:I,w=(0,d.jsxs)("div",{role:"alert",...B?void 0:f,ref:t,className:r()(s,Z,h&&`${Z}-${h}`,y&&`${Z}-dismissible`),children:[y&&(0,d.jsx)(E.Z,{onClick:g,"aria-label":a,variant:c}),p]});return B?(0,d.jsx)(B,{unmountOnExit:!0,...f,ref:void 0,in:n,children:w}):n?w:null}));Z.displayName="Alert",Z.defaultProps=f;const g=Object.assign(Z,{Link:I,Heading:y});var B=l(83819),w=l(93379),v=l.n(w),j=l(7795),x=l.n(j),O=l(90569),U=l.n(O),F=l(3565),P=l.n(F),C=l(19216),S=l.n(C),k=l(44589),_=l.n(k),T=l(11137),J={};J.styleTagTransform=_(),J.setAttributes=P(),J.insert=U().bind(null,"head"),J.domAPI=x(),J.insertStyleElement=S(),v()(T.Z,J),T.Z&&T.Z.locals&&T.Z.locals;var N=function(e){var t=e.children,l=e.noteText,a=void 0===l?"Note":l,o=e.variant,m=void 0===o?"primary":o,s=r()((0,n.Z)({},"".concat(B.HL,"-note"),!0));return c.createElement("div",{className:s},c.createElement("div",{className:"note-text"},a),c.createElement(g,{key:m,variant:m},t))};const A=(0,c.memo)(N)},9231:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(67294);const a=function(e){(0,n.useEffect)((function(){return document.title=e,function(){document.title="UI Geeks | UI Learning Platform"}}),[])}},94364:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(8081),a=l.n(n),r=l(23645),c=l.n(r)()(a());c.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const o=c},11137:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(8081),a=l.n(n),r=l(23645),c=l.n(r)()(a());c.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const o=c}}]);