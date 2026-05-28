import React from 'react';
import { FadeIn } from './FadeIn';

export interface ReadonlyBlogProps {
  readonly subtitle: string;
  readonly title: string;
  readonly seeAllText: string;
  readonly articles: readonly {
    readonly image: string;
    readonly category: string;
    readonly title: string;
    readonly description: string;
  }[];
}

export const Blog: React.FC<ReadonlyBlogProps> = ({ subtitle, title, seeAllText, articles }) => {
  return (
    <section className="py-section-padding relative" id="blog">
      <div className="max-w-container-max mx-auto px-inner-padding">
        <FadeIn delay={0.1} direction="up">
          <div className="flex justify-between items-end mb-24">
            <div>
              <span className="font-label-caps text-label-caps text-tertiary tracking-[0.5em] block mb-4">{subtitle}</span>
              <h2 className="font-headline-lg text-6xl text-white">{title}</h2>
            </div>
            <a className="font-label-caps text-[10px] tracking-widest text-tertiary hover:text-white transition-colors border-b border-tertiary/50 pb-2" href="#">
              {seeAllText}
            </a>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up">
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-8 border border-white/5">
                  <img className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000" alt={article.title} src={article.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <span className="text-[10px] font-label-caps text-tertiary tracking-widest mb-4 block">{article.category}</span>
                <h3 className="font-headline-md text-2xl text-white group-hover:text-gold-shimmer transition-colors mb-4">{article.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{article.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
