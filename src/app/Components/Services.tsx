export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-azulMarino mb-8">Nuestros Servicios</h2>
        <p className="text-lg md:text-xl text-azulMarino mb-12">
          Ofrecemos una gama completa de servicios para hacer que tu landing page destaque y convierta en ventas.
        </p>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="mb-4">
              {/* Icono */}
              <span className="text-6xl text-turquesa animate-pulse">🖥️</span>
            </div>
            <h3 className="text-2xl font-semibold text-azulMarino mb-3">Diseño de Landing Pages</h3>
            <p className="text-gray-700">
              Diseños personalizados, adaptados a tus necesidades y completamente responsivos (se ve en todos los dispositivos).
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="mb-4">
              {/* Icono */}
              <span className="text-6xl text-turquesa animate-pulse">⚡</span>
            </div>
            <h3 className="text-2xl font-semibold text-azulMarino mb-3">Optimización de Conversiones</h3>
            <p className="text-gray-700">
              Aumenta el rendimiento de tus landing pages para generar más conversiones y ventas.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="mb-4">
              {/* Icono */}
              <span className="text-6xl text-turquesa animate-pulse">🔍</span>
            </div>
            <h3 className="text-2xl font-semibold text-azulMarino mb-3">SEO y Velocidad</h3>
            <p className="text-gray-700">
              Mejora el SEO y la velocidad de carga para un mejor posicionamiento y experiencia de usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
