import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { HomePage } from "@/pages/HomePage";
import seo from "@/seo/seo.json";

// Páginas secundárias viram arquivos separados: quem abre só a home não baixa o resto.
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Páginas antigas viraram seções da home: os endereços continuam valendo e levam à seção equivalente. */}
            {Object.entries(seo.legacyRedirects).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}
