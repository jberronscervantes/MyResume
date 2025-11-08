export default function Educacion() {
  const studies = [
    { title: "Máster en Análisis y Visualización de Datos Masivos", place: "UNIR", period: "2018–2019" },
    { title: "Grado en Ingeniería Informática", place: "UEM", period: "2010–2013" },
    { title: "Técnico Superior en Administración de Sistemas Informáticos en Red", place: "IES Villablanca", period: "2004–2006" },
    { title: "Bachillerato Científico-Tecnológico", place: "IES Francisco de Quevedo", period: "2000–2004" },
  ];

  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Educación</h1>
      <ul className="space-y-4">
        {studies.map((study, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{study.title}</h2>
            <p>{study.place} – {study.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
