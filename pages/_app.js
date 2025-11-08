import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* pt-20 para que no se solape con el header fijo */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
