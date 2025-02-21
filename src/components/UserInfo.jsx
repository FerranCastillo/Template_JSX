const UserInfo = (props) => {
  return (
    <div>
      <div>Nombre: {props.name}</div>
      <div>Edad: {props.age}</div>
      <div>Profesión: {props.profession}</div>
      {props.children}
    </div>
  );
};

export default UserInfo;
