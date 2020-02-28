import { init } from './index';

jest.mock('react-dom', () => ({
  render: () => 'render'
}))

describe('index', () => {

  it('Should init app', () => {
    expect(init()).toEqual('render');
  });
})