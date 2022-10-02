import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import NotFound from './components/404';

function App() {
  return (
    <div className="App light">
      <Navbar />
      <NotFound />
    </div>
  );
}

export default App;
