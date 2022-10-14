"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5811],{75811:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var l=t(67294),o=t(81391),r=t(91573),a=t(87398),u=t(68947),c=t(12050),s=t(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"When to use Context"),l.createElement(u.Z,null,"Context is designed to share data that can be considered ",l.createElement(s.B,null,'"global"'),l.createElement(c.Z,null)," for a tree of React components, such as the ",l.createElement(c.Z,null),l.createElement(s.I,null,"current user"),", ",l.createElement(s.I,null,"theme"),", or ",l.createElement(s.I,null,"preferred language"),". By using context, we can avoid passing props to intermediate elements of the child tree."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(o.Z,{language:r.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(o.Z,{language:r.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(o.Z,{language:r.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')),l.createElement(u.Z,null,"In the above code, ",l.createElement(s.B,null,"LoginButton")," component will render below elements on the ",l.createElement(s.B,null,"mount")," of the component.",l.createElement(o.Z,{language:r.r.HTML},"<span>Username: Default User</span>\n<button>Login</button>\n")),l.createElement(u.Z,null,"But once a user clicks on ",l.createElement(s.BI,null,"toggleButton")," in the ",l.createElement(s.B,null,"Home"),l.createElement(c.Z,null)," component, the ",l.createElement(s.B,null,"Home")," component will be ",l.createElement(c.Z,null),l.createElement(s.I,null,"re-rendered"),", because the value of the context will change. Now the ",l.createElement(s.B,null,"LoginButton")," component will render the below elements.",l.createElement(o.Z,{language:r.r.HTML},"<span>Username: Home User</span>\n<button>Logout</button>")))}}}]);