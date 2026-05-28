import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ReadonlyHeaderProps {
  readonly initials: string;
  readonly brandName: string;
  readonly navLinks: readonly { readonly label: string; readonly href: string }[];
  readonly ctaButton: string;
}

export const Header: React.FC<ReadonlyHeaderProps> = ({ brandName, navLinks, ctaButton }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navLinks.forEach((link) => {
      if (link.href !== '#' && link.href.startsWith('#')) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <>
      <header className="fixed top-0 w-full z-[60] bg-transparent backdrop-blur-2xl border-b border-white/5">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-inner-padding h-20 md:h-24">
          <div className="flex items-center">
            <img src="/logo.png" alt={`${brandName} Logo`} className="h-16 md:h-20 w-auto object-contain" />
          </div>
          
          <nav className="hidden md:flex gap-12 items-center">
            {navLinks.map((link, idx) => {
              const isActive = link.href === '#' ? activeSection === '' : activeSection === link.href;
              return (
                <a key={idx} className={`font-label-caps text-[10px] tracking-widest transition-colors ${isActive ? 'text-tertiary font-bold scale-105' : 'text-white/60 hover:text-gold-shimmer'}`} href={link.href}>
                  {link.label}
                </a>
              );
            })}
          </nav>
          
          <div className="hidden md:block">
            <button className="metallic-shimmer text-obsidian-deep font-label-caps text-[10px] px-8 py-3 tracking-widest font-bold">
              {ctaButton}
            </button>
          </div>

          <button 
            className="md:hidden text-white hover:text-tertiary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-obsidian-deep/95 backdrop-blur-3xl flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col gap-10 items-center text-center">
              {navLinks.map((link, idx) => {
                const isActive = link.href === '#' ? activeSection === '' : activeSection === link.href;
                return (
                  <a 
                    key={idx} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-label-caps text-sm tracking-widest transition-colors ${isActive ? 'text-tertiary font-bold' : 'text-white/60 hover:text-gold-shimmer'}`} 
                    href={link.href}
                  >
                    {link.label}
                  </a>
                );
              })}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="metallic-shimmer text-obsidian-deep font-label-caps text-xs px-10 py-4 tracking-widest font-bold mt-8"
              >
                {ctaButton}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
