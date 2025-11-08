export default function Contacto() {
  return (
    <section className="py-16 px-8 text-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Contacto</h1>
      <p className="mb-4">Puedes escribirme directamente a:</p>
      <a href="mailto:jose.berron@gmail.com" className="text-blue-700 font-semibold">
        jose.berron@gmail.com
      </a>
      <div className="mt-6">
        <p>También puedes encontrarme en:</p>
        <a href="https://www.linkedin.com/in/joseberron" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
