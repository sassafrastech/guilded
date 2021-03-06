import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

jest.mock('../Drawer/component', () => 'Drawer');
jest.mock('../Hero/component', () => 'Hero');
jest.mock('../Services/component', () => 'Services');
jest.mock('../Scroller/component', () => 'Scroller');

it('renders', () => {
  const tree = renderer.create(<Component />);
  expect(tree.toJSON()).toMatchSnapshot();
});
