import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import AmericanFootball from './pages/AmericanFootball/AmericanFootball';
import FlagFootball from './pages/FlagFootball/FlagFootball';
import Esports from './pages/Esports/Esports';
import Sponsors from './pages/Sponsors/Sponsors';
import Announcements from './pages/Announcements/Announcements';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/american-football" element={<AmericanFootball />} />
            <Route path="/flag-football" element={<FlagFootball />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
