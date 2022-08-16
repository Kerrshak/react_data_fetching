import './App.css';
import Welcome from './containers/Welcome'
import MagicFetch from './containers/MagicFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
      <MagicFetch />
    </div>
  );
}

export default App;
