import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

jest.mock('./DrawerFooter/component', () => 'DrawerFooter');

it('renders', () => {
  const tree = renderer.create(<Component />);
  expect(tree.toJSON()).toMatchSnapshot();
});
