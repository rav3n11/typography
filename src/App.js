import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import NotFound from './components/404';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App light">
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
