import './App.css';
import { Account } from './screen/Account';
import { Home } from './screen/Home';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Home/>
        <Account/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
