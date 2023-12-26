import { useState } from "react";

const Conditional = () => {

    const[x, setState] = useState(false);

  return (

    <div>
        {x ? (<p>Eu sou verdadeiro!</p>) : (<p>Eu sou falso!</p>)}
        <button onClick={() => x ? setState(false) : setState(true)}>click me</button>
    </div>
  )
}

export default Conditional