import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
   // const {nome, endereco} = props; ->desustruturação de props

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="avatar" />
            <a href={`https://github.com/${nomeUsuario}`} target="_blank" rel="noopener noreferrer" className={styles.name}>
                <h1 className={styles.name}>{nomeUsuario}</h1>
            </a>
        </header>
    )
}


export default Perfil;