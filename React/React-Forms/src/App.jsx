import MyForm from './components/MyForm'

import './App.css'

function App() {

  return (
    <>
      <h1>Forms</h1>
      <MyForm user={{nome: "Vitor", email: "vitor@gmail.com", bio: "Teste", role: "editor"}}/>
    </>
  )
}

export default App
