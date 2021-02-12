import React from 'react';
import renderer from 'react-test-renderer';

import App from './component';

it('renders', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
