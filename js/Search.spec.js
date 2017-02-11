import React from 'react'
import Search from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})

test('should render ShowCard for each show', () => {
  const component = shallow(<Search />)

  expect(preload.shows.length).toEqual(component.find(ShowCard).length)
})

test('search should render correct amount of shows based on search', () => {
  const searchWord = 'House'
  const component = shallow(<Search />)

  component.find('input').simulate('change', {target: {value: searchWord}})

  const showCount = preload.shows
                      .filter((show) => `${show.title} ${show.description}`
                      .toUpperCase()
                      .indexOf(searchWord.toUpperCase()) >= 0).length

  expect(component.find(ShowCard).length).toEqual(showCount)
})
