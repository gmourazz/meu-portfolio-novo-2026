import { Link } from 'react-router';
import { useT } from '../hooks/useT';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Certificates } from '../components/sections/Certificates';
import { BackToTop } from '../components/shared/BackToTop';

export function CertificatesPage() {
  const t = useT();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <Header />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c8956a] transition-colors font-medium text-sm mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('common.backToPortfolio')}
        </Link>
      </div>
      <Certificates />
      <BackToTop />
    </div>
  );
}
