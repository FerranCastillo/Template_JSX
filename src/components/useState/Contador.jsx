import React, { useState } from 'react';
import ButtonComponent from '../shared/ButtonComponent';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador((prevContador) => prevContador + 1);
  };
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <div className="display-flex">
        <div className="margin-right">
          <ButtonComponent onClick={decrementar} text={'Decrementar'} />
        </div>
        <div>
          <ButtonComponent onClick={incrementar} text={'Incrementar'} />
        </div>
      </div>
    </div>
  );
};

export default Contador;
