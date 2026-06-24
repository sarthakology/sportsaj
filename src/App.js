import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Digital from './pages/Digital';
import Partners from './pages/Partners';
import MediaPage from './pages/MediaPage';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
