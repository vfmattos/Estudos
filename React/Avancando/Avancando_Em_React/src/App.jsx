import './App.css'
import Perfil from './assets/Perfil.jpg'
import ManageData from './components/ManageData'

function App() {

  return (
    <>

      <h1>Avançando em React</h1>
      <img src={Perfil} alt="Imagem de perfil" />
      <ManageData />

    
    </>
  )
}

export default App
