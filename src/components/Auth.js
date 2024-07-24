// src/components/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: url('https://wallpapers.com/images/high/stitch-computer-4djb09w3d4fn525h.webp') no-repeat center center fixed;
  background-size: cover;
  background-color: pink; /* Cor de fundo para fallback */
  overflow: hidden; /* Garante que não haja rolagem indesejada */
  @media (max-width: 600px) {
    background: url('https://i.pinimg.com/564x/1c/4e/39/1c4e39d95d2cfee380fe9364466e5b4b.jpg')
  }
`;

const AuthBox = styled.div`
  background-color: #ffe4e1; /* rosa claro */
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #f5b7b1;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura */
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const AuthInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px); /* Subtrai padding e border para ajustar a largura */
  box-sizing: border-box;
`;

const AuthButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: calc(100% - 22px); /* Subtrai padding e border para ajustar a largura */
  box-sizing: border-box;
`;

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign Up Successful');
      navigate('/quotes'); // Redireciona após o registro
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Sign In Successful');
      navigate('/quotes'); // Redireciona após o login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthContainer>
      <AuthBox>
        <Title>Entrar</Title>
        <AuthInput 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <AuthInput 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <AuthButton onClick={handleSignUp}>Sign Up</AuthButton>
        <AuthButton onClick={handleSignIn}>Sign In</AuthButton>
      </AuthBox>
    </AuthContainer>
  );
};

export default Auth;
