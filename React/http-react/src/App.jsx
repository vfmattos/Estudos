
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([]);

  const [name, setNome] = useState("");
  const [price, setPreco] = useState("");

  const url = "http://localhost:3000/products";

  useEffect(() => {
    async function fetchData(){

      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);

    }

    fetchData();

  }, [])

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

  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>

        <ul>
          {products.map(product => (
            <li key = {product.id}> {product.name} - {product.price}</li>
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
