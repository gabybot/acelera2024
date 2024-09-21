import Image from 'next/image';
import aceleraLogoT from '/aceleraLogoT.png';

export default function Header() {
  return (
    <header className="w-full py-4 bg-blue-800 text-white dark:bg-teal-500 shadow-lg">
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
        
        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#hero" className="hover:underline transition duration-300">Inicio</a>
          <a href="#how-it-works" className="hover:underline transition duration-300">Cómo Funciona</a>
          <a href="#services" className="hover:underline transition duration-300">Servicios</a>
          <a href="#paquete-acelera" className="hover:underline transition duration-300">Paquete Acelera</a>
          <a href="#contact" className="hover:underline transition duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
