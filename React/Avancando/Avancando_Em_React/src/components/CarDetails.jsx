
// eslint-disable-next-line react/prop-types
function CarDetails({marca, cor, km, newCar}) {
  return (
    <div>
        <h2>Detalhes do carro: </h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Cor: {cor}</li>
            <li>KM: {km}</li>
        </ul>

        {newCar ? (<p>Sou novo!</p>) : ''}
    </div>
  )
}

export default CarDetails