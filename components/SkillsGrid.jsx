export default function SkillsGrid({ skills }) {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
          >
            <p className="font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
