import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashbordComponent from '../../components/ExpenseDashbordComponent';


test('should render ExpensesListItem with expense', () => {
  const wrapper = shallow(<ExpenseDashbordComponent />);
  expect(wrapper).toMatchSnapshot();
});