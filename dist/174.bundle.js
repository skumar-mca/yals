"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[174],{30174:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),s=n(87398),c=n(68947),o=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"JSX Prevents Injection Attacks"),l.createElement(c.Z,null,"By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that we can never inject anything that's not explicitly written in the application. Everything is converted to a string before being rendered. This helps prevent ",l.createElement(u.B,null,"XSS"),"(Cross-Site-Scripting) attacks."),l.createElement(s.Z,{as:"h2"},"JSX Represents Objects"),l.createElement(c.Z,null,"Babel compiles JSX down to ",l.createElement(u.BI,null,"React.createElement()")," calls and returns an ",l.createElement(u.I,null,"object"),". These objects are called ",l.createElement(o.Z,null),l.createElement(u.BI,null,'"React elements"'),"."),l.createElement(c.Z,null,"For example, below two examples are same:"),l.createElement(a.Z,{language:r.r.JSX},'const element = <h1 className="greet">Hello from React!</h1>;'),l.createElement(a.Z,{language:r.r.JSX},'const element = React.createElement("h1", \n  { className: "greet" },\n  "Hello from React!"\n);'),l.createElement(s.Z,{as:"h2"},'Props Default to "True"'),l.createElement(c.Z,null,"If we do not provide a value for a prop, it defaults to ",l.createElement(u.BI,null,"true"),"."),l.createElement(c.Z,null,"Below given expressions are equivalent."),l.createElement(a.Z,{language:r.r.JSX},"<MyDialog show />\n<MyDialog show={true} />\n"),l.createElement(s.Z,{as:"h2"},"Using Spread Attributes"),l.createElement(c.Z,null,"If we have props as an object, and we need to pass all prop attributes to JSX, we can use JavaScript's spread operator (...)."),l.createElement(c.Z,null,l.createElement(u.IU,null,"Example:"),l.createElement(u.cJ,null),l.createElement(a.Z,{language:r.r.JSX},'const CustomButton = (props) => {\n  const { label, …rest } = props;\n  return <button {...rest}>{label}</button>\n}\n\nconst element = <CustomButton label="Click" className="btn" id="btnId" />\n')),l.createElement(c.Z,null,"Above code will render a button with given attributes."),l.createElement(a.Z,{language:r.r.JSX},'<button className="btn" id="btnId">Click</button>'))}}}]);