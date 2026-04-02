import { useState, useEffect } from "react";
import styles from "./ReposList.module.css";



function ReposList({ nomeUsuario }) {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);


                }, 3000);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h3 className={styles.titles}>Carregando...</h3>) : (
                <ul className={styles.list}>


                    {repos.map(repositorio => {
                        return <li className={styles.listItem} key={repositorio.id}>
                            <div>
                                <p className={styles.listItemName}><b>Nome:</b> {repositorio.name} <br /></p>
                            </div>
                            <div>
                                <p className={styles.listItemName}><b>Linguagem:</b> {repositorio.language} <br /></p>
                            </div>
                            <p className={styles.listItemName}>
                                <a href={repositorio.html_url} target="_blank" rel="noopener noreferrer" className={styles.listItemLink}>
                                    Ver no GitHub
                                </a>
                            </p>
                        </li>;
                    })
                    }
                </ul >
            )
            }
        </div>)
}


export default ReposList;