import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Routes from './Route/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
