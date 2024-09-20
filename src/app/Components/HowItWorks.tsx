export default function HowItWorks() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-azulMarino mb-8">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Trabajamos contigo para ofrecerte una experiencia completa y personalizada. 
            Nuestro proceso está diseñado para ser simple, rápido y efectivo.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="relative p-6 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-4 rounded-full shadow-lg">
                <span className="text-6xl text-white">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-azulMarino mt-12 mb-4">Paso 1: Reunión Inicial</h3>
              <p className="text-gray-600">
                Hablamos contigo para conocer tu negocio y definir qué es lo que necesitas en tu landing page.
              </p>
              <div className="mt-4">
                <span className="text-turquesa font-semibold">Descubre más →</span>
              </div>
            </div>
  
            {/* Paso 2 */}
            <div className="relative p-6 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-4 rounded-full shadow-lg">
                <span className="text-6xl text-white">✏️</span>
              </div>
              <h3 className="text-2xl font-bold text-azulMarino mt-12 mb-4">Paso 2: Diseño y Desarrollo</h3>
              <p className="text-gray-600">
                Diseñamos y desarrollamos tu landing page, alineada a los objetivos que discutimos inicialmente.
              </p>
              <div className="mt-4">
                <span className="text-turquesa font-semibold">Descubre más →</span>
              </div>
            </div>
  
            {/* Paso 3 */}
            <div className="relative p-6 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-4 rounded-full shadow-lg">
                <span className="text-6xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-azulMarino mt-12 mb-4">Paso 3: Revisión y Lanzamiento</h3>
              <p className="text-gray-600">
                Revisamos contigo la landing page, hacemos los ajustes finales y la lanzamos para que empieces a captar clientes.
              </p>
              <div className="mt-4">
                <span className="text-turquesa font-semibold">Descubre más →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  