import CadastroForms from "../project/CadastroForms.js"
import styles from "./Cadastro.module.css"
import logo from "../../img/logo.png" 

function Cadastro(){
    return(
        <section className = {styles.login_container}>
            <img src = {logo} alt = "Logo Agenda Eletrônica"/>
            <h1>Bem-vindo a sua Agenda Eletrônica</h1>
            <p>Organize suas tarefas rápido e fácil.</p>
            <div className = {styles.login2_container}>
                <h1>Cadastro</h1>
                <p>Faça o seu cadasto para acessar suas atividades</p>
                <CadastroForms btnText="Cadastro" />
            </div>
        </section>
    )
}

export default Cadastro