
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EyeSite from './pages/EyeSite';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyesite" element={<EyeSite />} />
          <Route path="/city" element={<PlaceholderPage />} />
          <Route path="/checkin-sheriff" element={<PlaceholderPage />} />
          <Route path="/car-sheriff" element={<PlaceholderPage />} />
          <Route path="/accessibility-sheriff" element={<PlaceholderPage />} />
          <Route path="/disclaimer" element={<PlaceholderPage />} />
          {/* Catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
