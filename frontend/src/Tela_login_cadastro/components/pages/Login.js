import LoginForms from "../project/LoginForms"
import styles from "./Login.module.css"
import logo from "../../img/logo.png" 
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    `;

function Login(){
    const navigate = useNavigate();
    return(
        <section className = {styles.login_container}>
            <img src = {logo} alt = "Logo Agenda Eletrônica"/>
            <h1>Bem-vindo a sua Agenda Eletrônica</h1>
            <p>Organize suas tarefas rápido e fácil.</p>
            <div className = {styles.login2_container}>
                <h1>Login</h1>
                <p>Faça o login para acessar suas atividades</p>
                <LoginForms btnText="Login" />
                <Button onClick={() => navigate('/cadastro')}>Ou cadastre-se aqui</Button>
            </div>
        </section>
    )
}

export default Login