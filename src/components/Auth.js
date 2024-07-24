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
  background: url('https://i.pinimg.com/originals/6c/9c/79/6c9c79fbdca68a73e0ac5a0b9b828733.jpg') no-repeat center center fixed; 
  background-size: cover;
  background-color: pink;
`;

const AuthBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo com transparência */
  border-radius: 15px;
  padding: 40px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
`;

const AuthInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px); /* Para evitar overflow */
`;

const AuthButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
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
        <Title>Bem vindo(a)!</Title>
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
