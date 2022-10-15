"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5775,6006,7893,6148,9045,6442,7075],{25775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(67294),l=n(81391),r=n(91573),i=n(87398),s=n(26006),o=n(68947),u=n(12050),c=n(9167);const m=function(){return a.createElement(a.Fragment,null,a.createElement(i.Z,{as:"h3"},"useState()"),a.createElement(o.Z,null,"This Hooks is used to add ",a.createElement(c.B,null,"state")," to a function component.It returns a ",a.createElement(c.B,null,"pair")," - an array with two items. The first item",a.createElement(u.Z,null)," is the ",a.createElement(c.I,null,"current value")," and second is a ",a.createElement(c.I,null,"function"),a.createElement(u.Z,null)," that updates it."),a.createElement(o.Z,null,a.createElement(c.IU,null,"Syntax:"),a.createElement(l.Z,{language:r.r.JSX},"const [stateValue, updateFunction] = useState(initialValue);")),a.createElement(o.Z,null,a.createElement(c.B,null,"stateValue"),": It is the first value of the pair of values returned from the ",a.createElement(c.I,null,"useState()")," hook. This is the name of the state variable. In contrast to the class state, the state of a function can be any valid type. For example, it can be numbers, strings, arrays, etc."),a.createElement(o.Z,null,a.createElement(c.B,null,"updateFunction"),": This is the second value of the pair of values returned from the ",a.createElement(c.I,null,"useState()")," hook. This function is equivalent to",a.createElement(c.I,null,"setState()")," of the class component and used to update the respective state variable."),a.createElement(o.Z,null,a.createElement(c.B,null,"initialValue"),": It is the initial value of the state variable. The initial value is only assigned once, on the mount of the component and is ignored on further update events."),a.createElement(o.Z,null,a.createElement(c.IU,null,"Example:"),a.createElement(c.cJ,null),"Let's build our Counter component using the ",a.createElement(c.B,null,"function component"),a.createElement(u.Z,null)," and ",a.createElement(c.B,null,"useState()")," hook."),a.createElement(l.Z,{language:r.r.JSX},"const Counter = (props) => {\n  const [counter, setCounter] = useState(0);\n  const incrementCounter = () => {\n    setCounter((prevState) => prevState + 1);\n  }\n  return <div>\n    <span>Counter Value: {counter}</span>\n    <button onClick={incrementCounter}>Increment</button>\n  </div>\n}"),a.createElement(i.Z,{as:"h4"},"Functional Updates"),a.createElement(o.Z,null,"If the new state is computed using the previous state value, in such cases we can pass a function to the ",a.createElement(c.B,null,"updateFunction"),". The function will receive the previous state, and return an updated state."),a.createElement(o.Z,null,"In the above code, we used functional updates.",a.createElement(l.Z,{language:r.r.JSX},"setCounter((prevState) => prevState + 1);")),a.createElement(o.Z,null,"Alternative to ",a.createElement(c.I,null,"functional updates")," is to pass a ",a.createElement(c.B,null,"value")," to the ",a.createElement(c.B,null,"updateFunction"),". Because React may batch state updates for performance benefits, therefore this syntax may not provide updated value.",a.createElement(l.Z,{language:r.r.JSX},"setCounter(counter + 1);")),a.createElement(i.Z,{as:"h4"},"Lazy initial state"),a.createElement(o.Z,null,"The ",a.createElement(c.B,null,"initialValue")," argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, we may provide a function instead, which will be executed only on the initial render."),a.createElement(l.Z,{language:r.r.JSX},"const [counter, setCounter]\t = useState(()=>{\n  const initialState = expensiveComputation();\n  return initialState;\n});"),a.createElement(i.Z,{as:"h4"},"Bailing out of a state update"),a.createElement(o.Z,null,"If we update a state Hook to the same value as the current state, React will bail out without rendering the children or firing effects. React uses the ",a.createElement(c.BI,null,"Object.is comparison algorithm")," for comparing values."),a.createElement(i.Z,{as:"h4"},"Batching of state updates"),a.createElement(o.Z,null,"React may group several state updates into a single re-render to improve performance."),a.createElement(o.Z,null,"Before React 18, only updates inside React event handlers were batched. Starting with ",a.createElement(c.B,null,"React 18"),", batching is ",a.createElement(u.Z,null),a.createElement(c.B,null,"enabled for all updates by default"),"."),a.createElement(s.Z,null,"React makes sure that updates from several different user-initiated events, like ",a.createElement(c.B,null,"clicking a button twice"),", are always processed separately and ",a.createElement(c.B,null,"do not get batched"),". This prevents logical mistakes."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>H});var a=n(4942),l=n(94184),r=n.n(l),i=n(67294),s=n(14289),o=n(78146),u=n(67115),c=n(76792),m=n(32209),d=n(41485),h=n(39602),p=n(44680),f=n(85893);const v=(0,h.Z)("h4");v.displayName="DivStyledAsH4";const E=(0,p.Z)("alert-heading",{Component:v}),g=(0,p.Z)("alert-link",{Component:u.Z}),Z={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},b=i.forwardRef(((e,t)=>{const{bsPrefix:n,show:a,closeLabel:l,closeVariant:i,className:u,children:h,variant:p,onClose:v,dismissible:E,transition:g,...Z}=(0,s.Ch)(e,{show:"onClose"}),b=(0,c.vE)(n,"alert"),y=(0,o.Z)((e=>{v&&v(!1,e)})),w=!0===g?m.Z:g,k=(0,f.jsxs)("div",{role:"alert",...w?void 0:Z,ref:t,className:r()(u,b,p&&`${b}-${p}`,E&&`${b}-dismissible`),children:[E&&(0,f.jsx)(d.Z,{onClick:y,"aria-label":l,variant:i}),h]});return w?(0,f.jsx)(w,{unmountOnExit:!0,...Z,ref:void 0,in:a,children:k}):a?k:null}));b.displayName="Alert",b.defaultProps=Z;const y=Object.assign(b,{Link:g,Heading:E});var w=n(83819),k=n(93379),x=n.n(k),S=n(7795),C=n.n(S),B=n(90569),I=n.n(B),T=n(3565),R=n.n(T),F=n(19216),N=n.n(F),V=n(44589),J=n.n(V),L=n(11137),j={};j.styleTagTransform=J(),j.setAttributes=R(),j.insert=I().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=N(),x()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals;var A=function(e){var t=e.children,n=e.noteText,l=void 0===n?"Note":n,s=e.variant,o=void 0===s?"primary":s,u=r()((0,a.Z)({},"".concat(w.HL,"-note"),!0));return i.createElement("div",{className:u},i.createElement("div",{className:"note-text"},l),i.createElement(y,{key:o,variant:o},t))};const H=(0,i.memo)(A)},11137:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(8081),l=n.n(a),r=n(23645),i=n.n(r)()(l());i.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const s=i}}]);