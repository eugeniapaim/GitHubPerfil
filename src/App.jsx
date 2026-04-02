import Perfil from "./components/Perfil";
import { useState } from "react";
import styles from "./components/ReposList/ReposList.module.css";
import ReposList from "./components/ReposList";



function App() {
  // const [FormularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')


  return (
    <>
      <div className={styles.headerAll}>
        <h3 className={styles.tituloNomeUsuario}>Nome de usuário GitHub:</h3>
        <input type="text" className={styles.inputNomeUsuario} onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="@" />
      </div>
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
