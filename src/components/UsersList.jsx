import UserInfo from './UserInfo';

const UsersList = (props) => {
  return (
    <div className="user-list">
      <hr />
      {props.users.map((user, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user} age={30} profession={'Programador'} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
