import React from 'react';
import PhysicianForm from '../../src/components/PhysicianForm';

describe('PhysicianForm', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<PhysicianForm />);
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
