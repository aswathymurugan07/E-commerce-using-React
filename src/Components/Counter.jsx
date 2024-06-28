import React, { useState } from "react"
import { CountContext } from "../contexts/count"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../reducers/counterSlice"

function Counter() {
    //const {increment}=useContext(CountContext)

    // function increment() {
    //     console.log("incremented")
    //     setCount(count + 1)
    //     // setCount((prev)=>prev+1)//for accessing previous value
    //     // count=count+1
    //     // console.log(count)
    // }
    // function decrement() {
    //     if (count <= 0)
    //         console.log("cant be decremented")
    //     if (count > 0)
    //         console.log("decremented")
    //     return setCount(count - 1)

    // }

    const count = useSelector((state) => state.counter.count)
    const [val,setValue]=useState()
    const dispatch = useDispatch()

    
    const handleDecrement = () =>{
         dispatch(decrement())
    }

    
  const handleIncrement=()=>{
    if(val)
    {
      dispatch(incrementByValue(parseInt(val)))
    }
    else{
      dispatch(increment())
    }
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
  }

    
    return (
        <>
            <p>Counter : {count}</p>
            <input type="text" value={val} onChange={handleChange} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Inc by value</button>
            
        </>
    )
}
export default Counter