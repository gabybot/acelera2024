"use client";

import { useState } from 'react';
import Image from 'next/image';
import aceleraLogoT from '/aceleraLogoT.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-4 bg-blue-800 text-white dark:bg-teal-500 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src={aceleraLogoT}
            alt="Acelera Logo"
            width={100}
            height={100}
            layout="intrinsic"
            className="m-0 p-0"
          />
        </a>

        {/* Icono de hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          className="text-white block lg:hidden focus:outline-none bg-teal-600 rounded-md p-2 border-2 border-white hover:bg-teal-700 transition-colors"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Navigation (visible en pantallas grandes) */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#hero" className="hover:underline transition duration-300">Inicio</a>
          <a href="#how-it-works" className="hover:underline transition duration-300">Cómo Funciona</a>
          <a href="#services" className="hover:underline transition duration-300">Servicios</a>
          <a href="#paquete-acelera" className="hover:underline transition duration-300">Paquete Acelera</a>
          <a href="#contact" className="hover:underline transition duration-300">Contacto</a>
        </nav>

        {/* Menú hamburguesa (visible solo si está abierto en pantallas pequeñas) */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-4/5 h-full bg-blue-800 text-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 mt-20">
            <a href="#hero" onClick={toggleMenu} className="hover:underline text-lg">Inicio</a>
            <a href="#how-it-works" onClick={toggleMenu} className="hover:underline text-lg">Cómo Funciona</a>
            <a href="#services" onClick={toggleMenu} className="hover:underline text-lg">Servicios</a>
            <a href="#paquete-acelera" onClick={toggleMenu} className="hover:underline text-lg">Paquete Acelera</a>
            <a href="#contact" onClick={toggleMenu} className="hover:underline text-lg">Contacto</a>
          </nav>
        </div>
      </div>

      {/* Fondo semitransparente detrás del menú hamburguesa */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
