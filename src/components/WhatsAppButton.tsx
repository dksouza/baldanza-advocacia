import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a className="fixed bottom-12 right-12 z-[100] group" href="#">
      <div className="absolute inset-0 bg-tertiary rounded-full blur group-hover:blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
      <div className="relative bg-obsidian-deep border border-tertiary/40 text-tertiary w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.888-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.888 11.891-2.012 0-3.987-.511-5.742-1.482l-6.254 1.701zm6.232-4.102c1.491.886 3.128 1.353 4.809 1.353 5.385 0 9.768-4.383 9.768-9.768 0-2.607-1.015-5.059-2.858-6.903-1.843-1.843-4.294-2.858-6.91-2.858-5.385 0-9.768 4.383-9.768 9.768 0 1.83.512 3.614 1.481 5.176l-.969 3.541 3.647-.99zm9.768-5.75c-.267-.134-1.58-.779-1.825-.869-.245-.09-.424-.134-.602.134-.178.268-.691.869-.846 1.048-.156.179-.311.201-.578.067-.267-.134-1.129-.416-2.15-1.328-.794-.708-1.33-1.582-1.486-1.85-.156-.268-.017-.413.118-.546.121-.12.267-.312.4-.469.134-.156.178-.268.267-.446.089-.178.044-.335-.022-.469-.067-.134-.602-1.451-.824-1.987-.217-.523-.436-.453-.602-.461-.156-.008-.334-.009-.512-.009-.178 0-.468.067-.712.335-.245.268-.936.915-.936 2.232s.958 2.589 1.091 2.768c.134.179 1.886 2.88 4.569 4.037.638.276 1.136.441 1.524.564.641.203 1.225.174 1.685.105.513-.077 1.58-.646 1.803-1.272.223-.627.223-1.163.156-1.272-.067-.109-.245-.179-.512-.313z"></path></svg>
      </div>
      <span className="absolute right-24 top-1/2 -translate-y-1/2 glass-card px-6 py-3 rounded-none text-xs font-label-caps tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">CONTATO IMEDIATO</span>
    </a>
  );
};
