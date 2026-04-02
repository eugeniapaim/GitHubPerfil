import { useState, useEffect } from "react";
import "./form.css";

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0); //useState é um hook do React que permite adicionar estado a um componente funcional. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. No exemplo, materiaA é o valor atual do estado, e setMateriaA é a função que pode ser usada para atualizar esse valor. O argumento passado para useState (0) é o valor inicial do estado.
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState("");

    const renderizaResultado = () => {
        const soma = Number(materiaA) + Number(materiaB) + Number(materiaC);
        const media = soma / 3;
        if (media >= 7) {
            return (<p>Olá {nome}, você está aprovado!</p>);
        } else if (media >= 5) {
            return (<p>Olá {nome}, você está em recuperação.</p>)
        } else {
            return (<p>Olá {nome}, você está reprovado.</p>);
        }
    }

    useEffect(() => {
        console.log("O nome foi atualizado.");
    }, [nome]) // O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele recebe uma função como argumento, que será executada após a renderização do componente. O segundo argumento é um array de dependências, que indica quando o efeito deve ser reexecutado. No exemplo, o efeito será reexecutado sempre que o valor de nome for atualizado.
    // pode usar com as dependencias (como uma condição quando for alterada), sem dependencias (executa toda vez que o componente for renderizado) ou com array vazio (executa apenas na montagem do componente).
    // para quando for encerrado o componente, pode retornar uma função dentro do useEffect, que será executada quando o componente for desmontado. Exemplo: useEffect(() => { return () => { console.log("Componente desmontado."); } }, []);

    //mount -> quando o componente é renderizado pela primeira vez
    //update -> quando o componente é atualizado (quando o estado ou as props são alterados)
    //unmount -> quando o componente é removido da tela
    const alterarNome = (evento) => {
        setNome(evento.target.value);
        return evento.target.value;
    }


    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map((item => <li key={item}> {item}</li>))} {/*O método map é usado para iterar sobre um array e retornar um novo array com os resultados da função aplicada a cada elemento. No exemplo, o array [1,2,3,4,5] é iterado e para cada item é retornado um elemento <li> com o valor do item. O resultado será uma lista de itens de 1 a 5.*/}
            </ul>
            <input type="text" placeholder="Seu nome"  onChange={alterarNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))} />
            {renderizaResultado()}
            <p>Sua média é: {((Number(materiaA) + Number(materiaB) + Number(materiaC)) / 3).toFixed(2)}</p>
        </form>
    )
}

export default Formulario;