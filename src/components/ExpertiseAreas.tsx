import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyExpertiseAreasProps {
  readonly subtitle: string;
  readonly title: string;
  readonly description: string;
  readonly areas: readonly {
    readonly icon: string;
    readonly title: string;
    readonly description: string;
    readonly large?: boolean;
  }[];
}

export const ExpertiseAreas: React.FC<ReadonlyExpertiseAreasProps> = ({ subtitle, title, description, areas }) => {
  return (
    <section className="py-section-padding relative" id="areas">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tertiary/30 to-transparent"></div>
      <div className="max-w-container-max mx-auto px-inner-padding">
        <FadeIn delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-tertiary tracking-[0.4em] block mb-4">{subtitle}</span>
              <h2 className="font-headline-lg text-headline-lg text-white text-6xl">{title}</h2>
            </div>
            <p className="text-white/40 max-w-sm font-light">{description}</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className={`glass-card p-8 md:p-12 group h-full ${area.large ? 'lg:col-span-2' : ''}`}>
                <div className={`flex ${area.large ? 'justify-between items-start' : 'flex-col items-start'}`}>
                  <div className={area.large ? 'max-w-md' : ''}>
                    <div className="mb-10 w-12 h-12 flex items-center justify-center border border-tertiary/30 group-hover:bg-tertiary/10 transition-all">
                      <span className="material-symbols-outlined text-3xl">{area.icon}</span>
                    </div>
                    <h3 className="font-headline-md text-2xl mb-6 text-white group-hover:text-gold-shimmer">{area.title}</h3>
                    <p className="font-body-md text-white/50 text-sm leading-relaxed">{area.description}</p>
                  </div>
                  {area.large && (
                    <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-9xl">history_edu</span>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
