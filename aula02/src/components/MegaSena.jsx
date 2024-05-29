import React, { useState } from 'react';

const HookMegaSena = () => {
 
  const [randomNumber, setRandomNumber] = useState(null);
  const [drawnNumbers, setDrawnNumbers] = useState([]);

  
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 60) + 1;
  };

  
  const sortearNumero = () => {
    
    const newRandomNumber = generateRandomNumber();

    if (drawnNumbers.includes(newRandomNumber)) {
    
      return window.alert("Já temos 6 números sortedos!");
    }

   
    if (drawnNumbers.length === 6) {
      return;
    }

   
    setRandomNumber(newRandomNumber);

   
    setDrawnNumbers([...drawnNumbers, newRandomNumber]);
  };

  
  return (
    <div>
      <h2>HookMegaSena</h2>
      <p>Número sorteado: {randomNumber || "Nenhum"}</p>
      <p>Números sorteados: [{drawnNumbers.join(", ")}]</p>
      <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  );
};

export default HookMegaSena