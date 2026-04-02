import Perfil from "./components/Perfil";
//import Formulario from "./components/Formulario";
import { useState } from "react";
import styles from "./components/ReposList/ReposList.module.css";
import ReposList from "./components/ReposList";


function App() {
  // const [FormularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  

  return (
    <>
      <h3 className={styles.tituloNomeUsuario}>Nome de usuário GitHub:</h3>
      <input type="text" className={styles.inputNomeUsuario} onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="@"/> 
      {nomeUsuario.length > 3 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>

  )
}
export default App
