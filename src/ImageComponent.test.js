/*eslint-env mocha */
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import ImageComponent from './ImageComponent';
const shallowRenderer = ReactTestUtils.createRenderer();

describe('ImageComponent', () => {
  beforeEach(() => {
    shallowRenderer.render(<ImageComponent />);
  });

  it('renders', () => {
    const component = shallowRenderer.getRenderOutput();
    expect(component).to.ok;
  });
});
