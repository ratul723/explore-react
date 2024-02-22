import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

   function handleClick(){
    alert('Button clicked')
   }
   const handleClick2= () => {
    alert('Button clicked 2')
   }
  //  const addToFive = (num) =>{
  //   alert(num+5);
  // }
  return (
    <>
      
      <h1> React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me again</button>
      {/* <button onClick={addToFive(3)}>Four</button> */}
      <button onClick={() => {alert('Button clicked 3')}}>Click Me 3</button>
    </>
  )
}

export default App
