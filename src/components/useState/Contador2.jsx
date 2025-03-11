import React, { useState } from 'react';

const Contador2 = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
    </div>
  );
};

export default Contador2;
