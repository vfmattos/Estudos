import "./MyForm.css"
import { useState } from "react";
function MyForm({user}) {

    const[name, setName] = useState(user ? user.nome : '');
    const[email, setEmail] = useState(user ? user.email : '');
    const[bio, setBio] = useState(user ? user.bio : '');
    const[role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
        setRole("");

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" value={name} onChange={handleName}/>

                {/*Label envolvendo o input torna dispensável o atributo htmlForm*/}
                <label>E-mail:
                    <input type="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label>Bio:
                    <textarea name="bio" placeholder="Digite a bio" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </label>

                <label>Função no sistema
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="usuario">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm