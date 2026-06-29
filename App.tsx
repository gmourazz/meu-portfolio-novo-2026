import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageProvider } from "./src/context/LanguageContext";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import { ProjectsPage } from "./src/pages/ProjectsPage";
import { TechnologiesPage } from "./src/pages/TechnologiesPage";
import { CertificatesPage } from "./src/pages/CertificatesPage";
import { ContactPage } from "./src/pages/ContactPage";

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}
