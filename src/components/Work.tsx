import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    imageUrl: 'https://i.imgur.com/sJ7j1gE.jpeg',
    title: 'Obra 1',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 2,
    imageUrl: 'https://i.imgur.com/XFPUp5q.jpeg',
    title: 'Obra 2',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 3,
    imageUrl: 'https://i.imgur.com/FExYBWW.jpeg',
    title: 'Obra 3',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 4,
    imageUrl: 'https://i.imgur.com/LBYo8c8.jpeg',
    title: 'Obra 4',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 5,
    imageUrl: 'https://i.imgur.com/B07eBPN.jpeg',
    title: 'Obra 5',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 6,
    imageUrl: 'https://i.imgur.com/MU5evQt.jpeg',
    title: 'Obra 6',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 7,
    imageUrl: 'https://i.imgur.com/yoE6cS0.jpeg',
    title: 'Obra 7',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 8,
    imageUrl: 'https://i.imgur.com/hHippNH.jpeg',
    title: 'Obra 8',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
  {
    id: 9,
    imageUrl: 'https://i.imgur.com/QUhZW4A.jpeg',
    title: 'Obra 9',
    description: 'Descripció de l\'obra. Aquesta peça explora...',
    technique: 'Tècnica mixta',
    dimensions: '50 x 70 cm',
    year: '2024',
  },
];

export function Work() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Treballs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selecció d'obres que combinen art i pedagogia terapèutica
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(artwork.id)}
            >
              <ImageWithFallback
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (() => {
          const selectedArtwork = artworks.find((a) => a.id === selectedImage);
          return (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="relative max-w-6xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 text-gray-600 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="bg-gray-50 flex items-center justify-center p-8">
                    <ImageWithFallback
                      src={selectedArtwork?.imageUrl || ''}
                      alt={selectedArtwork?.title || ''}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                  
                  {/* Details Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="mb-4">{selectedArtwork?.title}</h3>
                    
                    <p className="text-gray-600 mb-6">
                      {selectedArtwork?.description}
                    </p>
                    
                    <div className="border-t pt-6 space-y-3">
                      <h4 className="text-gray-900 mb-4">Fitxa tècnica</h4>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tècnica:</span>
                        <span className="text-gray-900">{selectedArtwork?.technique}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-500">Dimensions:</span>
                        <span className="text-gray-900">{selectedArtwork?.dimensions}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-500">Any:</span>
                        <span className="text-gray-900">{selectedArtwork?.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}