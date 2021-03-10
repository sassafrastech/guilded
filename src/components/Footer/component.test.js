import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

jest.mock('./Partners/component', () => 'Partners');

it('renders', () => {
  const tree = renderer.create(<Component />);
  expect(tree.toJSON()).toMatchSnapshot();
});
