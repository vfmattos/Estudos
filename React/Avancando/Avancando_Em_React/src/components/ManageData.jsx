import { useState } from "react"

function ManageData() {
    const [number, setNumber] = useState(10);
    const[lista] = useState(["Pedro", "Maria", "João"]);
    
  return (
    <div>
        <p>{number}</p>
        <button onClick={() => setNumber(number + 2)}>Alterar</button>
        <ul>
            {lista.map((p, i) => (
                <li key={i}>{p}</li>
            ))}
        </ul>
    </div>
  )
}

export default ManageData