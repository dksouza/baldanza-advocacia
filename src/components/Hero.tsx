import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';

export interface ReadonlyHeroProps {
  readonly subtitle: string;
  readonly titlePart1: string;
  readonly titleHighlight: string;
  readonly titlePart2: string;
  readonly description: string;
  readonly primaryCTA: string;
  readonly secondaryCTA: string;
  readonly marqueeWords: readonly string[];
  readonly backgroundImage: string;
  readonly floatingImage: string;
}

export const Hero: React.FC<ReadonlyHeroProps> = ({
  subtitle, titlePart1, titleHighlight, titlePart2, description, primaryCTA, secondaryCTA, marqueeWords, backgroundImage, floatingImage
}) => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const marqueeX1 = useTransform(scrollY, [0, 1000], [0, -500]);
  const marqueeX2 = useTransform(scrollY, [0, 1000], [-500, 0]);

  const repeatedWords = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-40 md:pt-40 md:pb-48 lg:pb-32">
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-deep/60 to-obsidian-deep z-10"></div>
        <div className="absolute inset-0 god-rays"></div>
        <img className="w-full h-full object-cover grayscale opacity-20 scale-110" alt="Background" src={backgroundImage} />
      </motion.div>
      
      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute right-0 top-[10%] xl:top-1/4 w-1/3 h-2/3 pointer-events-none hidden lg:block floating opacity-40">
        <img className="w-full h-full object-contain mix-blend-screen" alt="Floating Scale" src={floatingImage} />
      </motion.div>
      
      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-20 max-w-container-max mx-auto px-6 md:px-inner-padding w-full">
        <div className="max-w-4xl mt-12 md:mt-16 lg:mt-0">
          <FadeIn delay={0.2} direction="up">
            <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary mb-6 md:mb-8 block tracking-[0.3em] md:tracking-[0.5em] opacity-80">{subtitle}</span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg text-white mb-8 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter">
              {titlePart1}<br />
              <span className="text-gold-gradient italic font-serif">{titleHighlight}</span><br />
              {titlePart2}
            </h1>
            <p className="font-body-lg text-base md:text-body-lg text-white/50 mb-10 md:mb-16 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <button className="metallic-shimmer text-obsidian-deep font-label-caps text-[11px] px-8 sm:px-12 py-5 sm:py-6 tracking-[0.2em] font-bold w-full sm:w-auto">
                {primaryCTA}
              </button>
              <button className="group relative px-8 sm:px-12 py-5 sm:py-6 font-label-caps text-[11px] tracking-[0.2em] text-white border border-white/20 hover:border-tertiary transition-all w-full sm:w-auto text-center">
                <span className="relative z-10">{secondaryCTA}</span>
                <div className="absolute inset-0 bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-10"></div>
              </button>
            </div>
          </FadeIn>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 -left-[10vw] w-[120vw] z-40 flex flex-col pointer-events-none">
        {/* Faixa Inferior (Translúcida, rolando para a esquerda) */}
        <div className="rotate-[3deg] translate-y-12 bg-transparent border-y border-white/20 opacity-60 py-4 flex items-center overflow-hidden">
          <motion.div style={{ x: marqueeX1 }} className="flex whitespace-nowrap gap-16">
            {repeatedWords.map((word, idx) => (
              <span key={`b-${idx}`} className="font-display-lg text-5xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] tracking-widest opacity-80 uppercase">{word}</span>
            ))}
          </motion.div>
        </div>
        
        {/* Faixa Superior (Sólida, rolando para a direita) */}
        <div className="-rotate-[2deg] bg-obsidian-deep/80 backdrop-blur-md border-y border-tertiary/40 py-4 flex items-center overflow-hidden shadow-2xl">
          <motion.div style={{ x: marqueeX2 }} className="flex whitespace-nowrap gap-16">
            {repeatedWords.map((word, idx) => (
              <span key={`t-${idx}`} className="font-display-lg text-5xl text-tertiary tracking-widest uppercase opacity-90">{word}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
