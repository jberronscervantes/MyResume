export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <img
        src="/tu-foto.jpg"
        alt="José Berrón Sobrado"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold">José Berrón Sobrado</h1>
      <h2 className="text-xl mt-2">Técnico I – Instituto Cervantes</h2>
      <p className="mt-4 max-w-xl">
        Profesional con amplia experiencia en dirección y gestión de proyectos,
        desarrollo de software con tecnologías .NET.
      </p>
      <a
        href="/CV_JoseBerron.pdf"
        className="mt-6 bg-green-300 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-green-400"
      >
        Descargar CV
      </a>
    </section>
  );
}
