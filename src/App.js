import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import OurJourney from './pages/OurJourney';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BuyNow from './pages/BuyNow';
import Ahemdabad from './pages/Ahemdabad';
import Kolkata from './pages/Kolkata';
import ForbesIndia from './pages/ForbesIndia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/ahemdabad" element={<Ahemdabad />} />
          <Route path="/kolkata" element={<Kolkata />} />
          <Route path="/forbes-india" element={<ForbesIndia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
