// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Setting from './Pages/Setting';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


export default function App() {
  return (
    <div>
<Router>

        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
          </ul>
  <Routes>

    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/setting' element={<Setting/>}></Route>
    
</Routes>

        </div>
      </Router> 
      
    </div>
  )
}
  ;



