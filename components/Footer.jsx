export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} José Berrón Sobrado
        </p>
        <p>
          <a
            href="mailto:jose.berron@gmail.com"
            className="hover:text-green-300"
          >
            jose.berron@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/joseberron"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
