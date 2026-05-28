import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyOurOfficeProps {
  readonly image: string;
  readonly floatingLabel: string;
  readonly floatingText: string;
  readonly subtitle: string;
  readonly titlePart1: string;
  readonly titleHighlight: string;
  readonly paragraphs: readonly string[];
  readonly stats: readonly { readonly value: string; readonly label: string }[];
}

export const OurOffice: React.FC<ReadonlyOurOfficeProps> = ({
  image, floatingLabel, floatingText, subtitle, titlePart1, titleHighlight, paragraphs, stats
}) => {
  return (
    <section className="py-section-padding relative overflow-hidden" id="quem-somos">
      <div className="max-w-container-max mx-auto px-inner-padding">
        <div className="grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 relative">
            <FadeIn direction="right">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-tertiary/10 blur-[120px] rounded-full"></div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-transparent blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-square">
                  <img className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-[2s]" alt="Office" src={image} />
                </div>
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
