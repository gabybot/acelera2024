// app/Components/PaqueteAcelera.tsx
export default function PaqueteAcelera() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-azulMarino mb-8">
          Paquete Acelera Esencial
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Un paquete completo diseñado para optimizar y gestionar tu landing page, asegurando la captación de clientes de forma efectiva y rápida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ítem 1 */}
          <div className="relative p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-5 rounded-full shadow-lg">
              <span className="text-6xl text-white">🌐</span>
            </div>
            <h3 className="text-2xl font-bold text-azulMarino mt-16 mb-4">Dominio y SSL</h3>
            <p className="text-gray-600">
              Registro, configuración y certificado SSL para garantizar seguridad en la navegación.
            </p>
          </div>

          {/* Ítem 2 */}
          <div className="relative p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-5 rounded-full shadow-lg">
              <span className="text-6xl text-white">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-azulMarino mt-16 mb-4">Hosting y Mantenimiento</h3>
            <p className="text-gray-600">
              Alojamiento en la nube y mantenimiento técnico para asegurar el funcionamiento continuo.
            </p>
          </div>

          {/* Ítem 3 */}
          <div className="relative p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-5 rounded-full shadow-lg">
              <span className="text-6xl text-white">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-azulMarino mt-16 mb-4">SEO y Optimización</h3>
            <p className="text-gray-600">
              Posicionamiento en motores de búsqueda para mejorar la visibilidad y captar clientes.
            </p>
          </div>

          {/* Ítem 4 */}
          <div className="relative p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-turquesa p-5 rounded-full shadow-lg">
              <span className="text-6xl text-white">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-azulMarino mt-16 mb-4">Diseño Responsivo</h3>
            <p className="text-gray-600">
              Adaptación a dispositivos móviles, tablets y escritorio, asegurando una experiencia fluida.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-extrabold text-azulMarino">Pago único anual: $215.000 CLP</p>
          <p className="text-lg text-gray-600 mt-2">Incluye todos los servicios antes mencionados.</p>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-azulMarino mb-6">Servicios que podemos agregar:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Opción 1 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Pruebas A/B</h4>
              <p className="text-gray-600">
                Testeo de diferentes versiones de la página para optimizar la conversión.
              </p>
            </div>

            {/* Opción 2 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Actualizaciones Mayores</h4>
              <p className="text-gray-600">
                Modificaciones de secciones grandes, rediseño o inclusión de nuevas funcionalidades.
              </p>
            </div>

            {/* Opción 3 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Google Ads y Publicidad</h4>
              <p className="text-gray-600">
                Integración con Google Ads y campañas en Facebook e Instagram.
              </p>
            </div>

            {/* Opción 4 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Chatbot Automatizado</h4>
              <p className="text-gray-600">
                Implementación de un chatbot para atención automatizada de clientes.
              </p>
            </div>

            {/* Opción 5 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Mantenimiento de Campañas Publicitarias</h4>
              <p className="text-gray-600">
                Mantenimiento continuo de campañas en Google, Facebook e Instagram.
              </p>
            </div>

            {/* Opción 6 */}
            <div className="p-8 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h4 className="text-xl font-bold text-azulMarino mb-4">Integraciones Adicionales</h4>
              <p className="text-gray-600">
                Otras integraciones o funcionalidades según las necesidades de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
