import logo from '../logo.svg';
import PersonList from './PersonList'
import '../css/App.css';

function App() {
  return (
    <div className="container">
      <h1>Birthday Reminder!</h1>
      <h5>Because you dont love that much your friends</h5>
      <PersonList/>
    </div>
  );
}

export default App;
