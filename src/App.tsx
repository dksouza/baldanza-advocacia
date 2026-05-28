import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExpertiseAreas } from './components/ExpertiseAreas';
import { OurOffice } from './components/OurOffice';
import { Differentials } from './components/Differentials';
import { Profile } from './components/Profile';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { mockData } from './data/mockData';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="shimmer-particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="shimmer-particle" style={{ top: '50%', left: '80%', animationDelay: '2s' }}></div>
        <div className="shimmer-particle" style={{ top: '80%', left: '30%', animationDelay: '4s' }}></div>
        <div className="shimmer-particle" style={{ top: '10%', left: '60%', animationDelay: '6s' }}></div>
      </div>
      
      <Header {...mockData.header} />
      <Hero {...mockData.hero} />
      <ExpertiseAreas {...mockData.expertise} />
      <OurOffice {...mockData.ourOffice} />
      <Differentials items={mockData.differentials} />
      <Profile {...mockData.profile} />
      <Testimonials {...mockData.testimonials} />
      <Blog {...mockData.blog} />
      <Footer {...mockData.footer} />
      <WhatsAppButton />
    </>
  );
}

export default App;
