import React, { Fragment, ReactNode } from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';
import YALSBadge from '../../../shared/yals-badge/yals-badge';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YALSTable from '../../../shared/yals-table/yals.table';

const operatorTHList = [
  {
    column: 'operatorType',
    label: 'Operator type'
  },
  {
    column: 'operator',
    label: 'Individual operators'
  },
  {
    column: 'associativity',
    label: 'Associativity'
  }
];

const ASSOCIATIVITY = {
  LEFT_TO_RIGHT: 'Left-to-Right',
  RIGHT_TO_LEFT: 'Right-to-Left',
  NA: ''
};

const operatorTDList: Array<{
  operatorType: string;
  operator: ReactNode;
  associativity: string;
}> = [
  {
    operatorType: 'member',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['.', '[]'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'call/create instance',
    associativity: ASSOCIATIVITY.NA,
    operator: (
      <>
        {['( )', 'new'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'negation/increment',
    associativity: ASSOCIATIVITY.NA,
    operator: (
      <>
        {['!', '~', '-', '+', '++', '--', 'typeof', 'void', 'delete'].map(
          (itm: string) => (
            <Fragment key={itm}>
              <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
              <Space />
            </Fragment>
          )
        )}
      </>
    )
  },
  {
    operatorType: 'multiply/divide',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['*', '/', '%'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'addition/subtraction',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['+', '-'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'bitwise shift',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['<<', '>>', '>>>>'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'relational',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['<', '<=', '>', '>=', 'in', 'instanceof'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'equality',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        {['==', '!=', '===', '!=='].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'bitwise-and',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={'&'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'bitwise-xor',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={'^'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'bitwise-or',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={'|'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'logical-and',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={'&&'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'logical-or',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={'||'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'conditional',
    associativity: ASSOCIATIVITY.RIGHT_TO_LEFT,
    operator: (
      <>
        <YALSBadge content={'? :'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'assignment',
    associativity: ASSOCIATIVITY.RIGHT_TO_LEFT,
    operator: (
      <>
        {[
          '=',
          '+=',
          '-=',
          '*=',
          '/=',
          '%=',
          '<<=',
          '>>>=',
          '&=',
          '^=',
          '|=',
          '&&=',
          '||=',
          '??='
        ].map((itm: string) => (
          <React.Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </React.Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'comma',
    associativity: ASSOCIATIVITY.LEFT_TO_RIGHT,
    operator: (
      <>
        <YALSBadge content={','} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  }
];

const associativityType = [
  {
    label: (
      <>
        <B>Left-Associativity</B>: <I>left-to-right</I> associativity where
        expression is interpreted as:
        <NewLine />
        <I>
          <B>(operandA Operator1 operandB)</B> Operator2 operandC
        </I>
      </>
    )
  },
  {
    label: (
      <>
        <B>Right-Associativity</B>: <I>right-to-left</I> associativity where
        expression is interpreted as:
        <NewLine />
        <I>
          operandA Operator1 <B>(operandB Operator2 operandC)</B>
        </I>
      </>
    )
  }
];

const JSOperatorPrecedence = () => {
  return (
    <>
      <Heading as='h3'>Operator Precedence</Heading>
      <Para>
        Some operators are applied before others, when calculating the result,
        this is called <BI>operator precedence</BI>. The operator precedence in
        JavaScript is the same as was taught in math. The calculation is always
        evaluated from <BI>left to right</BI>.
      </Para>

      <Para>
        <B>Operator Precedence Table</B>
        <NewLine />
        <NewLine />
        <YALSTable thList={operatorTHList} tdList={operatorTDList}></YALSTable>
      </Para>

      <Para>
        <IU>Evaluate below expression:</IU>
        <NewLine />
        50 + 10 / 8 + 2
        <NewLine />
        <B>Step 1:</B> 50 + <IU>10 / 8</IU> + 2
        <NewLine />
        <B>Step 2:</B> <IU>50 + 1.25</IU> + 2
        <NewLine />
        <B>Step 3:</B> <IU>51.25 + 2</IU>
        <NewLine />
        <B>Result:</B> 53.25
      </Para>

      <Code>{`50 + 10 / 8 + 2   // 53.25`}</Code>

      <Heading as='h4'>Operator Associativity</Heading>
      <Para>
        When multiple operators in expression have the same precedence, then
        JavaScript groups them by associativity. JavaScript have 2 types of
        associativity:
      </Para>
      <Para>
        <OrderedList items={associativityType} />
      </Para>

      <Para>
        <I>
          The <B>assignment</B> and <B>exponential</B> operators have
          <B>right-associativity</B>.
        </I>
      </Para>

      <Code>{`const a = b = 5; // Same as: a = (b = 5);`}</Code>

      <Para>
        <I>
          Other <B>arithmetic</B> operators have <B>left-associativity</B>.
        </I>
      </Para>

      <Code>{`const a = 4 / 3 / 2; // Same as: (4 / 3) / 2;`}</Code>
    </>
  );
};

export default JSOperatorPrecedence;
