export const soluciones1 = [
  `  let users = [
    { name: 'Ruben', age: 20 },
    { name: 'Laura', age: 22 },
    { name: 'Jose', age: 25 },
    { name: 'Osama', age: 30 },
  ];
----------------------------------------------------
  <div className="user-list">
    <hr />
    {props.users.map((user, index) => (
      <div key={index} className="user-wrapper">
        <UserInfo name={user.name} age={user.age} />
        <hr />
      </div>
    ))}
  </div>`,
  `const UserInfo = ({ name, age, profession = 'Programador' }) => {
  return (
    <div>
      <div>Nombre: {name}</div>
      <div>Edad: {age}</div>
      <div>Profesión: {profession}</div>
    </div>
  );
};`,
  `<div className="user-list">
  <hr />
  {props.users.map((user, index) => (
    <div key={index} className="user-wrapper">
      <UserInfo name={user.name} age={user.age} onClick={() => alert('Soy ' + user.name)} />
      <hr />
    </div>
  ))}
</div>
-----------------------------------------------------	
const UserInfo = ({ name, age, profession = 'Programador', onClick }) => {
  return (
    <div>
      <div>Nombre: {name}</div>
      <div>Edad: {age}</div>
      <div>Profesión: {profession}</div>
      {onClick && <button onClick={() => onClick()}>Click</button>}
    </div>
  );
};`,
  `<div className="user-list">
    <hr />
    {props.users.map(({ name, age }, index) => (
      <div key={index} className="user-wrapper">
        <UserInfo name={name} age={age} onClick={() => alert('Soy ' + name)} />
        <hr />
      </div>
    ))}
</div>`,
  `<div className="user-list">
    <hr />
    {props.users.map(({ name, ...rest }, index) => (
      <div key={index} className="user-wrapper">
        <UserInfo name={name} {...rest} onClick={() => alert('Soy ' + name)} />
        <hr />
      </div>
    ))}
</div>`,
  `<div className="user-list">
    <hr />
    {props.users.map(({ name: nombre, ...rest }, index) => (
      <div key={index} className="user-wrapper">
        <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
        <hr />
      </div>
    ))}
</div>`,
  `<div className="user-list">
    <hr />
    {props.users.map(({ name: nombre, ...rest }, index) => (
      <div key={index} className="user-wrapper">
         <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
         <hr />
       </div>
     ))}
</div>`,
  `<div className="user-list">
  <hr />
    {props.users
      .filter((user) => {
       return user.age >= 25;
    })
    .map(({ name: nombre, ...rest }, index) => (
      <div key={index} className="user-wrapper">
       <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
        <hr />
      </div>
    ))}
</div>`,
  `const [primero, segundo] = props.users;
  return (
    <div className="user-list">
      <hr />
      {[primero, segundo].map(({ name: nombre, ...rest }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );`,
  `const [primero, , tercero] = props.users;
  return (
    <div className="user-list">
      <hr />
      {[primero, tercero].map(({ name: nombre, age }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );`,
  `const [, segundo, ...resto] = props.users;
  return (
    <div className="user-list">
      <hr />
      {[segundo, ...resto].map(({ name: nombre, age }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );`,
  `const [{ name: primero }, { name: segundo }, { name: tercero }, { name: cuarto }] = props.users;
  return (
    <div className="user-list">
      <hr />
      {[primero, segundo, tercero, cuarto].map((nombre, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );`,
];

export const soluciones2 = [
  `import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;`,
  `import React, { useState } from 'react';

const MostrarOcultar = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => setVisible(!visible);

  return (
    <div>
      <button onClick={toggleVisible}>{visible ? 'Ocultar' : 'Mostrar'} mensaje</button>
      {visible && <p>Este es un mensaje secreto</p>}
    </div>
  );
};

export default MostrarOcultar;
`,
  `import React, { useState } from 'react';

const Formulario = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => setInputText(event.target.value);

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} placeholder="Escribe algo..." />
      <p>Texto ingresado: {inputText}</p>
    </div>
  );
};

export default Formulario;
`,
  `import React, { useState } from 'react';

const ListaBoton = () => {
  const [items, setItems] = useState([]);

  const agregarItem = () => {
    const nuevoItem = 'Elemento '+ items.length + 1;
    setItems([...items, nuevoItem]);
  };

  return (
    <div>
      <h2>Lista de elementos</h2>
      <button onClick={agregarItem}>Agregar Elemento</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaBoton;
`,
];
