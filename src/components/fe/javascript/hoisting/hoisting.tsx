import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { HoistingQuestions } from '../questionnaires/hoisting-questionnaire';
import JSClassHoisting from './class-hoisting';
import JSFunctionHoisting from './function-hoisting';
import JSVariableHoisting from './variable-hoisting';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        In <B>hoisting</B>, declarations of <I>functions, variables</I> or
        <Space /> <I>classes</I> are moved to <B>top</B> of their <I>scope</I>,
        prior to the execution of the code.
      </>
    )
  },
  {
    label: (
      <>
        <B>Function declarations</B> are hoisted but <B>function expressions</B>
        <Space /> are not hoisted.
      </>
    )
  },
  {
    label: (
      <>
        JavaScript only hoists <B>declarations</B> and not the
        <Space /> <B>initialization</B>.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `Introduction`,
    description: `It is a process where declarations are moved to top of the scope`
  },
  {
    topic: `Function Hoisting`,
    description: `Allows functions to be safely, declarations are hoisted but definitions are not`
  },
  {
    topic: `Variable Hoisting`,
    description: `Variable declaration is hoisted but not the initialization`
  },
  {
    topic: `Class Hoisting`,
    description: `Class declaration is hoisted, not initialized by default`
  }
];

const JSHoisting = () => {
  useDOMTitle('UI-Geeks: JavaScript | Hoisting');

  return (
    <Container>
      <YALSPreface list={prefaceList} />
      <Heading>Hoisting</Heading>

      <Para>
        JavaScript <B>hoisting</B> refers to the process whereby the <Space />
        <I>interpreter</I> appears to move the declaration of <I>functions</I>,
        <Space /> <I>variables</I> or <I>classes</I> to the top of their scope,
        prior to the execution of the code.
      </Para>

      <Para>
        <JSFunctionHoisting />
        <JSVariableHoisting />
        <JSClassHoisting />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={HoistingQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSHoisting);
