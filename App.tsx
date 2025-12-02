
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import Buddies from './pages/Buddies';
import Profile from './pages/Profile';
import RouteDetail from './pages/RouteDetail';
import SmartSpend from './pages/SmartSpend';
import Chat from './pages/Chat';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buddies" element={<Buddies />} />
            <Route path="/buddy/:id" element={<Profile />} />
            <Route path="/route/:id" element={<RouteDetail />} />
            <Route path="/routes" element={<Home />} /> {/* Redirect for MVP */}
            <Route path="/smart-spend" element={<SmartSpend />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:buddyId" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;
