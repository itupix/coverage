import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('Should render', () => {
    expect(shallow(<Error />).find('p').length).toEqual(1);
  })
})