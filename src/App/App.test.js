import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Data from '../Data/Data';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

describe('App', () => {
  const props = {
    status: 'OK',
    selectItem: jest.fn(),
    onClick: jest.fn(),
    list: []
  };

  it('Should render with empty list', () => {
    const component = shallow(<App { ...props} />);

    expect(component.find('section').length).toEqual(1);
    expect(component.find('ul li').length).toEqual(0);
    expect(component.find(Data).length).toEqual(1);
    expect(component.find(Loader).length).toEqual(0);
    expect(component.find(Error).length).toEqual(0);
  });

  it('Should render with list', () => {
    props.list = [{ name: 'name' }];
    const component = shallow(<App { ...props} />);

    expect(component.find('section').length).toEqual(1);
    expect(component.find('ul li').length).toEqual(1);
    expect(component.find(Data).length).toEqual(1);
    expect(component.find(Loader).length).toEqual(0);
    expect(component.find(Error).length).toEqual(0);

    component.find('ul li button').simulate('click');

    expect(props.selectItem).toHaveBeenCalledWith('name');
  });

  it('Should render with Loader', () => {
    props.status = 'LOADING';
    const component = shallow(<App { ...props} />);

    expect(component.find('section').length).toEqual(1);
    expect(component.find('ul li').length).toEqual(1);
    expect(component.find(Data).length).toEqual(0);
    expect(component.find(Loader).length).toEqual(1);
    expect(component.find(Error).length).toEqual(0);
  });

  it('Should render with Error', () => {
    props.status = 'ERROR';
    const component = shallow(<App { ...props} />);

    expect(component.find('section').length).toEqual(1);
    expect(component.find('ul li').length).toEqual(1);
    expect(component.find(Data).length).toEqual(0);
    expect(component.find(Loader).length).toEqual(0);
    expect(component.find(Error).length).toEqual(1);
  });
})