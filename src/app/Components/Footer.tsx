import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-blue-800 text-white dark:bg-teal-500">
      <div className="container mx-auto text-center flex flex-col items-center gap-2">
        <p>&copy; 2024 Acelera. All rights reserved.</p>
        
        
        <div className="flex items-center space-x-4">
        
          <a
            href="https://wa.me/+56974777677" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          > 
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp"
              width={24}
              height={24}
              className="inline-block"
            /> +56974777677
          </a>
          
          <a href="mailto:contacto@acelera.life" className="hover:underline">
            contacto@acelera.com
          </a>
        </div>
      </div>
    </footer>
  );
}
