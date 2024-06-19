import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurResearch from './components/OurResearch';
import Team from './components/Team';
import NewsEvents from './components/NewsEvents';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import CardPage from './components/CardPage';
import Footer from './components/Footer';
import Quest from './components/Quest';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-research" element={<OurResearch />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/card/:id" element={<CardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
