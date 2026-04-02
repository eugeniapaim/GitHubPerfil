import Perfil from "./components/Perfil";
//import Formulario from "./components/Formulario";
import { useState } from "react";
import ReposList from "./components/ReposList";


function App() {
  // const [FormularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  

  return (
    <>

      <input type="text" className="nomeUsuario" onBlur={(e) => setNomeUsuario(e.target.value)} /> 
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
