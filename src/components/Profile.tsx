import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyProfileProps {
  readonly image: string;
  readonly signatureText: string;
  readonly subtitle: string;
  readonly titlePart1: string;
  readonly titleHighlight: string;
  readonly description: string;
  readonly bulletPoints: readonly string[];
  readonly ctaButton: string;
}

export const Profile: React.FC<ReadonlyProfileProps> = ({
  image, subtitle, titlePart1, titleHighlight, description, bulletPoints, ctaButton
}) => {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-black/40 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full god-rays rotate-180 opacity-30"></div>
      <div className="max-w-container-max mx-auto px-inner-padding grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 relative group">
          <FadeIn direction="left">
            <div className="absolute -inset-10 bg-tertiary/10 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale brightness-90 hover:brightness-100 transition-all duration-700">
              <img alt="Profile" className="w-full h-full object-cover object-top" src={image} />
            </div>
          </FadeIn>
        </div>
        
        <div className="md:col-span-7 md:pl-24 mt-20 md:mt-0">
          <FadeIn direction="up">
            <span className="font-label-caps text-[10px] md:text-label-caps text-tertiary tracking-[0.3em] md:tracking-[0.5em] block mb-4 md:mb-6">{subtitle}</span>
            <h2 className="font-display-lg text-5xl md:text-7xl text-white mb-8 md:mb-10 leading-tight">
              {titlePart1}<br />
              <span className="text-gold-gradient">{titleHighlight}</span>
            </h2>
            <div className="space-y-8">
              <p className="font-body-lg text-white/60 leading-relaxed text-xl">
                {description.split('IBDFAM').map((part, index, array) => 
                  index === array.length - 1 ? part : <React.Fragment key={index}>{part}<span className="text-tertiary font-medium">IBDFAM</span></React.Fragment>
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 border-y border-white/5">
                {bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary mt-1">verified</span>
                    <span className="font-body-md text-white/70">{point}</span>
                  </div>
                ))}
              </div>
              <button className="metallic-shimmer text-obsidian-deep font-label-caps text-[11px] px-12 py-6 tracking-[0.2em] font-bold mt-10">
                {ctaButton}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
