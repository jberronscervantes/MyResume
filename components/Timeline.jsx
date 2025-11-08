export default function Timeline({ items }) {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Línea de tiempo</h2>
      <div className="relative border-l-4 border-blue-900 pl-6 space-y-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <span className="text-sm text-gray-600">{item.period}</span>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

