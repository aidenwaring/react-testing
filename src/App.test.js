// Run to add Enzyme to yarn package
// yarn add enzyme jest-enzymne enzyme-adapter-react-16 -D
import React from 'react';
// import { render } from '@testing-library/react';
// Changing default test library to enzyme, importing Enzyme and the react adapter
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from './App';

// Configure React Enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />) // Shallow render to Enzyme's DOM instead of a web browser using ReactDOM.render
})

it('contains a h1 with the text "The count is"', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toContain('The count is')
})

// it('contains a div with the text "learn react"', () => {
//   const wrapper = shallow(<App />) // Shallow render to Enzyme's DOM instead of a web browser using ReactDOM.render
//   // console.log(wrapper.debug()) // Outputs the wapper to the console
//   expect(wrapper.find('div').text()).toContain('learn react') // Within the given wrapper, find a div element that contains the text 'learn react'
// })

// Template test from create-react-app

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
