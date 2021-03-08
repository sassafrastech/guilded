import React from 'react';
import renderer from 'react-test-renderer';

import Component from './component';

jest.mock('./ServiceCard/component', () => 'ServiceCard');

it('renders', () => {
  const tree = renderer.create(<Component />);
  expect(tree.toJSON()).toMatchSnapshot();
});
