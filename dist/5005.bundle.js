"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5005,4289],{84289:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(67294),l=t(81391),r=t(91573),c=t(87398),o=t(68947),u=t(12050),m=t(9167);const s=function(){return a.createElement(a.Fragment,null,a.createElement(c.Z,null,"Render Props"),a.createElement(o.Z,null,"The term ",a.createElement(m.B,null,'"render prop"')," refers to a technique for sharing code between components using a ",a.createElement(m.I,null,"prop")," whose value is a ",a.createElement(m.I,null,"function"),". A component with a render prop takes a function that returns a React element and calls it instead of implementing its own logic."),a.createElement(o.Z,null,a.createElement(m.IU,null,"Example:"),a.createElement(l.Z,{language:r.r.JSX},'const DataSource = (props) =>{\n  const [data, setData] = useState({});\n  const getData = () => {\n    // Can call API here\n    setData(()=>  { return { id:1, name : "John"} });\n  }\n  return <div>{props.render(data)}</div>;\n}'),a.createElement(l.Z,{language:r.r.JSX},"const HomeComponent = () => { \n  return <DataSource render = { \n    data => <div>\n        <h1>ID: {data.id}</h1> \n        <h2>Name: {data.name}</h1> \n      </div>\n    }\n  />\n}\n")),a.createElement(o.Z,null,"In the above example, the ",a.createElement(m.B,null,"DataSource")," component will do the data manipulation and provide the ",a.createElement(m.BI,null,"data")," to the passed ",a.createElement(u.Z,null),a.createElement(m.I,null,"prop function")," ",a.createElement(m.B,null,'"render"'),". In this way, the ",a.createElement(m.I,null,"state")," of the ",a.createElement(m.B,null,"DataSource")," component can be reused in any component."),a.createElement(o.Z,null,"More concretely, a ",a.createElement(m.B,null,"render prop")," is a ",a.createElement(m.I,null,"function prop")," that a component uses to know what to render."),a.createElement(o.Z,null,"It's important to remember that just because the pattern is called",a.createElement(m.B,null,'"render props"')," we don't have to use a prop named ",a.createElement(m.B,null,'"render"'),". In fact, ",a.createElement(m.B,null,"any name can be used")," for defining the ",a.createElement(u.Z,null),a.createElement(m.I,null,"render props"),"."))}},76074:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var a=t(67294),l=t(9231),r=t(59044),c=t(84289);const o=function(){return(0,l.Z)("UI-Geeks: React | Render Props"),a.createElement(r.Z,null,a.createElement(c.default,null))}}}]);