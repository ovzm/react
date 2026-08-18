import "./App.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      age: formData.get("age"),
    };
    console.log(user);
  }

  return (
    <div className="App">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="age" placeholder="Idade" />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="user-list">
        <p>Usuários cadastrados:</p>
      </div>
    </div>
  );
}

export default App;
