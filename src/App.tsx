import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import NavBar from './Components/Templates/NavBar/NavBar'
import Footer from './Components/Templates/Footer/Footer'

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <NavBar />
      {router}
      <Footer />
    </>
  )
}

export default App
