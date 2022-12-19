import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { PentaNavbar } from './components/Navbar/PentaNavbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <PentaNavbar></PentaNavbar>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>  
      
    </div>
  );
}

export default App;
