import './App.css';
import "https://kit.fontawesome.com/bc577d1dcb.js";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Index';
import Nails from './Pages/Nails/Index';
import Waxing from './Pages/Waxing/Index';
import Relaxing from './Pages/Relaxing/Index';
import PageNotFound from './Pages/PageNotFound/Index';
import Contact from './Pages/Contact/Index';



function App() {
  return (
    <Router>
      <div className='container'> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/nails' element={<Nails />}/>
          <Route path='/waxing' element={<Waxing />}/>
          <Route path='/relaxion' element={<Relaxing />}/>
          <Route path='/404' element={<PageNotFound />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
