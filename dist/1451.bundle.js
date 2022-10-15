"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[1451,3831,4931,505,6006,7298,7893,6148,7179,9045,6442,1827,1894,1497,2159,7220,112,4788,2049,5811,7075,3242],{71827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(68947),s=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"Class.contextType"),l.createElement(c.Z,null,"The ",l.createElement(u.BI,null,"contextType")," property can be used to assign a",l.createElement(s.Z,null)," ",l.createElement(u.B,null,"Context object")," created by ",l.createElement(u.I,null,"React.createContext()"),". Using this property lets us consume the nearest ",l.createElement(u.I,null,"current value"),l.createElement(s.Z,null)," using ",l.createElement(u.BI,null,'"this.context"'),"."),l.createElement(c.Z,null,l.createElement(u.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"MyComponent.contextType = ContextObject;")),l.createElement(c.Z,null,l.createElement(u.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const user = { name : "Default User" };\nconst UserContext = React.createContext(user);\n\nclass MyComponent extends React.Component {\n  render() {\n    const value = this.context;\n    return <div>{value.name}</div>\n  }\n}\n\nMyComponent.contextType = UserContext;')))}},21894:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(87398),r=n(71827),o=n(51497),c=n(32159),s=n(47220),u=n(90112),m=n(4788);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Context API"),l.createElement(u.default,null),l.createElement(s.default,null),l.createElement(r.default,null),l.createElement(o.default,null),l.createElement(c.default,null),l.createElement(m.default,null))}},51497:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(68947),s=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"Context.Consumer"),l.createElement(c.Z,null,"It is a ",l.createElement(u.B,null,"React component")," that ",l.createElement(u.BI,null,"subscribes")," to ",l.createElement(s.Z,null),l.createElement(u.I,null,"context changes"),". This component lets us subscribe to a context within a ",l.createElement(u.B,null,"function component"),"."),l.createElement(c.Z,null,l.createElement(u.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"<ReactContext.Consumer>\n  { value => { /* Render elements based on context value */ }\n</ReactContext.Consumer>\n")),l.createElement(c.Z,null,"This component requires a ",l.createElement(u.B,null,"function as a child"),". The function receives the current context value and returns a React node. The",l.createElement(s.Z,null)," ",l.createElement(u.BI,null,"value")," argument will be equal to the ",l.createElement(s.Z,null),l.createElement(u.BI,null,"value prop")," of the closest ",l.createElement(u.BI,null,"Provider")," for this context in the tree."))}},32159:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(68947),s=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"Context.displayName"),l.createElement(c.Z,null,"Context object accepts a ",l.createElement(s.I,null,"displayName")," string property. React DevTools uses this name to determine what to display for the context. This is used in ",l.createElement(s.I,null,"rare-cases"),"."),l.createElement(c.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const user = { name : "Default User" };\nconst UserContext = React.createContext(user);\nUserContext.displayName = "UserContextAliasName";\n\n<UserContext.Provider>\n// "UserContextAliasName.Provider" in DevTools\n\n<UserContext.Consumer>\n// "UserContextAliasName.Consumer" in DevTools\n')))}},47220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(68947),s=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"Context.Provider"),l.createElement(c.Z,null,"Every Context object comes with a ",l.createElement(u.B,null,"Provider React Component")," that allows consuming components to subscribe to context changes."),l.createElement(c.Z,null,l.createElement(u.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"<ReactContext.Provider value={/* some value */} >")),l.createElement(c.Z,null,"The ",l.createElement(u.BI,null,"Provider")," component accepts a ",l.createElement(u.BI,null,"value")," ",l.createElement(u.I,null,"prop")," to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree."),l.createElement(c.Z,null,"All consumers that are descendants of a Provider will re-render whenever Provider's ",l.createElement(u.BI,null,"value")," ",l.createElement(u.I,null,"prop")," changes. The propagation from Provider to consumer is not subject to the ",l.createElement(s.Z,null),l.createElement(u.I,null,"shouldComponentUpdate()")," method, so the consumer is updated even when an ancestor component skips an update."))}},90112:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(26006),s=n(68947),u=n(12050),m=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"React.createContext"),l.createElement(s.Z,null,"This method creates a ",l.createElement(m.BI,null,"Context")," object. When React renders a component that ",l.createElement(m.I,null,"subscribes")," to this ",l.createElement(m.BI,null,"Context")," object it will read the ",l.createElement(m.I,null,"current context value")," form the closest matching",l.createElement(u.Z,null)," ",l.createElement(m.B,null,"Provider")," above it in the tree."),l.createElement(s.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const ReactContext = React.createContext(defaultValue)")),l.createElement(s.Z,null,l.createElement(m.B,null,"defaultValue"),": The ",l.createElement(m.I,null,"defaultValue")," argument is only used when a component does not have a matching Provider above it in the tree."),l.createElement(c.Z,null,"Passing ",l.createElement(m.B,null,"undefined")," as a ",l.createElement(m.B,null,"Provider value")," does not cause components to use ",l.createElement(m.B,null,"defaultValue"),"."))}},4788:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(87398),r=n(68947),o=n(9167),c=[{label:l.createElement(l.Fragment,null,"When ",l.createElement(o.B,null,"Provider value prop")," changes, it will ",l.createElement(o.B,null,"re-render")," all the child components below the current component, irrespective of the implementation of ",l.createElement(o.I,null,"shouldComponentUpdate()")," lifecycle method. This may cause performance issues.")},{label:l.createElement(l.Fragment,null,l.createElement(o.B,null,"Provider value prop")," update has to be made with caution, because it will only ",l.createElement(o.B,null,"re-render")," the child components ",l.createElement(o.B,null,"below")," the current component and not the components ",l.createElement(o.B,null,"above")," the current component in the component tree.")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Issues using Context"),l.createElement(r.Z,null,"Although Context is a good fit for sharing data between parent and child components in a deeply nested component tree. Still, there are a couple of issues with the re-rendering mechanism of Context."),l.createElement(r.Z,null,"Let's learn few of the issues:"),l.createElement(o.GS,{unOrdered:!0,expanded:!0,items:c}))}},42049:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(81391),r=n(91573),o=n(68947),c=n(12050),s=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,null,"Context provides a way to pass data through the ",l.createElement(s.I,null,"component tree"),l.createElement(c.Z,null)," without having to pass ",l.createElement(s.I,null,"props")," down manually at every level."),l.createElement(o.Z,null,"In React application, data is passed ",l.createElement(s.B,null,"top-down")," (parent to child component) via props, but this approach can lead to a concept called",l.createElement(s.B,null,'"prop drilling"'),", where we have to add ",l.createElement(s.I,null,"prop")," to every child component in the tree, whether or not that child component needs that",l.createElement(c.Z,null)," ",l.createElement(s.I,null,"prop"),". This continuous drilling is required to send the props to the desired component in the tree."),l.createElement(o.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const PropDrill = () => {\n  const userName = "John";\n  return <FirstComponent name = {userName} />\n}\n\nconst FirstComponent = (props) => {\n  const { name } = props;\n  // This do not use "name", but still we have to pass\n  // in order to pass the value to next child in tree\n  return <SecondComponent name = {name} />\n}\n\nconst SecondComponent = (props) => {\n  // This component needs "name" prop to display\n  const { name } = props;\n  return <div>Username is: {name}</div>\n}')))}},75811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),o=n(87398),c=n(68947),s=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h2"},"When to use Context"),l.createElement(c.Z,null,"Context is designed to share data that can be considered ",l.createElement(u.B,null,'"global"'),l.createElement(s.Z,null)," for a tree of React components, such as the ",l.createElement(s.Z,null),l.createElement(u.I,null,"current user"),", ",l.createElement(u.I,null,"theme"),", or ",l.createElement(u.I,null,"preferred language"),". By using context, we can avoid passing props to intermediate elements of the child tree."),l.createElement(c.Z,null,l.createElement(u.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(a.Z,{language:r.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(a.Z,{language:r.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')),l.createElement(c.Z,null,"In the above code, ",l.createElement(u.B,null,"LoginButton")," component will render below elements on the ",l.createElement(u.B,null,"mount")," of the component.",l.createElement(a.Z,{language:r.r.HTML},"<span>Username: Default User</span>\n<button>Login</button>\n")),l.createElement(c.Z,null,"But once a user clicks on ",l.createElement(u.BI,null,"toggleButton")," in the ",l.createElement(u.B,null,"Home"),l.createElement(s.Z,null)," component, the ",l.createElement(u.B,null,"Home")," component will be ",l.createElement(s.Z,null),l.createElement(u.I,null,"re-rendered"),", because the value of the context will change. Now the ",l.createElement(u.B,null,"LoginButton")," component will render the below elements.",l.createElement(a.Z,{language:r.r.HTML},"<span>Username: Home User</span>\n<button>Logout</button>")))}},51451:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(9231),r=n(59044),o=n(87398),c=n(21894),s=n(42049),u=n(75811);const m=function(){return(0,a.Z)("UI-Geeks: React | Context"),l.createElement(r.Z,null,l.createElement(o.Z,null,"Context"),l.createElement(s.default,null),l.createElement(u.default,null),l.createElement(c.default,null))}},59044:(e,t,n)=>{n.d(t,{Z:()=>I});var l=n(4942),a=n(94184),r=n.n(a),o=n(67294),c=n(83819),s=n(93379),u=n.n(s),m=n(7795),i=n.n(m),d=n(90569),p=n.n(d),E=n(3565),h=n.n(E),v=n(19216),g=n.n(v),f=n(44589),x=n.n(f),Z=n(94364),C={};C.styleTagTransform=x(),C.setAttributes=h(),C.insert=p().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=g(),u()(Z.Z,C),Z.Z&&Z.Z.locals&&Z.Z.locals;var b=function(e){var t=e.children,n=r()((0,l.Z)({},"".concat(c.HL,"-container"),!0));return o.createElement("div",{className:n},t)};const I=(0,o.memo)(b)},26006:(e,t,n)=>{n.d(t,{Z:()=>H});var l=n(4942),a=n(94184),r=n.n(a),o=n(67294),c=n(14289),s=n(78146),u=n(67115),m=n(76792),i=n(32209),d=n(41485),p=n(39602),E=n(44680),h=n(85893);const v=(0,p.Z)("h4");v.displayName="DivStyledAsH4";const g=(0,E.Z)("alert-heading",{Component:v}),f=(0,E.Z)("alert-link",{Component:u.Z}),x={variant:"primary",show:!0,transition:i.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:o,className:u,children:p,variant:E,onClose:v,dismissible:g,transition:f,...x}=(0,c.Ch)(e,{show:"onClose"}),Z=(0,m.vE)(n,"alert"),C=(0,s.Z)((e=>{v&&v(!1,e)})),b=!0===f?i.Z:f,I=(0,h.jsxs)("div",{role:"alert",...b?void 0:x,ref:t,className:r()(u,Z,E&&`${Z}-${E}`,g&&`${Z}-dismissible`),children:[g&&(0,h.jsx)(d.Z,{onClick:C,"aria-label":a,variant:o}),p]});return b?(0,h.jsx)(b,{unmountOnExit:!0,...x,ref:void 0,in:l,children:I}):l?I:null}));Z.displayName="Alert",Z.defaultProps=x;const C=Object.assign(Z,{Link:f,Heading:g});var b=n(83819),I=n(93379),y=n.n(I),w=n(7795),B=n.n(w),U=n(90569),T=n.n(U),P=n(3565),S=n.n(P),R=n(19216),L=n.n(R),k=n(44589),N=n.n(k),F=n(11137),A={};A.styleTagTransform=N(),A.setAttributes=S(),A.insert=T().bind(null,"head"),A.domAPI=B(),A.insertStyleElement=L(),y()(F.Z,A),F.Z&&F.Z.locals&&F.Z.locals;var j=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,c=e.variant,s=void 0===c?"primary":c,u=r()((0,l.Z)({},"".concat(b.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},a),o.createElement(C,{key:s,variant:s},t))};const H=(0,o.memo)(j)},9231:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294);const a=function(e){(0,l.useEffect)((function(){return document.title=e,function(){document.title="UI Geeks | UI Learning Platform"}}),[])}},94364:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),a=n.n(l),r=n(23645),o=n.n(r)()(a());o.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const c=o},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),a=n.n(l),r=n(23645),o=n.n(r)()(a());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const c=o}}]);