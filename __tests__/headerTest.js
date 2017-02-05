import 'react-native';
import React from 'react';
import Header from '../header.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(
    <Header />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
