import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const pessoas = [{id: 1, nome: 'Vitor', idade: 15, profissao: 'Metalúrgico'},
                  {id: 2, nome: 'Felipe', idade: 24, profissao: 'Programador'},
                  {id: 3, nome: 'Mattos', idade: 18, profissao: 'Professor'}]

  return (
    <>

      <h2>User Details:</h2>

      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}
      
    </>
  )
}

export default App
