"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5092,6006,7893,6148,9045,6442,7075],{75092:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(67294),l=n(81391),r=n(91573),o=n(87398),s=n(26006),u=n(68947),i=n(12050),c=n(9167),h=[{label:"/javascript"},{label:"/javascript/blog/:blogId"},{label:"/javascript/history"}];const m=function(){return a.createElement(a.Fragment,null,a.createElement(o.Z,{as:"h2"},"BrowserRouter"),a.createElement(u.Z,null,"This is a ",a.createElement(c.I,null,"<Router>")," that uses the ",a.createElement(c.BI,null,"HTML5 history")," API (",a.createElement(c.I,null,"pushState"),", ",a.createElement(c.I,null,"replaceState")," and ",a.createElement(c.I,null,"postState")," events) to keep the UI in sync with the URL. URLs built with BrowserRouter follow the standard URL structure. For example: ",a.createElement(c.I,null,'"/language/React"'),"."),a.createElement(u.Z,null,"An alternate to this is ",a.createElement(c.B,null,"<HashRouter>"),", that uses the",a.createElement(i.Z,null)," ",a.createElement(c.B,null,"hash")," portion of the URL (i.e., ",a.createElement(i.Z,null),a.createElement(c.I,null,"window.location.hash"),")."),a.createElement(s.Z,null,a.createElement(c.B,null,"Hash history")," does not support ",a.createElement(c.B,null,"location.key")," or",a.createElement(c.B,null,"location.state"),". These were supported in older versions, but it had some issues for implementing a couple of edge cases."),a.createElement(u.Z,null,a.createElement(c.I,null,"<BrowserRouter>")," is the preferred way, but it may require some configuration changes to the server, to handle the ",a.createElement(i.Z,null),a.createElement(c.B,null,"refresh of the page"),". On a server, it may be required to configure URL routing to ",a.createElement(c.B,null,"by-pass the server-side routing")," and delegating the URL to the react application, so that BrowserRouter can render the expected UI."),a.createElement(o.Z,{as:"h2"},"<Routes>"),a.createElement(u.Z,null,"This is a parent route with child routes."),a.createElement(o.Z,{as:"h2"},"<Route>"),a.createElement(u.Z,null,"A Route Element of the structure ",a.createElement(c.I,null,"<Route path element >"),", which is used to define a route in the route config."),a.createElement(o.Z,{as:"h3"},"Route Config"),a.createElement(u.Z,null,"This is a tree of ",a.createElement(c.B,null,"route objects")," that will be ranked and matched against the current location to create a branch of ",a.createElement(c.B,null,"route matches"),"."),a.createElement(o.Z,{as:"h3"},"<Outlet>"),a.createElement(u.Z,null,"It is a component that renders the matched routes element."),a.createElement(o.Z,{as:"h3"},"Layout Route"),a.createElement(u.Z,null,"This is a parent route ",a.createElement(c.B,null,"without a path"),", used exclusively for grouping child routes inside a specific layout."),a.createElement(l.Z,{language:r.r.JSX},'<Route element={<Layout />}>\n  <Route path="/add" element={<Add />} />\n  <Route path="/update" element={<Update />} />\n</Route>'),a.createElement(o.Z,{as:"h3"},"Not Found Route"),a.createElement(u.Z,null,"When no route matches with URL, we can render a not found component using the ",a.createElement(c.B,null,'path="*"'),"."),a.createElement(l.Z,{language:r.r.JSX},'<Route path="*" element={<NotFound />} />'),a.createElement(o.Z,{as:"h3"},"Nested Routes"),a.createElement(u.Z,null,"Routes can be nested inside another Route and their paths will also nest. Nested routes are perfect for creating UI that has persistent navigation in layout with an inner section that changes with the URL."),a.createElement(l.Z,{language:r.r.JSX},'const App = () => {\n  return (\n    <Routes>\n      <Route path="javascript" element={<JavaScript />}>\n        <Route path="blog:blogId" element={<Blog />} />\n        <Route path="history" element={<History />} />\n      </Route>\n    </Routes>\n)}'),a.createElement(u.Z,null,"The route config will be defined with below given routes:",a.createElement(c.GS,{unOrdered:!0,items:h})),a.createElement(u.Z,null,"Observe that ",a.createElement(c.B,null,'"/javascript"')," is prefixed to both child routes."),a.createElement(l.Z,{language:r.r.JSX},"const JavaScript = () => {\n  return (\n    <>\n      <h1>JavaScript Section</h1>\n      <Outlet />\n    </>\n  )}"),a.createElement(l.Z,{language:r.r.JSX},"const Blog = () => {\n  const { blogId } = useParams();\n  return <h2>Blog ID is: {blogId }</h2>;\n}"),a.createElement(l.Z,{language:r.r.JSX},"const History = () => {\n  return <h2>JavaScript History</h2>;\n}"),a.createElement(o.Z,{as:"h3"},"Index Route"),a.createElement(u.Z,null,"A child route with ",a.createElement(c.B,null,"no path")," that renders in the",a.createElement(i.Z,null),a.createElement(c.I,null,"parent's ",a.createElement(i.Z,null),"<Outlet>"),a.createElement(i.Z,null),"for the parent's URL. Index routes can be thought of as the ",a.createElement(i.Z,null),a.createElement(c.B,null,'"default child route"'),". When a parent route has multiple children, but the URL is at the parent's path, the index route will be displayed in the ",a.createElement(c.I,null,"<Outlet>"),"."),a.createElement(l.Z,{language:r.r.JSX},'<Routes>\n  <Route path="/" element={<Layout />}>\n    <Route index element={<History />} />\n    <Route path="blog/:blogId" element={<Blog />} />\n    <Route path="history" element={<History />} />\n  </Route>\n</Routes>\n'),a.createElement(o.Z,{as:"h3"},"Descendant Routes"),a.createElement(u.Z,null,"As we have learnt that routes can be nested, which means we can have multiple ",a.createElement(c.B,null,"<Routes>")," elements in a ",a.createElement(c.I,null,"component tree"),". Route with ",a.createElement(c.B,null,'path ending with "/*"')," is called a descendant path, which tells React Router to use the given URL as the parent of the descendant routes."),a.createElement(u.Z,null,"Descendant Routes can be used to split routes in multiple files. This is helpful in defining module level routes."),a.createElement(l.Z,{language:r.r.JSX},'const AppRoutes = () => {\n  return (\n    <Routes>\n      <Route path="/" element={<Home />}>\n      <Route path="javascript/*" element={<JavaScriptRoutes />} />\n    </Routes>\n)}'),a.createElement(l.Z,{language:r.r.JSX},'const JavaScriptRoutes = () => {\n  return (\n    <Routes>\n      <Route path="/" element={<JavaScript />}>\n      <Route path="history" element={<History />} />\n    </Routes>\n)}'))}},26006:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(4942),l=n(94184),r=n.n(l),o=n(67294),s=n(14289),u=n(78146),i=n(67115),c=n(76792),h=n(32209),m=n(41485),d=n(39602),p=n(44680),E=n(85893);const g=(0,d.Z)("h4");g.displayName="DivStyledAsH4";const R=(0,p.Z)("alert-heading",{Component:g}),Z=(0,p.Z)("alert-link",{Component:i.Z}),f={variant:"primary",show:!0,transition:h.Z,closeLabel:"Close alert"},v=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:a,closeLabel:l,closeVariant:o,className:i,children:d,variant:p,onClose:g,dismissible:R,transition:Z,...f}=(0,s.Ch)(e,{show:"onClose"}),v=(0,c.vE)(n,"alert"),b=(0,u.Z)((e=>{g&&g(!1,e)})),w=!0===Z?h.Z:Z,y=(0,E.jsxs)("div",{role:"alert",...w?void 0:f,ref:t,className:r()(i,v,p&&`${v}-${p}`,R&&`${v}-dismissible`),children:[R&&(0,E.jsx)(m.Z,{onClick:b,"aria-label":l,variant:o}),d]});return w?(0,E.jsx)(w,{unmountOnExit:!0,...f,ref:void 0,in:a,children:y}):a?y:null}));v.displayName="Alert",v.defaultProps=f;const b=Object.assign(v,{Link:Z,Heading:R});var w=n(83819),y=n(93379),I=n.n(y),B=n(7795),x=n.n(B),S=n(90569),L=n.n(S),k=n(3565),J=n.n(k),U=n(19216),H=n.n(U),A=n(44589),j=n.n(A),N=n(11137),T={};T.styleTagTransform=j(),T.setAttributes=J(),T.insert=L().bind(null,"head"),T.domAPI=x(),T.insertStyleElement=H(),I()(N.Z,T),N.Z&&N.Z.locals&&N.Z.locals;var C=function(e){var t=e.children,n=e.noteText,l=void 0===n?"Note":n,s=e.variant,u=void 0===s?"primary":s,i=r()((0,a.Z)({},"".concat(w.HL,"-note"),!0));return o.createElement("div",{className:i},o.createElement("div",{className:"note-text"},l),o.createElement(b,{key:u,variant:u},t))};const O=(0,o.memo)(C)},11137:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(8081),l=n.n(a),r=n(23645),o=n.n(r)()(l());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const s=o}}]);