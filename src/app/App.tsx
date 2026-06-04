import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { AllProjectsPage } from './pages/AllProjectsPage';

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c8956a]/30 to-transparent" />
  );
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Technologies />
      <Divider />
      <Certificates />
      <Divider />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<AllProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
