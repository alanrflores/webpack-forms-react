import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './src/componentes/layout/Layout.jsx'
import Contacto from './src/componentes/views/Contacto.jsx'
import Home from './src/componentes/views/Home.jsx'

const App = () => {
  return (
    <Routes>
       <Route  path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='contacto' element={<Contacto/>} />
       </Route>
    </Routes>
  )
}

export default App