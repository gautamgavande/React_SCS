import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import Card4 from './Components/Card4'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
// import Card from './Components/Card'

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()


  function handleIncrementClick(){
         dispatch(increment())
  }

  function handleDecrimentClick(){
          dispatch(decrement())
  }
  return (
    <>
      <div className='container'>

        <button onClick={handleIncrementClick}>+</button>
        <p className='font-bold'>Count:{count}</p>
        <button onClick={handleDecrimentClick}>-</button>

      </div>




   {/* ////////////////////////////// */}
    {/* <Card4  text="Download" color="bg-red-600"></Card4> */}
    {/* <Card4 text="Know More" color="bg-blue-600"></Card4> */}
    {/* <Card2></Card2> */}
      {/* <Card1></Card1> */}
      {/* <Card></Card> */}
    </>
  )
}

export default App
