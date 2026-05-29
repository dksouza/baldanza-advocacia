import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyDifferentialsProps {
  readonly items: readonly {
    readonly title: string;
    readonly description: string;
  }[];
}

export const Differentials: React.FC<ReadonlyDifferentialsProps> = ({ items }) => {
  return (
    <section className="py-12 md:py-section-padding relative">
      <div className="max-w-container-max mx-auto px-inner-padding">
        <div className="grid md:grid-cols-3 gap-0 border border-white/5">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up">
              <div className={`glass-card p-10 md:p-16 h-full border-0 ${idx < items.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''} hover:bg-tertiary/5 transition-colors ${idx === 1 ? 'bg-white/[0.02]' : ''}`}>
                <span className="font-label-caps text-tertiary mb-10 block tracking-[0.4em]">{item.title}</span>
                <p className="text-xl text-white/70 font-light leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
