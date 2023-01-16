import Input from "../form/Input"
import SubmitBotao from "../form/SubmitBotao"
import styles from "./LoginForms.module.css"
import { useState } from "react"

function LoginForms({btnText}) {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <div className = {styles.form}>
            <Input type = "text" text = "Nome do Usuário" placeholder = "Insira o nome de Usuário"  value={login} handleOnChange={(e) => setLogin(e.target.value)}/>
            <Input type = "password" text = "Senha"  placeholder = "Insira a sua senha" value={senha} handleOnChange={(e) => setSenha(e.target.value)}  />
            <SubmitBotao text = {btnText} data={{login, senha}} rota={'login'}/>
        </div>
    )
}
export default LoginForms;