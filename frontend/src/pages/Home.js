import styled from "styled-components";
import Form from "../components/Form.js";
import Grid from "../components/Grid.js";
import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h2`
color: whitesmoke;
`;

function Home() {
  const navigate = useNavigate();

  const [users, setAtt] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [user, setUser] = useState(Cookies.get('user'));

  const getAtt = async () => {
    try{
      const { data} = await axios.post("http://localhost:8800/activity/get", {user_id: JSON.parse(user).id});
      setAtt(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    }catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getAtt();
  }, [setAtt]);

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [user])

  function logout (){
    Cookies.remove('user')
    setUser(Cookies.get('user'))
  }

  return (
    <>
      <Container>
        <Title>ATIVIDADES</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getAtt={getAtt}/>
        <Grid users={users} setAtt={setAtt} setOnEdit={setOnEdit} userId={user ? JSON.parse(user).id : -1}/>
      </Container>
      <ToastContainer autoClose = {3000} position = {toast.POSITION.BOTTOM_LEFT}/>
      <button onClick={() => logout()}>logout</button>
    </>
  );
}

export default Home;
