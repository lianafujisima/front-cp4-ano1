import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho/>
      <Menu/>
      <main className="flex-grow">
        <Outlet/>
      </main>
      <Rodape/>
    </div>
  )
}

export default App