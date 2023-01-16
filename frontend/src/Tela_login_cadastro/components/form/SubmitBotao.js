import styles from "./SubmitBotao.module.css"
import Cookies from 'js-cookie'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function SubmitBotao({text, data, rota}){
    const navigate = useNavigate();

    async function Submit() {
        if(rota === 'cadastro') {
            await axios.post("http://localhost:8800/user", data)
        } else {
            const {data: user} = await axios.post("http://localhost:8800/login", data)
            Cookies.set('user', JSON.stringify(user))
            navigate('/home')
        }
    }
    return(
        <div>
            <button className = {styles.btn} onClick={Submit}>{text}</button>
        </div>
    )
}

export default SubmitBotao