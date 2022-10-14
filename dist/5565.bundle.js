"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5565,6006,7893,1796,2537,7990,1602,7085,4830,1480,2835,2585,2993,8615,5775,7355],{51796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),a=n(87398),r=n(68947),c=n(1602),u=n(11480),o=n(32835),s=n(72585),i=n(22993),m=n(8615);const d=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Additional Hooks"),l.createElement(r.Z,null,"The following Hooks are either variants of the basic ones or only needed for specific edge cases."),l.createElement(i.default,null),l.createElement(c.default,null),l.createElement(s.default,null),l.createElement(m.default,null),l.createElement(u.default,null),l.createElement(o.default,null))}},2537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(87398),r=n(68947),c=n(67085),u=n(74830),o=n(25775);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Basic Hooks"),l.createElement(r.Z,null,"Below is the list of commonly used built-in Hooks."),l.createElement(o.default,null),l.createElement(u.default,null),l.createElement(c.default,null))}},97990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(87398),r=n(68947),c=n(12050),u=n(9167),o=[{label:l.createElement(l.Fragment,null,"Only call Hooks ",l.createElement(u.B,null,"at the top level"),". Don't call Hooks inside loops, conditions or nested functions.")},{label:l.createElement(l.Fragment,null,"Only call Hooks ",l.createElement(u.B,null,"from React function components"),". Don't call Hooks from regular JavaScript functions.")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,null,l.createElement(u.B,null,"Hooks")," were added in React ",l.createElement(u.B,null,"v16.8"),". Hooks lets us use",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"state")," and other React features without writing a class component. Hooks are functions that let us ",l.createElement(u.B,null,'"hook into"')," React",l.createElement(u.I,null,"state")," and ",l.createElement(u.I,null,"lifecycle")," features from function components. Hooks ",l.createElement(u.B,null,"don't work")," inside class components."),l.createElement(r.Z,null,"React provides a few built-in Hooks like ",l.createElement(u.I,null,"useState()"),", ",l.createElement(c.Z,null),l.createElement(u.I,null,"useEffect()"),", etc. We can also create custom hooks to reuse stateful behavior between different components."),l.createElement(a.Z,{as:"h2"},"Rules of Hooks"),l.createElement(r.Z,null,"Hooks are JavaScript functions, but they impose two additional rules:",l.createElement(u.GS,{unOrdered:!0,expanded:!0,items:o})))}},5565:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(9231),r=n(59044),c=n(87398),u=n(51796),o=n(2537),s=n(97990);const i=function(){return(0,a.Z)("UI-Geeks: React | Hooks"),l.createElement(r.Z,null,l.createElement(c.Z,null,"Hooks"),l.createElement(s.default,null),l.createElement(o.default,null),l.createElement(u.default,null))}},1602:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useCallback()"),l.createElement(u.Z,null,"This Hook is used to create a ",l.createElement(s.I,null,"memoized callback"),", which will execute only on the change of the given dependencies."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedCallback = useCallback(() => {\n  // expensive expressions\n}, [/* dependency list */])")),l.createElement(u.Z,null,"The ",l.createElement(s.BI,null,"useCallback")," will return a memoized version of the",l.createElement(o.Z,null)," ",l.createElement(s.B,null,"callback")," that only changes if one of the dependencies has changed."),l.createElement(u.Z,null,"The ",l.createElement(s.BI,null,"useCallback(fn, deps)")," is equivalent to",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,"useMemo(() => fn, deps)"),"."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedCallback = useCallback(() => {\n  doSomeExpensive(a, b);\n}, [a, b]);\n")),l.createElement(u.Z,null,"In the above code, ",l.createElement(s.B,null,'"doSomeExpensive"')," method will be called on change on the given dependencies ",l.createElement(s.B,null,'"a"')," and ",l.createElement(s.B,null,'"b"'),"."))}},67085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useContext()"),l.createElement(u.Z,null,"This hook is used to access ",l.createElement(s.B,null,"Context")," values inside the function component."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const value = useContext(ContextObject)")),l.createElement(u.Z,null,l.createElement(s.B,null,"ContextObject"),": It is the React Context object, returned from",l.createElement(s.I,null,"React.createContext()")," method."),l.createElement(u.Z,null,"The ",l.createElement(s.I,null,"useContext()")," Hook accepts a context object ",l.createElement(o.Z,null),l.createElement(s.B,null,'"ContextObject"')," and returns the current context ",l.createElement(s.B,null,"value")," for that context. The current context value is determined by the ",l.createElement(o.Z,null),l.createElement(s.BI,null,"value prop")," of the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>"),l.createElement(o.Z,null)," above the calling component in the tree."),l.createElement(u.Z,null,"When the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>")," updates the",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,"value"),", this Hook will trigger a re-render with the latest context value."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(a.Z,{language:r.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(a.Z,{language:r.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')))}},74830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(26006),o=n(68947),s=n(12050),i=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useEffect()"),l.createElement(o.Z,null,"The ",l.createElement(i.BI,null,"useEffect")," hook is used to perform ",l.createElement(i.I,null,"side effects")," in",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"function components"),". Side effects can be calling APIs, setting up the subscription, setting timers, etc. By using this hook, we tell React that our component needs to do something after render. React will remember the function and call it later after performing the DOM updates. React guarantees the DOM has been updated by the time it runs the effects."),l.createElement(u.Z,null,"Hooks embrace JavaScript closures to access the function state."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"useEffect(()= >{\n    // body of the side-effects\n\n    // optional return statement\n    return () => {\n        // Unmount statements\n    }\n}, <optional-dependencies-array>)\n")),l.createElement(o.Z,null,l.createElement(i.B,null,"<optional-dependencies-array>"),": This is the optional Array of dependencies, which instructs React, when to call this side-effect. React observes the changes in values of the dependency array items, and will call the side-effect statements, on change of any dependency."),l.createElement(o.Z,null,l.createElement(i.B,null,"return () => { }"),l.createElement(i.cJ,null),l.createElement(i.I,null,"useEffect()")," can optionally return a function, which will be called on component unmount or before running the next effect."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,null,"const Counter = () => {\n    const [counter, setCounter] = useState(0);\n    useEffect(() => {\n        document.title = `Clicked ${counter} times.`;\n        // cleanup activity\n        return () => {\n            document.title = `Clicked 0 times.`;\n        }\n    });\n\n    const handleButtonClick = () => {\n        setCounter((prev) => prev+1);\n    }\n\n    return <div>\n        <span>You clicked {count} times.</span>\n        <button onClick={handleButtonClick}>Click</button>\n    </div>\n}\n")),l.createElement(o.Z,null,"Compared to class component's lifecycle methods, this one hook is equivalent to ",l.createElement(i.BI,null,"componentDidMount()"),", ",l.createElement(s.Z,null),l.createElement(i.BI,null,"componentDidUpdate()")," and ",l.createElement(i.BI,null,"componentWillUnmount()"),l.createElement(s.Z,null)," combined together."),l.createElement(o.Z,null,"Let's learn how ",l.createElement(i.BI,null,"useEffect()")," can be used as ",l.createElement(s.Z,null),l.createElement(i.I,null,"componentDidMount()"),", ",l.createElement(i.I,null,"componentDidUpdate()")," and",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"componentWillUnmount()"),"."),l.createElement(c.Z,{as:"h5"},"As componentDidMount()"),l.createElement(o.Z,null,"Passing ",l.createElement(i.B,null,"empty [] dependency")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidMount()")," and statements will be executed only once."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[ ])")),l.createElement(o.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n    useEffect(() =>{ \n        document.title = "useEffect() equivalent to componentDidUpdate()";\n    }, []);\n\n    return <div>Hello</div>;\n}')),l.createElement(o.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," only once on ",l.createElement(i.B,null,"mount"),"."),l.createElement(c.Z,{as:"h5"},"As componentDidUpdate()"),l.createElement(o.Z,null,l.createElement(i.B,null,"Passing the dependency array")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidUpdate()")," and statements will be executed on every update to the dependency items."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[dependency1, dependency2,..., dependencyN])")),l.createElement(o.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n    const [name, setName] = useState("");\n    const [age, setAge] = useState(0);\n    const [message, setMessage] = useState("");\n\n    useEffect(() =>{ \n        setMessage(() => `Name: ${name}, age: ${age}`);\n    }, [name, age]);\n\n    return <div>{message}</div>;\n}\n')),l.createElement(o.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," on ",l.createElement(i.B,null,"mount")," as well as",l.createElement(s.Z,null)," ",l.createElement(i.B,null,"on change")," in value of ",l.createElement(i.BI,null,'"name"')," or ",l.createElement(i.BI,null,'"age"'),"."),l.createElement(c.Z,{as:"h5"},"As componentWillUnmount()"),l.createElement(o.Z,null,l.createElement(i.I,null,"useEffect()")," optionally returns a ",l.createElement(i.BI,null,"function"),", which is called before running the ",l.createElement(i.I,null,"useEffect()")," again. Returning this",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"function")," along with ",l.createElement(i.B,null,"empty dependency []")," will be equivalent to ",l.createElement(i.B,null,"componentWillUnmount()"),"."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{\n    return () =>{\n        // cleanup statements\n    }\n},[])\n")),l.createElement(o.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n  useEffect(() =>{ \n    document.title = "useEffect() equivalent to componentDidUpdate()";\n    return () => { \n      document.title = “Default title”;\n    }\n  }, []);\n\n  return <div>Hello</div>;\n}')),l.createElement(u.Z,null,"If useEffect() returns a function with some dependency or without any dependency, in such cases the returned function (cleanup method) will be invoked on every update. This may lead to performance issues, if not used wisely."),l.createElement(u.Z,null,"Unlike componentDidMount() or componentDidUpdate(), effects scheduled with ",l.createElement(i.B,null,"useEffect() don't block the browser from updating the screen"),". This makes the app more responsive. The majority of effects don't need to happen synchronously. In uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect()."))}},11480:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useImperativeHandle()"),l.createElement(u.Z,null,"This Hook customizes the instance value that is exposed to parent components when using ref. The useImperativeHandle should be used with forwardRef."),l.createElement(u.Z,null,l.createElement(o.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"useImperativeHandle(ref, createHandle, [deps])")),l.createElement(u.Z,null,l.createElement(o.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const CustomInput = (props, ref) => {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () => ({\n    focus: () => { inputRef.current.focus(); }\n  }));\n\n  return <input ref={inputRef} />;\n}\n\nCustomInput = forwardRef(CustomInput);\n")),l.createElement(u.Z,null,"In above code, a parent component that renders",l.createElement(o.BI,null,"<CustomInput ref={inputRef} />")," would be able to call",l.createElement(o.BI,null,"inputRef.current.focus()"),"."))}},32835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),a=n(87398),r=n(68947),c=n(12050),u=n(9167);const o=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"useLayoutEffect()"),l.createElement(r.Z,null,"This Hook is identical to ",l.createElement(u.BI,null,"useEffect"),", but it fires",l.createElement(c.Z,null)," ",l.createElement(u.B,null,"synchronously")," after all DOM mutations. Use this Hook to read layout from the DOM and synchronously re-render. Updates scheduled inside ",l.createElement(u.I,null,"useLayoutEffect")," will be flushed synchronously, before the browser has a chance to paint."),l.createElement(r.Z,null,"Prefer the standard ",l.createElement(u.I,null,"useEffect")," when possible to avoid blocking visual updates."))}},72585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useMemo()"),l.createElement(u.Z,null,"The ",l.createElement(o.B,null,"useMemo")," will only recompute the ",l.createElement(o.B,null,"memoized value")," when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no dependency array is provided, a new value will be computed on every render."),l.createElement(u.Z,null,l.createElement(o.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedValue = useMemo(() => expensiveFunction, [/* dependencies */]);")),l.createElement(u.Z,null,l.createElement(o.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedValue = useMemo(() => \n  computeExpensiveValue(a, b),\n[a, b]);")))}},22993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useReducer()"),l.createElement(u.Z,null,"This Hooks is an alternative to ",l.createElement(s.I,null,"useState")," Hook. It is usually preferable over ",l.createElement(s.I,null,"useState")," when we have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also optimizes the performance of the component."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const [state, dispatch] = useReducer(reducer, intialArg, init);")),l.createElement(u.Z,null,l.createElement(s.B,null,"state"),": This variable holds the current value of the state."),l.createElement(u.Z,null,l.createElement(s.B,null,"dispatch"),": This method is used to trigger a change to the state value."),l.createElement(u.Z,null,l.createElement(s.B,null,"reducer"),": This is a method of type ",l.createElement(o.Z,null),l.createElement(s.BI,null,"(state, action) => newState"),". It accepts ",l.createElement(s.B,null,'"action"'),l.createElement(o.Z,null)," from ",l.createElement(s.B,null,"dispatch"),", uses the ",l.createElement(s.BI,null,"current state")," to compute ",l.createElement(s.BI,null,"newState")," and returns the newState."),l.createElement(u.Z,null,l.createElement(s.B,null,"intialArg"),": It is the initial value of the state."),l.createElement(u.Z,null,l.createElement(s.B,null,"init"),": This is an ",l.createElement(s.I,null,"optional function"),", used for ",l.createElement(o.Z,null),l.createElement(s.I,null,"lazy initialization")," of the ",l.createElement(s.I,null,"state"),". If provided, the initial state will be set to ",l.createElement(s.BI,null,"init(initialArg)"),". It lets us extract the logic for calculating the initial state outside the reducer."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const init = (initialCount) => {\n  return { count: initialCount };\n}"),l.createElement(a.Z,{language:r.r.JSX},'const reducer(state, action) {\n  switch(action.type) {\n    case "increment": return { count : state.count + 1 };\n    case "decrement": return { count : state.count - 1 };\n    case "reset": return init(action.payload);\n    default: throw new Error();\n  }\n}')),l.createElement(a.Z,{language:r.r.JSX},'const Counter = (props) => {\n  const { initialCount } = props;\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n\n  const handleReset = () => {\n    dispatch({ type: "reset", payload: initialCount });\n  }\n  const handleIncrement = () => { dispatch({ type: "increment" }); \t}\n  const handleDecrement = () => { dispatch({ type: "decrement" }); }\n\n  return <>\n    Count: {state.count}\n    <button onClick={handleReset}>Reset</button>\n    <button onClick={handleIncrement}>Increment</button>\n    <button onClick={handleDecrement}>Decrement</button>\n  </>\n}'))}},8615:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useRef()"),l.createElement(u.Z,null,"The ",l.createElement(s.B,null,"useRef")," returns a mutable ",l.createElement(s.I,null,"ref")," object whose",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,'".current"')," property is initialized to the passed argument ",l.createElement(s.I,null,"(initialValue)"),". The returned object will persist for the full lifetime of the component. This hook is used with ",l.createElement(o.Z,null),l.createElement(s.B,null,"uncontrolled components"),"."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const AutoFocusInput = () => {\n  const textInput = useRef();\n  useEffect(() =>  {\n    textInput.current.focusTextInput();\n  },[ ]);\n  return <input type="text" ref={this.textInput} />\n}\n')),l.createElement(u.Z,null,"React will assign the ",l.createElement(s.BI,null,'"current"')," property with the DOM element when the component ",l.createElement(s.I,null,"mounts"),", and assign it back to ",l.createElement(s.BI,null,"null"),l.createElement(o.Z,null)," when it ",l.createElement(s.I,null,"unmounts"),". For ",l.createElement(s.I,null,"class components"),",",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,"ref")," updates happen before ",l.createElement(o.Z,null),l.createElement(s.BI,null,"componentDidMount()")," or ",l.createElement(s.BI,null,"componentDidUpdate()")," lifecycle methods."))}},25775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),u=n(26006),o=n(68947),s=n(12050),i=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useState()"),l.createElement(o.Z,null,"This Hooks is used to add ",l.createElement(i.B,null,"state")," to a function component.It returns a ",l.createElement(i.B,null,"pair")," - an array with two items. The first item",l.createElement(s.Z,null)," is the ",l.createElement(i.I,null,"current value")," and second is a ",l.createElement(i.I,null,"function"),l.createElement(s.Z,null)," that updates it."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const [stateValue, updateFunction] = useState(initialValue);")),l.createElement(o.Z,null,l.createElement(i.B,null,"stateValue"),": It is the first value of the pair of values returned from the ",l.createElement(i.I,null,"useState()")," hook. This is the name of the state variable. In contrast to the class state, the state of a function can be any valid type. For example, it can be numbers, strings, arrays, etc."),l.createElement(o.Z,null,l.createElement(i.B,null,"updateFunction"),": This is the second value of the pair of values returned from the ",l.createElement(i.I,null,"useState()")," hook. This function is equivalent to",l.createElement(i.I,null,"setState()")," of the class component and used to update the respective state variable."),l.createElement(o.Z,null,l.createElement(i.B,null,"initialValue"),": It is the initial value of the state variable. The initial value is only assigned once, on the mount of the component and is ignored on further update events."),l.createElement(o.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(i.cJ,null),"Let's build our Counter component using the ",l.createElement(i.B,null,"function component"),l.createElement(s.Z,null)," and ",l.createElement(i.B,null,"useState()")," hook."),l.createElement(a.Z,{language:r.r.JSX},"const Counter = (props) => {\n  const [counter, setCounter] = useState(0);\n  const incrementCounter = () => {\n    setCounter((prevState) => prevState + 1);\n  }\n  return <div>\n    <span>Counter Value: {counter}</span>\n    <button onClick={incrementCounter}>Increment</button>\n  </div>\n}"),l.createElement(c.Z,{as:"h4"},"Functional Updates"),l.createElement(o.Z,null,"If the new state is computed using the previous state value, in such cases we can pass a function to the ",l.createElement(i.B,null,"updateFunction"),". The function will receive the previous state, and return an updated state."),l.createElement(o.Z,null,"In the above code, we used functional updates.",l.createElement(a.Z,{language:r.r.JSX},"setCounter((prevState) => prevState + 1);")),l.createElement(o.Z,null,"Alternative to ",l.createElement(i.I,null,"functional updates")," is to pass a ",l.createElement(i.B,null,"value")," to the ",l.createElement(i.B,null,"updateFunction"),". Because React may batch state updates for performance benefits, therefore this syntax may not provide updated value.",l.createElement(a.Z,{language:r.r.JSX},"setCounter(counter + 1);")),l.createElement(c.Z,{as:"h4"},"Lazy initial state"),l.createElement(o.Z,null,"The ",l.createElement(i.B,null,"initialValue")," argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, we may provide a function instead, which will be executed only on the initial render."),l.createElement(a.Z,{language:r.r.JSX},"const [counter, setCounter]\t = useState(()=>{\n  const initialState = expensiveComputation();\n  return initialState;\n});"),l.createElement(c.Z,{as:"h4"},"Bailing out of a state update"),l.createElement(o.Z,null,"If we update a state Hook to the same value as the current state, React will bail out without rendering the children or firing effects. React uses the ",l.createElement(i.BI,null,"Object.is comparison algorithm")," for comparing values."),l.createElement(c.Z,{as:"h4"},"Batching of state updates"),l.createElement(o.Z,null,"React may group several state updates into a single re-render to improve performance."),l.createElement(o.Z,null,"Before React 18, only updates inside React event handlers were batched. Starting with ",l.createElement(i.B,null,"React 18"),", batching is ",l.createElement(s.Z,null),l.createElement(i.B,null,"enabled for all updates by default"),"."),l.createElement(u.Z,null,"React makes sure that updates from several different user-initiated events, like ",l.createElement(i.B,null,"clicking a button twice"),", are always processed separately and ",l.createElement(i.B,null,"do not get batched"),". This prevents logical mistakes."))}},59044:(e,t,n)=>{n.d(t,{Z:()=>B});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(83819),o=n(93379),s=n.n(o),i=n(7795),m=n.n(i),d=n(90569),E=n.n(d),h=n(3565),f=n.n(h),p=n(19216),Z=n.n(p),g=n(44589),v=n.n(g),I=n(94364),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=E().bind(null,"head"),b.domAPI=m(),b.insertStyleElement=Z(),s()(I.Z,b),I.Z&&I.Z.locals&&I.Z.locals;var y=function(e){var t=e.children,n=r()((0,l.Z)({},"".concat(u.HL,"-container"),!0));return c.createElement("div",{className:n},t)};const B=(0,c.memo)(y)},26006:(e,t,n)=>{n.d(t,{Z:()=>L});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(14289),o=n(78146),s=n(67115),i=n(76792),m=n(32209),d=n(41485),E=n(39602),h=n(44680),f=n(85893);const p=(0,E.Z)("h4");p.displayName="DivStyledAsH4";const Z=(0,h.Z)("alert-heading",{Component:p}),g=(0,h.Z)("alert-link",{Component:s.Z}),v={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},I=c.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:c,className:s,children:E,variant:h,onClose:p,dismissible:Z,transition:g,...v}=(0,u.Ch)(e,{show:"onClose"}),I=(0,i.vE)(n,"alert"),b=(0,o.Z)((e=>{p&&p(!1,e)})),y=!0===g?m.Z:g,B=(0,f.jsxs)("div",{role:"alert",...y?void 0:v,ref:t,className:r()(s,I,h&&`${I}-${h}`,Z&&`${I}-dismissible`),children:[Z&&(0,f.jsx)(d.Z,{onClick:b,"aria-label":a,variant:c}),E]});return y?(0,f.jsx)(y,{unmountOnExit:!0,...v,ref:void 0,in:l,children:B}):l?B:null}));I.displayName="Alert",I.defaultProps=v;const b=Object.assign(I,{Link:g,Heading:Z});var y=n(83819),B=n(93379),w=n.n(B),k=n(7795),x=n.n(k),C=n(90569),S=n.n(C),U=n(3565),R=n.n(U),H=n(19216),T=n.n(H),J=n(44589),D=n.n(J),X=n(11137),F={};F.styleTagTransform=D(),F.setAttributes=R(),F.insert=S().bind(null,"head"),F.domAPI=x(),F.insertStyleElement=T(),w()(X.Z,F),X.Z&&X.Z.locals&&X.Z.locals;var A=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,u=e.variant,o=void 0===u?"primary":u,s=r()((0,l.Z)({},"".concat(y.HL,"-note"),!0));return c.createElement("div",{className:s},c.createElement("div",{className:"note-text"},a),c.createElement(b,{key:o,variant:o},t))};const L=(0,c.memo)(A)},9231:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294);const a=function(e){(0,l.useEffect)((function(){return document.title=e,function(){document.title="UI Geeks | UI Learning Platform"}}),[])}},94364:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const u=c},11137:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const u=c}}]);