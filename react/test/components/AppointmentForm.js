import React from 'react';
import AppointmentForm from '../../src/components/AppointmentForm';

describe('AppointmentForm', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<AppointmentForm />);
  });

  it('should render a form', () => {
    expect(wrapper.find('form')).toBePresent();
  });

  it('should render a text area', () => {
    expect(wrapper.find('textarea')).toBePresent();
  });

  it('should render a submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toBePresent();
  });
})
