import UsersList from './components/UsersList';
import './styles/App.css';

function App() {
  const users = ['Ana', 'Carlos', 'María'];
  return (
    <div className="app">
      <UsersList users={users} />
    </div>
  );
}

export default App;
