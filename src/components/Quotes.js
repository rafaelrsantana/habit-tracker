// src/components/Quotes.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://wallpapers.com/images/high/stitch-computer-4triruzxq69a7ezr.webp') no-repeat center center fixed; /* Imagem do Stitch */
  background-size: cover;
  padding: 20px;
  @media (max-width) {
    background: url('https://i.pinimg.com/564x/f4/fd/ea/f4fdea4e74f86781a58443c860f1b24a.jpg')
  }
`;

const QuoteBox = styled.div`
  background-color: #ffe4e1; /* rosa claro */
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #f5b7b1;
  width: 80%;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 600px) {
    padding: 15px;
    width: 100%;
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

const QuoteText = styled.p`
  font-size: 1.2em;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-weight: bold;
`;

// Adiciona uma camada de bolinhas no fundo da QuoteBox
const Dots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://i.pinimg.com/564x/23/fb/e9/23fbe94a1cd11d39d432996a528ca845.jpg') repeat;
  opacity: 0.2;
  z-index: -1;
`;

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      const quotes = [
        "Minha Pitz, você é linda e perfeita! Nunca esqueça que estou aqui torcendo por você, você é capaz de tudo!",
        "Vamos Sopi você é incrível!",
        "Você é a melhor namorada do mundo!",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        "Você vai conseguir mô, eu acredito em cê!"
      ];

      // Obtém a data atual no formato YYYY-MM-DD
      const today = new Date().toISOString().split('T')[0];

      // Obtém o índice da frase do armazenamento local
      const storedDate = localStorage.getItem('quoteDate');
      const storedIndex = localStorage.getItem('quoteIndex');

      if (storedDate === today && storedIndex !== null) {
        // Se a data armazenada é a mesma do dia de hoje, use o índice armazenado
        setQuote(quotes[parseInt(storedIndex, 10)]);
      } else {
        // Se não, selecione um novo índice aleatório
        const randomIndex = Math.floor(Math.random() * quotes.length);
        localStorage.setItem('quoteDate', today);
        localStorage.setItem('quoteIndex', randomIndex);
        setQuote(quotes[randomIndex]);
      }
    };

    try {
      fetchQuote();
    } catch (err) {
      setError('Failed to fetch quote: ' + err.message);
    }
  }, []);

  if (error) {
    return (
      <QuoteContainer>
        <QuoteBox>
          <ErrorText>{error}</ErrorText>
        </QuoteBox>
      </QuoteContainer>
    );
  }

  return (
    <QuoteContainer>
      <QuoteBox>
        <Dots />
        <Title>Motivações para a Sopi S2</Title>
        <QuoteText>{quote}</QuoteText>
      </QuoteBox>
    </QuoteContainer>
  );
};

export default Quotes;
