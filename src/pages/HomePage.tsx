import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Technologies } from '../components/sections/Technologies';
import { Certificates } from '../components/sections/Certificates';
import { Feedbacks } from '../components/sections/Feedbacks';
import { Contact } from '../components/sections/Contact';
import { BackToTop } from '../components/shared/BackToTop';

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c8956a]/30 to-transparent" />
  );
}

export function HomePage() {
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
      <Feedbacks />
      <Divider />
      <Contact />
      <BackToTop />
    </div>
  );
}
