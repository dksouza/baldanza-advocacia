import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export interface ReadonlyOurOfficeProps {
  readonly images?: readonly string[];
  readonly image?: string;
  readonly floatingLabel: string;
  readonly floatingText: string;
  readonly subtitle: string;
  readonly titlePart1: string;
  readonly titleHighlight: string;
  readonly paragraphs: readonly string[];
  readonly stats: readonly { readonly value: string; readonly label: string }[];
}

export const OurOffice: React.FC<ReadonlyOurOfficeProps> = ({
  images, image, floatingLabel, floatingText, subtitle, titlePart1, titleHighlight, paragraphs, stats
}) => {
  const displayImages = images || (image ? [image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4500); // Cinematic slow crossfade timing
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <section className="pt-24 pb-12 md:py-section-padding relative overflow-hidden" id="quem-somos">
      <div className="max-w-container-max mx-auto px-inner-padding">
        <div className="grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 relative">
            <FadeIn direction="right">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-tertiary/10 blur-[120px] rounded-full"></div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-transparent blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-square bg-black">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={currentIndex}
                      src={displayImages[currentIndex]}
                      alt="Office"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s]"
                    />
                  </AnimatePresence>
                  
                  {/* Cinematic progress indicators */}
                  {displayImages.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {displayImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1 transition-all duration-700 rounded-full shadow-lg ${
                            idx === currentIndex ? 'w-10 bg-tertiary shadow-tertiary/50' : 'w-4 bg-white/30 hover:bg-white/60'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Modern Arrows - positioned halfway outside */}
                {displayImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))}
                      className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-tertiary hover:text-white hover:bg-black/80 transition-all z-30 border border-tertiary/30 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:scale-110"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev + 1) % displayImages.length)}
                      className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-tertiary hover:text-white hover:bg-black/80 transition-all z-30 border border-tertiary/30 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:scale-110"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>
            </FadeIn>
            
            <div className="absolute -bottom-10 -right-10 glass-card p-10 hidden lg:block max-w-xs">
              <h4 className="text-tertiary font-label-caps text-xs mb-4 tracking-widest">{floatingLabel}</h4>
              <p className="text-white/60 text-xs italic">{floatingText}</p>
            </div>
          </div>
          
          <div className="md:col-span-6 md:pl-20 mt-24 md:mt-0">
            <FadeIn direction="up">
              <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary tracking-[0.3em] md:tracking-[0.5em] block mb-6 md:mb-8">{subtitle}</span>
              <h2 className="font-headline-lg text-4xl md:text-6xl text-white mb-8 md:mb-12 leading-tight">
                {titlePart1}<br />
                <span className="text-gold-gradient">{titleHighlight}</span>
              </h2>
              <div className="space-y-10">
                {paragraphs.map((para, idx) => (
                  <p key={idx} className={`font-body-lg text-white/50 leading-relaxed ${idx > 0 ? 'border-l border-tertiary/30 pl-8' : ''}`}>
                    {para}
                  </p>
                ))}
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-8 md:pt-12">
                  {stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-4xl md:text-5xl font-display-lg text-gold-shimmer mb-2">{stat.value}</div>
                      <p className="font-label-caps text-[10px] text-white/40 tracking-widest uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
