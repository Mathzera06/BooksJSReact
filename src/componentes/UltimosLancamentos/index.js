import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../images/angular.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                tamanhoFonte="34px" 
                alinhamento="center">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivros>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivros>
            <CardRecomenda
                 titulo="Angular 11"
                 subtitulo="Angular"
                 descricao="Livro sobre Angular"
                 img={imagemLivro}   
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos