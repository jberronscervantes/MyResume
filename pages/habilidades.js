export default function Habilidades() {
  const skills = [
    "C#, VB.NET, Visual Basic 6.0",
    "ASP.NET, JavaScript, Python, R, Java, PHP, VBA",
    "Bases de datos: SQL Server, Oracle, MySQL, DB2, MongoDB",
    "Frameworks: AngularJS, JQuery, JQueryUI",
    "Metodologías ágiles: SCRUM, LEAN",
    "Sistemas: Windows Server, Linux, VMware, Hyper-V"
  ];

  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Habilidades</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
