
// import Body from "./components/Body"
 
// import Calculator from "./components/Calculator"
// function App() {
//   const names="Aswathy"
//   const age=22
//   const ht=169
//   const dept="Msc"

//   return (
//     <>

//      <div>App component</div>
//    {/* <Body names={names} age={age} ht={ht} dept={dept}/>
//    <Counter/> */}
//     <Calculator/> 
//     </>
//   )
// }
// // const App=()=>{
// //   return (
// //   <div>App component</div>
// //   )
// //   }
import React, { useEffect, useState } from "react"
import Header from "./Components/Header"
import Counter from "./Components/Counter"
import './App.css'
import { ThemeContext } from "./contexts/theme"
import { CountContext } from "./contexts/count"
import Products from './Components/Products'
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState("Light")
  const [count, setCount] = useState(0)


  //No dependency array
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')  
    increment()
  }

  function increment(){
    setCount(count+1)
  }

  return (
    <>
    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
      <CountContext.Provider value={{count:count,countTheme:increment}}>
        <Header />
        <Outlet />
          <ToastContainer/>
      </CountContext.Provider>
    </ThemeContext.Provider >
    
    
    </>
  )
}
export default App