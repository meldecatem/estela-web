import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://i.imgur.com/stvK2tx.jpeg"
          alt="Galeria d'art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-48">
        <h1 className="mb-6 text-white" style={{ fontSize: '4rem' }}>Estela Penadés Gandia</h1>
        <p className="mb-8 max-w-2xl mx-auto text-gray-200">
          Pedagoga i artista visual. Explorant les aplicacions terapèutiques i expressives de les arts visuals en l'educació inclusiva
        </p>
        <button
          onClick={onExploreClick}
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Veure treballs
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}