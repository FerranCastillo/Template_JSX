import React, { useState, useEffect } from 'react';

const Formulario = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((data) => setUser(data))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  if (loading) return <p>Cargando usuario...</p>;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Nombre: <input type="text" name="name" value={user.name || ''} onChange={handleChange} placeholder="Nombre" />
      </div>
      <div>
        Telefono:{' '}
        <input type="text" name="phone" value={user.phone || ''} onChange={handleChange} placeholder="Teléfono" />
      </div>
      <div>
        Email: <input type="text" name="email" value={user.email || ''} onChange={handleChange} placeholder="Email" />
      </div>
      <h3>Información del usuario</h3>
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
