
import './App.css';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home'
import NotFound from './NotFound';
import Footer from './Footer';
import User from './User'
import {Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/user/:username" element={<User  />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
