const UserInfo = ({ name, age, profession = 'Programador', onClick }) => {
  return (
    <div>
      <div>Nombre: {name}</div>
      <div>Edad: {age}</div>
      {profession && <div>Profesión: {profession}</div>}
      {onClick && <button onClick={() => onClick()}>Click</button>}
    </div>
  );
};

export default UserInfo;
