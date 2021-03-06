import 'react-native';
import React from 'react';
import App from '../app.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(
    <App />
  );

   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
});
