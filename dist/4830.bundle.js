"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[4830,6006,7893,6148,9045,6442,7075],{74830:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var l=t(67294),a=t(81391),c=t(91573),o=t(87398),r=t(26006),s=t(68947),u=t(12050),i=t(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"useEffect()"),l.createElement(s.Z,null,"The ",l.createElement(i.BI,null,"useEffect")," hook is used to perform ",l.createElement(i.I,null,"side effects")," in",l.createElement(u.Z,null)," ",l.createElement(i.I,null,"function components"),". Side effects can be calling APIs, setting up the subscription, setting timers, etc. By using this hook, we tell React that our component needs to do something after render. React will remember the function and call it later after performing the DOM updates. React guarantees the DOM has been updated by the time it runs the effects."),l.createElement(r.Z,null,"Hooks embrace JavaScript closures to access the function state."),l.createElement(s.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,{language:c.r.JSX},"useEffect(()= >{\n    // body of the side-effects\n\n    // optional return statement\n    return () => {\n        // Unmount statements\n    }\n}, <optional-dependencies-array>)\n")),l.createElement(s.Z,null,l.createElement(i.B,null,"<optional-dependencies-array>"),": This is the optional Array of dependencies, which instructs React, when to call this side-effect. React observes the changes in values of the dependency array items, and will call the side-effect statements, on change of any dependency."),l.createElement(s.Z,null,l.createElement(i.B,null,"return () => { }"),l.createElement(i.cJ,null),l.createElement(i.I,null,"useEffect()")," can optionally return a function, which will be called on component unmount or before running the next effect."),l.createElement(s.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,null,"const Counter = () => {\n    const [counter, setCounter] = useState(0);\n    useEffect(() => {\n        document.title = `Clicked ${counter} times.`;\n        // cleanup activity\n        return () => {\n            document.title = `Clicked 0 times.`;\n        }\n    });\n\n    const handleButtonClick = () => {\n        setCounter((prev) => prev+1);\n    }\n\n    return <div>\n        <span>You clicked {count} times.</span>\n        <button onClick={handleButtonClick}>Click</button>\n    </div>\n}\n")),l.createElement(s.Z,null,"Compared to class component's lifecycle methods, this one hook is equivalent to ",l.createElement(i.BI,null,"componentDidMount()"),", ",l.createElement(u.Z,null),l.createElement(i.BI,null,"componentDidUpdate()")," and ",l.createElement(i.BI,null,"componentWillUnmount()"),l.createElement(u.Z,null)," combined together."),l.createElement(s.Z,null,"Let's learn how ",l.createElement(i.BI,null,"useEffect()")," can be used as ",l.createElement(u.Z,null),l.createElement(i.I,null,"componentDidMount()"),", ",l.createElement(i.I,null,"componentDidUpdate()")," and",l.createElement(u.Z,null)," ",l.createElement(i.I,null,"componentWillUnmount()"),"."),l.createElement(o.Z,{as:"h5"},"As componentDidMount()"),l.createElement(s.Z,null,"Passing ",l.createElement(i.B,null,"empty [] dependency")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidMount()")," and statements will be executed only once."),l.createElement(s.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[ ])")),l.createElement(s.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n    useEffect(() =>{ \n        document.title = "useEffect() equivalent to componentDidUpdate()";\n    }, []);\n\n    return <div>Hello</div>;\n}')),l.createElement(s.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," only once on ",l.createElement(i.B,null,"mount"),"."),l.createElement(o.Z,{as:"h5"},"As componentDidUpdate()"),l.createElement(s.Z,null,l.createElement(i.B,null,"Passing the dependency array")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidUpdate()")," and statements will be executed on every update to the dependency items."),l.createElement(s.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[dependency1, dependency2,..., dependencyN])")),l.createElement(s.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n    const [name, setName] = useState("");\n    const [age, setAge] = useState(0);\n    const [message, setMessage] = useState("");\n\n    useEffect(() =>{ \n        setMessage(() => `Name: ${name}, age: ${age}`);\n    }, [name, age]);\n\n    return <div>{message}</div>;\n}\n')),l.createElement(s.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," on ",l.createElement(i.B,null,"mount")," as well as",l.createElement(u.Z,null)," ",l.createElement(i.B,null,"on change")," in value of ",l.createElement(i.BI,null,'"name"')," or ",l.createElement(i.BI,null,'"age"'),"."),l.createElement(o.Z,{as:"h5"},"As componentWillUnmount()"),l.createElement(s.Z,null,l.createElement(i.I,null,"useEffect()")," optionally returns a ",l.createElement(i.BI,null,"function"),", which is called before running the ",l.createElement(i.I,null,"useEffect()")," again. Returning this",l.createElement(u.Z,null)," ",l.createElement(i.I,null,"function")," along with ",l.createElement(i.B,null,"empty dependency []")," will be equivalent to ",l.createElement(i.B,null,"componentWillUnmount()"),"."),l.createElement(s.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{\n    return () =>{\n        // cleanup statements\n    }\n},[])\n")),l.createElement(s.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n  useEffect(() =>{ \n    document.title = "useEffect() equivalent to componentDidUpdate()";\n    return () => { \n      document.title = “Default title”;\n    }\n  }, []);\n\n  return <div>Hello</div>;\n}')),l.createElement(r.Z,null,"If useEffect() returns a function with some dependency or without any dependency, in such cases the returned function (cleanup method) will be invoked on every update. This may lead to performance issues, if not used wisely."),l.createElement(r.Z,null,"Unlike componentDidMount() or componentDidUpdate(), effects scheduled with ",l.createElement(i.B,null,"useEffect() don't block the browser from updating the screen"),". This makes the app more responsive. The majority of effects don't need to happen synchronously. In uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect()."))}},26006:(e,n,t)=>{t.d(n,{Z:()=>q});var l=t(4942),a=t(94184),c=t.n(a),o=t(67294),r=t(14289),s=t(78146),u=t(67115),i=t(76792),m=t(32209),d=t(41485),E=t(39602),f=t(44680),p=t(85893);const h=(0,E.Z)("h4");h.displayName="DivStyledAsH4";const Z=(0,f.Z)("alert-heading",{Component:h}),g=(0,f.Z)("alert-link",{Component:u.Z}),y={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},v=o.forwardRef(((e,n)=>{const{bsPrefix:t,show:l,closeLabel:a,closeVariant:o,className:u,children:E,variant:f,onClose:h,dismissible:Z,transition:g,...y}=(0,r.Ch)(e,{show:"onClose"}),v=(0,i.vE)(t,"alert"),b=(0,s.Z)((e=>{h&&h(!1,e)})),w=!0===g?m.Z:g,I=(0,p.jsxs)("div",{role:"alert",...w?void 0:y,ref:n,className:c()(u,v,f&&`${v}-${f}`,Z&&`${v}-dismissible`),children:[Z&&(0,p.jsx)(d.Z,{onClick:b,"aria-label":a,variant:o}),E]});return w?(0,p.jsx)(w,{unmountOnExit:!0,...y,ref:void 0,in:l,children:I}):l?I:null}));v.displayName="Alert",v.defaultProps=y;const b=Object.assign(v,{Link:g,Heading:Z});var w=t(83819),I=t(93379),k=t.n(I),x=t(7795),B=t.n(x),U=t(90569),C=t.n(U),D=t(3565),S=t.n(D),A=t(19216),N=t.n(A),M=t(44589),T=t.n(M),H=t(11137),P={};P.styleTagTransform=T(),P.setAttributes=S(),P.insert=C().bind(null,"head"),P.domAPI=B(),P.insertStyleElement=N(),k()(H.Z,P),H.Z&&H.Z.locals&&H.Z.locals;var R=function(e){var n=e.children,t=e.noteText,a=void 0===t?"Note":t,r=e.variant,s=void 0===r?"primary":r,u=c()((0,l.Z)({},"".concat(w.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},a),o.createElement(b,{key:s,variant:s},n))};const q=(0,o.memo)(R)},11137:(e,n,t)=>{t.d(n,{Z:()=>r});var l=t(8081),a=t.n(l),c=t(23645),o=t.n(c)()(a());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const r=o}}]);