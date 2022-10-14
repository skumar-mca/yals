"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[9236,4042],{36195:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),a=n(87398),c=n(68947),u=n(9167),r=n(74830);const o=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Lifecycle Methods"),l.createElement(c.Z,null,"Each component has several ",l.createElement(u.B,null,'"lifecycle methods"')," that we can override to run code at particular times in the process.",l.createElement(r.default,null)))}},64042:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),a=n(81391),c=n(91573),u=n(68947),r=n(9167);const o=function(){return l.createElement(l.Fragment,null,l.createElement(u.Z,null,"This is the simplest way to define a component."),l.createElement(a.Z,{language:c.r.JSX},"function Welcome(props) {\n  return <h1>Hello, {props.userName}</h1>\n}"),l.createElement(u.Z,null,"Above function is a valid React ",l.createElement(r.I,null,"component")," because it accepts a single ",l.createElement(r.I,null,"input")," ",l.createElement(r.BI,null,'"props"')," (which stands for ",l.createElement(r.B,null,"properties"),") ",l.createElement(r.I,null,"object argument")," and it returns a React element. Such components are called ",l.createElement(r.BI,null,'"function components"')," because they are literally JavaScript ",l.createElement(r.I,null,"functions"),"."))}},64231:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(9231),c=n(59044),u=n(87398),r=n(36195),o=n(64042),s=n(3885);const m=function(){return(0,a.Z)("UI-Geeks: React | Class Component"),l.createElement(c.Z,null,l.createElement(u.Z,null,"Function Component"),l.createElement(o.default,null),l.createElement(s.default,null),l.createElement(r.default,null))}},3885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),c=n(91573),u=n(87398),r=n(26006),o=n(68947),s=n(12050),m=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(u.Z,{as:"h2"},"Adding State"),l.createElement(u.Z,{as:"h3"},"useState()"),l.createElement(o.Z,null,"With the introduction of ",l.createElement(m.BI,null,"Hooks"),", ",l.createElement(m.I,null,"function components")," can also have ",l.createElement(m.I,null,"state"),". The ",l.createElement(m.BI,null,"useState")," is the ",l.createElement(m.I,null,"hook")," used to add ",l.createElement(m.I,null,"state")," to the ",l.createElement(m.I,null,"function component"),"."),l.createElement(r.Z,null,"A hook is a special function that lets us ",l.createElement(m.B,null,'"hook into"')," React features. For example: ",l.createElement(m.B,null,"useState()")," is a Hook that adds state to function components."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,null,"const [stateValue, updateFunction] = useState(initialValue);")),l.createElement(o.Z,null,l.createElement(m.B,null,"useState"),": This is the Hook used to add state to a function component. It returns a ",l.createElement(m.B,null,"pair")," - an array with two items. The first item is the current value and second is a function that updates it."),l.createElement(o.Z,null,l.createElement(m.B,null,"stateValue"),": It is the first value of the pair of values returned from the ",l.createElement(m.I,null,"useState()")," function. This is the name of the state variable. In contrast to the class state, the state of a function can be any valid type. For example, it can be numbers, strings, arrays, etc."),l.createElement(o.Z,null,l.createElement(m.B,null,"updateFunction"),": This is the second value of the pair of values returned from the ",l.createElement(m.I,null,"useState()")," function. This function is equivalent to ",l.createElement(m.I,null,"setState()")," of the class component and used to update the respective state variable."),l.createElement(o.Z,null,l.createElement(m.B,null,"initialValue"),": It is the initial value of the state variable. The initial value is only assigned once, on the mount of the component and is ignored on further update events."),l.createElement(o.Z,null,"Let's build our Counter component using the ",l.createElement(m.B,null,"function component"),l.createElement(s.Z,null)," and ",l.createElement(m.B,null,"useState()")," hook."),l.createElement(a.Z,{language:c.r.JSX},"const Counter = (props) => {\n  const [counter, setCounter]\t = useState(0);\n  const incrementCounter = () => {\n    setCounter((prevState) => prevState + 1);\n  }\n  return <div>\n    <span>Counter Value: {counter}</span>\n    <button onClick={incrementCounter}>Increment</button>\n  </div>\n}"),l.createElement(o.Z,null,"Above code is much simpler as compared to the ",l.createElement(m.I,null,"class component"),l.createElement(s.Z,null)," equivalent."))}},74830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),c=n(91573),u=n(87398),r=n(26006),o=n(68947),s=n(12050),m=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(u.Z,{as:"h3"},"useEffect()"),l.createElement(o.Z,null,"The ",l.createElement(m.BI,null,"useEffect")," hook is used to perform ",l.createElement(m.I,null,"side effects")," in",l.createElement(s.Z,null)," ",l.createElement(m.I,null,"function components"),". Side effects can be calling APIs, setting up the subscription, setting timers, etc. By using this hook, we tell React that our component needs to do something after render. React will remember the function and call it later after performing the DOM updates. React guarantees the DOM has been updated by the time it runs the effects."),l.createElement(r.Z,null,"Hooks embrace JavaScript closures to access the function state."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,{language:c.r.JSX},"useEffect(()= >{\n    // body of the side-effects\n\n    // optional return statement\n    return () => {\n        // Unmount statements\n    }\n}, <optional-dependencies-array>)\n")),l.createElement(o.Z,null,l.createElement(m.B,null,"<optional-dependencies-array>"),": This is the optional Array of dependencies, which instructs React, when to call this side-effect. React observes the changes in values of the dependency array items, and will call the side-effect statements, on change of any dependency."),l.createElement(o.Z,null,l.createElement(m.B,null,"return () => { }"),l.createElement(m.cJ,null),l.createElement(m.I,null,"useEffect()")," can optionally return a function, which will be called on component unmount or before running the next effect."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Example:"),l.createElement(a.Z,null,"const Counter = () => {\n    const [counter, setCounter] = useState(0);\n    useEffect(() => {\n        document.title = `Clicked ${counter} times.`;\n        // cleanup activity\n        return () => {\n            document.title = `Clicked 0 times.`;\n        }\n    });\n\n    const handleButtonClick = () => {\n        setCounter((prev) => prev+1);\n    }\n\n    return <div>\n        <span>You clicked {count} times.</span>\n        <button onClick={handleButtonClick}>Click</button>\n    </div>\n}\n")),l.createElement(o.Z,null,"Compared to class component's lifecycle methods, this one hook is equivalent to ",l.createElement(m.BI,null,"componentDidMount()"),", ",l.createElement(s.Z,null),l.createElement(m.BI,null,"componentDidUpdate()")," and ",l.createElement(m.BI,null,"componentWillUnmount()"),l.createElement(s.Z,null)," combined together."),l.createElement(o.Z,null,"Let's learn how ",l.createElement(m.BI,null,"useEffect()")," can be used as ",l.createElement(s.Z,null),l.createElement(m.I,null,"componentDidMount()"),", ",l.createElement(m.I,null,"componentDidUpdate()")," and",l.createElement(s.Z,null)," ",l.createElement(m.I,null,"componentWillUnmount()"),"."),l.createElement(u.Z,{as:"h5"},"As componentDidMount()"),l.createElement(o.Z,null,"Passing ",l.createElement(m.B,null,"empty [] dependency")," to ",l.createElement(m.I,null,"useEffect()")," will make it equivalent to ",l.createElement(m.B,null,"componentDidMount()")," and statements will be executed only once."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[ ])")),l.createElement(o.Z,null,l.createElement(m.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n    useEffect(() =>{ \n        document.title = "useEffect() equivalent to componentDidUpdate()";\n    }, []);\n\n    return <div>Hello</div>;\n}')),l.createElement(o.Z,null,"Above code will call ",l.createElement(m.BI,null,"useEffect()")," only once on ",l.createElement(m.B,null,"mount"),"."),l.createElement(u.Z,{as:"h5"},"As componentDidUpdate()"),l.createElement(o.Z,null,l.createElement(m.B,null,"Passing the dependency array")," to ",l.createElement(m.I,null,"useEffect()")," will make it equivalent to ",l.createElement(m.B,null,"componentDidUpdate()")," and statements will be executed on every update to the dependency items."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[dependency1, dependency2,..., dependencyN])")),l.createElement(o.Z,null,l.createElement(m.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n    const [name, setName] = useState("");\n    const [age, setAge] = useState(0);\n    const [message, setMessage] = useState("");\n\n    useEffect(() =>{ \n        setMessage(() => `Name: ${name}, age: ${age}`);\n    }, [name, age]);\n\n    return <div>{message}</div>;\n}\n')),l.createElement(o.Z,null,"Above code will call ",l.createElement(m.BI,null,"useEffect()")," on ",l.createElement(m.B,null,"mount")," as well as",l.createElement(s.Z,null)," ",l.createElement(m.B,null,"on change")," in value of ",l.createElement(m.BI,null,'"name"')," or ",l.createElement(m.BI,null,'"age"'),"."),l.createElement(u.Z,{as:"h5"},"As componentWillUnmount()"),l.createElement(o.Z,null,l.createElement(m.I,null,"useEffect()")," optionally returns a ",l.createElement(m.BI,null,"function"),", which is called before running the ",l.createElement(m.I,null,"useEffect()")," again. Returning this",l.createElement(s.Z,null)," ",l.createElement(m.I,null,"function")," along with ",l.createElement(m.B,null,"empty dependency []")," will be equivalent to ",l.createElement(m.B,null,"componentWillUnmount()"),"."),l.createElement(o.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{\n    return () =>{\n        // cleanup statements\n    }\n},[])\n")),l.createElement(o.Z,null,l.createElement(m.IU,null,"Example:"),l.createElement(a.Z,{language:c.r.JSX},'const User = () => {\n  useEffect(() =>{ \n    document.title = "useEffect() equivalent to componentDidUpdate()";\n    return () => { \n      document.title = “Default title”;\n    }\n  }, []);\n\n  return <div>Hello</div>;\n}')),l.createElement(r.Z,null,"If useEffect() returns a function with some dependency or without any dependency, in such cases the returned function (cleanup method) will be invoked on every update. This may lead to performance issues, if not used wisely."),l.createElement(r.Z,null,"Unlike componentDidMount() or componentDidUpdate(), effects scheduled with ",l.createElement(m.B,null,"useEffect() don't block the browser from updating the screen"),". This makes the app more responsive. The majority of effects don't need to happen synchronously. In uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect()."))}}}]);