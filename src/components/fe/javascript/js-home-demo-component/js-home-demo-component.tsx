import React from 'react';
import useCurrentPath from '../../../../custom-hooks/useCurrentRoute';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { JS_PRIMARY_ROUTES } from '../js-menu-items';
import JSHomeDemoArrayMethods, {
  JSHomeDemoArrayMethodsCode
} from './array-methods';
import JSHomeDemoDeviceInfo, {
  JSHomeDemoDeviceInfoCode
} from './device-information';
import JSHomeDemoStringMethods, {
  JSHomeDemoStringMethodsCode
} from './string-methods';

const JSHomeDemoComponent = () => {
  const current = useCurrentPath();
  const isFullPageDemo = current.indexOf('/demoes/') > -1;

  const demoComponents = [
    {
      id: 3,
      label: 'Array methods.',
      component: <JSHomeDemoArrayMethods />,
      code: JSHomeDemoArrayMethodsCode,
      moreDetail: {
        label: 'Learn more about Array methods here.',
        link: JS_PRIMARY_ROUTES.ARRAY
      }
    },
    {
      id: 1,
      label: 'Know your device.',
      component: <JSHomeDemoDeviceInfo />,
      code: JSHomeDemoDeviceInfoCode,
      moreDetail: {
        label: 'Learn other powerfull features of JavaScript.',
        link: JS_PRIMARY_ROUTES.HOME_PAGE.url
      }
    },
    {
      id: 2,
      label: 'Magical manipulation of string.',
      component: <JSHomeDemoStringMethods />,
      code: JSHomeDemoStringMethodsCode,
      moreDetail: {
        label: 'Learn more about String methods here.',
        link: JS_PRIMARY_ROUTES.STRING
      }
    }
  ];

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={isFullPageDemo ? JS_PRIMARY_ROUTES.HOME_PAGE.url : undefined}
      homePageLabel={isFullPageDemo ? 'JavaScript' : undefined}
    />
  );
};

export default JSHomeDemoComponent;