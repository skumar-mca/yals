"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[7085],{67085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(81391),a=n(91573),o=n(87398),u=n(68947),c=n(12050),s=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"useContext()"),l.createElement(u.Z,null,"This hook is used to access ",l.createElement(s.B,null,"Context")," values inside the function component."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(r.Z,{language:a.r.JSX},"const value = useContext(ContextObject)")),l.createElement(u.Z,null,l.createElement(s.B,null,"ContextObject"),": It is the React Context object, returned from",l.createElement(s.I,null,"React.createContext()")," method."),l.createElement(u.Z,null,"The ",l.createElement(s.I,null,"useContext()")," Hook accepts a context object ",l.createElement(c.Z,null),l.createElement(s.B,null,'"ContextObject"')," and returns the current context ",l.createElement(s.B,null,"value")," for that context. The current context value is determined by the ",l.createElement(c.Z,null),l.createElement(s.BI,null,"value prop")," of the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>"),l.createElement(c.Z,null)," above the calling component in the tree."),l.createElement(u.Z,null,"When the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>")," updates the",l.createElement(c.Z,null)," ",l.createElement(s.BI,null,"value"),", this Hook will trigger a re-render with the latest context value."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(r.Z,{language:a.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(r.Z,{language:a.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(r.Z,{language:a.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')))}}}]);