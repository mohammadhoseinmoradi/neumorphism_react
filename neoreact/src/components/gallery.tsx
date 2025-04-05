import React, { useState, useEffect } from 'react';

interface Image {
  url: string;
  alt_description: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`);
      const data: { download_url: string; author: string }[] = await response.json();
      const newImages = data.map((item) => ({
        url: item.download_url,
        alt_description: `تصویر از ${item.author}`,
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error loading images:', error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
      !loading
    ) {
      loadImages();
    }
  };

  useEffect(() => {
    loadImages();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-md">
            <img
              src={image.url}
              alt={image.alt_description}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center py-4 text-white">در حال بارگذاری...</div>
      )}
    </div>
  );
};

export default Gallery;
