import React from 'react';

export interface ReadonlyFooterProps {
  readonly description: string;
  readonly socialLinks: readonly { readonly icon: string; readonly href: string }[];
  readonly contact: {
    readonly address: string;
    readonly phone: string;
    readonly email: string;
  };
  readonly navigation: readonly { readonly label: string; readonly href: string }[];
  readonly copyright: string;
  readonly designer: string;
}

export const Footer: React.FC<ReadonlyFooterProps> = ({ description, contact, navigation, copyright, designer }) => {
  return (
    <footer className="pt-section-padding border-t border-white/5 relative overflow-hidden" id="contato">
      <div className="max-w-container-max mx-auto px-inner-padding relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-10">
              <img src="/logo.png" alt="Naiara Baldanza Logo" className="h-28 w-auto object-contain" />
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">{description}</p>
            <div className="flex gap-6">
              <a className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-tertiary hover:bg-tertiary/10 transition-all" href="#">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-tertiary hover:bg-tertiary/10 transition-all" href="#">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h4 className="font-label-caps text-xs text-tertiary tracking-[0.4em] mb-10">LOCALIZAÇÃO</h4>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-tertiary">location_on</span>
                <p className="text-white/50 text-sm leading-relaxed">{contact.address}</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-tertiary">call</span>
                <p className="text-white/50 text-sm">{contact.phone}</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-tertiary">mail</span>
                <p className="text-white/50 text-sm">{contact.email}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-label-caps text-xs text-tertiary tracking-[0.4em] mb-10">NAVEGAÇÃO</h4>
            <ul className="space-y-6">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a className="text-white/50 text-sm hover:text-tertiary transition-colors uppercase tracking-widest font-label-caps text-[10px]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 font-label-caps tracking-[0.2em] uppercase text-center md:text-left">
          <p>{copyright}</p>
          <p className="flex items-center gap-2">
            {designer.replace('SINGLESTUDIO', '').trim()}
            {designer.includes('SINGLESTUDIO') && (
              <span className="border border-tertiary/50 rounded-full px-3 py-1 text-tertiary">
                SINGLESTUDIO
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
