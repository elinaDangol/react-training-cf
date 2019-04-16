import React from 'react';
import {shallow} from 'enzyme';
import {SuperHeroList} from '../src/components/SuperHeroList';

describe('SuperHeroList',()=>{
  const wrapper = shallow(<SuperHeroList lists={[]} dispatch={jest.fn()}/>);
  test('has correct HTML structure',() => {
    expect(wrapper.html()).toBe('<table class=\"table table-striped table-bordered\"><thead><tr><th scope=\"col\">Name</th><th scope=\"col\">Hero Name</th><th scope=\"col\">Power</th><th scope=\"col\">Weakness</th></tr></thead><tbody></tbody></table>');
  });
  
});