import React from 'react'
import Navbar from './Navbar'
import List from './List'


function App() {
  return (
    <>
    <Navbar/>
    <h1 className='ml-6 text-3xl font-bold mt-10'>Thing to get done</h1>
    <h2 className='text-xl font-semibold ml-6 mt-6'>Things to do</h2>
    <List/>
     
     
    </>
  )
}

export default App
