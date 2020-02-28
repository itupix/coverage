import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('Should render', () => {
    expect(shallow(<Loader />).find('p').length).toEqual(1);
  })
})