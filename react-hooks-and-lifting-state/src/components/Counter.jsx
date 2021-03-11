import { useState, useEffect } from 'react' 

export default function Counter() {
  // useState hook returns state value and a function to set the value 
  const [count, setCount] = useState(1)
  // example of having an object
  const [user, setUser] = useState({ name: 'Weston' })

  // state would like this in a Class:
  // state = {
  //   count: 1,
  //   user: {
  //     name: 'Weston'
  //   }
  // }

  // use effect hooks
  // use effect runs after every render...
  useEffect(() => {
    // console.log('after every render')
    console.log(count)

    // ...return callback is invoked on unmout like componentWillUnmount()
    return () => {
      console.log('on every unmount')
    }
  })

  // you can have more than one useEffect hook!
  // ...unless you pass it a variable in an array as a second arg
  // useEffect(() => {
  //   console.log('i only go when user changes!')
  // }, [user])

  // // ...or you tell it to watch nothing...so it only runs once!
  // useEffect(() => {
  //   console.log('I only run once!')
  //   return () => {
  //     console.log('i will never run!')
  //   }
  // }, [])

  // event handlers
  const handleIncreaseCount = () => {
    // setCount is still async 
    setCount(count + 1)
    // this code executes first
    // console.log(count)
  }

  // if I wanted to set an object
  // setUser({ name: "Semuel" })

  return (
    <div>
      <h1>Hello Functional Components!</h1>

      <h2>the count is {count}</h2>

      <h3> Hello {user.name}! Are you loving functional Components?</h3>

      <button onClick={handleIncreaseCount}>Increase the Count!</button>
    </div>
  )
}