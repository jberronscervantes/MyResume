import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Nombre */}
        <div className="text-xl font-bold">
          <Link href="/">José Berrón Sobrado</Link>
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-6">
          <Link href="/experiencia" className="hover:text-green-300">
            Experiencia
          </Link>
          <Link href="/educacion" className="hover:text-green-300">
            Educación
          </Link>
          <Link href="/habilidades" className="hover:text-green-300">
            Habilidades
          </Link>
          <Link href="/proyectos" className="hover:text-green-300">
            Proyectos
          </Link>
          <Link href="/contacto" className="hover:text-green-300">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
