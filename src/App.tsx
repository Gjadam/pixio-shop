import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import store from './Redux/store'
import { Provider } from 'react-redux'
import Cursor from './Components/Modules/Cursor/Cursor'
import AOSInit from './utils/aos'
function App() {
  const router = useRoutes(routes)
  return (
    <Provider store={store}>
      <Cursor />
      <AOSInit />
      {router}
    </Provider>
  )
}

export default App
