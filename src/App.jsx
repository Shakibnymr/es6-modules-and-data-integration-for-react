import { useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)
//fake data created locally
const watches = [
  {id: 1, name: 'Apple watch', price: 200},
  {id: 2, name: 'Samsung watch', price: 100},
  {id: 3, name: 'Mi watch', price: 300},
]


  return (
    <>
      {
        watches.map(watch => <Watch watch={watch} key={watch.id}></Watch>)
      }
    </>
  )
}

export default App
