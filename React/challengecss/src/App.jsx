import './App.css'
import CarDetails from './modules/CarDetails'

function App() {

  const cars = [{id: 1, marca: 'BMW', cor: 'Azul', km:1000},
                {id: 2, marca: 'Fiat', cor: 'Branco', km:2000},
                {id: 3, marca: 'Hiunday', cor: 'Preto', km:3000}]

  return (
    <>

    <div className="card-container">
      {cars.map(car => (
        <CarDetails key={car.id} marca={car.marca} cor={car.cor} km={car.km}/>
      ))}
    </div>
      
    </>
  )
}

export default App
