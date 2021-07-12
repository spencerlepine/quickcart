import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
