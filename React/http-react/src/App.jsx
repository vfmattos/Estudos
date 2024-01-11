
import './App.css'
import { useState, useEffect } from 'react'
import {useFetch} from './hooks/useFetch'

function App() {

  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);

  const {data: items} = useFetch(url);

  const [name, setNome] = useState("");
  const [price, setPreco] = useState("");


  /*
  useEffect(() => {
    async function fetchData(){

      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);

    }

    fetchData();

  }, [])
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })

    const addedProduct = await res.json();

    setProducts((prevProduct) => [...prevProduct, addedProduct]);

    setNome("");
    setPreco("");

  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>

        <ul>
          {items && items.map(product => (
            <li key = {product.id}> {product.name} - R$: {product.price}</li>
          ))}
        </ul>

            <form onSubmit={handleSubmit}>

              <label>
                Nome:
                <input type="text" name="nome" value={name} onChange={(e) => setNome(e.target.value)}/>
              </label>

              <label>
                Preco:
                <input type="number" name="preco" value={price} onChange={(e) => setPreco(e.target.value)}/>
              </label>

              <input type="submit" value="Enviar" />

            </form>
      </div>
    </>
  )
}

export default App
