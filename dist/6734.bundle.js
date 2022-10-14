"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[6734,8135,8506,7672,8626],{46734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),r=n(87398),a=n(68947),o=n(12050),c=n(9167),u=n(10573),m=n(48135),s=n(18524),i=[{label:"Mounting",items:[{label:l.createElement(c.B,null,"constructor()")},{label:"static getDerivedStateFromProps()"},{label:l.createElement(c.B,null,"render()")},{label:l.createElement(c.B,null,"componentDidMount()")}]},{label:"Update",items:[{label:"static getDerivedStateFromProps()"},{label:"shouldComponentUpdate()"},{label:l.createElement(c.B,null,"render()")},{label:"getSnapshotBeforeUpdate()"},{label:l.createElement(c.B,null,"componentDidUpdate()")}]},{label:"Unmounting",items:[{label:l.createElement(c.B,null,"componentWillUnmount()")}]},{label:"Error Handling",items:[{label:"static getDerivedStateFromError()"},{label:"componentDidCatch()"}]}];const d=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Lifecycle Methods"),l.createElement(a.Z,null,"Each component has several ",l.createElement(c.B,null,'"lifecycle methods"')," that we can override to run code at particular times in the process. Lifecycle methods can be grouped by the phases. Methods marked in",l.createElement(o.Z,null)," ",l.createElement(c.B,null,"bold")," are commonly used methods."),l.createElement(c.GS,{unOrdered:!0,items:i}),l.createElement(a.Z,null,"Lets learn about each lifecycle method in detail."),l.createElement(a.Z,null,l.createElement(u.default,null),l.createElement(s.default,null),l.createElement(m.default,null)))}},10573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(87398),a=n(68947),o=n(15815),c=n(68157),u=n(77672),m=n(18566);const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Mounting LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the mounting phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(u.default,null),l.createElement(m.default,null),l.createElement(o.default,null)))}},48135:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),r=n(87398),a=n(68947),o=n(58506);const c=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Unmounting LifeCycle Method"),l.createElement(a.Z,null,"Below is the lifecycle method which is called in the unmount phase of the component."),l.createElement(a.Z,null,l.createElement(o.default,null)))}},18524:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(68947),o=n(21305),c=n(77672),u=n(28626),m=n(18566),s=n(92509);const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Update LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the update phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(s.default,null),l.createElement(m.default,null),l.createElement(u.default,null),l.createElement(o.default,null)))}},15815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"componentDidMount()"),l.createElement(o.Z,null,"It is invoked immediately after a component is mounted.",l.createElement(c.Z,null)," ",l.createElement(u.B,null,"Initialization")," that ",l.createElement(u.B,null,"requires DOM nodes")," should be written here, for example, setting tooltips where we need DOM nodes before rendering to get its placement . It is also a good place to",l.createElement(c.Z,null)," ",l.createElement(u.B,null,"make API calls")," or ",l.createElement(u.B,null,"set up any subscriptions"),"."),l.createElement(a.Z,null,"We may call ",l.createElement(u.B,null,"setState()")," immediately in ",l.createElement(u.B,null,"componentDidMount()"),". It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice, the user won't see the intermediate state. Use this pattern with caution because it often causes performance issues."))}},21305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(81391),a=n(87398),o=n(26006),c=n(68947),u=n(12050),m=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"componentDidUpdate()"),l.createElement(c.Z,null,"It is invoked immediately after updating occurs. This method is not called for the initial render."),l.createElement(r.Z,null,"componentDidUpdate(prevProps, prevState, snapshot)"),l.createElement(c.Z,null,l.createElement(m.B,null,"snapshot"),": If the component implements the",l.createElement(m.BI,null,"getSnapshotBeforeUpdate()")," lifecycle, the value it returns will be the value of the third parameter ",l.createElement(m.B,null,'"snapshot"'),", otherwise this parameter will be ",l.createElement(m.BI,null,"undefined"),"."),l.createElement(c.Z,null,"This method can be used to operate on the DOM when the component has been updated or calling API on change of props."),l.createElement(o.Z,null,"We may call setState() immediately in componentDidUpdate() but ",l.createElement(u.Z,null),l.createElement(m.B,null,"it must be wrapped in a condition")," or it will cause an ",l.createElement(u.Z,null),l.createElement(m.B,null,"infinite loop"),"."),l.createElement(o.Z,null,"componentDidUpdate() will not be invoked if ",l.createElement(u.Z,null),l.createElement(m.B,null,"shouldComponentUpdate()")," returns ",l.createElement(m.B,null,"false"),"."))}},58506:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(68947),o=n(12050),c=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"componentWillUnmount()"),l.createElement(a.Z,null,"It is invoked immediately before a component is ",l.createElement(c.B,null,"unmounted")," and",l.createElement(o.Z,null)," ",l.createElement(c.B,null,"destroyed"),". This method is used to perform ",l.createElement(o.Z,null),l.createElement(c.B,null,"cleanup tasks")," like, invalidating timers, canceling network calls or for unsubscribing from the subscriptions."),l.createElement(a.Z,null,"Once a component is unmounted, it will never be mounted again. We should not call setState() in componentWillUnmount() because the component will never be re-rendered."))}},68157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),u=n(9167),m=[{label:l.createElement(l.Fragment,null,"Initializing ",l.createElement(u.B,null,"local state")," by assigning an object to this.state.")},{label:l.createElement(l.Fragment,null,"Binding ",l.createElement(u.B,null,"event handler")," methods to an instance.")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"constructor()"),l.createElement(o.Z,null,"The constructor for a React component is called before it is mounted. When implementing the constructor, we should call ",l.createElement(u.BI,null,"super(props)"),l.createElement(c.Z,null)," before any other statement. Otherwise, ",l.createElement(u.BI,null,'"this.props"'),l.createElement(c.Z,null)," will be ",l.createElement(u.BI,null,"undefined")," in the ",l.createElement(u.I,null,"constructor"),". Avoid introducing any ",l.createElement(u.I,null,"side-effects")," or ",l.createElement(u.I,null,"subscriptions")," in the constructor."),l.createElement(o.Z,null,"In React, ",l.createElement(u.I,null,"constructors")," are only used for two purposes:",l.createElement(u.GS,{unOrdered:!0,items:m})),l.createElement(o.Z,null,"The ",l.createElement(u.I,null,"constructor")," is the only place where we should assign",l.createElement(u.BI,null,"this.state")," directly. In all other places, we should use",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"this.setState()"),"."),l.createElement(a.Z,null,"constructor is ",l.createElement(u.B,null,"optional"),". If we neither initialize state nor bind methods, then we don't need to implement a constructor."))}},77672:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"static getDerivedStateFromProps()"),l.createElement(o.Z,null,"It is invoked right before calling the ",l.createElement(u.I,null,"render()")," method, both on the ",l.createElement(u.B,null,"initial mount")," and on ",l.createElement(u.B,null,"subsequent updates"),". It should",l.createElement(u.BI,null,"return an object")," to update the ",l.createElement(u.I,null,"state"),", or ",l.createElement(u.BI,null,"null"),l.createElement(c.Z,null)," to update nothing."),l.createElement(r.Z,null,"static getDerivedStateFromProps(props, state)"),l.createElement(o.Z,null,"This method exists for ",l.createElement(u.I,null,"rare use cases"),", where the ",l.createElement(u.BI,null,"state"),l.createElement(c.Z,null)," depends on changes in ",l.createElement(u.BI,null,"props"),". This method doesn't have access to the component instance. It is fired on every render, regardless of the cause."))}},28626:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"getSnapshotBeforeUpdate()"),l.createElement(o.Z,null,"It is invoked right before the most recently rendered output is committed to the DOM. It enables components to capture some information from the DOM (like scroll position) before it is potentially changed."),l.createElement(r.Z,null,"getSnapshotBeforeUpdate(prevProps, prevState)"),l.createElement(o.Z,null,"Any value returned from this method will be passed as a parameter to the",l.createElement(u.BI,null,"componentDidUpdate()"),". It should return either a ",l.createElement(c.Z,null),l.createElement(u.BI,null,"snapshot value")," or ",l.createElement(u.BI,null,"null"),"."))}},18566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),u=n(9167),m=[{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"React elements"),l.createElement(u.cJ,null),"Any valid JSX element.")},{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"Array and fragments"),l.createElement(u.cJ,null),"Let us ",l.createElement(u.B,null,"return multiple elements")," from the render. By default",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"render()")," method should return only ",l.createElement(u.B,null,"one element"),", but ",l.createElement(c.Z,null)," ",l.createElement(u.BI,null,"fragments")," can be used to ",l.createElement(u.B,null,"combine/wrap"),l.createElement(c.Z,null)," multiple elements that can be returned from the ",l.createElement(c.Z,null),l.createElement(u.I,null,"render()")," method.")},{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"Portal"),l.createElement(u.cJ,null),"Portals help render children into a ",l.createElement(u.BI,null,"different DOM subtree"),". Will learn more about portals later.")},{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"String and numbers"),l.createElement(u.cJ,null),"These are rendered as text nodes in the DOM.")},{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"Booleans or null"),l.createElement(u.cJ,null),"Renders ",l.createElement(u.B,null,"nothing"),". Most used to implement conditional rendering, for example: ",l.createElement(u.I,null,"isTrue && <Welcome />"),".")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"render()"),l.createElement(o.Z,null,"The render() method is the only ",l.createElement(u.B,null,"required")," method in a ",l.createElement(u.I,null,"class"),l.createElement(c.Z,null)," component. When called, it should examine ",l.createElement(u.BI,null,"this.props"),l.createElement(c.Z,null)," and ",l.createElement(u.BI,null,"this.state")," and return one of the following types:"),l.createElement(u.GS,{unOrdered:!0,expanded:!0,items:m}),l.createElement(o.Z,null,"The ",l.createElement(u.I,null,"render()")," method should be pure, meaning that it ",l.createElement(c.Z,null),l.createElement(u.B,null,"does not modify")," state, it returns the same result each time it's invoked, and it does not directly interact with the browser."),l.createElement(a.Z,null,"render() will not be invoked if ",l.createElement(u.B,null,"shouldComponentUpdate()")," returns false."))}},92509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(81391),a=n(91573),o=n(87398),c=n(26006),u=n(68947),m=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h4"},"shouldComponentUpdate()"),l.createElement(u.Z,null,"This method is used to ",l.createElement(s.B,null,"skip the re-rendering")," of the component. This method should ",l.createElement(s.BI,null,"return a boolean value"),". If it returns",l.createElement(m.Z,null)," ",l.createElement(s.BI,null,"false"),", then ",l.createElement(s.B,null,"UNSAFE_componentWillUpdate()"),",",l.createElement(m.Z,null)," ",l.createElement(s.B,null,"render()")," and ",l.createElement(s.B,null,"componentDidUpdate()")," methods are not invoked."),l.createElement(r.Z,{language:a.r.JSX},"shouldComponentUpdate(nextProps, nextState)"),l.createElement(u.Z,null,"The default behavior is to re-render on every change in ",l.createElement(s.I,null,"state")," or",l.createElement(m.Z,null)," ",l.createElement(s.I,null,"props"),". We can use this method to let React know if the output is not affected by the current change in state or props. React prefers to rely on default behavior in the majority of the cases."),l.createElement(u.Z,null,"It is invoked ",l.createElement(s.B,null,"before rendering")," when ",l.createElement(s.B,null,"new")," ",l.createElement(s.I,null,"props")," or",l.createElement(m.Z,null)," ",l.createElement(s.I,null,"state")," are being received. Defaults to true. This method is not called for the ",l.createElement(s.I,null,"initial render")," or when ",l.createElement(s.I,null,"forceUpdate()"),l.createElement(m.Z,null)," is used."),l.createElement(c.Z,null,"Returning ",l.createElement(s.B,null,"false")," does not prevent child components from re-rendering when ",l.createElement(s.B,null,"their")," state changes."))}}}]);