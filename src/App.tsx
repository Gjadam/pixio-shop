import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const router = useRoutes(routes)
  return (
    <>
    {router}
    </>
  )
}

export default App
