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
