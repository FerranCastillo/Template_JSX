import UserInfo from './UserInfo';

const UsersList = ({ users }) => {
  return (
    <div className="user-list">
      <hr />
      {users.map((user, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user.name} age={user.age} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
