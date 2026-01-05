import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Applications from './pages/Applications';
import HolidayWork from './pages/HolidayWork';
import HolidayWorkForm from './pages/HolidayWorkForm';
import Circulars from './pages/Circulars';
import Fees from './pages/Fees';
import SchoolRules from './pages/SchoolRules';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/holiday-work" element={<HolidayWork />} />
        <Route path="/holiday-work/:formId" element={<HolidayWorkForm />} />
        <Route path="/circulars" element={<Circulars />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/school-rules" element={<SchoolRules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
