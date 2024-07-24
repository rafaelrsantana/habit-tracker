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
  margin-top: 50px;
`;

const AuthInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AuthButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
    </AuthContainer>
  );
};

export default Auth;
