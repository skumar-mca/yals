import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactCRA from './cra';
import ReactDefinition from './definition';
import ReactHelloWorld from './hello-world';
import ReactKeyFeatures from './key-features';
import ReactTimeline from './react-timeline';
import ReactTrends from './react-trends';
import ReactVirtualDOM from './virtual-dom';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        React is a declarative, efficient library for building <Space />
        <B>user interfaces</B>. It is used to build <Space />
        <BI>Single Page Application (SPA)</BI>.
      </>
    )
  },
  {
    label: (
      <>
        SPA loads a <B>single HTML page</B>, interactions on page do not require
        round trip to server.
      </>
    )
  },
  {
    label: (
      <>
        <I>Lightweight</I>, <I>Virtual DOM</I>, <I>Uni-directional data</I> flow
        are few of the key features of React.
      </>
    )
  },
  {
    label: (
      <>
        <B>Virtual DOM</B> is the <B>in-memory</B> representation of the UI, and
        uses a <BI>reconciliation</BI> process to update <B>DOM</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Shadow DOM</B> is different from the <I>Virtual DOM</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Fiber</B> is the new reconciliation engine in React 16.
      </>
    )
  },
  {
    label: (
      <>
        <BI>npx create-react-app</BI> can be used for creating react
        applications, using <I>Babel</I> and <I>Webpack</I> under the hood.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `What is React`,
    description: `Declarative, efficient JS Library for building User Interfaces`
  },
  {
    topic: `Single Page Application`,
    description: `Application that loads a single HTML page, updates views without reloading`
  },
  {
    topic: `Key Features`,
    description: `Lightweight, Component-based, Virtual DOM, Uni-directional`
  },
  {
    topic: `Virtual DOM`,
    description: `Concept where virtual representation of UI is kept in memory`
  },
  {
    topic: `Shadow vs Virtual DOM`,
    description: `Browser own Shadow DOM, Libraries own Virtual DOM`
  },
  {
    topic: `React Fiber`,
    description: `Reconciliation engine of React 16`
  },
  {
    topic: `Important Milestones`,
    description: `Journey from v0.3 on May, 13 -  v16.8 on Feb 17 with Hooks and running`
  },
  {
    topic: `Create React App`,
    description: `Setup your first React application`
  },
  {
    topic: `Hello World`,
    description: `Your first React App`
  },
  {
    topic: `Why React`,
    description: `Comparing React with Angular, Vue`
  }
];

const ReactIntroduction = () => {
  useDOMTitle('UI-Geeks: React | Introduction');

  return (
    <Container>
      <YALSPreface list={prefaceList} />
      <Heading>Introduction</Heading>

      <Para>
        <ReactDefinition />
        <ReactKeyFeatures />
        <ReactVirtualDOM />
        <ReactTimeline />

        <NewLine />
        <NewLine />
        <ReactCRA />
        <ReactHelloWorld />
        <ReactTrends />
      </Para>

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactIntroduction;
