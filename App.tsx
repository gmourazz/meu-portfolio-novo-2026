import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { LanguageProvider } from "./src/context/LanguageContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import { ProjectsPage } from "./src/pages/ProjectsPage";
import { TechnologiesPage } from "./src/pages/TechnologiesPage";
import { CertificatesPage } from "./src/pages/CertificatesPage";
import { ContactPage } from "./src/pages/ContactPage";

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
    </ThemeProvider>
  );
}
