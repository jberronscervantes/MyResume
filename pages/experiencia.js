export default function Experiencia() {
  const jobs = [
    {
      title: "Instituto Cervantes",
      period: "2023–actualidad",
      role: "Técnico I – Dirección y gestión de proyectos",
    },
    {
      title: "Sandav / Empresarios Agrupados",
      period: "2022–2023",
      role: "Programador Senior en proyecto CNAT",
    },
    {
      title: "Grupo Avalon",
      period: "2021–2022",
      role: "Product Owner / Jefe de proyectos",
    },
    {
      title: "Backup File S.L.",
      period: "2018–2021",
      role: "Jefe de proyectos",
    },
  ];

  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Experiencia</h1>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border-l-4 border-blue-900 pl-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <span className="text-sm text-gray-600">{job.period}</span>
            <p className="mt-2">{job.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
