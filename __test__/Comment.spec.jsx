import React from 'react';
import {shallow} from 'enzyme';
import Comment from '../src/components/Comment';

describe('Comment component',()=>{
  const wrapper = shallow(<Comment/>);
  test('has correct HTML structure',() => {
    expect(wrapper.state().commentsList).toEqual([]);
  });
  test('handleChange method',()=> {
    wrapper.instance().handleChange({target: {
      value: 'Hello' }});
    expect(wrapper.state().formValue).toBe('Hello')
  })
});