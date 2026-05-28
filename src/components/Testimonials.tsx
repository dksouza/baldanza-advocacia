import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyTestimonialsProps {
  readonly subtitle: string;
  readonly title: string;
  readonly items: readonly {
    readonly text: string;
    readonly author: string;
    readonly role: string;
    readonly featured?: boolean;
  }[];
}

export const Testimonials: React.FC<ReadonlyTestimonialsProps> = ({ subtitle, title, items }) => {
  return (
    <section className="py-section-padding relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-inner-padding relative z-10">
        <FadeIn delay={0.1} direction="up">
          <div className="text-center mb-32">
            <span className="font-label-caps text-label-caps text-tertiary tracking-[0.6em] block mb-6">{subtitle}</span>
            <h2 className="font-headline-lg text-6xl text-white">{title}</h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up">
              <div className={`glass-card p-12 h-full relative ${item.featured ? 'bg-tertiary/5 scale-105 z-20 shadow-2xl' : ''}`}>
                <div className="text-tertiary mb-10 flex">
                  <span className="material-symbols-outlined fill">star</span>
                  <span className="material-symbols-outlined fill">star</span>
                  <span className="material-symbols-outlined fill">star</span>
                  <span className="material-symbols-outlined fill">star</span>
                  <span className="material-symbols-outlined fill">star</span>
                </div>
                <p className={`font-body-lg text-white mb-12 leading-relaxed ${!item.featured ? '/70 italic' : ''}`}>
                  {item.text}
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className={`w-10 h-10 rounded-full ${item.featured ? 'bg-tertiary border border-tertiary' : 'bg-tertiary/10 border border-tertiary/30'}`}></div>
                  <div>
                    <p className="font-label-caps text-xs text-white tracking-widest">{item.author}</p>
                    <p className="text-[10px] text-tertiary uppercase">{item.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
