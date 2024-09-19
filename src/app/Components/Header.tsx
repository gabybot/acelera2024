import Image from 'next/image';
import aceleraLogoT from '/aceleraLogoT.png'

export default function Header() {
    return (
      <header className="w-full p-4 bg-blue-800 text-white dark:bg-teal-500">
        <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <Image
            src= {aceleraLogoT} 
            alt="Acelera Logo"
            width={100}
            height={100} 
         
          />
        </a>
          <nav>
            <a href="#" className="mr-4 hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </div>
      </header>
    );
  }