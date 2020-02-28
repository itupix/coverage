import React from 'react';
import { shallow } from 'enzyme';
import Data from './Data';

describe('Data', () => {
  it('Should render', () => {
    expect(shallow(<Data />).find('p').length).toEqual(1);
  })
})