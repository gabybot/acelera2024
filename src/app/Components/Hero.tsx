"use client";  

import { useState, useEffect } from 'react';
import Image from 'next/image';
import aceleraAm from '/images/aceleraAM.png'; 
import aceleraAZ from '/images/aceleraAZ.png'; 
import aceleraBL from '/images/aceleraBL.png'; 
import aceleraCE from '/images/aceleraCE.png'; 

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(aceleraAm);

  const images = [aceleraAZ, aceleraBL, aceleraCE, aceleraAm];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-azulMarino text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texto y llamada a la acción */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impulsa tu negocio con Landing Pages optimizadas</h1>
          <p className="text-lg md:text-xl mb-6">
            Creación de páginas impactantes que convierten visitantes en clientes. 
            Acelera tu presencia online con un diseño profesional.
          </p>
          <a 
            href="https://wa.me/+56974777677?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Acelera" 
            className="bg-amarilloMostaza hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition-transform transform hover:scale-110 focus:scale-110 focus:ring-4 focus:ring-yellow-300 animate-pulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos ahora
          </a>
        </div>

        {/* Imagen dinámica del logo */}
        <div className="mt-10 md:mt-0">
          <Image
            src={currentImage}
            alt="Acelera Logo"
            width={350}
            height={350}
            layout="intrinsic"
            className="m-0 p-0"
          />
        </div>
      </div>
    </section>
  );
}
