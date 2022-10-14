"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[2184],{2184:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(67294),l=n(81391),c=n(91573),r=n(87398),s=n(68947),i=n(12050),o=n(9167);const u=function(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{as:"h2"},"Why JSX"),a.createElement(s.Z,null,"React embraces the fact that rendering logic is inherently coupled with other UI logic like handling events, state changes, etc. Therefore, instead of artificially separating ",a.createElement(o.I,null,"technologies")," by putting markup and logic in separate files, React ",a.createElement(o.BI,null,"separates concerns")," with loosely coupled units called ",a.createElement(o.B,null,'"components"')," that contain both."),a.createElement(s.Z,null,"React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code."),a.createElement(r.Z,{as:"h2"},"Embedding Expressions in JSX"),a.createElement(s.Z,null,"Any valid JavaScript expression can be embedded inside the curly braces (","{}",") in JSX."),a.createElement(s.Z,null,a.createElement(o.IU,null,"Example:"),a.createElement(o.cJ,null),a.createElement(l.Z,{language:c.r.JSX},'function greetUser(userName) {\n  return `Hello, ${userName}`;\n}\nconst element = <h1>{greetUser("John")}</h1>\n')),a.createElement(s.Z,null,"After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means JSX can be assigned to variables, passed as an argument of a function or can be called inside loops, etc."),a.createElement(r.Z,{as:"h2"},"Specifying Attributes with JSX"),a.createElement(s.Z,null,"Double quotes can be used to specify string literals as attributes. For example:",a.createElement(l.Z,{language:c.r.JSX},'const element = <a href="https://www.yals.tech">YALS</a>')),a.createElement(s.Z,null,"Also, curly braces can be used to embed JavaScript expressions as an attribute value. For example:",a.createElement(l.Z,{language:c.r.JSX},'const url = "www.yals.tech";\nconst element = <a href={url}>YALS</a>')),a.createElement(s.Z,null,"Since JSX is closer to JavaScript than HTML, React DOM uses ",a.createElement(i.Z,null),a.createElement(o.B,null,"camelCase")," property naming convention instead of HTML attribute names. For example, ",a.createElement(o.BI,null,"class")," becomes ",a.createElement(o.BI,null,"className")," in JSX and",a.createElement(o.BI,null,"onclick")," becomes ",a.createElement(o.BI,null,"onClick"),"."))}}}]);