export default function Proyectos() {
  const projects = [
    { title: "Kinect to Windows 8", description: "Proyecto fin de grado con matrícula de honor. Interfaz gestual y verbal para Windows 8." },
    { title: "Expediente Electrónico OGF", description: "Sistema de gestión de firmas electrónicas y expedientes digitales." }
  ];

  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
