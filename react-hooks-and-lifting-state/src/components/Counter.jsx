import { useState } from 'react'    //useState returns an array

export default function Counter() {
  // useState hook returns state value and a function to set the value
  const [count, setCount] = useState(1)
  // example of having an object
  const [user, setUser] = useState({ name: 'Ian' })
  
  // state would look like this in a Class:
  // state = {}
  //   count: 1,
  //   user: {
  //     name: 'Ian'
  //   }
  // }

  // event handlers  (don't have to use an arrow function)
  const handleIncreaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Hello Functional Components!</h1>

      <h2> The count is {count}</h2>

      <h3> Hello {user.name}! Are you loving functional components?</h3>

      <button onClick={handleIncreaseCount}>Increase the Count!</button>
    </div>
  )
}