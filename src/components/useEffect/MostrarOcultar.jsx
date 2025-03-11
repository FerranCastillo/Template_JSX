import React, { useState, useEffect } from 'react';

const MostrarOcultar = () => {
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    if (!loadingUser) {
      setLoading(true);
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => console.log('Datos cargados:', data))
          .finally(() => {
            setLoadingUser(false);
            setLoading(false);
          });
      }, 2000);
    }
  }, [loadingUser]);

  const createUser = () => {
    setLoadingUser(true);
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          console.log('Datos cargados:', data);
          setLoadingUser(false);
        });
    }, 2000);
  };

  if (loading) return <p>Cargando usuarios...</p>;
  return (
    <div>
      <button onClick={createUser}>{loadingUser ? 'Creando..' : 'Volver a llamar'}</button>
      <p>Llamada Finalizada</p>
    </div>
  );
};

export default MostrarOcultar;
