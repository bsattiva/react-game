import logo from './logo.svg';
import './App.css';
import Scena from './components/Scena';

function App() {

  const style={
    width: '100%'
  }
  return (
    <div className="App" style={style}>
      <Scena />
    </div>
  );
}

export default App;
