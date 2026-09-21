import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurJourney from './pages/OurJourney';
import InTheNews from './pages/InTheNews';
import BuyTickets from './pages/BuyTickets';
import Gujarat from './pages/Gujarat';
import Kolkata from './pages/Kolkata';
import ForbesIndia from './pages/news/ForbesIndia';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/about" element={<Navigate to="/our-journey" replace />} />
          <Route path="/in-the-news" element={<InTheNews />} />
          <Route path="/buy-tickets" element={<BuyTickets />} />
          <Route path="/buy-now" element={<Navigate to="/buy-tickets" replace />} />
          <Route path="/gujarat" element={<Gujarat />} />
          <Route path="/ahemdabad" element={<Navigate to="/gujarat" replace />} />
          <Route path="/kolkata" element={<Kolkata />} />
          <Route path="/news/forbes-india" element={<ForbesIndia />} />
          <Route path="/forbes-india" element={<Navigate to="/news/forbes-india" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
