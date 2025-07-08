import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet } from 'react-router-dom'
import Dock from './components/Dock'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-2xl mx-auto'>
      <p className='text-center'>Hamster Kombat</p>
        <Outlet/>
        <Dock/>
      </div>
    </>
    //alasdasdadsadsa
    //adssadadssadasdsa
  )
}

export default App
