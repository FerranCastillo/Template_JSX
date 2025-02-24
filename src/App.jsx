import UsersList from './components/UsersList';
import './styles/App.css';

function App() {
  const users = ['Ruben', 'Laura', 'Jose', 'Osama'];
  return (
    <div className="app">
      <UsersList users={users} />
    </div>
  );
}

export default App;
