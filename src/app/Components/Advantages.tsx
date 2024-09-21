// app/Components/Advantages.tsx
export default function Advantages() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-azulMarino mb-8">¿Por qué Acelera?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <div className="p-6">
            <span className="text-6xl text-turquesa mb-4">🚀</span>
            <h3 className="text-2xl font-semibold text-azulMarino mb-2">Rápido y Eficiente</h3>
            <p className="text-gray-700">Entregamos tu landing page optimizada en solo 5 días.</p>
          </div>

          {/* Beneficio 2 */}
          <div className="p-6">
            <span className="text-6xl text-turquesa mb-4">💼</span>
            <h3 className="text-2xl font-semibold text-azulMarino mb-2">Profesionales Expertos</h3>
            <p className="text-gray-700">Un equipo dedicado a crear páginas de alta conversión.</p>
          </div>

          {/* Beneficio 3 */}
          <div className="p-6">
            <span className="text-6xl text-turquesa mb-4">☁️</span>
            <h3 className="text-2xl font-semibold text-azulMarino mb-2">Pioneros en la Nube</h3>
            <p className="text-gray-700">
              Somos pioneros en la creación de soluciones en la nube y aplicaciones nativas, proporcionando alta disponibilidad y seguridad.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="p-6">
            <span className="text-6xl text-turquesa mb-4">🔧</span>
            <h3 className="text-2xl font-semibold text-azulMarino mb-2">Personalización a Medida</h3>
            <p className="text-gray-700">
              Cada página es diseñada y desarrollada a medida según tus requerimientos, adaptada a las necesidades específicas de tu negocio.
            </p>
          </div>

          {/* Beneficio 5 */}
          <div className="p-6">
            <span className="text-6xl text-turquesa mb-4">💻</span>
            <h3 className="text-2xl font-semibold text-azulMarino mb-2">Código Real, No Plantillas</h3>
            <p className="text-gray-700">
              Creamos páginas web reales desde cero, desarrolladas con código limpio y optimizado, sin depender de plataformas predefinidas como WordPress o Wix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
