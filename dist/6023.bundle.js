"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[6023],{86023:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(67294),r=a(9231),i=a(59044),l=a(87398),o=a(68947),s=a(12050),c=a(9167),m=a(63333),u=a(35022),d=function(){return(0,r.Z)("UI-Geeks: JavaScript | Introduction"),n.createElement(i.Z,null,n.createElement(l.Z,null,"Introduction"),n.createElement(o.Z,null,"JavaScript (JS) is a light-weight,",n.createElement(c.B,null,"interpreted")," ",n.createElement(s.Z,null)," or ",n.createElement(c.B,null,"just-in-time compiled")," programming language with ",n.createElement(s.Z,null)," ",n.createElement(c.B,null,"first-class functions"),". It is",n.createElement(c.B,null,"prototype-based"),",",n.createElement(c.B,null," multi-paradigm"),",",n.createElement(c.B,null,"single threaded"),",",n.createElement(c.B,null," dynamic language"),", supporting ",n.createElement(s.Z,null)," ",n.createElement(c.B,null,"object-oriented"),",",n.createElement(c.B,null," imperative")," and ",n.createElement(s.Z,null)," ",n.createElement(c.B,null,"declarative")," styles."),n.createElement(o.Z,null,"Let's learn about all the buzz-words given in JavaScript definition."),n.createElement(l.Z,{as:"h2"},"Interpreted or Just-in-time Compiled"),n.createElement(o.Z,null,"There has always been a confusion related to the execution behavior of JavaScript. The debate is between Interpreted and Compiled. To know the answer, let's understand both terminologies."),n.createElement(o.Z,null,n.createElement(c.B,null,"Interpreted Language: ")," In an interpreted language, the code is run from top to bottom and the result of running the code is immediately returned. The interpreter reads and executes one line at a time. The interpreter stops the execution on error, which means, if interpreter fails on a statement at line number 10, further lines of code are not executed."),n.createElement(o.Z,null,"In the context of the browser, we don't have to transform the code into any other form before the browser runs it. The code is received in its plain-text format and processed directly from that."),n.createElement(o.Z,null,n.createElement(c.B,null,"Compiled Language: ")," Compiled language scans the entire code and transforms (compiles) it into another form, before they are executed by the computer. The program is executed from a binary format, which was generated from the original source code (in plain-text format)."),n.createElement(o.Z,null,n.createElement(c.B,null,"Just-in-time Compilation: ")," Modern JavaScript interpreters use a technique called ",n.createElement(c.I,null,"just-in-time compilation")," to improve performance. In this technique, JavaScript source code gets compiled into binary format, so that it can run quickly."),n.createElement(o.Z,null,n.createElement(c.I,null,"Now returning back to the original question, whether JavaScript is interpreted or compiled language?")),n.createElement(o.Z,null,"The answer is, JavaScript is an",n.createElement(c.B,null,"interpreted language"),", because although modern interpreters use JIT, still all this compilation is handled at run time, rather than ahead of time."),n.createElement(l.Z,{as:"h2"},"First Class Functions"),n.createElement(o.Z,null,"A programming language is said to have",n.createElement(c.B,null,"first-class functions"),", when functions are treated as other data types. For example: they can be stored in a variable, they can be passed as an argument to another function, can be extended, etc. JavaScript treats functions as first class citizens."),n.createElement(l.Z,{as:"h2"},"Prototype-based"),n.createElement(o.Z,null,"Prototype based programming is a style of object oriented programming in which classes are not explicitly defined, rather derived by adding properties and methods to an empty object. In simple words, this type of style treats an object as the ",n.createElement(c.BI,null,"prototype")," or the template for the creation of another object."),n.createElement(l.Z,{as:"h2"},"Multi-paradigm"),n.createElement(o.Z,null,"JavaScript supports multiple programming paradigms like imperative, declarative, object-oriented, functional programming, therefore, JavaScript is said to be a multi-paradigm language."),n.createElement(l.Z,{as:"h2"},"Single Threaded"),n.createElement(o.Z,null,"JavaScript has a single thread, which is used to execute the code. Because of this single thread, JavaScript is synchronous in nature. Although modern browsers has concepts like ",n.createElement(c.I,null,"Call Stack"),","," ",n.createElement(c.I,null,"Memory Heap"),", ",n.createElement(c.I,null,"Event-loop"),", which helps it perform asynchronous tasks."),n.createElement(l.Z,{as:"h2"},"Dynamic Language"),n.createElement(o.Z,null,"Dynamic language is one, in which operations which are normally done at compile time, can be done at run time. Operations like Adding properties/methods to an object, changing class/object prototype. Because JavaScript allows such operations, therefore, it is known as Dynamic Language."),n.createElement(l.Z,{as:"h2"},"Object-oriented"),n.createElement(o.Z,null,"Object-oriented programming paradigm consists of classes/objects holding the data and respective methods that can be taken on the data. Because JavaScript has the concept of class/objects and implements inheritance and various other concepts of object-oriented language, therefore it is known to support object-oriented programming style."),n.createElement(l.Z,{as:"h2"},"Imperative"),n.createElement(o.Z,null,"Imperative Programming language is a language where instructions for computers are written in step-by-step manner. This explicitly describes the order of execution to achieve the end result. Imperative language describes ",n.createElement(c.B,null,'"How"')," of the desired output."),n.createElement(o.Z,null,"Because JavaScript statements can be written to describe the steps to get the desired result, therefore, it is known to be imperative in nature. For example, a ",n.createElement(c.I,null,"for-loop")," can be written to iterate and print each item of an array."),n.createElement(l.Z,{as:"h2"},"Declarative"),n.createElement(o.Z,null,"Declarative programming language is one, in which programs describe their desired results without explicitly listing steps that must be performed. The codes of such languages are very abstract in nature. Functional and Logical programming languages are examples of declarative programming style. Declarative languages describe",n.createElement(c.B,null,'"WHAT"')," of the desired output."),n.createElement(o.Z,null,"Because JavaScript implements functional programming style, therefore, it is known to be declarative in nature. For example, the ",n.createElement(c.I,null,"sort()"),n.createElement(s.Z,null)," method of Array can be called to sort all the items of the array, we do not need to write down the steps to sort the array."),n.createElement(o.Z,null,n.createElement(m.Z,{questions:u.IntroductionQuestions})))};const p=(0,n.memo)(d)},35022:(e,t,a)=>{a.r(t),a.d(t,{IntroductionQuestions:()=>l});var n=a(67294),r=a(83819),i=a(53232),l=[{id:1,question:n.createElement(n.Fragment,null,"Which of the programming styles are supported by JavaScript?"),options:[{label:"Object Oriented",id:1},{label:"Declarative",id:2},{label:"Imperative",id:3},{label:r.WR,id:4}],type:i.M.Checkbox,name:"intro_1",answer:[1,2,3]},{id:2,question:n.createElement(n.Fragment,null,"Modern JavaScript interpreters use technique called ",r.Fb," to improve performance."),options:[{label:"Compilation",id:1},{label:"Interpretation",id:2},{label:"Just in Time Compilation",id:3},{label:"None of the above",id:4}],type:i.M.Radio,name:"intro_2",answer:3},{id:3,question:n.createElement(n.Fragment,null,"JavaScript support multi-threading."),options:[{label:"true",id:1},{label:"false",id:2}],type:i.M.Radio,name:"intro_3",answer:2},{id:4,question:n.createElement(n.Fragment,null,"In JavaScript, functions are treated as first class citizens."),options:[{label:"true",id:1},{label:"false",id:2}],type:i.M.Radio,name:"intro_4",answer:1},{id:5,question:n.createElement(n.Fragment,null,r.Fb," is one, in which operations which are normally done at compile time, can be done at run time."),options:[{label:"Imperative Language",id:1},{label:"Dynamic Language",id:2},{label:"Declarative Language",id:3},{label:"Object Oriented Language",id:4}],type:i.M.Radio,name:"intro_5",answer:2},{id:6,question:n.createElement(n.Fragment,null,"JavaScript is an interpreted language."),options:[{label:"true",id:1},{label:"false",id:2}],type:i.M.Radio,name:"intro_6",answer:1},{id:7,question:n.createElement(n.Fragment,null,"Programming language, where instructions are written in step by step manner."),options:[{label:"Object Oriented Programming Language",id:1},{label:"Imperative Language",id:2},{label:"Declarative Language",id:3},{label:r.WR,id:4}],type:i.M.Radio,name:"intro_7",answer:2},{id:8,question:n.createElement(n.Fragment,null,"Declarative language describes ",r.Fb," of desired output."),options:[{label:"WHAT",id:1},{label:"HOW",id:2},{label:"WHY",id:3},{label:r.WR,id:4}],type:i.M.Radio,name:"intro_8",answer:1},{id:9,question:n.createElement(n.Fragment,null,r.Fb," programming language is a style that treats object as prototype for creation of another object."),options:[{label:"Prototype-based",id:1},{label:"Multi-paradigm",id:2},{label:"Dynamic Language",id:3},{label:r.WR,id:4}],type:i.M.Radio,name:"intro_9",answer:1}]}}]);