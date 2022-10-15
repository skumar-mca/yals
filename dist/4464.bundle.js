"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[4464],{54464:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),l=n(81391),a=n(87398),s=n(68947),i=n(12050),c=n(9167),m=[{label:"Can only be accessed inside the class."},{label:"Can't be inherited"}],o=[{label:r.createElement(r.Fragment,null,"Are only accessible on the class itself or in ",r.createElement(c.BI,null,"this"),r.createElement(i.Z,null)," context of static members.")},{label:"Can't be inherited"}];const u=function(){return r.createElement(r.Fragment,null,r.createElement(a.Z,{as:"h2"},"Private field declarations"),r.createElement(s.Z,null,"Private class members can be created by using ",r.createElement(c.B,null,'"#"')," prefix. The privacy encapsulation of these class features is enforced by JavaScript itself. The ",r.createElement(c.B,null,"#")," is a part of the member name. Private fields can't be neither declared nor deleted inside the constructor. It is a syntax error to access private members outside the class. Also private members can't be inherited."),r.createElement(s.Z,null,"Private instance/prototype members:",r.createElement(c.GS,{items:m})),r.createElement(s.Z,null,"Private static members:",r.createElement(c.GS,{items:o})),r.createElement(s.Z,null,r.createElement(l.Z,null,'class User {\n    // "#GROUP" is a private property\n    #GROUP = "Student";\n    static MINIMUM_AGE = 18;\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n\n        delete this.#GROUP;\n        this.#privatePropInConstructor = 10;\n        /* If we try to delete or declare new private properties \n            inside the constructor, it will throw an error.\n        */\n    }\n\n    // "#getUserDetail()" is a private method\n    #getUserDetail() { return this.name + " - " + this.age; }\n    getUserInfo() { return this.#GROUP + ":" + this.#getUserDetail(); }\n}\n'),r.createElement(s.Z,null,r.createElement(c.IU,null,"Example 1:"),r.createElement(l.Z,null,'const usr = new User("John", 25);\nusr.getUserInfo();  // "Student: John - 25"\n')),r.createElement(s.Z,null,r.createElement(c.IU,null,"Example 2:"),r.createElement(c.cJ,null),"Below code will throw error:",r.createElement(c.B,null,'"SyntaxError: Private field #GROUP must be declared in an enclosing class"'),", because ",r.createElement(c.I,null,"private members")," can't be accessed outside the class.",r.createElement(l.Z,null,"console.log(User.#GROUP);"))))}}}]);