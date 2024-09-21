import Hero from './Components/Hero';
import Services from './Components/Services';
import ContactForm from './Components/ContactForm';
import HowItWorks from './Components/HowItWorks';
import CallToAction from './Components/CallToAction';
import Advantages from './Components/Advantages';
import PaqueteAcelera from './Components/PaqueteAcelera';
export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="advantages">
        <Advantages />
      </section>

      <section id="paquete-acelera">
        <PaqueteAcelera />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <CallToAction />

      {/* Botón flotante de WhatsApp rectangular */}
      <a 
        href="https://wa.me/+56974777677?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Acelera"
        className="fixed bottom-5 right-5 bg-green-500 px-6 py-3 rounded-lg shadow-lg text-white flex items-center hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '20px', fontWeight: 'bold' }} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8 mr-2"
        >
          <path d="M16 .7c-8.3 0-15 6.8-15 15.1 0 2.7.7 5.4 2.1 7.7L.6 31.4l8-2c2.3 1.3 4.9 2 7.4 2 8.3 0 15-6.8 15-15.1S24.3.7 16 .7zm7.9 22.9c-.2.6-1 .9-1.7.6-.4-.1-2.6-1-4.6-2.6-2.5-2-4-4.4-4.4-4.9-.4-.4-1.1-1.2-1.5-1.7-.4-.6-.2-1.3.3-1.8.3-.3.7-.7 1-.7.3 0 .7.1.9.3.2.2 1.3 1.7 1.5 1.8.2.1.3.2.5.1.2 0 1-.5 1.2-.6.2-.1.4-.1.5 0 .1 0 1.1.4 1.6.9.4.3.7.6.8.9.1.2 0 .4 0 .6 0 .2-.3.7-.4.9-.1.2-.3.4-.5.6-.2.2-.4.4-.4.6 0 .2.2.5.5.7.3.3 1.5 1.4 2.2 1.8.7.4 1.2.5 1.5.5.3 0 .5 0 .7-.3.2-.2.9-1.1 1.1-1.4.2-.3.6-.2.9 0 .2.2.6.5.7.7 0 .2.1.6 0 .7z" />
        </svg>
        WhatsApp
      </a>
    </>
  );
}
