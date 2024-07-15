import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://www.linkedin.com/in/jeronimo-s-rodrigues-dev/">
                        <img src="/imagens/sociais/linkedin.png" alt="Linkedin" title='Linkedin'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JeronimoSantos">
                        <img src="/imagens/sociais/github.png" alt="GitHub" title='GitHub'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jeronimo_santos_oficial/">
                        <img src="/imagens/sociais/instagram.png" alt="instagram" title='Instagram'/>
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Jerônimo S.Rodrigues.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
