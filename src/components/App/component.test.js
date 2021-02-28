import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

jest.mock('../Hero/component', () => 'Hero');
jest.mock('../Services/component', () => 'Services');

it('renders', () => {
  const tree = renderer.create(<Component />);
  expect(tree.toJSON()).toMatchSnapshot();
});
