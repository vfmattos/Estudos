// eslint-disable-next-line react/prop-types
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>

        {idade >= 18 ? (<p>Pode tirar carteira de habilitação!</p>) : ("")}
    </div>
  )
}

export default UserDetails