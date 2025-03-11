import React, { useEffect, useState } from 'react';

const Ejemplo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          console.log('Datos cargados:', data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  };

  return (
    <div>
      <button onClick={getUsers}>Volver a llamar</button>
      {loading ? 'Cargando...' : 'Finalizado'}
    </div>
  );
};

export default Ejemplo;
