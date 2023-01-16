import axios from "axios";
import React, {useEffect ,useRef} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";
import Cookies from 'js-cookie'

const FormContainer = styled.form`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    `;

const Form = ({getAtt, onEdit, setOnEdit}) => {
    const ref = useRef();

    const user = Cookies.get('user')

    const id = user && (JSON.parse(user).id)

    useEffect(() => {
        if (onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.descricao.value = onEdit.descricao;
            user.data_hora_inicio.value = onEdit.data_hora_inicio;
            user.data_hora_termino.value = onEdit.data_hora_termino;
            user.status.value = onEdit.status;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if(
            !user.nome.value ||
            !user.descricao.value ||
            !user.data_hora_inicio.value ||
            !user.data_hora_termino.value ||
            !user.status.value
        ){
            return toast.warn("Preencha todos os campos!");
        }
        if(onEdit) {
            console.log(user)
            await axios
            .put("http://localhost:8800/activity", {
                id: onEdit.id,
                nome: user.nome.value,
                descricao: user.descricao.value,
                data_hora_inicio: user.data_hora_inicio.value,
                data_hora_termino: user.data_hora_termino.value,
                status: String(user.status.value),
                user_id: id
            })
            .then(({data})=>{
                toast.success(data)
                setOnEdit(false)
            })
            .catch(({data})=>toast.error(data));
        } else {
            console.log(user)
            await axios
            .post ("http://localhost:8800/activity",{
                nome: user.nome.value,
                descricao: user.descricao.value,
                data_hora_inicio: user.data_hora_inicio.value,
                data_hora_termino: user.data_hora_termino.value,
                status: String(user.status.value),
                user_id: id

            })
            .then(({data}) => toast.sucess(data))
            .catch(({data}) => toast.error(data));
        }
        user.nome.value = "";
        user.descricao.value = "";
        user.data_hora_inicio.value = "";
        user.data_hora_termino.value = "";
        user.status.value = "";

        setOnEdit(null);
        getAtt();
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name = "nome" />
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name = "descricao" />
            </InputArea>
            <InputArea>
                <Label>Data de Início</Label>
                <Input name = "data_hora_inicio" type = "datetime-local" />
            </InputArea>
            <InputArea>
                <Label>Data de Término</Label>
                <Input name = "data_hora_termino" type = "datetime-local" />
            </InputArea>
            <InputArea>
                <Label>Status</Label>
                <Input name = "status" type = "checkbox" />
            </InputArea>
            <Button type = "submit">SALVAR</Button>
        </FormContainer>
    );
}

export default Form;