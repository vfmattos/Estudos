import './App.css'
import { useState } from 'react'
import Perfil from './assets/Perfil.jpg'
import ManageData from './components/ManageData'
import Conditional from './components/Conditional'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const [nome, setName] = useState("RRRR");
  const cars = [{id: 1, marca: "Ferrari", cor: "Amarelo", newCar: true, km: 0},
                {id: 2, marca: "Kia", cor: "Branco", newCar: false, km: 3433},
                {id: 3, marca: "Renault", cor: "Azul", newCar: false, km: 240}];

  function ExibeMessage(){
    alert("Olá mundo!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
      setMessage(msg);
  }

  return (
    <>

      <h1>Avançando em React</h1>
      <img src={Perfil} alt="Imagem de perfil" />
      <ManageData />
      <Conditional />
      <ShowUsername name={nome}/>

      <button onClick={() => setName("Vitor")}>mudar nome</button>

      {cars.map((car) => (
        <CarDetails key={car.id} marca={car.marca} cor={car.cor} newCar={car.newCar} km={car.km} />
      ))}

        <Container myValue={10}>
          <h2>Venho da Children prop!</h2>
        </Container>

        <ExecuteFunction myFunction={ExibeMessage}/>
    
        {/*State Lift*/}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App
