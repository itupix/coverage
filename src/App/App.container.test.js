import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Enhanced, {
  onClickCallback,
  selectItemCallback,
  statusList
} from './App.container';

describe('App container', () => {

  it('Should return statusList', () => {
    const list = [];
    const setList = jest.fn();

    onClickCallback({ setList, list })()

    expect(setList).toHaveBeenCalledWith(statusList)
  });

  it('Should return empty list', () => {
    const list = ['test'];
    const setList = jest.fn();

    onClickCallback({ setList, list })()

    expect(setList).toHaveBeenCalledWith([])
  });

  it('Should select item', () => {
    const setStatus = jest.fn();

    selectItemCallback({ setStatus })('test');

    expect(setStatus).toHaveBeenCalledWith('test');
  })

  it('Should render App component', () => {
    expect(shallow(<Enhanced />).find(App).length).toEqual(1);
  })
  
})