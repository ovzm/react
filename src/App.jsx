import "./App.css";
import { useState } from "react";

function App() {
  function handleSubmit(event) {
    // Event é usado para capturar o evento de envio do formulário - vai chegar as informações do formulário
    event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

    const newUser = {
      // Cria um novo objeto de usuário com as informações do formulário
      name: name,
      email: email,
      age: age,
    };

    setUsers([...users, newUser]); // Adiciona um novo usuário ao array de usuários

    console.log(users);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)} // assim que pega as informações do input, ele vai atualizar o estado do name
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="user-list">
        <p>Usuários cadastrados:</p>
      </div>
    </div>
  );
}

export default App;
