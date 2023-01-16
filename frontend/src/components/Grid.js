import React from "react";
import axios from "axios";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";

const Table = styled.table`
    width: 83%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    word-break: break-all;
    `;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    `;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width: "auto")};
`;

const Grid = ({users, setAtt, setOnEdit, userId}) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/activity", { data: {id: id, user_id: userId} })
        .then(({data}) => {
            console.log(data)
            setAtt(data);
            //toast.success(data);
        })
        .catch(({data}) => toast.error(data));

        setOnEdit(null);
    };

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Descrição</Th>
                    <Th>Data e Hora do Inicío</Th>
                    <Th>Data e Hora do Término</Th>
                    <Th>Status</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i)=>(
                    <Tr key = {i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.descricao}</Td>
                        <Td width="30%">{item.data_hora_inicio}</Td>
                        <Td width="30%">{item.data_hora_termino}</Td>
                        <Td width="30%">{item.status}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width = "5%">
                            <FaTrash onClick={() => handleDelete(item.id)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;