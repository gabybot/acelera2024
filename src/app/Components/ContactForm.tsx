"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    console.log('Formulario enviado con éxito:', data);

    const logicAppEndpoint = "https://prod-20.brazilsouth.logic.azure.com:443/workflows/b8ca1c54259841169f3b32cc8c20e18f/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=NI5KRzP88CdsMT12Al9dFeiYavfoEMPQHjBSS4e3ino";

    try {
      const response = await fetch(logicAppEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Datos enviados a Logic App correctamente");
      } else {
        console.error("Error al enviar datos a Logic App");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

    setIsSubmitted(true);
    reset(); 
    setTimeout(() => {
      setIsSubmitted(false); 
    }, 3000);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-azulMarino mb-8">
          Contáctanos
        </h2>

        {/* Mostrar mensaje de confirmación */}
        {isSubmitted && (
          <div className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg mb-6 shadow-lg animate-pulse">
            ¡Formulario enviado con éxito! 🎉
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg mx-auto bg-white p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left font-semibold text-azulMarino mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'El nombre es obligatorio' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-turquesa focus:border-transparent shadow-md"
            />
            {errors.name && <p className="text-red-500 text-left mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-semibold text-azulMarino mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo es obligatorio' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-turquesa focus:border-transparent shadow-md"
            />
            {errors.email && <p className="text-red-500 text-left mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-semibold text-azulMarino mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'El mensaje es obligatorio' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-turquesa focus:border-transparent shadow-md"
              rows={5}
            ></textarea>
            {errors.message && <p className="text-red-500 text-left mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-turquesa to-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/1234567890" 
          className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbenos al WhatsApp
        </a>
      </div>
    </section>
  );
}
