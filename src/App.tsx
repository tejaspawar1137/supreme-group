import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const HeroSection = lazy(() => import('./components/HeroSection'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <Services />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;