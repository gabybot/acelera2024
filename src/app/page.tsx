// app/page.tsx
import Hero from './Components/Hero';
import Services from './Components/Services';
import ContactForm from './Components/ContactForm';
import HowItWorks from './Components/HowItWorks';
import CallToAction from './Components/CallToAction';
import Advantages from './Components/Advantages';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Advantages />
      <ContactForm />
      <CallToAction />
    </>
  );
}
