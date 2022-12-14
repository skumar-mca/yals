import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const IntroductionQuestions = [
  {
    id: 1,
    question: <>Which of the programming styles are supported by JavaScript?</>,
    options: [
      {
        label: 'Object Oriented',
        id: 1
      },
      {
        label: 'Declarative',
        id: 2
      },
      {
        label: 'Imperative',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'intro_1',
    answer: [1, 2, 3],
    explanation: `JavaScript supports Object-Oriented, Imperative and Declarative styles. Along with this, it is Single Threaded, Dynamic Language with Multi-Paradigm support.`
  },
  {
    id: 2,
    question: (
      <>
        Modern JavaScript interpreters use technique called {EMPTY_LINE} to
        improve performance.
      </>
    ),
    options: [
      {
        label: 'Compilation',
        id: 1
      },
      {
        label: 'Interpretation',
        id: 2
      },
      {
        label: 'Just-in-Time Compilation',
        id: 3
      },
      {
        label: 'None of the above',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_2',
    answer: 3,
    explanation: `Modern JavaScript interpreters use a technique called just-in-time compilation to improve performance. In this technique, JavaScript source code gets compiled into binary format, so that it can run quickly.`
  },
  {
    id: 3,
    question: <>JavaScript support multi-threading.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: 'false',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_3',
    answer: 2,
    explanation: `JavaScript has a single thread, which is used to execute the code. Because of this single thread, JavaScript is synchronous in nature.`
  },
  {
    id: 4,
    question: (
      <>In JavaScript, functions are treated as first class citizens.</>
    ),
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_4',
    answer: 1,
    explanation: `JavaScript treats functions as first class citizens. A programming language is said to have first-class functions, when functions are treated as other data types. For example: they can be stored in a variable, they can be passed as an argument to another function, can be extended, etc.`
  },
  {
    id: 5,
    question: (
      <>
        {EMPTY_LINE} is one, in which operations which are normally done at
        compile time, can be done at run time.
      </>
    ),
    options: [
      {
        label: 'Imperative Language',
        id: 1
      },
      {
        label: `Dynamic Language`,
        id: 2
      },
      {
        label: `Declarative Language`,
        id: 3
      },
      {
        label: `Object Oriented Language`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_5',
    answer: 2,
    explanation: `Dynamic language is one, in which operations which are normally done at compile time, can be done at run time. Operations like Adding properties/methods to an object, changing class/object prototype.`
  },
  {
    id: 6,
    question: (
      <>
        {EMPTY_LINE} scans the entire code and transforms it into another form,
        before they are executed by the computer.
      </>
    ),
    options: [
      {
        label: 'Interpreted Language',
        id: 1
      },
      {
        label: `Compiled Language`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_6',
    answer: 2,
    explanation: `Compiled language scans the entire code and transforms (compiles) it into another form, before they are executed by the computer. The program is executed from a binary format, which was generated from the original source code (in plain-text format).`
  },
  {
    id: 7,
    question: <>JavaScript is an interpreted language.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_7',
    answer: 1,
    explanation: `JavaScript is an Interpreted Language. In an interpreted language, the code is run from top to bottom and the result of running the code is immediately returned. The interpreter reads and executes one line at a time.`
  },
  {
    id: 8,
    question: (
      <>
        Programming language, where instructions are written in step by step
        manner.
      </>
    ),
    options: [
      {
        label: 'Object Oriented Programming Language',
        id: 1
      },
      {
        label: `Imperative Language`,
        id: 2
      },
      {
        label: `Declarative Language`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_8',
    answer: 2,
    explanation: `Imperative Programming language is a language where instructions for computers are written in step-by-step manner. This explicitly describes the order of execution to achieve the end result. Imperative language describes "How" of the desired output.`
  },
  {
    id: 9,
    question: (
      <>Declarative language describes {EMPTY_LINE} of desired output.</>
    ),
    options: [
      {
        label: 'WHAT',
        id: 1
      },
      {
        label: `HOW`,
        id: 2
      },
      {
        label: `WHY`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_9',
    answer: 1,
    explanation: `Declarative programming language is one, in which programs describe their desired results without explicitly listing steps that must be performed. Declarative languages describe "WHAT" of the desired output.`
  },
  {
    id: 10,
    question: (
      <>
        {EMPTY_LINE} programming language is a style that treats object as
        prototype for creation of another object.
      </>
    ),
    options: [
      {
        label: 'Prototype-based',
        id: 1
      },
      {
        label: `Multi-paradigm`,
        id: 2
      },
      {
        label: `Dynamic Language`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_10',
    answer: 1,
    explanation: `Prototype based programming is a style of object oriented programming in which classes are not explicitly defined, rather derived by adding properties and methods to an empty object.`
  }
];
