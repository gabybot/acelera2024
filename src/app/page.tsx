import { lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = lazy(() => import('./Components/Hero'));
const Services = lazy(() => import('./Components/Services'));
const ContactForm = lazy(() => import('./Components/ContactForm'));
const HowItWorks = lazy(() => import('./Components/HowItWorks'));
const CallToAction = lazy(() => import('./Components/CallToAction'));
const Advantages = lazy(() => import('./Components/Advantages'));
const PaqueteAcelera = lazy(() => import('./Components/PaqueteAcelera'));

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
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
      </Suspense>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/+56974777677?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Acelera"
        className="fixed bottom-10 right-5 bg-green-500 px-6 py-3 rounded-lg shadow-lg text-white flex items-center hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '20px', fontWeight: 'bold' }} 
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 mr-2" />
        WhatsApp
      </a>
    </>
  );
}
