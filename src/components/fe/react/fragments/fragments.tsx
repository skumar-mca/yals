import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactFragments = () => {
  useDOMTitle('YALS: React | Fragments');
  return (
    <Container>
      <Heading>Fragments</Heading>
      <Para>
        <B>Fragments</B> are used to <B>return multiple elements</B> from a
        component. By definition React components can only return just one React
        Element.
      </Para>

      <Para>
        One way to group a list of children could be to wrap all childrens
        inside <BI>{`<div>`}</BI> element, but this will unnecessarily
        <Space /> <B>add extra</B> <Space /> <I>{`<div>`}</I> to the DOM as well
        , which may result in a problem known as <B>"wrapper hell"</B>. Along
        with the "wrapper hell" problem, it will also result in change of
        structure of DOM nodes, which may result in making the HTML invalid.
      </Para>

      <Para>
        Fragments solves the above problems by grouping a list of children
        <B>without adding extra</B> nodes to DOM.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>{`<React.Fragment>
    <ChildComponent1 />
    <ChildComponent2 />
    ………………………………….
    <ChildComponentN />
</React.Fragment>
`}</Code>
      </Para>

      <Para>There is a shorter syntax too:</Para>
      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>{`<>
    <ChildComponent1 />
    <ChildComponent2 />
    ………………………………….
    <ChildComponentN />
</>
`}</Code>
      </Para>
    </Container>
  );
};

export default ReactFragments;