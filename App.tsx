
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PatientPage } from './pages/PatientPage';
import { DoctorPage } from './pages/DoctorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { useTheme } from './hooks/useTheme';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
    const [theme, toggleTheme] = useTheme();

    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen bg-light dark:bg-dark text-gray-800 dark:text-gray-200 font-sans">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main className="flex-grow">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/patients" element={<PatientPage />} />
                        <Route path="/doctors" element={<DoctorPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
