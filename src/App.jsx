import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import About from './pages/About';
import Know from './pages/Know';
//import Limited from './pages/Limited';
import Serve from './pages/Serve';
import Member from './pages/Member';
import Contact from './pages/Contact';
import Four from './pages/Four';

import One from './servepages/One';

import Join from './process/Join';

import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/four' element={<Four />} />
          <Route path='/about' element={<About />} />
          <Route path='/know' element={<Know />} />
          <Route path='/serve' element={<Serve />} />
          <Route path='/member' element={<Member />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/one' element={<One />} />

          <Route path='/join' element={<Join />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
