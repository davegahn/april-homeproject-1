import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';

const wrapper = shallow(<AppRouter />);

describe('Рендер компоненты AppRouter', () => {
  it('содержит компонент Switch', () => {
    expect(wrapper.find(Switch)).to.have.length(1);
  });
  it('содержит компонент Route c аттрибутом path равным "/users/me"', () => {
    expect(wrapper.find('Route').props().path).toEqual('/login');
  });
  it('содержит компонент Route c аттрибутом path равным "/users/:name"', () => {
    expect(wrapper.find('Route').props().path).toEqual('/users/me');
  });
  it('содержит компонент Route c аттрибутом path равным "/login"', () => {
    expect(wrapper.find('Route').props().path).toEqual('/login');
  });
});
