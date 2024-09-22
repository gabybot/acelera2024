import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import '../../styles/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <Head>
        {/* Meta básicos */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Acelera - Optimización Rápida de Landing Pages</title>

        {/* Meta para descripción y SEO */}
        <meta
          name="description"
          content="Acelera te ofrece la creación rápida de landing pages personalizadas en 5 días, optimizadas para motores de búsqueda y rendimiento en celulares y navegadores web."
        />
        <meta
          name="keywords"
          content="landing pages, SEO, optimización, marketing digital, diseño web, conversión, pagina web, sitio web, creación, desarrollo"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (para compartir en redes sociales) */}
        <meta property="og:title" content="Acelera - Landing Pages, sitio web en 5 Días" />
        <meta
          property="og:description"
          content="Crea tu landing page personalizada en solo 5 días con Acelera, optimizada para SEO y maximizar conversiones."
        />
        <meta property="og:image" content="/static/acelera.png" />
        <meta property="og:url" content="https://tupagina.com" />
        <meta property="og:type" content="website" />
      </Head>

      <body className="h-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-grow w-full">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
