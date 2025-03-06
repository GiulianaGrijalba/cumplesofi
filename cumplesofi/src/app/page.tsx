'use client';
import { useState, useEffect } from "react";

// Función movida fuera del componente
function calculateTimeLeft() {
  const eventDate = new Date("2025-04-05T21:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-6 text-center min-h-screen">
      {/* Video de fondo */}
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted>
        <source src="/images/fondovideo1.mp4" type="video/mp4" />
      </video>

      <h1 className="text-5xl font-bold my-2 text-white">SOFIA</h1>
      <h2 className="text-xl font-semibold text-white">05 de Abril 2025</h2>
      <h2 className="text-xl font-semibold mt-0 text-white">_______________________________</h2>
      <div className="text-4xl font-semibold mt-3 text-white">LA FIESTA</div>
      <h2 className="text-xl font-semibold mt-0 text-white">_______________________________</h2>
      <div className="text-lg font-light mt-2 mb-2 text-white">Código de vestimenta: Elegante casual</div>
      <div className="text-lg mb-4 text-white">Te espero en <strong>Complejo Recreativo La Amistad</strong></div>
      <div className="text-lg mb-6 text-white">Calle 538, N°1295 - El Pato a las 21 hs</div>
      
      {/* Contador estilizado */}
      <div className="mt-4 flex gap-4 text-white">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-white text-black text-4xl font-bold p-4 rounded-lg shadow-lg w-20 text-center">
              {value.toString().padStart(2, "0")}
            </div>
            <span className="mt-2 text-lg capitalize">{label}</span>
          </div>
        ))}
      </div>
      
      {/* Formulario de asistencia */}
      <div className="mt-6 w-full max-w-lg bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
        <h3 className="text-black text-2xl font-bold mb-4">Confirmar Asistencia</h3>
        <form action="https://formspree.io/f/xvgzezdl" method="POST" className="flex flex-col gap-4">
          <input type="text" name="nombre" placeholder="Nombre y Apellido" required className="p-2 rounded-md border border-gray-300 text-black" />
          <select name="asistencia" required className="p-2 rounded-md border border-gray-300 text-black">
            <option value="">¿Confirmas tu asistencia?</option>
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
          <textarea name="canciones" placeholder="Canciones que no deben faltar" className="p-2 rounded-md border border-gray-300 text-black"></textarea>
          <button type="submit" className="bg-black hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg">Enviar</button>
        </form>
      </div>
      
      <div className="mt-6 w-full max-w-lg justify-items-center bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
        <div className="max-w-lg border-4 border-white rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104737.81794937307!2d-58.25194214141318!3d-34.87991970267634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9c964f05949%3A0xacb72475cc8e616c!2sComplejo%20Recreativo%20La%20Amistad%20del%20C.E.C.%20Quilmes!5e0!3m2!1ses-419!2sar!4v1740701731716!5m2!1ses-419!2sar"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
