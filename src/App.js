import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import { PentaNavbar } from './components/Navbar/PentaNavbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Customers from './components/pages/Customers';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <PentaNavbar></PentaNavbar>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>  
      <Footer></Footer>
    </div>
  );
}

export default App;
