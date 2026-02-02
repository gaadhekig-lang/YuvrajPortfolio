import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminAuth from './components/AdminAuth';
import AdminUpload from './components/AdminUpload';
import AdminEdit from './components/AdminEdit';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Page */}
        <Route path="/" element={
          <div className="min-h-screen bg-dark text-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminAuth />} />
        <Route path="/admin" element={<AdminUpload />} />
        <Route path="/admin/edit" element={<AdminEdit />} />
      </Routes>
    </Router>
  );
}

export default App;

