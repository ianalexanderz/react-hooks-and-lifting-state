import { useState, useEffect } from 'react'

import FilterForm from './Filterform'
import FruitList from './FruitList'


export default function FilterContainer() {
  // add state value for input
  const [fruits /* current value of fruits in a state */, setFruits /* a
  function that changes the value of fruits in a state */] = useState([
    'pineapple',
    'mango',
    'banana',
    'apple',
    'kiwi',
    'pear',
    'strawberry'
  ])
  // add state value for input
  const [fruitInputValue, setFruitInputValue] = useState('')

  // debug to check that state is updating
  useEffect(() => {
    console.log(fruitInputValue)
    setFruitInputValue('')
  }, [fruits])
  //  const [stateValue, functionToSetStateValue] = useState()
  // function useState() {
  //  // blah blah blah function stuff

  //  function functionSetsTheValue() {
  //    value = new value
  // }

  //  return [value, functionSetsTheValue]
  // }



  // add submit event handler  preventDefault lives inside e so e is on the outside because we access preventDefault using dot notation look in console
  const handleFruitSubmit = e => {
    e.preventDefault()
    // only let fruits pass that do not equal the input value
    // from the form
    const filteredFruit = fruits.filter(fruit => {
      return fruit != fruitInputValue
    })

    setFruits(filteredFruit)
  }

  // add on change handler // no parantheses around e bcuz we only need one parameter
  const handleFruitChange = e => setFruitInputValue(e.target.value)
  return (
    <div className='filter-container'>
      {/* pass them as props! */}
      <FilterForm 
        handleFruitChange={handleFruitChange}
        fruitInputValue={fruitInputValue}
        handleFruitSubmit={handleFruitSubmit}
        />
      <FruitList fruits={fruits} />
    </div>
  )
}
